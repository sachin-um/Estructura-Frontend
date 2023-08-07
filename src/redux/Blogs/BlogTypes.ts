interface Blog {
  content: string;
  createdBy: number;
  creatorName: string;
  dateAdded: Date;
  id: number;
  mainImage: string;
  mainImageName: string;
  title: string;
}

interface BlogAddOrUpdateRequest {
  content: string;
  mainImage: FileList;
  title: string;
  userId: number;
}

interface updateBlogParams {
  blog: Blog;
  updatedBlog: BlogAddOrUpdateRequest;
}

interface BlogState {
  blog: Blog | null;
  error: boolean | null;
  reqStatus: reqStatus;
}

interface BlogsState {
  blogs: Blog[];
  error: boolean | null;
  reqStatus: reqStatus;
}
