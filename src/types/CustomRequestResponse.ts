interface SendResponseRequest {
  requestId: number;
  serviceProviderId: number;
  shortDesc: string;
  response: string;
  proposedBudget: number;
  documents: FileList;
}

interface CustomerRequestResponse {
  id: number;
  shortDesc: string;
  response: string;
  proposedBudget?: number;
  document1?: string;
  document1Name?: string;
  document2?: string;
  document2Name?: string;
  document3?: string;
  document3Name?: string;
  createBy: number;
  status: ResponseStatus;
  dateAdded: Date;
  custReqId: number;
}

type ResponseStatus = 'ACCEPTED' | 'DECLINE' | 'PENDING';

interface ActionRequest {
  customer_id: number;
  response_id: number;
  action: ResponseStatus;
}
