interface RetailItem {
  ExtraImage1?: string;
  ExtraImage1Name?: string;
  ExtraImage2?: string;
  ExtraImage2Name?: string;
  ExtraImage3?: string;
  ExtraImage3Name?: string;
  MainImage: string;
  MainImageName: string;
  createdBy: number;
  dateAdded: Date;
  description: string;
  id: number;
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
  RetailStoreId: number;
  description: string;
  extraImages: FileList;
  mainImage: FileList;
  name: string;
  price: number;
  quantity: number;
  retailItemType: RetailItemType;
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
