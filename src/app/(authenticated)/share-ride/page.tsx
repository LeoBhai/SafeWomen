'use client'

import {
  Button,
  Form,
  Input,
  TimePicker,
  Typography,
  Row,
  Col,
  Card,
  Space,
} from 'antd'
import {
  CarOutlined,
  ShareAltOutlined,
  EnvironmentOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
const { Title, Text } = Typography
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function ShareRideDetailsPage() {
  const router = useRouter()
  const params = useParams<any>()
  const { user, organization } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()
  const [form] = Form.useForm()
  const [isTracking, setIsTracking] = useState(false)

  const { mutateAsync: createRide } = Api.ride.create.useMutation()
  const { data: trustedContacts } = Api.trustedContact.findMany.useQuery({
    where: { userId: user?.id },
  })

  const handleSubmit = async (values: any) => {
    try {
      const rideData = {
        driverName: values.driverName,
        vehicleNumber: values.vehicleNumber,
        startLocation: values.startLocation,
        endLocation: values.endLocation,
        estimatedArrivalTime: values.estimatedTime.format('HH:mm'),
        status: 'ACTIVE',
        userId: user?.id,
        organizationId: organization?.id,
      }

      const ride = await createRide({ data: rideData })

      enqueueSnackbar('Ride details saved successfully!', {
        variant: 'success',
      })

      const shareMessage = `🚗 Ride Details - Driver: ${values.driverName} | Vehicle: ${values.vehicleNumber} | From: ${values.startLocation} | To: ${values.endLocation} | ETA: ${values.estimatedTime.format('HH:mm')}`

      trustedContacts?.forEach(contact => {
        const whatsappUrl = `https://wa.me/${contact.phone}?text=${encodeURIComponent(shareMessage)}`
        window.open(whatsappUrl, '_blank')
      })

      if (isTracking) {
        router.push('/tracker')
      }
    } catch (error) {
      enqueueSnackbar('Error saving ride details', { variant: 'error' })
    }
  }

  return (
    <PageLayout layout="full-width">
      <Row justify="center" style={{ padding: '24px' }}>
        <Col xs={24} sm={20} md={16} lg={12}>
          <Card>
            <Title
              level={2}
              style={{ textAlign: 'center', marginBottom: '24px' }}
            >
              Share Your Ride Details
            </Title>
            <Text
              type="secondary"
              style={{
                display: 'block',
                textAlign: 'center',
                marginBottom: '32px',
              }}
            >
              Enter your ride information and share it with your trusted
              contacts for safety
            </Text>

            <Form form={form} layout="vertical" onFinish={handleSubmit}>
              <Form.Item
                label="Driver Name"
                name="driverName"
                rules={[
                  { required: true, message: 'Please enter driver name' },
                ]}
              >
                <Input
                  prefix={<CarOutlined />}
                  placeholder="Enter driver name"
                />
              </Form.Item>

              <Form.Item
                label="Vehicle Number"
                name="vehicleNumber"
                rules={[
                  { required: true, message: 'Please enter vehicle number' },
                ]}
              >
                <Input
                  prefix={<CarOutlined />}
                  placeholder="Enter vehicle number"
                />
              </Form.Item>

              <Form.Item
                label="Start Location"
                name="startLocation"
                rules={[
                  { required: true, message: 'Please enter start location' },
                ]}
              >
                <Input
                  prefix={<EnvironmentOutlined />}
                  placeholder="Enter pickup location"
                />
              </Form.Item>

              <Form.Item
                label="Destination"
                name="endLocation"
                rules={[
                  { required: true, message: 'Please enter destination' },
                ]}
              >
                <Input
                  prefix={<EnvironmentOutlined />}
                  placeholder="Enter destination"
                />
              </Form.Item>

              <Form.Item
                label="Estimated Arrival Time"
                name="estimatedTime"
                rules={[
                  {
                    required: true,
                    message: 'Please select estimated arrival time',
                  },
                ]}
              >
                <TimePicker style={{ width: '100%' }} format="HH:mm" />
              </Form.Item>

              <Form.Item>
                <Space direction="vertical" style={{ width: '100%' }}>
                  <Button
                    type="primary"
                    htmlType="submit"
                    icon={<ShareAltOutlined />}
                    block
                  >
                    Share Ride Details
                  </Button>
                  <Button onClick={() => setIsTracking(true)} block>
                    Enable Location Tracking
                  </Button>
                </Space>
              </Form.Item>
            </Form>
          </Card>
        </Col>
      </Row>
    </PageLayout>
  )
}
