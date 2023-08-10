interface RetailItem {
  createdBy: number;
  dateAdded: Date;
  description: string;
  extraImage1?: string;
  extraImage1Name?: string;
  extraImage2?: string;
  extraImage2Name?: string;
  extraImage3?: string;
  extraImage3Name?: string;
  id: number;
  mainImage: string;
  mainImageName: string;
  name: string;
  price: number;
  quantity: number;
  retailItemType: RetailItemType;
}

type RetailItemType =
  | 'BATHWARE'
  | 'FURNITURE'
  | 'GARDENWARE'
  | 'HARDWARE'
  | 'LIGHTING';

interface RetailItemAddOrUpdateRequest {
  description: string;
  extraImages: FileList;
  mainImage: FileList;
  name: string;
  price: number;
  quantity: number;
  retailItemType: RetailItemType;
  retailStoreId: number;
}

interface updateRetailItemParams {
  retailItem: RetailItem;
  updatedRetailItem: RetailItemAddOrUpdateRequest;
}

interface RetailItemState {
  error: boolean | null;
  reqStatus: reqStatus;
  retailItem: RetailItem | null;
}
interface RetailItemsState {
  error: boolean | null;
  reqStatus: reqStatus;
  retailItems: RetailItem[];
}
