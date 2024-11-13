import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const splitSql = (sql: string) => {
  return sql.split(';').filter(content => content.trim() !== '')
}

async function main() {
  const sql = `

INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('880eb2a4-d48a-4065-ad33-dfdbe7473b4e', '1Clovis3@gmail.com', 'Meena Jain', 'https://i.imgur.com/YfJQV5z.png?id=3', 'yz567abc890', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('acde2590-dd34-4eb5-91ea-8e1fff271332', '10Sincere_Simonis@hotmail.com', 'Meena Jain', 'https://i.imgur.com/YfJQV5z.png?id=12', 'yz567abc890', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('ee0bc4b7-ba71-4c98-bcfe-24d8bb1e7d3b', '19Nasir35@gmail.com', 'Meena Jain', 'https://i.imgur.com/YfJQV5z.png?id=21', 'stu901vwx234', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('638f507e-aadb-4ad5-b3cb-2d6f2d0c3ca4', '28Mabel.Koelpin93@yahoo.com', 'Suman Kumar', 'https://i.imgur.com/YfJQV5z.png?id=30', 'abc123def456', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('049b5c54-b4ef-4191-9753-b8b51e8287bb', '46Brad.Huels@yahoo.com', 'Suman Kumar', 'https://i.imgur.com/YfJQV5z.png?id=48', 'abc123def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('2c2bfb62-3ba5-41ca-9700-3fe7471c602a', '55Destini41@hotmail.com', 'Suman Kumar', 'https://i.imgur.com/YfJQV5z.png?id=57', 'mno345pqr678', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('8d87bcbf-bdbe-4570-be4c-cf04fdefbef9', '64Alta56@gmail.com', 'Meena Jain', 'https://i.imgur.com/YfJQV5z.png?id=66', 'ghi789jkl012', false, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('0dc6fc71-a4f6-45ba-b839-5bc3a44d5657', '73Michael.Hahn@hotmail.com', 'Meena Jain', 'https://i.imgur.com/YfJQV5z.png?id=75', 'abc123def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');
INSERT INTO "User" ("id", "email", "name", "pictureUrl", "tokenInvitation", "emailVerified", "status", "globalRole", "password") VALUES ('95230958-c90d-4088-a273-1952cf74d7e5', '82Destiney_Leuschke46@gmail.com', 'Deepa Kapoor', 'https://i.imgur.com/YfJQV5z.png?id=84', 'abc123def456', true, 'VERIFIED', 'USER', '$2b$10$ppubsZypHzkqW9dkhMB97ul2.wSsvaCoDE2CzqIHygddRMKXvpYUC');

INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('29ee1189-9a6e-4870-a45e-bae9edbc68ab', 'WomenGuard', 'https://i.imgur.com/YfJQV5z.png?id=92');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('e66368e6-63bb-42bb-9120-92ffc74da75f', 'SecureShe', 'https://i.imgur.com/YfJQV5z.png?id=95');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('d28c61d6-7a8b-46da-bd22-80b5c4bb51f9', 'HerSafety Network', 'https://i.imgur.com/YfJQV5z.png?id=98');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('45356671-76c4-45e8-af25-2de2d0d6b935', 'WomenGuard', 'https://i.imgur.com/YfJQV5z.png?id=101');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('ecc15086-806e-4b3f-ad47-60158e4dbbed', 'SafeTravels India', 'https://i.imgur.com/YfJQV5z.png?id=104');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('4de690bd-c059-433b-8ecd-0bdcce833cc2', 'SecureShe', 'https://i.imgur.com/YfJQV5z.png?id=107');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('b3b0ed42-0d1b-442f-b9f9-6612f1183d29', 'WomenGuard', 'https://i.imgur.com/YfJQV5z.png?id=110');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('a387e48a-dedf-436a-8bb6-8c73d11daffd', 'LadySafe Initiative', 'https://i.imgur.com/YfJQV5z.png?id=113');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('c54b3947-5686-4440-bc94-e3f8151fc890', 'WomenGuard', 'https://i.imgur.com/YfJQV5z.png?id=116');
INSERT INTO "Organization" ("id", "name", "pictureUrl") VALUES ('5396c417-44e1-4d82-bd3d-6853e362e9cb', 'LadySafe Initiative', 'https://i.imgur.com/YfJQV5z.png?id=119');

INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('702e17e3-19c3-4323-89b9-701ed269e270', 'Security Analyst', '880eb2a4-d48a-4065-ad33-dfdbe7473b4e', 'a387e48a-dedf-436a-8bb6-8c73d11daffd');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7ac69d46-1624-4bfb-ad72-f51ca3ce1511', 'Emergency Response Officer', '8d87bcbf-bdbe-4570-be4c-cf04fdefbef9', 'ecc15086-806e-4b3f-ad47-60158e4dbbed');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('39b59e93-3b77-4051-b53e-243a5691758b', 'Emergency Response Officer', '638f507e-aadb-4ad5-b3cb-2d6f2d0c3ca4', 'ecc15086-806e-4b3f-ad47-60158e4dbbed');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('21bab224-6520-4b59-99fd-1b11e2f96912', 'Public Safety Advisor', 'acde2590-dd34-4eb5-91ea-8e1fff271332', 'c54b3947-5686-4440-bc94-e3f8151fc890');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('d0017764-9096-4f6a-9a23-e26a7e1c6d41', 'Safety Coordinator', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '29ee1189-9a6e-4870-a45e-bae9edbc68ab');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('8c7d2570-8db7-4694-80b4-f5c9fe372e15', 'Community Liaison', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a387e48a-dedf-436a-8bb6-8c73d11daffd');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('5b56f9f5-383a-4f17-88c0-6ce4f58aa360', 'Safety Coordinator', '0dc6fc71-a4f6-45ba-b839-5bc3a44d5657', 'c54b3947-5686-4440-bc94-e3f8151fc890');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('9989f4ac-66c7-4b2d-97ea-ddda8a70c7b7', 'Public Safety Advisor', '8d87bcbf-bdbe-4570-be4c-cf04fdefbef9', '29ee1189-9a6e-4870-a45e-bae9edbc68ab');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('c976c641-1860-46eb-aec6-d99318732a8e', 'Public Safety Advisor', '0dc6fc71-a4f6-45ba-b839-5bc3a44d5657', 'b3b0ed42-0d1b-442f-b9f9-6612f1183d29');
INSERT INTO "OrganizationRole" ("id", "name", "userId", "organizationId") VALUES ('7b85dd06-2f5a-4da9-adfa-1c5ab581a993', 'Community Liaison', '0dc6fc71-a4f6-45ba-b839-5bc3a44d5657', 'a387e48a-dedf-436a-8bb6-8c73d11daffd');

INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('d3d85535-6a3b-42fe-85fc-e1132688de94', 'httpsfcm.googleapis.comfcmsendm0n9b8v7c6x5z4y3w2v', 'endpointhttpsfcm.googleapis.comfcmsendeY2s3d4f5g6h7i8j9k0lkeysp256dhBOrandomKey1authrandomAuthKey1', '638f507e-aadb-4ad5-b3cb-2d6f2d0c3ca4');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('d5a19ebe-9976-44b2-bf43-2a8f99ea72ae', 'httpsfcm.googleapis.comfcmsendz9y8x7w6v5u4t3s2r1q', 'endpointhttpsfcm.googleapis.comfcmsenda1b2c3d4e5f6g7h8i9j0keysp256dhBOrandomKey2authrandomAuthKey2', '638f507e-aadb-4ad5-b3cb-2d6f2d0c3ca4');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('1aaa6912-5780-491d-afc2-c065adc7320a', 'httpsfcm.googleapis.comfcmsendp1o2i3u4y5t6r7e8w9q', 'endpointhttpsfcm.googleapis.comfcmsendz9y8x7w6v5u4t3s2r1qkeysp256dhBOrandomKey3authrandomAuthKey3', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('aadee18a-5f49-406c-ad91-624fa55fe010', 'httpsfcm.googleapis.comfcmsendeY2s3d4f5g6h7i8j9k0l', 'endpointhttpsfcm.googleapis.comfcmsenda1b2c3d4e5f6g7h8i9j0keysp256dhBOrandomKey2authrandomAuthKey2', '95230958-c90d-4088-a273-1952cf74d7e5');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('5360b8c5-8422-42af-b820-29a25c245444', 'httpsfcm.googleapis.comfcmsenda1b2c3d4e5f6g7h8i9j0', 'endpointhttpsfcm.googleapis.comfcmsendz9y8x7w6v5u4t3s2r1qkeysp256dhBOrandomKey3authrandomAuthKey3', 'ee0bc4b7-ba71-4c98-bcfe-24d8bb1e7d3b');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('28b73b56-c639-4095-a38d-8ff38837a6bf', 'httpsfcm.googleapis.comfcmsendeY2s3d4f5g6h7i8j9k0l', 'endpointhttpsfcm.googleapis.comfcmsendp1o2i3u4y5t6r7e8w9qkeysp256dhBOrandomKey5authrandomAuthKey5', '049b5c54-b4ef-4191-9753-b8b51e8287bb');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('f781dede-35f3-4ed5-995c-4e62a085ead6', 'httpsfcm.googleapis.comfcmsendp1o2i3u4y5t6r7e8w9q', 'endpointhttpsfcm.googleapis.comfcmsendeY2s3d4f5g6h7i8j9k0lkeysp256dhBOrandomKey1authrandomAuthKey1', 'ee0bc4b7-ba71-4c98-bcfe-24d8bb1e7d3b');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('262b4a59-ef5a-4a34-9b12-6d61298d7b55', 'httpsfcm.googleapis.comfcmsendp1o2i3u4y5t6r7e8w9q', 'endpointhttpsfcm.googleapis.comfcmsendp1o2i3u4y5t6r7e8w9qkeysp256dhBOrandomKey5authrandomAuthKey5', '95230958-c90d-4088-a273-1952cf74d7e5');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('8ecc838e-ae56-4a86-9bb2-40c40002e757', 'httpsfcm.googleapis.comfcmsendz9y8x7w6v5u4t3s2r1q', 'endpointhttpsfcm.googleapis.comfcmsendm0n9b8v7c6x5z4y3w2vkeysp256dhBOrandomKey4authrandomAuthKey4', '638f507e-aadb-4ad5-b3cb-2d6f2d0c3ca4');
INSERT INTO "PushNotification" ("id", "endpoint", "subscription", "userId") VALUES ('f7e0027a-155a-4074-9051-038f6deb110a', 'httpsfcm.googleapis.comfcmsendm0n9b8v7c6x5z4y3w2v', 'endpointhttpsfcm.googleapis.comfcmsendeY2s3d4f5g6h7i8j9k0lkeysp256dhBOrandomKey1authrandomAuthKey1', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');

INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('d284837d-de8c-4d6f-87bc-d71e2661d884', 'Neha Gupta', '9123456789', 'Colleague', 'Neighbors', '95230958-c90d-4088-a273-1952cf74d7e5');
INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('b6272c8c-8f4e-443d-9cee-3f8a5bf683a3', 'Ritu Singh', '9765432109', 'Cousin', 'Friends', '0dc6fc71-a4f6-45ba-b839-5bc3a44d5657');
INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('590a334b-c572-4776-880c-8e0ba64c0b82', 'Ritu Singh', '9765432109', 'Friend', 'Family', 'acde2590-dd34-4eb5-91ea-8e1fff271332');
INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('e3ac2f26-04d7-4133-86b5-6173e38c2fe4', 'Anjali Sharma', '9765432109', 'Cousin', 'Friends', '95230958-c90d-4088-a273-1952cf74d7e5');
INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('6a952403-6323-4580-9902-0ee16b8f890f', 'Ritu Singh', '9876543210', 'Sister', 'Family', '95230958-c90d-4088-a273-1952cf74d7e5');
INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('3c0eb4da-acd6-4f5d-b17d-d7d028b44ef4', 'Priya Verma', '9765432109', 'Mother', 'Friends', '2c2bfb62-3ba5-41ca-9700-3fe7471c602a');
INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('e9c1151c-13e0-41f4-8f54-f3f3a50115b3', 'Kavita Joshi', '9123456789', 'Mother', 'Friends', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('5b0b9840-0375-46e0-8713-e2768b7c0afa', 'Kavita Joshi', '9765432109', 'Friend', 'Friends', '880eb2a4-d48a-4065-ad33-dfdbe7473b4e');
INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('a4a25444-cba9-477b-b216-2b523fba9b80', 'Ritu Singh', '9988776655', 'Mother', 'Family', '8d87bcbf-bdbe-4570-be4c-cf04fdefbef9');
INSERT INTO "TrustedContact" ("id", "name", "phone", "relationship", "groupType", "userId") VALUES ('7ae25481-3834-4602-8f1c-96ac717f8a73', 'Priya Verma', '9988776655', 'Mother', 'Neighbors', '2c2bfb62-3ba5-41ca-9700-3fe7471c602a');

INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('51ff9da1-327e-4d05-939b-ffd2d70ad1c8', 'Suresh Reddy', 'TN04GH3456', 'Connaught Place Delhi', 'Jubilee Hills Hyderabad', '2025-05-17T05:20:14.375Z', 'Pending', '049b5c54-b4ef-4191-9753-b8b51e8287bb', '4de690bd-c059-433b-8ecd-0bdcce833cc2');
INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('418dd3b8-7b2a-4e26-ba80-d20c85a2f641', 'Suresh Reddy', 'AP05IJ7890', 'Anna Nagar Chennai', 'Jubilee Hills Hyderabad', '2024-02-18T20:08:05.848Z', 'Cancelled', 'ee0bc4b7-ba71-4c98-bcfe-24d8bb1e7d3b', 'ecc15086-806e-4b3f-ad47-60158e4dbbed');
INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('22317c93-e897-43fa-894b-23fd6a4dfa40', 'Suresh Reddy', 'DL03EF9012', 'MG Road Bangalore', 'Saket Delhi', '2025-03-03T09:02:07.886Z', 'Completed', '2c2bfb62-3ba5-41ca-9700-3fe7471c602a', 'e66368e6-63bb-42bb-9120-92ffc74da75f');
INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('dc9f45cb-98cc-4371-840e-25f3bb22bd47', 'Vikram Singh', 'TN04GH3456', 'Connaught Place Delhi', 'T Nagar Chennai', '2024-04-23T11:07:57.374Z', 'Completed', 'acde2590-dd34-4eb5-91ea-8e1fff271332', 'c54b3947-5686-4440-bc94-e3f8151fc890');
INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('ee3927be-d787-4da2-ace3-3f729a2a9502', 'Anita Sharma', 'AP05IJ7890', 'Anna Nagar Chennai', 'Jubilee Hills Hyderabad', '2024-07-03T01:27:11.454Z', 'Completed', '049b5c54-b4ef-4191-9753-b8b51e8287bb', '5396c417-44e1-4d82-bd3d-6853e362e9cb');
INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('a9022627-d1fb-4960-863b-6ce1f5c29a03', 'Rajesh Kumar', 'AP05IJ7890', 'Marine Drive Mumbai', 'Whitefield Bangalore', '2024-03-30T12:13:26.655Z', 'Cancelled', '049b5c54-b4ef-4191-9753-b8b51e8287bb', '29ee1189-9a6e-4870-a45e-bae9edbc68ab');
INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('7aedb94d-a9df-4101-b576-2e72631ac2de', 'Vikram Singh', 'AP05IJ7890', 'Connaught Place Delhi', 'Saket Delhi', '2024-05-23T00:59:01.414Z', 'Completed', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'c54b3947-5686-4440-bc94-e3f8151fc890');
INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('1f7e5e55-5e52-497b-a3b3-93b63e8868b0', 'Vikram Singh', 'MH02CD5678', 'MG Road Bangalore', 'T Nagar Chennai', '2024-09-20T12:22:26.232Z', 'Completed', '638f507e-aadb-4ad5-b3cb-2d6f2d0c3ca4', 'd28c61d6-7a8b-46da-bd22-80b5c4bb51f9');
INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('317d450c-09ad-4246-8c99-214ba5f10a26', 'Anita Sharma', 'DL03EF9012', 'Marine Drive Mumbai', 'Andheri Mumbai', '2024-02-26T12:21:17.780Z', 'Cancelled', '0dc6fc71-a4f6-45ba-b839-5bc3a44d5657', '4de690bd-c059-433b-8ecd-0bdcce833cc2');
INSERT INTO "Ride" ("id", "driverName", "vehicleNumber", "startLocation", "endLocation", "estimatedArrivalTime", "status", "userId", "organizationId") VALUES ('3e015d25-3011-4f60-bbd0-63939c319889', 'Anita Sharma', 'AP05IJ7890', 'Anna Nagar Chennai', 'Andheri Mumbai', '2024-07-30T05:43:20.818Z', 'Pending', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'a387e48a-dedf-436a-8bb6-8c73d11daffd');

INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('b6b11023-eb33-4b06-911a-5ebdce431f08', '13.0827', '80.2707', '2024-03-13T03:13:26.805Z', '22317c93-e897-43fa-894b-23fd6a4dfa40', '0dc6fc71-a4f6-45ba-b839-5bc3a44d5657');
INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('8f033be5-8ac7-4b00-8bc0-ac7b19fcd69c', '28.6139', '80.2707', '2025-05-05T07:27:41.010Z', '7aedb94d-a9df-4101-b576-2e72631ac2de', '049b5c54-b4ef-4191-9753-b8b51e8287bb');
INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('fd369f00-4d51-4a65-9ba0-6a6218b05b84', '26.9124', '88.3639', '2025-05-08T18:37:23.768Z', '418dd3b8-7b2a-4e26-ba80-d20c85a2f641', '8d87bcbf-bdbe-4570-be4c-cf04fdefbef9');
INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('d68d8913-dec6-4429-8fda-ebdcb5fd965c', '13.0827', '75.7873', '2025-03-12T07:12:55.904Z', 'a9022627-d1fb-4960-863b-6ce1f5c29a03', 'acde2590-dd34-4eb5-91ea-8e1fff271332');
INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('954f4f70-0841-429e-9628-b47b6b67b1a4', '26.9124', '75.7873', '2024-08-24T11:27:01.892Z', '22317c93-e897-43fa-894b-23fd6a4dfa40', 'ee0bc4b7-ba71-4c98-bcfe-24d8bb1e7d3b');
INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('43859f0f-9573-4536-bceb-8eca0cda3027', '26.9124', '88.3639', '2025-03-29T05:04:38.590Z', '3e015d25-3011-4f60-bbd0-63939c319889', '8d87bcbf-bdbe-4570-be4c-cf04fdefbef9');
INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('b2a825c7-14d2-4315-a89b-1bc806ade941', '13.0827', '72.8777', '2024-09-05T21:55:49.426Z', '317d450c-09ad-4246-8c99-214ba5f10a26', '049b5c54-b4ef-4191-9753-b8b51e8287bb');
INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('4067fb51-96ea-41b0-89df-51c316801447', '26.9124', '80.2707', '2024-04-10T06:39:08.723Z', 'a9022627-d1fb-4960-863b-6ce1f5c29a03', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc');
INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('6e81a873-c53e-4dc1-b7f6-6553bc0aca3c', '13.0827', '75.7873', '2025-07-08T01:47:15.807Z', '7aedb94d-a9df-4101-b576-2e72631ac2de', '880eb2a4-d48a-4065-ad33-dfdbe7473b4e');
INSERT INTO "LocationTrack" ("id", "latitude", "longitude", "timestamp", "rideId", "userId") VALUES ('fc591626-b49f-47b3-98a0-8327e8cb8f41', '26.9124', '75.7873', '2025-09-05T08:22:39.580Z', 'ee3927be-d787-4da2-ace3-3f729a2a9502', '95230958-c90d-4088-a273-1952cf74d7e5');

INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('1b4f8949-2ff0-43de-a285-003414c6b0c1', '19.0760', '88.3639', 'Busy market area with CCTV surveillance', 'low', 'ee0bc4b7-ba71-4c98-bcfe-24d8bb1e7d3b', 'ecc15086-806e-4b3f-ad47-60158e4dbbed');
INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('87b63445-0771-4ec7-857a-8c7625aa2595', '28.6139', '77.2090', 'Busy market area with CCTV surveillance', 'low', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'b3b0ed42-0d1b-442f-b9f9-6612f1183d29');
INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('9c2e3d77-ad3f-478b-8b33-95d6c77d84c6', '13.0827', '80.2707', 'Crowded area with limited lighting', 'medium', '880eb2a4-d48a-4065-ad33-dfdbe7473b4e', '5396c417-44e1-4d82-bd3d-6853e362e9cb');
INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('c9990ed6-2646-4c8b-8abd-7a6b09581dd7', '22.5726', '77.2090', 'Industrial zone with heavy traffic', 'medium', '2c2bfb62-3ba5-41ca-9700-3fe7471c602a', 'd28c61d6-7a8b-46da-bd22-80b5c4bb51f9');
INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('75d13716-d92c-4326-b24f-440fe2539e56', '19.0760', '77.2090', 'Residential area with frequent power cuts', 'high', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', '45356671-76c4-45e8-af25-2de2d0d6b935');
INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('3a770bf8-ff43-418a-a4ca-97732d544d9f', '13.0827', '80.2707', 'Residential area with frequent power cuts', 'low', '0dc6fc71-a4f6-45ba-b839-5bc3a44d5657', 'd28c61d6-7a8b-46da-bd22-80b5c4bb51f9');
INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('8f1d99fb-97d3-4361-a11e-2f8f33584f41', '22.5726', '88.3639', 'Industrial zone with heavy traffic', 'low', '880eb2a4-d48a-4065-ad33-dfdbe7473b4e', '45356671-76c4-45e8-af25-2de2d0d6b935');
INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('bedcccbb-0de4-4c4a-8947-cfda4c83b099', '13.0827', '72.8777', 'Residential area with frequent power cuts', 'medium', 'acde2590-dd34-4eb5-91ea-8e1fff271332', 'ecc15086-806e-4b3f-ad47-60158e4dbbed');
INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('14f4d479-90f7-43f3-bb20-196358e481e7', '12.9716', '80.2707', 'Quiet neighborhood with regular police patrols', 'high', '049b5c54-b4ef-4191-9753-b8b51e8287bb', 'b3b0ed42-0d1b-442f-b9f9-6612f1183d29');
INSERT INTO "SafetyReport" ("id", "latitude", "longitude", "description", "severity", "userId", "organizationId") VALUES ('a1f7075a-7f77-47c4-967a-3261af5eb1e3', '22.5726', '77.2090', 'Industrial zone with heavy traffic', 'medium', 'ee0bc4b7-ba71-4c98-bcfe-24d8bb1e7d3b', '5396c417-44e1-4d82-bd3d-6853e362e9cb');

INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('999f2cac-f002-4f34-a1b5-ff261d839d0f', 'Panic Button', '19.0760', '80.2707', 'Cancelled', '638f507e-aadb-4ad5-b3cb-2d6f2d0c3ca4', 'a9022627-d1fb-4960-863b-6ce1f5c29a03');
INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('86f4de06-ce19-4262-bc50-d66c7d5046c8', 'SOS Alert', '28.6139', '72.8777', 'Resolved', '95230958-c90d-4088-a273-1952cf74d7e5', '7aedb94d-a9df-4101-b576-2e72631ac2de');
INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('124fd4e5-f85e-4556-9bf3-5061073cc157', 'Panic Button', '28.6139', '88.3639', 'In Progress', '0dc6fc71-a4f6-45ba-b839-5bc3a44d5657', '1f7e5e55-5e52-497b-a3b3-93b63e8868b0');
INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('a32beeae-4500-498a-b1f7-5284ca30f886', 'Urgent Assistance', '12.9716', '80.2707', 'Cancelled', 'acde2590-dd34-4eb5-91ea-8e1fff271332', 'ee3927be-d787-4da2-ace3-3f729a2a9502');
INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('6708bedd-5cd9-4614-b4f1-42e749f8272e', 'Help Needed', '19.0760', '77.5946', 'Pending', '049b5c54-b4ef-4191-9753-b8b51e8287bb', 'dc9f45cb-98cc-4371-840e-25f3bb22bd47');
INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('5510f540-fc61-40b1-bba6-1bf743f4fa73', 'Help Needed', '12.9716', '77.2090', 'Cancelled', '21a857f1-ba5f-4435-bcf6-f910ec07c0dc', 'dc9f45cb-98cc-4371-840e-25f3bb22bd47');
INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('0fb2be13-c864-42e2-94dd-e763f6164eab', 'Urgent Assistance', '12.9716', '88.3639', 'In Progress', '95230958-c90d-4088-a273-1952cf74d7e5', '3e015d25-3011-4f60-bbd0-63939c319889');
INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('1d58194e-c452-42fc-bc4d-3468bf0d3ff7', 'Panic Button', '13.0827', '77.5946', 'Resolved', 'ee0bc4b7-ba71-4c98-bcfe-24d8bb1e7d3b', 'ee3927be-d787-4da2-ace3-3f729a2a9502');
INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('d701283c-326a-4501-a75f-72a6715466a0', 'Panic Button', '13.0827', '80.2707', 'In Progress', '880eb2a4-d48a-4065-ad33-dfdbe7473b4e', '22317c93-e897-43fa-894b-23fd6a4dfa40');
INSERT INTO "EmergencyAlert" ("id", "type", "latitude", "longitude", "status", "userId", "rideId") VALUES ('80203dd7-20bc-4dd6-bb5d-d61e5270993c', 'SOS Alert', '22.5726', '80.2707', 'Resolved', '2c2bfb62-3ba5-41ca-9700-3fe7471c602a', '22317c93-e897-43fa-894b-23fd6a4dfa40');

  `

  const sqls = splitSql(sql)

  for (const sql of sqls) {
    try {
      await prisma.$executeRawUnsafe(`${sql}`)
    } catch (error) {
      console.log(`Could not insert SQL: ${error.message}`)
    }
  }
}

main()
  .then(async () => {
    await prisma.$disconnect()
  })
  .catch(async error => {
    console.error(error)
    await prisma.$disconnect()
    process.exit(1)
  })
