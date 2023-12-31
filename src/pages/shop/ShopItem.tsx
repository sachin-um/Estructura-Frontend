import type { FunctionComponent } from 'react';

import { Add, Favorite, Remove, ShoppingCart } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import NotFound from '../../components/NoResults';
import TopAppBar from '../../components/TopAppBar';
import Newsletter from '../../components/e-com/Blog';
import { useRetailItem } from '../../hooks/retailItem/useRetailItem';
import useFetchUser from '../../hooks/users/useFetchUser';
import Loading from '../../pages/loading';
import { mobile } from '../../responsive';

const ShopItem: FunctionComponent = () => {
  const itemId = parseInt(useParams<{ id: string }>().id ?? '0');

  const {
    getRetailItem: { fetchRetailItem, isLoading, retailItem },
  } = useRetailItem();

  useEffect(() => {
    fetchRetailItem(itemId);
  }, [fetchRetailItem, itemId]);

  const [selectedImage, setSelectedImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const { fetchUserById, user } = useFetchUser();

  useEffect(() => {
    if (retailItem) {
      fetchUserById(retailItem.createdBy);
    }
  }, [retailItem, fetchUserById]);

  useEffect(() => {
    if (retailItem) {
      setSelectedImage(
        `http://localhost:8080/files/retail-item-files/${retailItem?.createdBy}/${retailItem?.id}/${retailItem?.mainImageName}`,
      );
      setImageUrl(
        `http://localhost:8080/files/retail-item-files/${retailItem?.createdBy}/${retailItem?.id}/`,
      );
    }
  }, [retailItem]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const [amount, setAmount] = useState(1);

  const handleIncrease = () => {
    setAmount((prevAmount) => prevAmount + 1);
  };

  const handleDecrease = () => {
    if (amount > 1) {
      setAmount((prevAmount) => prevAmount - 1);
    }
  };

  return (
    <Container>
      <TopAppBar />
      {isLoading ? (
        <Loading />
      ) : retailItem ? (
        <Wrapper>
          <ContainerImg>
            <BigImageContainer>
              {retailItem.mainImage ? <BigImage src={selectedImage} /> : <></>}
            </BigImageContainer>
            <SmallImagesContainer>
              {retailItem.mainImage ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.mainImageName) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + retailItem.mainImageName)
                  }
                >
                  <SmallImage src={imageUrl + retailItem.mainImageName} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {retailItem.extraImage1 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage1Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + retailItem.extraImage1Name)
                  }
                >
                  <SmallImage src={imageUrl + retailItem.extraImage1Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {retailItem.extraImage2 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage2Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + retailItem.extraImage2Name)
                  }
                >
                  <SmallImage src={imageUrl + retailItem.extraImage2Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {retailItem.extraImage3 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage3Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + retailItem.extraImage3Name)
                  }
                >
                  <SmallImage src={imageUrl + retailItem.extraImage3Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
            </SmallImagesContainer>
          </ContainerImg>
          <InfoContainer>
            <Title>{retailItem.name}</Title>
            <DateText>{}</DateText>
            <Desc>{retailItem.description}</Desc>
            <PriceContainer>
              <Price>LKR. {retailItem.price.toFixed(2)}</Price>
            </PriceContainer>
            {user?.role === 'CUSTOMER' && (
              <ActionContainer>
                <ButtonContainer>
                  <AddToCartButton>
                    <ShoppingCart />
                    <ButtonText>ADD TO CART</ButtonText>
                  </AddToCartButton>
                  <AmountContainer>
                    <Remove onClick={handleDecrease} />
                    <Amount>{amount}</Amount>
                    <Add onClick={handleIncrease} />
                  </AmountContainer>
                </ButtonContainer>
                <AddToPlanButton>
                  <Favorite />
                  <ButtonText>ADD TO PLAN</ButtonText>
                </AddToPlanButton>
              </ActionContainer>
            )}

            <ContactContainer>
              <StoreIcon></StoreIcon>
              <Contact>{user?.businessName}</Contact>
            </ContactContainer>

            <ContactContainer>
              <CallIcon></CallIcon>
              <ContactNo>{user?.businessContactNo}</ContactNo>
            </ContactContainer>

            <ContactContainer>
              <LocationOnIcon></LocationOnIcon>
              <Contact>
                {user?.addressLine1}, {user?.addressLine2}, {user?.district}.
              </Contact>
            </ContactContainer>
          </InfoContainer>
        </Wrapper>
      ) : (
        <NotFound />
      )}

      <Newsletter />
      <Footer />
    </Container>
  );
};

export default ShopItem;

const Container = styled.div``;

const ContainerImg = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
`;

const BigImageContainer = styled.div`
  width: 400px;
  height: 300px;
  display: flex;
  justify-content: center;
  align-items: center;
  display: flex;
  border: 2px solid black;
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
  width: 100px;
  height: 100px;
  object-fit: cover;

  margin: 0 10px;
  cursor: pointer;
`;
// border: ${(props) => (props.isSelected ? '2px solid teal' : 'none')};

const SmallImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Wrapper = styled.div`
  padding: 50px;
  display: flex;
  ${mobile({ flexDirection: 'column', padding: '10px' })}
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
  font-weight: 200;
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

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  margin-top: 20px;
`;

const Contact = styled.span`
  font-weight: 300;
  font-size: 18px;
  color: #000;
  margin-right: 10px;
  margin-left: 10px;
`;

const ContactNo = styled.span`
  font-weight: 500;
  font-size: 18px;
  color: #000;
  margin-right: 10px;
  margin-left: 10px;
`;
