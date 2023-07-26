// TODO: Add Service Provider Sign In Page with 2 paths (service provider and retail store)
import React, { useState } from "react";
import Professional from "../components/ServiceProvider/Professional";
import ArchitectPage from "../components/ServiceProvider/ProfessionalPages/ArchitectPage";
import CarpenterPage from "../components/ServiceProvider/ProfessionalPages/CarpenterPage";
import ConstructionCompanyPage from "../components/ServiceProvider/ProfessionalPages/ConstructionCompanyPage";
import HomebuilderPage from "../components/ServiceProvider/ProfessionalPages/HomebuilderPage";
import InteriorDesignerPage from "../components/ServiceProvider/ProfessionalPages/InteriorDesignerPage";
import LansdcapeArchitectPage from "../components/ServiceProvider/ProfessionalPages/LansdcapeArchitectPage";
import PainterPage from "../components/ServiceProvider/ProfessionalPages/PainterPage";
import RentalStore from "../components/ServiceProvider/Rental";
import RetailStore from "../components/ServiceProvider/RetailStore";
import ServiceProviderPage4 from "../components/ServiceProvider/ServiceProviderPage4";
import ServiceProviderPage5 from "../components/ServiceProvider/ServiceProviderPage5";
import ServiceProviderPage6 from "../components/ServiceProvider/ServiceProviderPage6";
import ServiceProviderPage7 from "../components/ServiceProvider/ServiceProviderPage7";
import SignUpPage1 from "../components/ServiceProvider/SignUpPage1";
import SignUpPage2 from "../components/ServiceProvider/SignUpPage2";
import TopBar from "../components/TopBar";
// import { Link } from "react-router-dom" ;

function ServiceProviderSignUp() {
  const [currentPage, setCurrentPage] = useState(1);
  const [formData, setFormData] = useState({});
  const [selectedOption, setSelectedOption] = useState("");
  const [pageImage, setPageImage] = useState("");
  console.log(formData);
  // const [activeTab, setActiveTab] = useState(1);
  const [value, setValue] = React.useState("one");

  const handleTabChange = (tab) => {
    setValue(tab);
    setActiveTab(tab);
  };

  const renderForm = () => {
    if (activeTab === 1) {
      return <Professional formData={formData}/>;
    } else if (activeTab === 2) {
      return <RetailStore formData={formData}/>;
    } else if (activeTab === 3) {
      return <RentalStore formData={formData}/>;
    }
    return <Professional formData={formData}/>;
  };

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
  const handlePageImage=(value)=>{
    setSelectedOption("");
    if (value=="two") {
      setPageImage("/signup/retailstore.jpg")
    } else if  (value=="three"){
      setPageImage("/signup/rental.jpg")

    }
  }

  const handleDropdownChange = (value) => {
    setSelectedOption(value);
    setCurrentPage(2); // Reset to the first page when dropdown changes
    if(value=="architect"){
      setPageImage("/signup/archi.jpg")
    }
    else if(value=="interiordesigner"){
      setPageImage("/signup/designer.jpg")
    }
    else if(value=="constructioncompany"){
      setPageImage("/signup/constructioncompany.png")
    }
    else if(value=="homebuilder"){
      setPageImage("/signup/homebuilder.jpg")
    }
    else if(value=="landscapearchitect"){
      setPageImage("/signup/landscapearchitect.jpg")
    }
    else if(value=="painter"){
      setPageImage("/signup/painter.jpg")
    }
    else if(value=="carpenter"){
      setPageImage("/signup/carpenter.jpg")
    }
  };

  const handleSubmit = () => {
    // Handle form submission using the collected form data
    console.log(formData);
  };

  let initialPages = [
    <SignUpPage1  // Email
      formData={formData}
      updateFormData={updateFormData}
     
      nextPage={nextPage}
    />,
    <SignUpPage2 // Select Service Provider Type
      // for Professionals, select the type of professional
      formData={formData}
      updateFormData={updateFormData}
      handleDropdownChange={handleDropdownChange}
      handlePageImage={handlePageImage}
      nextPage={nextPage}
      previousPage={previousPage}
    />,
      <ServiceProviderPage7 // Profile Image
      formData={formData}
        updateFormData={updateFormData}
        
        nextPage={nextPage}
        previousPage={previousPage}
        pageImage={pageImage}
      />
  ];
  let pages=[...initialPages]; // Copy the initial pages

  const professionalsPages=[
    <ServiceProviderPage4 // Where are you based? Who???
    formData={formData}
        updateFormData={updateFormData}
     
        nextPage={nextPage}
        previousPage={previousPage}
        pageImage={pageImage}
      />,
      <ServiceProviderPage5 // Services offered? Construction Company???
      formData={formData}
        updateFormData={updateFormData}
       
        nextPage={nextPage}
        previousPage={previousPage}
        pageImage={pageImage}
      />,
      <ServiceProviderPage6 // Project Price range? Construction Company???
      formData={formData}
        updateFormData={updateFormData}
       
        nextPage={nextPage}
        previousPage={previousPage}
        pageImage={pageImage}
      />,
  ]


  if (selectedOption === "architect") {
    pages.splice(2,0,
      <ArchitectPage
      formData={formData}
        updateFormData={updateFormData}
    
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages
    );
  } else if (selectedOption === "interiordesigner") {
    pages.splice(2,0,
      <InteriorDesignerPage
      formData={formData}
        updateFormData={updateFormData}
       
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages
    );

  }
  else if (selectedOption === "constructioncompany") {
    pages.splice(2,0,
      <ConstructionCompanyPage
      formData={formData}
        updateFormData={updateFormData}
       
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages
    );

  }
  else if (selectedOption === "homebuilder") {
    pages.splice(2,0,
      <HomebuilderPage
      formData={formData}
        updateFormData={updateFormData}
      
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages
    );

  }
  else if (selectedOption === "carpenter") {
    pages.splice(2,0,
      <CarpenterPage
      formData={formData}
        updateFormData={updateFormData}
      
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages
    );

  }
  else if (selectedOption === "painter") {
    pages.splice(2,0,
      <PainterPage
      formData={formData}
        updateFormData={updateFormData}
       
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages
    );

  }
  else if (selectedOption === "landscapearchitect") {
    pages.splice(2,0,
      <LansdcapeArchitectPage
      formData={formData}
        updateFormData={updateFormData}
        
        nextPage={nextPage}
        previousPage={previousPage}
      />,
      ...professionalsPages
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
