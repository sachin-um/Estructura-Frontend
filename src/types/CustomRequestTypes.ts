interface CustomerRequest {
  createdBy: number;
  description: string;
  Document1Name: string;
  Document2Name: string;
  Document3Name: string;
  Document1: string;
  Document2: string;
  Document3: string;
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
