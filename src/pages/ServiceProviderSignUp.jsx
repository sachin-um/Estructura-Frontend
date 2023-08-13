// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import ArchitectPage from '../components/ServiceProvider/ProfessionalPages/ArchitectPage';
import ConstructionCompanyPage from '../components/ServiceProvider/ProfessionalPages/ConstructionCompanyPage';
import HomebuilderPage from '../components/ServiceProvider/ProfessionalPages/HomebuilderPage';
import ServiceProviderPage4 from '../components/ServiceProvider/ServiceProviderPage4';
import ServiceProviderPage5 from '../components/ServiceProvider/ServiceProviderPage5';
import ServiceProviderPage6 from '../components/ServiceProvider/ServiceProviderPage6';
import ServiceProviderPage7 from '../components/ServiceProvider/ServiceProviderPage7';
import SignUpPage1 from '../components/ServiceProvider/SignUpPage1';
import SignUpPage2 from '../components/ServiceProvider/SignUpPage2';
import TopBar from '../components/TopAppBar';
import API from '../lib/API';

function ServiceProviderSignUp() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedOption, setSelectedOption] = useState('');
  const [pageImage, setPageImage] = useState('');
  console.log(formData);
  const [activeTab, setActiveTab] = useState(1);
  const [value, setValue] = React.useState('one');

  const navigate = useNavigate();

  const nextPage = () => {
    console.log(formData);
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };
  const handlePageImage = (value) => {
    setSelectedOption('');
    if (value === 'two') {
      setPageImage('/signup/retailstore.jpg');
    } else if (value === 'three') {
      setPageImage('/signup/rental.jpg');
    }
  };

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
    setCurrentPage(2); // Reset to the first page when dropdown changes
    if (value === 'architect') {
      setPageImage('/signup/archi.jpg');
    } else if (value === 'interiordesigner') {
      setPageImage('/signup/designer.jpg');
    } else if (value === 'constructioncompany') {
      setPageImage('/signup/constructioncompany.png');
    } else if (value === 'homebuilder') {
      setPageImage('/signup/homebuilder.jpg');
    } else if (value === 'landscapearchitect') {
      setPageImage('/signup/landscapearchitect.jpg');
    } else if (value === 'painter') {
      setPageImage('/signup/painter.jpg');
    } else if (value === 'carpenter') {
      setPageImage('/signup/carpenter.jpg');
    }
  };

  const HandleSubmit = () => {
    setFormData({ ...formData, role: formData.role.toUpperCase() });
    console.log(formData);
    API.post('/auth/register', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    })
      .then((res) => {
        console.log(res);
        if (res.status === 200) {
          if (res.data.success === true) {
            // ! Redirect to a page that says, verify your email
            navigate('/emailNotVerified', { replace: true });
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

  let initialPages = [
    <SignUpPage1 // Email
      formData={formData}
      key={1}
      updateFormData={updateFormData}
      handleDropdownChange={handleDropdownChange}
      nextPage={nextPage}
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
      key={3}
      nextPage={nextPage}
      pageImage={pageImage}
      previousPage={previousPage}
      updateFormData={updateFormData}
      handleSubmit={HandleSubmit}
    />,
  ];
  let pages = [...initialPages]; // Copy the initial pages

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

  if (selectedOption === 'architect') {
    pages.splice(
      2,
      0,
      <ArchitectPage
        pageImage={pageImage}
        formData={formData}
        updateFormData={updateFormData}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'interiordesigner') {
    pages.splice(
      2,
      0,
      <ArchitectPage
        pageImage={pageImage}
        formData={formData}
        updateFormData={updateFormData}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'constructioncompany') {
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
  } else if (selectedOption === 'homebuilder') {
    pages.splice(
      2,
      0,
      <HomebuilderPage
        pageImage={pageImage}
        formData={formData}
        updateFormData={updateFormData}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'carpenter') {
    pages.splice(
      2,
      0,
      <HomebuilderPage
        pageImage={pageImage}
        formData={formData}
        updateFormData={updateFormData}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'painter') {
    pages.splice(
      2,
      0,
      <HomebuilderPage
        pageImage={pageImage}
        formData={formData}
        updateFormData={updateFormData}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages,
    );
  } else if (selectedOption === 'landscapearchitect') {
    pages.splice(
      2,
      0,
      <ArchitectPage
        pageImage={pageImage}
        formData={formData}
        updateFormData={updateFormData}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages,
    );
  }

  // const HandleSubmit = (event) => {
  //   event.preventDefault();
  //   const formData = new FormData(event.currentTarget);
  //   console.log(formData.get('email'), formData.get('password'));
  // };

  // TODO: Change Layout
  return (
    <>
      <TopBar title="Sign In to Estructura" />

      {pages[currentPage - 1]}
      {/* {currentPage > 1 && (
        <button onClick={previousPage}>Previous</button>
      )}
      {currentPage < pages.length && (
        <button onClick={nextPage}>Next</button>
      )}
      {currentPage === pages.length && (
        <button onClick={handleSubmit}>Submit</button>
      )}
       */}
    </>
  );
}

export default ServiceProviderSignUp;
