import type { AnyAction, ThunkDispatch } from '@reduxjs/toolkit';
import type { FunctionComponent } from 'react';

import { Add, Favorite, Remove, ShoppingCart } from '@mui/icons-material';
import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import NotFound from '../../components/NoResults';
import TopAppBar from '../../components/TopAppBar';
import Newsletter from '../../components/e-com/Blog';
import Loading from '../../pages/loading';
import {
  fetchRetailItemById,
  getRetailItemError,
  getRetailItemStatus,
  selectRetailItem,
} from '../../redux/RetailItems/SingleRetailItemReducer';
import {
  fetchUserById,
  getUser,
  getUserStatus,
} from '../../redux/UserInfo/SingleUserInfoReducer';
import { mobile } from '../../responsive';

const ShopItem: FunctionComponent = () => {
  const itemId = parseInt(useParams<{ id: string }>().id ?? '0');
  console.log(itemId);
  const dispatch: ThunkDispatch<RetailItem, void, AnyAction> = useDispatch();
  const dispatchUser: ThunkDispatch<User, void, AnyAction> = useDispatch();

  const item = useSelector(selectRetailItem);
  const itemStatus = useSelector(getRetailItemStatus);
  const itemError = useSelector(getRetailItemError);
  const [selectedImage, setSelectedImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [userId, setUserId] = useState(0);
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    if (itemStatus === 'idle') {
      dispatch(fetchRetailItemById(itemId));
    }
    if (item) {
      setSelectedImage(
        `http://localhost:8080/files/retail-item-files/${item?.createdBy}/${item?.id}/${item?.mainImageName}`,
      );
      setImageUrl(
        `http://localhost:8080/files/retail-item-files/${item?.createdBy}/${item?.id}/`,
      );
      setUserId(item.createdBy);
    }
  }, [dispatch, item, itemId, itemStatus]);

  useEffect(() => {
    if (!loaded) {
      dispatch(fetchRetailItemById(itemId));
      setLoaded(true);
    }
  }, [dispatch, itemId, loaded]);

  const userinfo = useSelector(getUser);
  const userStatus = useSelector(getUserStatus);

  useEffect(() => {
    if (userStatus === 'idle' && userId) {
      dispatchUser(fetchUserById(userId));
    }
  }, [userStatus, dispatchUser, userinfo, userId]);

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
      {itemError ? (
        <h1>ERROR: {itemError}</h1>
      ) : itemStatus === 'loading' ? (
        <Loading />
      ) : item ? (
        <Wrapper>
          <ContainerImg>
            <BigImageContainer>
              {item.mainImage ? <BigImage src={selectedImage} /> : <></>}
            </BigImageContainer>
            <SmallImagesContainer>
              {item.mainImage ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.mainImageName) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + item.mainImageName)
                  }
                >
                  <SmallImage src={imageUrl + item.mainImageName} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {item.extraImage1 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage1Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + item.extraImage1Name)
                  }
                >
                  <SmallImage src={imageUrl + item.extraImage1Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {item.extraImage2 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage2Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + item.extraImage2Name)
                  }
                >
                  <SmallImage src={imageUrl + item.extraImage2Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {item.extraImage3 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage3Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + item.extraImage3Name)
                  }
                >
                  <SmallImage src={imageUrl + item.extraImage3Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
            </SmallImagesContainer>
          </ContainerImg>
          <InfoContainer>
            <Title>{item.name}</Title>
            <DateText>{}</DateText>
            <Desc>{item.description}</Desc>
            <PriceContainer>
              <Price>LKR. {item.price.toFixed(2)}</Price>
            </PriceContainer>
            {userinfo?.role === 'CUSTOMER' && (
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
              <Contact>{userinfo?.businessName}</Contact>
            </ContactContainer>

            <ContactContainer>
              <CallIcon></CallIcon>
              <ContactNo>{userinfo?.businessContactNo}</ContactNo>
            </ContactContainer>

            <ContactContainer>
              <LocationOnIcon></LocationOnIcon>
              <Contact>
                {userinfo?.addressLine1}, {userinfo?.addressLine2},{' '}
                {userinfo?.district}.
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
