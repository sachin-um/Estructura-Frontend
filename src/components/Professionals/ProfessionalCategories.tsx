import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { mobile } from '../../responsive';
const Container = styled.div``;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 10px;
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
  width: 300px;
  height: 300px;
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

const ButtonText = styled.span`
  flex: 1;
  text-align: center;
`;

const ProfessionalCategories = ({ data }: { data: Professional[] }) => {
  const navigate = useNavigate();
  return (
    <Container>
      <CardGrid>
        {data.map((card) => (
          <Card key={card.id}>
            <CardImage
              onClick={() => {
                navigate(`/shop/item/${card.id}`);
              }}
              alt={`Card ${card.id}`}
              src={`http://localhost:8080/files/profile-images/${card.id}/${card.ProfileImageName}`}
            />
            <CardWrapper>
              <CardText>
                {card.firstname} {card.lastname}
              </CardText>
              <CardPrice>
                {card.city} , {card.district}
              </CardPrice>
            </CardWrapper>
          </Card>
        ))}
      </CardGrid>
    </Container>
  );
};

export default ProfessionalCategories;
