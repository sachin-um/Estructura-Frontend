interface RentingItem {
  category: RentingCategory;
  dateAdded: Date;
  description: string;
  extraImage1: string;
  extraImage1Name: string;
  extraImage2: string;
  extraImage2Name: string;
  extraImage3: string;
  extraImage3Name: string;
  id: number;
  mainImage: string;
  mainImageName: string;
  name: string;
  price: number;
  scale: string;
}

type RentingCategory =
  | 'HEAVY_MACHINERY'
  | 'PORTABLE_MACHINES'
  | 'TOOLS_AND_EQUIPMENT';

interface RentingItemAddOrUpdateRequest {
  category: RentingCategory;
  description: string;
  extraImages: FileList;
  mainImage: FileList;
  name: string;
  price: number;
  scale: string;
  userId: number;
}

interface updateRentingItemParams {
  rentingItem: RentingItem;
  updatedRentingItem: RentingItemAddOrUpdateRequest;
}

interface RentingItemState {
  error: boolean | null;
  rentingItem: RentingItem | null;
  reqStatus: reqStatus;
}

interface RentingItemsState {
  error: boolean | null;
  rentingItems: RentingItem[];
  reqStatus: reqStatus;
}
