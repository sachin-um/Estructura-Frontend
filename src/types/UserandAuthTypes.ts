interface UsersInfoState {
  error: null | string;
  status: reqStatus;
  users: User[];
}

interface Qualification {
  id: number;
  qualification: string;
}

interface UserState {
  ProfileImage: null | string;
  ProfileImageName: null | string;
  email: string;
  firstName: string;
  id: number;
  lastName: string;
  role: Role;
  serviceProviderType?: ServiceProviders;
}

interface SignInRequest {
  email: string;
  password: string;
}

interface AuthenticationResponse extends ValidatedResponse, UserState {
  accessToken: null | string;
  refreshToken: null | string;
  success: boolean;
}

interface RefreshTokenResponse {
  accessToken: null | string;
  message: null | string;
  refreshToken: null | string;
  success: boolean;
}

interface Specialization {
  id: number;
  specialization: string;
}

interface ServiceArea {
  id: number;
  serviceArea: string;
}

interface User {
  ProfileImage: string;
  ProfileImageName: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  addressLine1?: string;
  addressLine2?: string;
  assignedArea?: string;
  authorities: { authority: string }[];
  awards?: Qualification[];
  businessAddressLine1?: string;
  businessAddressLine2?: string;
  businessCategory?: string;
  businessContactNo?: string;
  businessName?: string;
  businessRegNumber?: string;
  city?: string;
  contactNo?: string;
  credentialsNonExpired: boolean;
  district?: string;
  email: string;
  firstName: string;
  id: number;
  introduction?: string;
  isVerified: boolean;
  lastName: string;
  maxRate?: number;
  minRate?: number;
  nic?: string;
  qualifications?: Qualification[];
  registrationNo?: string;
  role: Role;
  sLIDRegNumber?: string;
  serviceAreas?: ServiceArea[];
  serviceProviderType?: ServiceProviders;
  sliaRegNumber?: string;
  specializations?: Specialization[];
}
