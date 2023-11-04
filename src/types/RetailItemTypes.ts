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
  furnitureItemType: FurnitureItemType;
}

type RetailItemType =
  | 'BATHWARE'
  | 'FURNITURE'
  | 'GARDENWARE'
  | 'HARDWARE'
  | 'LIGHTING';

type FurnitureItemType = 'BOHEMIAN' | 'COASTAL' | 'INDUSTRIAL' | 'SCANDINAVIAN';

interface RetailItemAddOrUpdateRequest {
  description: string;
  extraImages: FileList;
  mainImage: FileList;
  name: string;
  price: number;
  quantity: number;
  retailItemType: RetailItemType;
  furnitureItemType: FurnitureItemType;
  retailStoreId: number;
}

interface updateRetailItemParams {
  retailItemId: number;
  updatedRetailItem: RetailItemAddOrUpdateRequest;
}

interface RetailItemsState {
  error: boolean | null;
  reqStatus: reqStatus;
  retailItems: RetailItem[];
}
