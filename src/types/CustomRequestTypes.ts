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
  description: string;
  document: FileList;
  images: FileList;
  shortDescription: string;
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
