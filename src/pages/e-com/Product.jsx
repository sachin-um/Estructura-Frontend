import { Add, Remove, ShoppingCart, Favorite } from "@mui/icons-material";
import { useState } from "react";
import styled from "styled-components";
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
  border: ${(props) => (props.isSelected ? '2px solid teal' : 'none')};
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
  ${mobile({ padding: "10px", flexDirection: "column" })}
`;

const InfoContainer = styled.div`
  flex: 2;
  padding: 0px 50px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 200;
  color: #304422;
  margin-bottom: 5px;
`;

const DateText = styled.p`
  font-size: 15px;
  color: #808080;
  margin-top: 5px;
  margin-bottom: 30px;
`;

const Desc = styled.p`
  margin: 20px 0px;
  color: #435834;
`;

const PriceContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
`;

const Price = styled.span`
  font-weight: 100;
  font-size: 30px;
  color: #9d6432;
  margin-right: 20px;
`;

const AmountContainer = styled.div`
  display: flex;
  align-items: center;
  font-weight: 700;
  color: #435834;
  cursor: pointer;
`;

const Amount = styled.span`
  width: 200px;
  height: 50px;
  border-radius: 10px;
  border: 1px solid #435834;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0px 5px;
  cursor: pointer;
`;

const ActionContainer = styled.div`
  display: flex;
  align-items: center;
  margin-top: 40px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const AddToCartButton = styled.button`
  padding: 15px;
  border: 2px solid #435834;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  color: #435834;
  width: 200px;
  margin-right: 30px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #435834;
    color: white;
  }
`;

const AddToPlanButton = styled.button`
  padding: 15px;
  border: 2px solid #435834;
  background-color: white;
  cursor: pointer;
  font-weight: 500;
  color: #435834;
  margin-left: 10px;
  width: 200px;
  display: flex;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #435834;
    color: white;
  }
`;

const ButtonText = styled.span`
  flex: 1;
  text-align: center;
`;

const Product = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  );
  const images = [
    'https://images.pexels.com/photos/11674340/pexels-photo-11674340.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/13068370/pexels-photo-13068370.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1112598/pexels-photo-1112598.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const [amount, setAmount] = useState(1);

  const handleIncrease = () => {
    setAmount((prevAmount) => prevAmount + 1);
  }

  const handleDecrease = () => {
    if (amount > 1){
      setAmount((prevAmount) => prevAmount - 1);
    }
  }

  return (
    <Container>
      <TopBar title="Product" />
      <Wrapper>
        <ContainerImg>
          <BigImageContainer>
            <BigImage src={selectedImage} />
          </BigImageContainer>
          <SmallImagesContainer>
            {images.map((image) => (
              <SmallImageContainer
                isSelected={image === selectedImage}
                key={image}
                onClick={() => handleImageClick(image)}
              >
                <SmallImage src={image} />
              </SmallImageContainer>
            ))}
          </SmallImagesContainer>
        </ContainerImg>
        <InfoContainer>
          <Title>Table Lamp</Title>
          <DateText>Posted on 10 January, 2023</DateText>
          <Desc>
            The elegant and sophisticated "Luminous Glow" Table Lamp – the perfect addition
            to elevate your home decor. Crafted with meticulous attention to detail, the "Luminous Glow"
            Table Lamp boasts a sleek and modern design that effortlessly complements various interior
            styles. The lamp's slender body, finished in brushed bronze, exudes a timeless charm, making
            it a versatile accent piece for any space.
          </Desc>
          <PriceContainer>
            <Price>LKR. 4300</Price>
          </PriceContainer>
          <ActionContainer>
            <ButtonContainer>
              <AddToCartButton>
                <ShoppingCart />
                <ButtonText>ADD TO CART</ButtonText>
              </AddToCartButton>
              <AmountContainer>
                <Remove onClick={handleDecrease}/>
                <Amount>{amount}</Amount>
                <Add onClick={handleIncrease}/>
              </AmountContainer>
            </ButtonContainer>
            <AddToPlanButton>
              <Favorite />
              <ButtonText>ADD TO PLAN</ButtonText>
            </AddToPlanButton>
          </ActionContainer>
        </InfoContainer>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Product;


