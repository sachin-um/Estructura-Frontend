interface CustomerRequest {
  createdBy: number;
  description: string;
  document: string;
  id: number;
  images: string[];
  shortDesc: string;
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
