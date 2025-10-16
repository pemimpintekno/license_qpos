-- CreateTable
CREATE TABLE "public"."LicenseKey" (
    "id" TEXT NOT NULL,
    "serialKey" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'UNUSED',
    "deviceId" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activatedAt" TIMESTAMP(3),
    "createdById" TEXT NOT NULL,

    CONSTRAINT "LicenseKey_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "public"."Admin" (
    "id" TEXT NOT NULL,
    "username" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Admin_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "LicenseKey_serialKey_key" ON "public"."LicenseKey"("serialKey");

-- CreateIndex
CREATE UNIQUE INDEX "LicenseKey_email_key" ON "public"."LicenseKey"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Admin_username_key" ON "public"."Admin"("username");

-- AddForeignKey
ALTER TABLE "public"."LicenseKey" ADD CONSTRAINT "LicenseKey_createdById_fkey" FOREIGN KEY ("createdById") REFERENCES "public"."Admin"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
