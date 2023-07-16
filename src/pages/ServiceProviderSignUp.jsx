// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)
import TopBar from "../components/TopBar";
import SignUpPage1 from "../components/ServiceProvider/SignUpPage1";
import SignUpPage2 from "../components/ServiceProvider/SignUpPage2";
import ArchitectPage1 from "../components/ServiceProvider/ArchitectSignUp/ArchitectPage1";
import ArchitectPage2 from "../components/ServiceProvider/ArchitectSignUp/ArchitectPage2";
import ArchitectPage3 from "../components/ServiceProvider/ArchitectSignUp/ArchitectPage3";
import ArchitectPage4 from "../components/ServiceProvider/ArchitectSignUp/ArchitectPage4";
import ArchitectPage5 from "../components/ServiceProvider/ArchitectSignUp/ArchitectPage5";
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

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
    setCurrentPage(2); // Reset to the first page when dropdown changes
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
      nextPage={nextPage}
      previousPage={previousPage}
    />,
  ];

  if (selectedOption === "architect") {
    pages.push(
      <ArchitectPage1
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      <ArchitectPage2
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      <ArchitectPage3
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      <ArchitectPage4
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      <ArchitectPage5
        updateFormData={updateFormData}
        handleDropdownChange={handleDropdownChange}
        nextPage={nextPage}
        previousPage={previousPage}
      />
    );
  } else if (selectedOption === "option2") {
    pages.push(<Page3 updateFormData={updateFormData} />);
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
