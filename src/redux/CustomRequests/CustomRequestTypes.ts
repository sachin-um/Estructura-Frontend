interface CustomRequest {
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

interface CustomRequestAddOrUpdateRequest {
  description: string;
  document: FileList;
  images: FileList;
  shortDescription: string;
  targetCategories: Role[];
  targetRetailCategories: RetailItemType[];
}

interface updateCustomRequestParams {
  customRequest: CustomRequest;
  updatedCustomRequest: CustomRequestAddOrUpdateRequest;
}

interface CustomRequestState {
  customRequest: CustomRequest | null;
  error: boolean | null;
  reqStatus: reqStatus;
}
