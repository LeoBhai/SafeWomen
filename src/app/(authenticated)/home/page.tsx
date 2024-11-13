'use client'

import { useEffect, useRef, useState } from 'react'
import { Typography, Input, Card, Row, Col, List, Space } from 'antd'
import {
  PhoneOutlined,
  AlertOutlined,
  SafetyOutlined,
  SearchOutlined,
} from '@ant-design/icons'
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding'
import mapboxgl, { LngLatLike, Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function SafetyMapPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const mapContainer = useRef(null)
  const [geocodingClient, setGeocodingClient] = useState<any>()
  const [map, setMap] = useState<Map>()
  const [searchQuery, setSearchQuery] = useState('')

  const { data: secrets } = Api.configuration.getPublic.useQuery()
  const { data: safetyReports } = Api.safetyReport.findMany.useQuery({})

  const emergencyContacts = [
    { title: 'Police', number: '100' },
    { title: 'Ambulance', number: '108' },
    { title: 'Women Helpline', number: '1091' },
    { title: 'Fire', number: '101' },
  ]

  const safetyTips = [
    'Share your live location with trusted contacts',
    'Stay in well-lit areas at night',
    'Keep emergency numbers saved',
    'Use verified transportation services',
    'Trust your instincts',
  ]

  useEffect(() => {
    const accessToken = secrets?.['PUBLIC_MAPBOX_ACCESS_TOKEN']
    if (!accessToken) return

    mapboxgl.accessToken = accessToken
    const geocodingClient = MapboxGeocoder(mapboxgl)
    setGeocodingClient(geocodingClient)

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.9629, 20.5937], // Center of India
      zoom: 4,
    })

    setMap(map)

    return () => map.remove()
  }, [secrets])

  useEffect(() => {
    if (!map || !safetyReports) return

    safetyReports?.forEach(report => {
      const color =
        report.severity === 'HIGH'
          ? '#ff4d4f'
          : report.severity === 'MEDIUM'
            ? '#faad14'
            : '#52c41a'

      new mapboxgl.Marker({ color })
        .setLngLat([parseFloat(report.longitude), parseFloat(report.latitude)])
        .setPopup(
          new mapboxgl.Popup().setHTML(
            `<div style="color: black;">
            <h4>Safety Report</h4>
            <p>Severity: ${report.severity}</p>
            <p>${report.description || 'No description provided'}</p>
          </div>`,
          ),
        )
        .addTo(map)
    })
  }, [map, safetyReports])

  const handleSearch = () => {
    if (!geocodingClient || !map || !searchQuery) return

    geocodingClient
      .forwardGeocode({
        query: `${searchQuery}, India`,
        limit: 1,
      })
      .send()
      .then(response => {
        const match = response.body
        if (match.features.length > 0) {
          const coordinates = match.features[0].center
          map.flyTo({ center: coordinates as LngLatLike, zoom: 10 })
        } else {
          enqueueSnackbar('Location not found', { variant: 'error' })
        }
      })
  }

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '20px' }}>
        <Title level={2}>
          <SafetyOutlined /> Safety Map
        </Title>
        <Text>View safety information and emergency contacts across India</Text>

        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24} lg={16}>
            <Card>
              <Input.Search
                placeholder="Search for a location in India"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                onSearch={handleSearch}
                style={{ marginBottom: '16px' }}
                prefix={<SearchOutlined />}
              />
              <div
                ref={mapContainer}
                style={{ height: '500px', width: '100%' }}
              />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Space direction="vertical" style={{ width: '100%' }} size="middle">
              <Card
                title={
                  <>
                    <AlertOutlined /> Emergency Contacts
                  </>
                }
              >
                <List
                  dataSource={emergencyContacts}
                  renderItem={item => (
                    <List.Item>
                      <Space>
                        <PhoneOutlined />
                        <Text>{item.title}:</Text>
                        <Text strong>{item.number}</Text>
                      </Space>
                    </List.Item>
                  )}
                />
              </Card>

              <Card
                title={
                  <>
                    <SafetyOutlined /> Safety Tips
                  </>
                }
              >
                <List
                  dataSource={safetyTips}
                  renderItem={tip => (
                    <List.Item>
                      <Text>• {tip}</Text>
                    </List.Item>
                  )}
                />
              </Card>
            </Space>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
