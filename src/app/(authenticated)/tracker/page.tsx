'use client'

import {
  Button,
  Card,
  Switch,
  Typography,
  List,
  Modal,
  Input,
  Form,
  Space,
  Row,
  Col,
} from 'antd'
import {
  EnvironmentOutlined,
  AlertOutlined,
  ShareAltOutlined,
  SafetyOutlined,
  UserOutlined,
} from '@ant-design/icons'
import { useEffect, useRef, useState } from 'react'
import MapboxGeocoder from '@mapbox/mapbox-sdk/services/geocoding'
import mapboxgl, { Map } from 'mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function LocationTrackerPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const mapContainer = useRef(null)

  const [isTracking, setIsTracking] = useState(false)
  const [map, setMap] = useState<Map>()
  const [currentMarker, setCurrentMarker] = useState<mapboxgl.Marker>()
  const [showContactModal, setShowContactModal] = useState(false)
  const [selectedContacts, setSelectedContacts] = useState<string[]>([])

  const { data: secrets } = Api.configuration.getPublic.useQuery()
  const { data: trustedContacts } = Api.trustedContact.findMany.useQuery({
    where: { userId: user?.id },
  })
  const { mutateAsync: createLocationTrack } =
    Api.locationTrack.create.useMutation()
  const { mutateAsync: createEmergencyAlert } =
    Api.emergencyAlert.create.useMutation()

  useEffect(() => {
    if (!secrets?.['PUBLIC_MAPBOX_ACCESS_TOKEN']) return

    mapboxgl.accessToken = secrets['PUBLIC_MAPBOX_ACCESS_TOKEN']

    const newMap = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [-74.006, 40.7128],
      zoom: 12,
    })

    setMap(newMap)
    return () => newMap.remove()
  }, [secrets])

  useEffect(() => {
    if (!isTracking) return

    const trackLocation = () => {
      navigator.geolocation.getCurrentPosition(async position => {
        const { latitude, longitude } = position.coords

        if (currentMarker) {
          currentMarker.remove()
        }

        const newMarker = new mapboxgl.Marker()
          .setLngLat([longitude, latitude])
          .addTo(map)

        setCurrentMarker(newMarker)
        map?.flyTo({ center: [longitude, latitude], zoom: 15 })

        try {
          await createLocationTrack({
            data: {
              latitude: latitude.toString(),
              longitude: longitude.toString(),
              timestamp: new Date().toISOString(),
              userId: user?.id,
              rideId: 'current', // You might want to link this to an actual ride
            },
          })
        } catch (error) {
          enqueueSnackbar('Failed to update location', { variant: 'error' })
        }
      })
    }

    const interval = setInterval(trackLocation, 10000)
    trackLocation() // Initial track

    return () => clearInterval(interval)
  }, [isTracking, map, user?.id])

  const handleTrackingToggle = (checked: boolean) => {
    if (checked) {
      if (!navigator.geolocation) {
        enqueueSnackbar('Geolocation is not supported by your browser', {
          variant: 'error',
        })
        return
      }
      setIsTracking(true)
      enqueueSnackbar('Location tracking started', { variant: 'success' })
    } else {
      setIsTracking(false)
      if (currentMarker) {
        currentMarker.remove()
      }
      enqueueSnackbar('Location tracking stopped', { variant: 'info' })
    }
  }

  const handleSOS = async () => {
    if (!navigator.geolocation) {
      enqueueSnackbar('Geolocation is not supported', { variant: 'error' })
      return
    }

    navigator.geolocation.getCurrentPosition(async position => {
      try {
        await createEmergencyAlert({
          data: {
            type: 'SOS',
            latitude: position.coords.latitude.toString(),
            longitude: position.coords.longitude.toString(),
            status: 'ACTIVE',
            userId: user?.id,
            rideId: 'current', // You might want to link this to an actual ride
          },
        })
        enqueueSnackbar('SOS alert sent successfully', { variant: 'success' })
      } catch (error) {
        enqueueSnackbar('Failed to send SOS alert', { variant: 'error' })
      }
    })
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ padding: '20px' }}>
        <Col xs={24} sm={20} md={16} lg={14}>
          <Title level={2}>
            <EnvironmentOutlined /> Location Tracker
          </Title>
          <Text>
            Monitor your location in real-time and stay connected with your
            trusted contacts.
          </Text>

          <Card style={{ marginTop: '20px' }}>
            <Space direction="vertical" size="large" style={{ width: '100%' }}>
              <div>
                <Text strong>Real-time Tracking</Text>
                <Switch
                  checked={isTracking}
                  onChange={handleTrackingToggle}
                  style={{ marginLeft: '10px' }}
                />
              </div>

              <div
                ref={mapContainer}
                style={{ height: '400px', width: '100%', borderRadius: '8px' }}
              />

              <Space wrap>
                <Button
                  type="primary"
                  icon={<ShareAltOutlined />}
                  onClick={() => setShowContactModal(true)}
                >
                  Share Location
                </Button>
                <Button danger icon={<AlertOutlined />} onClick={handleSOS}>
                  SOS Alert
                </Button>
              </Space>
            </Space>
          </Card>

          <Modal
            title="Share Location"
            open={showContactModal}
            onCancel={() => setShowContactModal(false)}
            onOk={() => {
              enqueueSnackbar('Location shared with selected contacts', {
                variant: 'success',
              })
              setShowContactModal(false)
            }}
          >
            <List
              dataSource={trustedContacts}
              renderItem={contact => (
                <List.Item>
                  <List.Item.Meta
                    avatar={<UserOutlined />}
                    title={contact.name}
                    description={contact.relationship}
                  />
                  <Switch
                    onChange={checked => {
                      if (checked) {
                        setSelectedContacts([...selectedContacts, contact.id])
                      } else {
                        setSelectedContacts(
                          selectedContacts.filter(id => id !== contact.id),
                        )
                      }
                    }}
                  />
                </List.Item>
              )}
            />
          </Modal>
        </Col>
      </Row>
    </PageLayout>
  )
}
