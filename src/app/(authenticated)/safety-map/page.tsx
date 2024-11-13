'use client'

import { useEffect, useRef, useState } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding'
import mapboxgl, { LngLatLike, Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import {
  Typography,
  Card,
  Select,
  Button,
  Form,
  Input,
  Row,
  Col,
  Rate,
} from 'antd'
import {
  EnvironmentOutlined,
  WarningOutlined,
  SafetyOutlined,
  AlertOutlined,
} from '@ant-design/icons'
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
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const mapContainer = useRef(null)
  const [map, setMap] = useState<Map>()
  const [geocodingClient, setGeocodingClient] = useState<any>()
  const [safetyFilter, setSafetyFilter] = useState('all')

  const { data: secrets } = Api.configuration.getPublic.useQuery()
  const { data: safetyReports } = Api.safetyReport.findMany.useQuery({
    include: { user: true },
  })
  const { mutateAsync: createSafetyReport } =
    Api.safetyReport.create.useMutation()

  useEffect(() => {
    const accessToken = secrets?.['PUBLIC_MAPBOX_ACCESS_TOKEN']
    if (!accessToken) return

    mapboxgl.accessToken = accessToken
    const geocodingClient = MapboxGeocoder(mapboxgl)
    setGeocodingClient(geocodingClient)

    const map = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [78.9629, 20.5937], // India center coordinates
      zoom: 4,
    })

    setMap(map)

    const policeStations = [
      { name: 'Delhi Police HQ', coordinates: [77.2315, 28.6359] },
      { name: 'Mumbai Police HQ', coordinates: [72.8277, 18.9398] },
    ]

    policeStations.forEach(station => {
      new mapboxgl.Marker({ color: 'blue' })
        .setLngLat(station.coordinates as LngLatLike)
        .setPopup(new mapboxgl.Popup().setHTML(`<h3>🚓 ${station.name}</h3>`))
        .addTo(map)
    })

    return () => map.remove()
  }, [secrets])

  useEffect(() => {
    if (!map || !safetyReports) return

    const markers = document.getElementsByClassName('mapboxgl-marker')
    while (markers[0]) {
      markers[0].remove()
    }

    safetyReports
      .filter(
        report => safetyFilter === 'all' || report.severity === safetyFilter,
      )
      .forEach(report => {
        const color =
          report.severity === 'high'
            ? 'red'
            : report.severity === 'medium'
              ? 'orange'
              : 'yellow'

        new mapboxgl.Marker({ color })
          .setLngLat([
            parseFloat(report.longitude),
            parseFloat(report.latitude),
          ])
          .setPopup(
            new mapboxgl.Popup().setHTML(
              `<h3>Safety Report</h3>
             <p>Severity: ${report.severity}</p>
             <p>${report.description || 'No description provided'}</p>
             <p>Reported by: ${report.user?.name || 'Anonymous'}</p>`,
            ),
          )
          .addTo(map)
      })
  }, [map, safetyReports, safetyFilter])

  const handleReportSubmit = async (values: any) => {
    try {
      if (!user) {
        enqueueSnackbar('Please login to report unsafe areas', {
          variant: 'error',
        })
        return
      }

      if (!organization?.id) {
        enqueueSnackbar('Organization not found', { variant: 'error' })
        return
      }

      const response = await geocodingClient
        .forwardGeocode({
          query: values.location,
          limit: 1,
        })
        .send()

      const [longitude, latitude] = response.body.features[0].center

      await createSafetyReport({
        data: {
          latitude: latitude.toString(),
          longitude: longitude.toString(),
          description: values.description,
          severity: values.severity,
          userId: user.id,
          organizationId: organization.id,
        },
      })

      enqueueSnackbar('Safety report submitted successfully', {
        variant: 'success',
      })
      form.resetFields()
    } catch (error) {
      enqueueSnackbar('Error submitting safety report', { variant: 'error' })
    }
  }

  const [form] = Form.useForm()

  return (
    <PageLayout layout="full-width">
      <div style={{ padding: '20px' }}>
        <Title level={2}>
          <SafetyOutlined /> Safety Map
        </Title>
        <Text>View and report safety information across India</Text>

        <Row gutter={[16, 16]} style={{ marginTop: '20px' }}>
          <Col xs={24} lg={16}>
            <Card>
              <Select
                style={{ marginBottom: '16px', width: '200px' }}
                defaultValue="all"
                onChange={setSafetyFilter}
                options={[
                  { value: 'all', label: 'All Reports' },
                  { value: 'high', label: '⚠️ High Risk Areas' },
                  { value: 'medium', label: '⚡ Medium Risk Areas' },
                  { value: 'low', label: '✓ Low Risk Areas' },
                ]}
              />
              <div
                ref={mapContainer}
                style={{ height: '600px', width: '100%' }}
              />
            </Card>
          </Col>

          <Col xs={24} lg={8}>
            <Card
              title={
                <>
                  <WarningOutlined /> Report Unsafe Area
                </>
              }
            >
              <Form form={form} onFinish={handleReportSubmit} layout="vertical">
                <Form.Item
                  name="location"
                  label="Location"
                  rules={[{ required: true }]}
                >
                  <Input
                    prefix={<EnvironmentOutlined />}
                    placeholder="Enter location"
                  />
                </Form.Item>

                <Form.Item
                  name="severity"
                  label="Risk Level"
                  rules={[{ required: true }]}
                >
                  <Select
                    options={[
                      { value: 'high', label: 'High Risk' },
                      { value: 'medium', label: 'Medium Risk' },
                      { value: 'low', label: 'Low Risk' },
                    ]}
                  />
                </Form.Item>

                <Form.Item
                  name="description"
                  label="Description"
                  rules={[{ required: true }]}
                >
                  <Input.TextArea rows={4} />
                </Form.Item>

                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<AlertOutlined />}
                  >
                    Submit Report
                  </Button>
                </Form.Item>
              </Form>
            </Card>
          </Col>
        </Row>
      </div>
    </PageLayout>
  )
}
