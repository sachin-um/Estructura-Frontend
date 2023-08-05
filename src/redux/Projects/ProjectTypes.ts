interface Project {
  Document1: string;
  Document1Name: string;
  Document2: string;
  Document2Name: string;
  Document3: string;
  Document3Name: string;
  ExtraImage1: string;
  ExtraImage1Name: string;
  ExtraImage2: string;
  ExtraImage2Name: string;
  ExtraImage3: string;
  ExtraImage3Name: string;
  cost: number;
  description: string;
  id: number;
  location: string;
  mainImage: string;
  mainImageName: string;
  name: string;
  projectFromEstructura: boolean;
}

interface ProjectAddOrUpdateRequest {
  content: string;
  cost: number;
  description: string;
  documents: FileList;
  extraImages: FileList;
  location: string;
  mainImage: FileList;
  name: string;
  professionalId: number;
  projectFromEstructura: boolean;
  title: string;
}

interface updateProjectParams {
  project: Project;
  updatedProject: ProjectAddOrUpdateRequest;
}

interface ProjectState {
  error: boolean | null;
  project: Project | null;
  reqStatus: reqStatus;
}
interface ProjectsState {
  error: boolean | null;
  projects: Project[];
  reqStatus: reqStatus;
}
