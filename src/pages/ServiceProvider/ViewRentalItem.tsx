import type { FunctionComponent } from 'react';

import CallIcon from '@mui/icons-material/Call';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StoreIcon from '@mui/icons-material/Store';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import NotFound from '../../components/NoResults';
import TopAppBar from '../../components/TopAppBar';
import { useRentingItem } from '../../hooks/rentingItem/useRentingItem';
import Loading from '../../pages/loading';
import { useUsers } from '../../redux/UserInfo/useUsers';
import { mobile } from '../../responsive';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

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
  margin-bottom: 20px;
`;

const Price = styled.span`
  font-weight: 200;
  font-size: 30px;
  color: #9d6432;
  margin-right: 10px;
`;
const Duration = styled.span`
  font-weight: 200;
  font-size: 30px;
  color: #9d6430;
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

const ContactContainer = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  margin-bottom: 10px;
  color: #000;
`;

const Contact = styled.span`
  font-weight: 400;
  font-size: 18px;
  color: #000;
  margin-right: 10px;
  margin-left: 10px;
`;

const ContactNo = styled.span`
  font-weight: 600;
  font-size: 18px;
  color: #000;
  margin-right: 10px;
  margin-left: 10px;
`;

const ButtonText = styled.span`
  flex: 1;
  text-align: center;
`;

const ViewRentalItem: FunctionComponent = () => {
  const itemId = parseInt(useParams<{ id: string }>().id ?? '0');

  const [selectedImage, setSelectedImage] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const {
    getRentingItem: { fetchRentingItem, isLoading, rentingItem },
  } = useRentingItem();

  useEffect(() => {
    fetchRentingItem(itemId);
  }, [fetchRentingItem, itemId]);

  useEffect(() => {
    if (rentingItem) {
      setSelectedImage(
        `http://localhost:8080/files/renting-item-files/${rentingItem?.createdBy}/${rentingItem?.id}/${rentingItem?.mainImageName}`,
      );
      setImageUrl(
        `http://localhost:8080/files/renting-item-files/${rentingItem?.createdBy}/${rentingItem?.id}/`,
      );
    }
  }, [rentingItem, itemId]);

  const handleImageClick = (image: string) => {
    setSelectedImage(image);
  };

  const { selectUserById } = useUsers();

  const userinfo = selectUserById(rentingItem?.createdBy ?? 0);

  return (
    <Container>
      <TopAppBar />
      {isLoading ? (
        <Loading />
      ) : rentingItem ? (
        <Wrapper>
          <ContainerImg>
            <BigImageContainer>
              {rentingItem.mainImage ? <BigImage src={selectedImage} /> : <></>}
            </BigImageContainer>
            <SmallImagesContainer>
              {rentingItem.mainImage ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.mainImageName) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + rentingItem.mainImageName)
                  }
                >
                  <SmallImage src={imageUrl + rentingItem.mainImageName} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {rentingItem.extraImage1 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage1Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + rentingItem.extraImage1Name)
                  }
                >
                  <SmallImage src={imageUrl + rentingItem.extraImage1Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {rentingItem.extraImage2 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage2Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + rentingItem.extraImage2Name)
                  }
                >
                  <SmallImage src={imageUrl + rentingItem.extraImage2Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
              {rentingItem.extraImage3 ? (
                <SmallImageContainer
                  // isSelected={ (imageUrl+ item.extraImage3Name) === selectedImage}
                  onClick={() =>
                    handleImageClick(imageUrl + rentingItem.extraImage3Name)
                  }
                >
                  <SmallImage src={imageUrl + rentingItem.extraImage3Name} />
                </SmallImageContainer>
              ) : (
                <></>
              )}
            </SmallImagesContainer>
          </ContainerImg>
          <InfoContainer>
            <Title>{rentingItem.name}</Title>
            <DateText>
              {new Date(rentingItem.dateAdded).toLocaleDateString('en-US')}
            </DateText>
            <Desc>{rentingItem.description}</Desc>
            <PriceContainer>
              <Price>LKR. {rentingItem.price.toFixed(2)}</Price>
              <Duration>{rentingItem.scale}</Duration>
            </PriceContainer>

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
                {userinfo?.addressLine1}, {userinfo?.addressLine2},
                {userinfo?.district}.
              </Contact>
            </ContactContainer>
          </InfoContainer>
        </Wrapper>
      ) : (
        <NotFound />
      )}

      <Footer />
    </Container>
  );
};

export default ViewRentalItem;
