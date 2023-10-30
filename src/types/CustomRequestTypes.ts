interface CustomerRequest {
  createdBy: number;
  description: string;
  document1Name: string;
  document2Name: string;
  document3Name: string;
  document1: string;
  document2: string;
  document3: string;
  id: number;
  image1Name: string;
  image2Name: string;
  image3Name: string;
  image1: string;
  image2: string;
  image3: string;
  shortDesc: string;
  minPrice: number;
  maxPrice: number;
  status: string;
  targetCategories: { id: number; role: Role }[];
  targetRetailCategories: { id: number; retailItemType: RetailItemType }[];
}

interface CustomerRequestAddOrUpdateRequest {
  customerId: number;
  description: string;
  shortDesc: string;
  minPrice: number;
  maxPrice: number;
  documents: FileList;
  images: FileList;
  targetCategories: Role[];
  targetRetailCategories: RetailItemType[];
}

interface updateCustomRequestParams {
  customRequest: CustomerRequest;
  updatedCustomRequest: CustomerRequestAddOrUpdateRequest;
}

interface CustomerRequestState {
  customRequest: CustomerRequest | null;
  error: boolean | null;
  reqStatus: reqStatus;
}
