interface baseUser {
  ProfileImage: string;
  ProfileImageName: string;
  accountNonExpired: boolean;
  accountNonLocked: boolean;
  authorities: { authority: string }[];
  credentialsNonExpired: boolean;
  email: string;
  firstname: string;
  id: number;
  isVerified: boolean;
  lastname: string;
  role: Role;
}

interface Admin extends baseUser {
  assignedArea: string;
}

interface Customer extends baseUser {
  addressline1: string;
  addressline2: string;
  city: string;
  district: string;
}

interface ServiceProvider extends baseUser {
  addressline1: string;
  addressline2: string;
  city: string;
  contactNumber: string;
  district: string;
  nic: string;
}

interface Qualification {
  id: number;
  qualification: string;
}

interface Specialization {
  id: number;
  specialization: string;
}

interface ConstructionCompany extends ServiceProvider {
  awards: Qualification[];
  businessRegNumber: string;
  specializations: Specialization[];
  teamSize: number;
}

interface Electrician extends ServiceProvider {
  qualifications: Qualification[];
  specializations: Specialization[];
}

interface Renter extends ServiceProvider {
  businessContactNo: string;
  businessName: string;
  registrationNo: string;
}

interface RetailStore extends ServiceProvider {
  businessCategory: string;
  businessContactNo: string;
  businessName: string;
  registrationNo: string;
}

interface ServiceArea {
  id: number;
  serviceArea: string;
}

interface Professional extends ServiceProvider {
  businessContactNo: string;
  introduction: string;
  maxRate: number;
  minRate: number;
  serviceAreas: ServiceArea[];
}

interface Architect extends Professional {
  qualifications: Qualification[];
  sLIARegNumber: string;
  specializations: Specialization[];
}

interface Carpenter extends Professional {
  qualifications: Qualification[];
  specializations: Specialization[];
}

interface InteriorDesigner extends Professional {
  qualifications: Qualification[];
  sLIDRegNumber: string;
  specializations: Specialization[];
}

interface LandscapeArchitect extends Professional {
  qualifications: Qualification[];
  specializations: Specialization[];
}

interface MasonWorker extends Professional {
  qualifications: Qualification[];
  specializations: Specialization[];
}

interface Painter extends Professional {
  qualifications: Qualification[];
  specializations: Specialization[];
}
