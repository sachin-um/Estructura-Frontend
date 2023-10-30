interface Project {
  cost: number;
  createdBy: number;
  description: string;
  document1: string;
  document1Name: string;
  document2: string;
  document2Name: string;
  document3: string;
  document3Name: string;
  extraImage1: string;
  extraImage1Name: string;
  extraImage2: string;
  extraImage2Name: string;
  extraImage3: string;
  extraImage3Name: string;
  id: number;
  location: string;
  mainImage: string;
  mainImageName: string;
  name: string;
  projectFromEstructura: boolean;
}

interface ProjectAddOrUpdateRequest {
  cost: number;
  description: string;
  documents: FileList;
  extraImages: FileList;
  location: string;
  mainImage: FileList;
  name: string;
  professionalId: number;
  projectFromEstructura: boolean;
}

interface updateProjectParams {
  projectId: number;
  updatedProject: ProjectAddOrUpdateRequest;
}
