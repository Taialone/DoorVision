# DoorVision 🚪

Hệ thống quản lý báo giá cửa nhôm kính dành cho nhà thầu và xưởng sản xuất.

## Cấu trúc dự án

```
DoorVision/
├── doorvision-be/        # Backend API (NestJS + Prisma + PostgreSQL)
├── doorvision-admin/     # Admin Web (React + Vite + Ant Design)
└── DoorVisionMobile/     # Mobile App (React Native CLI)
```

## Yêu cầu

- Node.js 18+
- PostgreSQL 14+
- npm

## 1. Backend — `doorvision-be`

```bash
cd doorvision-be

# Cài đặt dependencies
npm install

# Copy env
cp .env.example .env
# Sửa file .env với thông tin database của bạn

# Chạy migration Prisma
npx prisma migrate dev

# Chạy seed (nếu có)
npx prisma db seed

# Chạy dev server
npm run start:dev
```

API chạy tại: **http://localhost:3000**

### Test

```bash
npm test            # Unit tests
npm run test:e2e    # E2E tests
```

## 2. Admin Web — `doorvision-admin`

```bash
cd doorvision-admin

# Cài đặt dependencies
npm install

# Copy env
cp .env.example .env

# Chạy dev server
npm run dev
```

Web chạy tại: **http://localhost:5173**

## 3. Mobile App — `DoorVisionMobile`

```bash
cd DoorVisionMobile

# Cài đặt dependencies
npm install

# iOS
cd ios && pod install && cd ..
npx react-native run-ios

# Android
npx react-native run-android
```

> Lưu ý: Android Emulator gọi backend qua `http://10.0.2.2:3000`.  
> Điện thoại thật dùng IP máy tính, ví dụ `http://192.168.1.10:3000`.

## Công nghệ sử dụng

| Phần | Công nghệ |
|------|-----------|
| Backend | NestJS, TypeScript, Prisma ORM, PostgreSQL, JWT |
| Admin Web | React, Vite, TypeScript, Ant Design, Axios |
| Mobile | React Native CLI, TypeScript, React Navigation |

## Luồng chính

```
Đăng nhập → Tạo khách hàng → Tạo công trình → Tạo báo giá
→ Nhập kích thước cửa → Chọn loại cửa/hệ nhôm/kính/phụ kiện
→ Backend tính vật tư và giá → Lưu báo giá → Xem mô hình 3D
```

## API endpoints (MVP)

| Method | Endpoint | Mô tả |
|--------|----------|-------|
| POST | `/auth/register` | Đăng ký |
| POST | `/auth/login` | Đăng nhập |
| GET | `/auth/me` | Thông tin user |
| GET | `/aluminum-systems` | Danh sách hệ nhôm |
| ... | ... | (đang phát triển) |
