interface CustomerRequest {
  createdBy: number;
  description: string;
  document: string;
  id: number;
  images: string[];
  shortDescription: string;
  status: string;
  targetCategories: Role[];
  targetRetailCategories: RetailItemType[];
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
