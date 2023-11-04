interface PlanRequest {
  budgets: number;
  coverImageId: number;
  documents: FileList;
  images: FileList;
  name: string;
  note: string;
  professionals: number[];
  rentingItems: number[];
  retailItems: number[];
  userID: number;
}

interface Plan {
  id: number;
  planName: string;
  coverImageId: number;
  createdBy: number;
  dateCreated: Date;
  note?: string;
  budget?: number;
  customerPlanProfessionals: customerPlanProfessionals[];
  customerPlanRetailItems: customerPlanRetailItems[];
  customerPlanRentingItems: customerPlanRentingItems[];
}

interface customerPlanProfessionals {
  id: number;
  professionalId: number;
}

interface customerPlanRetailItems {
  id: number;
  retailItems: number;
}

interface customerPlanRentingItems {
  id: number;
  rentingItemId: number;
}
