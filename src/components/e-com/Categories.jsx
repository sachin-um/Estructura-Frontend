import styled from "styled-components";
import { ShoppingCart, Favorite } from "@mui/icons-material";
import { FaRegClock } from "react-icons/fa";
import { mobile } from "../../responsive";

const Container = styled.div``;

const CardGrid = styled.div `
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px;
`;

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Card = styled.div`
  border: 1px solid #ccc;
  border-radius: 8px;
  padding: 10px;
  display: flex;
  flex-direction: column;
  width: 320px;
  height: 400px;
  cursor: pointer;
`;

const CardImage = styled.img`
  width: 100%;
  height: 250px;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
`;

const CardText = styled.div`
  padding: 10px;
  font-size: 18px;
  font-weight: 500;
  color: black;
`;

const CardPrice = styled.div`
  font-size: 16px;
  font-weight: 600;
  color: #435834;
  margin-left: 10px;
  margin-top: -5px;
`;

const CardDate = styled.div`
  font-size: 14px;
  color: #888;
  align-self: flex-end;
  margin-top: auto;
  margin-right: 5px;
`;

const CardClockIcon = styled(FaRegClock)`
  margin-right: 5px;
  color: #888;
`;

const CardButtonsWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 10px;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`;

const AddToCartButton = styled.button`
  padding: 8px 13px;
  background-color: transparent;
  color: #9D6432;
  border: 1px solid #9D6432;
  border-radius: 4px;
  cursor: pointer;
  margin-left: 8px;
  display: flex;
  white-space: nowrap;
  justify-content: space-between;
  align-items: center;

  &:hover {
    background-color: #9D6432;
    color: white;
    border: 1px solid transparent;
  }
`;

const AddToFavoritesButton = styled.button`
  padding: 8px 13px;
  background-color: transparent;
  color: #9D6432;
  border: 1px solid #9D6432;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-between;
  align-items: center;
  white-space: nowrap;
  margin-left: 55px;


  &:hover {
    background-color: #9D6432;
    color: white;
    border: none;
  }
`;

const ButtonText = styled.span`
  flex: 1;
  text-align: center;
`;

const Categories = ({ data }) => {
  return (
    <Container>
      <CardGrid>
        {data.map((card) => (
          <Card key={card.id}>
            <CardImage src={card.imageSrc} alt={`Card ${card.id}`} />
            <CardWrapper>
              <CardText>{card.text}</CardText>
              <CardPrice>{card.price}</CardPrice>
              <CardButtonsWrapper>
                <ButtonContainer>
                  <AddToCartButton>
                    <ShoppingCart />
                    <ButtonText>Add to Cart</ButtonText>
                  </AddToCartButton>
                  <AddToFavoritesButton>
                    <Favorite />
                    <ButtonText>Add to Plan</ButtonText>
                  </AddToFavoritesButton>
                </ButtonContainer>
              </CardButtonsWrapper>
              <CardDate>
                <CardClockIcon />
                {card.date}
              </CardDate>
            </CardWrapper>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default Categories;