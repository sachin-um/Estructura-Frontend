import { Add, Remove } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
import Announcement from "../../components/e-com/Announcement";
import Footer from "../../components/Footer";
import TopBar from "../../components/CusTopBar";
import Newsletter from "../../components/e-com/Blog";
import { mobile } from "../../responsive";


const Container = styled.div``;

const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BigImageContainer = styled.div`
  width: 400px;
  max-height: 400px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
`;

const BigImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 2;
`;



const SmallImagesContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 20px;
`;

const SmallImageContainer = styled.div`
  width: 60px;
  height: 60px;
  object-fit: cover;
  border: ${(props) => (props.isSelected ? "2px solid teal" : "none")};
  margin: 0 10px;
  cursor: pointer;
`;

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ padding: "10px", flexDirection:"column" })}
`;

const ImgContainer = styled.div`
  flex: 1;
`;

const Image = styled.img`
  width: 100%;
  height: 90vh;
  object-fit: cover;
  ${mobile({ height: "40vh" })}
`;

const InfoContainer = styled.div`
  flex: 1;
  padding: 0px 50px;
  ${mobile({ padding: "10px" })}
`;

const Title = styled.h1`
  font-weight: 200;
  color: #304422;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #435834;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 40px;
  color: #9D6432;
`;

const FilterContainer = styled.div`
  width: 50%;
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const Filter = styled.div`
  display: flex;
  align-items: center;
`;

const FilterTitle = styled.span`
  font-size: 20px;
  font-weight: 200;
`;

const FilterColor = styled.div`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background-color: ${(props) => props.color};
  margin: 0px 5px;
  cursor: pointer;
  color: #435834;
`;

const FilterSize = styled.select`
  margin-left: 10px;
  padding: 5px;
  color: #435834;
`;

const FilterSizeOption = styled.option``;

const AddContainer = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  ${mobile({ width: "100%" })}
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #435834;
`;

const Amount = styled.span`
  width: 30px;
  height: 30px;
  border-radius: 10px;
  border: 1px solid #435834;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
`;

const Button = styled.button`
  padding: 15px;
  border: 2px solid #435834;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  color: #435834;

  &:hover{
      background-color: #435834;
      color: white;
  }
`;

const Product = () => {

  const [selectedImage, setSelectedImage] = useState("https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1");
  const images = [
    "https://images.pexels.com/photos/11674340/pexels-photo-11674340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/13068370/pexels-photo-13068370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  
  return (
    <Container>
      <TopBar title="Product" />
      <Announcement />
      <Wrapper>
        <ContainerImg>
          <BigImageContainer>
            <BigImage src={selectedImage} />
          </BigImageContainer>
          <SmallImagesContainer>
            {images.map((image) => (
              <SmallImageContainer
                isSelected={image === selectedImage}
                onClick={() => handleImageClick(image)}
                key={image}
              >
                <SmallImage src={image} />
              </SmallImageContainer>
            ))}
          </SmallImagesContainer>
        </ContainerImg>
        <InfoContainer>
          <Title>Table Lamp</Title>
          <Desc>
          The elegant and sophisticated "Luminous Glow" Table Lamp – the perfect addition 
          to elevate your home decor. Crafted with meticulous attention to detail, the "Luminous Glow" 
          Table Lamp boasts a sleek and modern design that effortlessly complements various interior 
          styles. The lamp's slender body, finished in brushed bronze, exudes a timeless charm, making 
          it a versatile accent piece for any space.
          </Desc>
          <Price>$ 20</Price>
          <FilterContainer>
            <Filter>
              <FilterTitle>Color</FilterTitle>
              <FilterColor color="black" />
              <FilterColor color="darkblue" />
              <FilterColor color="gray" />
            </Filter>
            <Filter>
              <FilterTitle>Size</FilterTitle>
              <FilterSize>
                <FilterSizeOption>XS</FilterSizeOption>
                <FilterSizeOption>S</FilterSizeOption>
                <FilterSizeOption>M</FilterSizeOption>
                <FilterSizeOption>L</FilterSizeOption>
                <FilterSizeOption>XL</FilterSizeOption>
              </FilterSize>
            </Filter>
          </FilterContainer>
          <AddContainer>
            <AmountContainer>
              <Remove />
              <Amount>1</Amount>
              <Add />
            </AmountContainer>
            <Button>ADD TO CART</Button>
          </AddContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;
