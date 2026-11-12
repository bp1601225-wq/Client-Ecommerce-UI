
// =========================
// USER
// =========================

export interface UserType {
  id?: string;
  fullName: string;
  email: string;
  phoneNumber: string;
  role: string;
  accountStatus: string;
  passwordHash?: string;

  businessName?: string;
  businessType?: string;
  expectedOrderVolume?: string;
  businessLocation?: string;
  businessDescription?: string;

  isEmailVerified?: boolean;
  isActive?: boolean;

  createdAt?: string;
  updatedAt?: string;
}

// =========================
// REGISTER USER
// =========================

export interface RegisterUser {
  fullName: string;
  email: string;
  phoneNumber: string;
  password: string;

  businessName?: string;
  businessType?: string;
  expectedOrderVolume?: string;
  businessLocation?: string;
  businessDescription?: string;
}

// =========================
// LOGIN
// =========================

export interface Login {
  email: string;
  password: string;
}

// =========================
// LOGS
// =========================

export interface Logs {
  id?: string;
  userId?: string | null;
  description?: string | null;
  status: string;
  ipAddress?: string | null;
  userAgent?: string | null;
  loggedAt?: string;
}
