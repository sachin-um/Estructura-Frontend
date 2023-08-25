interface Blog {
  id: number;
  title: string;
  content: string;
  creatorName: string;
  dateAdded: Date;
  mainImage: string;
  mainImageName: string;
  createdBy: number;
}

interface BlogAddOrUpdateRequest {
  title: string;
  content: string;
  mainImage: FileList;
  userId: number;
}
