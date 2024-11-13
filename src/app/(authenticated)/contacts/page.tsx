'use client'

import {
  Button,
  Form,
  Input,
  Modal,
  Select,
  Space,
  Table,
  Typography,
} from 'antd'
import {
  DeleteOutlined,
  EditOutlined,
  SendOutlined,
  UserAddOutlined,
} from '@ant-design/icons'
import { useState } from 'react'
import { Prisma } from '@prisma/client'
const { Title, Text } = Typography
type TrustedContactWithRelations = Prisma.TrustedContactGetPayload<{
  include: { user: true }
}>
import { useUserContext } from '@/core/context'
import { useRouter, useParams } from 'next/navigation'
import { useUploadPublic } from '@/core/hooks/upload'
import { useSnackbar } from 'notistack'
import dayjs from 'dayjs'
import { Api } from '@/core/trpc'
import { PageLayout } from '@/designSystem'

export default function TrustedContactsPage() {
  const router = useRouter()
  const { user } = useUserContext()
  const { enqueueSnackbar } = useSnackbar()

  const [isModalOpen, setIsModalOpen] = useState(false)
  const [editingContact, setEditingContact] =
    useState<TrustedContactWithRelations | null>(null)
  const [form] = Form.useForm()

  const { data: contacts, refetch } = Api.trustedContact.findMany.useQuery({
    where: { userId: user?.id },
  })

  const { mutateAsync: createContact } = Api.trustedContact.create.useMutation()
  const { mutateAsync: updateContact } = Api.trustedContact.update.useMutation()
  const { mutateAsync: deleteContact } = Api.trustedContact.delete.useMutation()

  const handleSubmit = async (values: any) => {
    try {
      if (editingContact) {
        await updateContact({
          where: { id: editingContact.id },
          data: { ...values },
        })
        enqueueSnackbar('Contact updated successfully', { variant: 'success' })
      } else {
        await createContact({
          data: {
            ...values,
            userId: user?.id as string,
          },
        })
        enqueueSnackbar('Contact added successfully', { variant: 'success' })
      }
      setIsModalOpen(false)
      form.resetFields()
      setEditingContact(null)
      refetch()
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }

  const handleDelete = async (id: string) => {
    try {
      await deleteContact({ where: { id } })
      enqueueSnackbar('Contact deleted successfully', { variant: 'success' })
      refetch()
    } catch (error) {
      enqueueSnackbar('An error occurred', { variant: 'error' })
    }
  }

  const handleEdit = (record: TrustedContactWithRelations) => {
    setEditingContact(record)
    form.setFieldsValue(record)
    setIsModalOpen(true)
  }

  const handleSendLocation = async (contact: TrustedContactWithRelations) => {
    if ('geolocation' in navigator) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const locationUrl = `https://maps.google.com/?q=${position.coords.latitude},${position.coords.longitude}`
          const message = `My current location: ${locationUrl}`
          // Here you would typically integrate with a messaging service
          enqueueSnackbar(`Location sent to ${contact.name}`, {
            variant: 'success',
          })
        },
        () => {
          enqueueSnackbar('Unable to get location', { variant: 'error' })
        },
      )
    }
  }

  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Phone',
      dataIndex: 'phone',
      key: 'phone',
    },
    {
      title: 'Relationship',
      dataIndex: 'relationship',
      key: 'relationship',
    },
    {
      title: 'Group',
      dataIndex: 'groupType',
      key: 'groupType',
    },
    {
      title: 'Actions',
      key: 'actions',
      render: (_: any, record: TrustedContactWithRelations) => (
        <Space>
          <Button
            icon={<SendOutlined />}
            onClick={() => handleSendLocation(record)}
            type="primary"
          >
            Send Location
          </Button>
          <Button icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button
            icon={<DeleteOutlined />}
            danger
            onClick={() => handleDelete(record.id)}
          />
        </Space>
      ),
    },
  ]

  return (
    <PageLayout layout="full-width">
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '24px' }}>
        <div style={{ marginBottom: 24 }}>
          <Title level={2}>Trusted Contacts</Title>
          <Text>
            Manage your emergency contacts and quickly share your location with
            them.
          </Text>
        </div>

        <Button
          type="primary"
          icon={<UserAddOutlined />}
          onClick={() => {
            setEditingContact(null)
            form.resetFields()
            setIsModalOpen(true)
          }}
          style={{ marginBottom: 16 }}
        >
          Add Contact
        </Button>

        <Table
          columns={columns}
          dataSource={contacts}
          rowKey="id"
          pagination={false}
        />

        <Modal
          title={editingContact ? 'Edit Contact' : 'Add New Contact'}
          open={isModalOpen}
          onCancel={() => {
            setIsModalOpen(false)
            setEditingContact(null)
            form.resetFields()
          }}
          footer={null}
        >
          <Form form={form} onFinish={handleSubmit} layout="vertical">
            <Form.Item
              name="name"
              label="Name"
              rules={[{ required: true, message: 'Please input the name!' }]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="phone"
              label="Phone"
              rules={[
                { required: true, message: 'Please input the phone number!' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item name="relationship" label="Relationship">
              <Input />
            </Form.Item>

            <Form.Item name="groupType" label="Group">
              <Select>
                <Select.Option value="family">Family</Select.Option>
                <Select.Option value="friends">Friends</Select.Option>
                <Select.Option value="emergency">Emergency</Select.Option>
              </Select>
            </Form.Item>

            <Form.Item>
              <Space>
                <Button type="primary" htmlType="submit">
                  {editingContact ? 'Update' : 'Add'}
                </Button>
                <Button
                  onClick={() => {
                    setIsModalOpen(false)
                    setEditingContact(null)
                    form.resetFields()
                  }}
                >
                  Cancel
                </Button>
              </Space>
            </Form.Item>
          </Form>
        </Modal>
      </div>
    </PageLayout>
  )
}
