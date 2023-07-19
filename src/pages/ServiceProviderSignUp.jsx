// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)
import TopBar from "../components/TopBar";
import SignUpPage1 from "../components/ServiceProvider/SignUpPage1";
import SignUpPage2 from "../components/ServiceProvider/SignUpPage2";
import ArchitectPage1 from "../components/ServiceProvider/ArchitectSignUp/ArchitectPage1";
import InteriorDesignerPage1 from "../components/ServiceProvider/InteriorDesignerSignUp/InteriorDesignerPage1";
import ServiceProviderPage4  from "../components/ServiceProvider/ServiceProviderPage4";
import ServiceProviderPage5  from "../components/ServiceProvider/ServiceProviderPage5";
import ServiceProviderPage6  from "../components/ServiceProvider/ServiceProviderPage6";
import ServiceProviderPage7  from "../components/ServiceProvider/ServiceProviderPage7";
import React, { useState } from "react";
import Professional from "../components/ServiceProvider/Professional";
import RetailStore from "../components/ServiceProvider/RetailStore";
import RentalStore from "../components/ServiceProvider/Rental";
import {
  Box,
  Button,
  Container,
  Grid,
  Stack,
  Link,
  TextField,
  Typography,
} from "@mui/material";
// import { Link } from "react-router-dom" ;

function ServiceProviderSignUp() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [pageImage, setPageImage] = useState("");
  
  // const [activeTab, setActiveTab] = useState(1);
  const [value, setValue] = React.useState("one");

  const handleTabChange = (tab) => {
    setValue(tab);
    setActiveTab(tab);
  };

  const renderForm = () => {
    if (activeTab === 1) {
      return <Professional />;
    } else if (activeTab === 2) {
      return <RetailStore />;
    } else if (activeTab === 3) {
      return <RentalStore />;
    }
    return <Professional />;
  };

  const nextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const previousPage = () => {
    setCurrentPage(currentPage - 1);
  };

  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };
  const handlePageImage=(value)=>{
    if (value=="two") {
      setPageImage("/retailstore.jpg")
    } else if  (value=="three"){
      setPageImage("/rental.jpg")
    }
  }

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
    setCurrentPage(2); // Reset to the first page when dropdown changes
    if(value=="architect"){
      setPageImage("/archi.jpg")
    }
    else if(value=="interiordesigner"){
      setPageImage("/designer.jpg")
    }
  };

  const handleSubmit = () => {
    // Handle form submission using the collected form data
    console.log(formData);
  };

  let pages = [
    <SignUpPage1
      updateFormData={updateFormData}
      handleDropdownChange={handleDropdownChange}
      nextPage={nextPage}
    />,
    <SignUpPage2
      updateFormData={updateFormData}
      handleDropdownChange={handleDropdownChange}
      handlePageImage={handlePageImage}
      nextPage={nextPage}
      previousPage={previousPage}
    />,
      <ServiceProviderPage7
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
        pageImage={pageImage}
      />
  ];

  const remainigPages=[
    <ServiceProviderPage4
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
        pageImage={pageImage}
      />,
      <ServiceProviderPage5
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
        pageImage={pageImage}
      />,
      <ServiceProviderPage6
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
        pageImage={pageImage}
      />,
  ]
  

  if (selectedOption === "architect") {
    pages.splice(2,0,
      <ArchitectPage1
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      remainigPages
    );
  } else if (selectedOption === "interiordesigner") {
    pages.splice(2,0,
      <InteriorDesignerPage1
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      remainigPages
    );
  }

  const HandleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    console.log(formData.get("email"), formData.get("password"));
  };

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
