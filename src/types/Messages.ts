type Message = {
  content: string;
  createdAt: Date;
  fileOriginalNames: string[];
  files: string[];
  id: number;
  recipientId: number;
  senderId: number;
};

interface SendMessageRequest {
  content: string;
  files: FileList;
}
