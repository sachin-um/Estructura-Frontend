interface UsersInfoState {
  error: null | string;
  status: reqStatus;
  users: User[];
}

interface Qualification {
  id: number;
  qualification: string;
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
  businessCategory?: string;
  businessContactNo?: string;
  businessName?: string;
  businessRegNumber?: string;
  businessAddressLine1?: string;
  businessAddressLine2?: string;
  city?: string;
  contactNumber?: string;
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
  sliaregNumber?: string;
  specializations?: Specialization[];
}
