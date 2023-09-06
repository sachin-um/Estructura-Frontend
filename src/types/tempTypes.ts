interface RegisterResponse {
  errorMessage: string;
  loggedUser: User;
  refreshToken: string;
  role: Role;
  success: boolean;
  accessToken: string;
}

// eslint-perfectionist:ignore
interface RegisterRequest {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  confirmPassword: string;
  role: Role;
  profileImage: FileList;
  contactNo: string;
  addressLine1?: string;
  addressLine2?: string;
  city?: string;
  district?: string;
  website?: string;
  teamSize?: number;
  registrationCertificate?: FileList;
  introduction?: string;
  minRate?: number;
  maxRate?: number;
  assignedArea?: string;
  sliaRegNumber?: string;
  slidRegNumber?: string;
  businessName?: string;
  businessAddressLine1?: string;
  businessAddressLine2?: string;
  businessCity?: string;
  businessDistrict?: string;
  nic?: string;
  serviceProviderType?: ServiceProviders;
  specialization?: string;
  qualification?: string;
  serviceAreas?: string[];
}
