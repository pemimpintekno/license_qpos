-- CreateTable
CREATE TABLE "licenseKey" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "serialKey" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'UNUSED',
    "email" TEXT,
    "deviceId" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "activatedAt" DATETIME
);

-- CreateIndex
CREATE UNIQUE INDEX "licenseKey_serialKey_key" ON "licenseKey"("serialKey");

-- CreateIndex
CREATE UNIQUE INDEX "licenseKey_email_key" ON "licenseKey"("email");
