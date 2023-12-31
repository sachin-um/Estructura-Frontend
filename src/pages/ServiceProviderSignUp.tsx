// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArchitectPage from '../components/Auth/signup/ProfessionalPages/ArchitectPage';
import ConstructionCompanyPage from '../components/Auth/signup/ProfessionalPages/ConstructionCompanyPage';
import HomebuilderPage from '../components/Auth/signup/ProfessionalPages/HomebuilderPage';
import ServiceProviderPage4 from '../components/Auth/signup/ServiceProviderPage4';
import ServiceProviderPage5 from '../components/Auth/signup/ServiceProviderPage5';
import ServiceProviderPage6 from '../components/Auth/signup/ServiceProviderPage6';
import ServiceProviderPage7 from '../components/Auth/signup/ServiceProviderPage7';
import SignUpPage1 from '../components/Auth/signup/SignUpPage1';
import SignUpPage2 from '../components/Auth/signup/SignUpPage2';
import TopBar from '../components/TopAppBar';
import API from '../lib/API';

function ServiceProviderSignUp() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState<Partial<RegisterRequest>>({});
  const [selectedOption, setSelectedOption] = useState<Role | undefined>(
    undefined,
  );
  const [pageImage, setPageImage] = useState('');

  const navigate = useNavigate();

  const nextPage = () => {
    console.log(formData);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const updateFormData = (data: Partial<RegisterRequest>) => {
    setFormData({ ...formData, ...data });
  };

  const handlePageImage = (value: 'one' | 'three' | 'two') => {
    setSelectedOption(undefined);
    if (value === 'two') {
      setPageImage('/signup/retailstore.jpg');
    } else if (value === 'three') {
      setPageImage('/signup/rental.jpg');
    }
  };

  const handleDropdownChange = (value: Role | undefined) => {
    setSelectedOption(value);
    setCurrentPage(2); // Reset to the first page when dropdown changes
    if (value === 'ARCHITECT') {
      setPageImage('/signup/archi.jpg');
    } else if (value === 'INTERIORDESIGNER') {
      setPageImage('/signup/designer.jpg');
    } else if (value === 'CONSTRUCTIONCOMPANY') {
      setPageImage('/signup/constructioncompany.png');
    } else if (value === 'MASONWORKER') {
      setPageImage('/signup/homebuilder.jpg');
    } else if (value === 'LANDSCAPEARCHITECT') {
      setPageImage('/signup/landscapearchitect.jpg');
    } else if (value === 'PAINTER') {
      setPageImage('/signup/painter.jpg');
    } else if (value === 'CARPENTER') {
      setPageImage('/signup/carpenter.jpg');
    }
  };

  const HandleSubmit = (data: Partial<RegisterRequest>) => {
    console.log(formData, 'Got', data);
    API.post<RegisterResponse>('/auth/register', data, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.table(res);
        if (res.status === 200) {
          if (res.data.success === true) {
            // ! Redirect to a page that says, verify your email
            navigate('/emailNotVerified?email=' + data.email, {
              replace: true,
            });
          } else {
            // ! Can't actually handle validation errors from backend
            // ! because of the long process
            alert(
              'Something went wrong!, please try again.' +
                ' If the issue persists, please contact us.',
            );
          }
        } else {
          alert('Invalid Credentials');
        }
      })
      .catch((err) => console.log(JSON.stringify(err)));
  };

  const initialPages = [
    <SignUpPage1 // Email
      formData={formData}
      handleDropdownChange={handleDropdownChange}
      key={1}
      nextPage={nextPage}
      previousPage={previousPage}
      updateFormData={updateFormData}
    />,
    <SignUpPage2 // Select Service Provider Type
      formData={formData}
      handleDropdownChange={handleDropdownChange}
      handlePageImage={handlePageImage}
      // for Professionals, select the type of professional
      key={2}
      nextPage={nextPage}
      previousPage={previousPage}
      updateFormData={updateFormData}
    />,
    <ServiceProviderPage7 // Profile Image
      formData={formData}
      handleSubmit={HandleSubmit}
      key={3}
      nextPage={nextPage}
      pageImage={pageImage}
      previousPage={previousPage}
      updateFormData={updateFormData}
    />,
  ];
  const pages = [...initialPages]; // Copy the initial pages

  const professionalsPages = [
    <ServiceProviderPage4 // Where are you based? Who???
      formData={formData}
      key={4}
      nextPage={nextPage}
      pageImage={pageImage}
      previousPage={previousPage}
      updateFormData={updateFormData}
    />,
    <ServiceProviderPage5 // Services offered? Construction Company???
      formData={formData}
      key={5}
      nextPage={nextPage}
      pageImage={pageImage}
      previousPage={previousPage}
      updateFormData={updateFormData}
    />,
    <ServiceProviderPage6 // Project Price range? Construction Company???
      formData={formData}
      key={6}
      nextPage={nextPage}
      pageImage={pageImage}
      previousPage={previousPage}
      updateFormData={updateFormData}
    />,
  ];

  if (selectedOption === 'ARCHITECT') {
    pages.splice(
      2,
      0,
      <ArchitectPage
        formData={formData}
        nextPage={nextPage}
        pageImage={pageImage}
        previousPage={previousPage}
        updateFormData={updateFormData}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'INTERIORDESIGNER') {
    pages.splice(
      2,
      0,
      <ArchitectPage
        formData={formData}
        nextPage={nextPage}
        pageImage={pageImage}
        previousPage={previousPage}
        updateFormData={updateFormData}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'CONSTRUCTIONCOMPANY') {
    pages.splice(
      2,
      0,
      <ConstructionCompanyPage
        formData={formData}
        nextPage={nextPage}
        previousPage={previousPage}
        updateFormData={updateFormData}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'MASONWORKER') {
    pages.splice(
      2,
      0,
      <HomebuilderPage
        formData={formData}
        nextPage={nextPage}
        pageImage={pageImage}
        previousPage={previousPage}
        updateFormData={updateFormData}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'CARPENTER') {
    pages.splice(
      2,
      0,
      <HomebuilderPage
        formData={formData}
        nextPage={nextPage}
        pageImage={pageImage}
        previousPage={previousPage}
        updateFormData={updateFormData}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'PAINTER') {
    pages.splice(
      2,
      0,
      <HomebuilderPage
        formData={formData}
        nextPage={nextPage}
        pageImage={pageImage}
        previousPage={previousPage}
        updateFormData={updateFormData}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'LANDSCAPEARCHITECT') {
    pages.splice(
      2,
      0,
      <ArchitectPage
        formData={formData}
        nextPage={nextPage}
        pageImage={pageImage}
        previousPage={previousPage}
        updateFormData={updateFormData}
      />,
      ...professionalsPages,
    );
  }

  return (
    <>
      <TopBar title="Sign In to Estructura" />
      {pages[currentPage - 1]}
    </>
  );
}

export default ServiceProviderSignUp;

export interface SignUpPageProps {
  formData: Partial<RegisterRequest>;
  handleDropdownChange?: (value: Role | undefined) => void;
  handlePageImage?: (value: 'one' | 'three' | 'two') => void;
  handleSubmit?: (data: Partial<RegisterRequest>) => void;
  nextPage: () => void;
  pageImage?: string;
  previousPage: () => void;
  updateFormData: (data: Partial<RegisterRequest>) => void;
}
