import { Grid } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Construction from '../../components/Algo/Construction';
import ConstructionCommercial from '../../components/Algo/ConstructionCommercial';
import ConstructionIndustrial from '../../components/Algo/ConstructionIndustrial';
import ConstructionRecreational from '../../components/Algo/ConstructionRecreational';
import ConstructionResidence from '../../components/Algo/ConstructionResidence';
import CurrentStatus from '../../components/Algo/CurrentStatus';
import DesignPlans from '../../components/Algo/DesignPlans';
import GetStarted from '../../components/Algo/InitialPage';
import InteriorDesign from '../../components/Algo/InteriorDesign';
import Landscaping from '../../components/Algo/Landscaping';
import Location from '../../components/Algo/Location';
import Price from '../../components/Algo/Price';
import Remodelling from '../../components/Algo/Remodelling';
import Woodwork from '../../components/Algo/Woodwork';
import TopAppBar from '../../components/TopAppBar';
import API from '../../lib/API';

function RecAlgo() {
  const [currentPage, setCurrentPage] = useState(0);
  const [totalQuestions, setTotalQuestions] = useState(6);
  const [currentQuestion, setCurrentQuestion] = useState(1);
  const [formData, setFormData] = useState({});
  const navigator = useNavigate();
  const nextPage = () => {
    setCurrentPage(currentPage + 1);
    setCurrentQuestion(currentQuestion + 1);
    console.log(formData);
  };
  const previousPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };
  const updateFormData = (data) => {
    setFormData({ ...formData, ...data });
  };
  const [selectedOption, setSelectedOption] = useState(null);
  const HandleSubmit = (data) => {
    console.log(formData, 'Got', data);
    if (!data['secondChoice']) {
      data['secondChoice'] = [];
    }
    if (!data['thirdChoice']) {
      data['thirdChoice'] = [];
    }
    data['firstChoice'] = data['firstChoice'].toLowerCase();
    data['secondChoice'] = data['secondChoice'].map((s) => s.toLowerCase());
    data['thirdChoice'] = data['thirdChoice'].map((s) => s.toLowerCase());
    data['price'] = data['price'];
    API.post('/recommendation/recommend', data)
      .then((res) => {
        console.table(res);
        if (res.status === 200) {
          if (res.data.success === true) {
            // ! Redirect to a page that says, verify your email
            // navigate('/RecommendationsPage', { replace: true });
            alert(JSON.stringify(res.data));
            navigator('/RecommendationsPage', {
              state: {
                data: res.data,
              },
            });
          } else {
            alert(
              'Something went wrong!, please try again.' +
                ' If the issue persists, please contact us.',
            );
          }
        } else {
          alert('Invalid Request');
        }
      })
      .catch((err) => console.log(err));
  };
  const handlePageChange = (value) => {
    setSelectedOption(value);
    // setPages((prevStack) => [...prevStack, currentPage]);
    console.log(pages);
  };
  const initialPage = [
    <GetStarted
      formData={formData}
      nextPage={nextPage}
      previousPage={previousPage}
      handlePageChange={handlePageChange}
      updateFormData={updateFormData}
      currentQuestion={currentQuestion}
    />,
  ];
  const [pages, setPages] = useState(initialPage);
  useEffect(() => {
    if (selectedOption !== null) {
      console.log(selectedOption);
      let newPage = null;
      switch (selectedOption) {
        case 'Construction':
          setTotalQuestions(6);
          newPage = (
            <Construction
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Design Plans':
          setTotalQuestions(5);
          newPage = (
            <DesignPlans
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Landscaping':
          setTotalQuestions(5);
          newPage = (
            <Landscaping
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Remodelling':
          setTotalQuestions(5);
          newPage = (
            <Remodelling
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Interior Designing':
          setTotalQuestions(5);
          newPage = (
            <InteriorDesign
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Woodwork':
          setTotalQuestions(5);
          newPage = (
            <Woodwork
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Painting':
          setTotalQuestions(4);
          newPage = (
            <Location
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;

        case 'Residence Building':
          newPage = (
            <ConstructionResidence
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Commercial Building':
          newPage = (
            <ConstructionCommercial
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;

        case 'Industrial Building':
          newPage = (
            <ConstructionIndustrial
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Recreational Building':
          newPage = (
            <ConstructionRecreational
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Location':
          newPage = (
            <Location
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'CurrentStatus':
          newPage = (
            <CurrentStatus
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
            />
          );
          break;
        case 'Price':
          newPage = (
            <Price
              formData={formData}
              updateFormData={updateFormData}
              nextPage={nextPage}
              previousPage={previousPage}
              handlePageChange={handlePageChange}
              currentQuestion={currentQuestion}
              totalQuestions={totalQuestions}
              handleSubmit={HandleSubmit}
            />
          );
          break;

        default:
          break;
      }
      const updatedStack = [...pages];
      updatedStack[currentPage] = newPage;
      setPages(updatedStack);
    }
  }, [selectedOption, formData, currentQuestion, totalQuestions]);
  // let pages = [initialPage, ...additionalPages];
  // useEffect(() => {
  //   if (previousPageState === true) {
  //     console.log('Byeeeeeeeeee');
  //     const updatedPages = pages.slice(0, -1);
  //     setPages(updatedPages);
  //   }
  // }, [pages]);

  return (
    <>
      <TopAppBar />
      {
        <Grid
          xs={12}
          md={12}
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          {pages[currentPage]}
        </Grid>
      }
    </>
  );
}

export default RecAlgo;
