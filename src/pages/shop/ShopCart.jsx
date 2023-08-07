import { Add, Remove, ShoppingCart } from '@mui/icons-material';
import { useState } from 'react';
import styled from 'styled-components';
import Footer from '../../components/Footer';
import TopAppBar from '../../components/TopAppBar';
import { mobile } from '../../responsive';

const ShopCart = () => {
  // TODO: Make it work with backend

  const [products, setProducts] = useState([
    { id: 1, quantity: 2 },
    { id: 2, quantity: 2 },
  ]);

  const increaseQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId
          ? { ...product, quantity: product.quantity + 1 }
          : product,
      ),
    );
  };

  const decreaseQuantity = (productId) => {
    setProducts((prevProducts) =>
      prevProducts.map((product) =>
        product.id === productId && product.quantity > 1
          ? { ...product, quantity: product.quantity - 1 }
          : product,
      ),
    );
  };

  return (
    <Container>
      <TopAppBar />
      <Wrapper>
        <Title>
          <ShoppingCart
            sx={{ fontSize: '32px', marginRight: '10px', marginBottom: '-5px' }}
          />
          YOUR CART
        </Title>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>

          <TopButton type="filled">CHECKOUT NOW</TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://m.media-amazon.com/images/I/81kxw825MsL.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> MODERN LOVESEAT SOFA
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountBox>
                  <ProductAmountContainer>
                    <Remove onClick={() => decreaseQuantity(1)} />
                    <ProductAmount>
                      {products.find((product) => product.id === 1)?.quantity ||
                        0}
                    </ProductAmount>
                    <Add onClick={() => increaseQuantity(1)} />
                  </ProductAmountContainer>
                </ProductAmountBox>
                <ProductPrice>LKR. 25,000</ProductPrice>
              </PriceDetail>
            </Product>
            <Hr />
            <Product>
              <ProductDetail>
                <Image src="https://foter.com/photos/424/traditional-round-marble-dining-table-for-4.jpeg" />
                <Details>
                  <ProductName>
                    <b>Product:</b> ROUND MARBLE DINING TABLE SET
                  </ProductName>
                  <ProductId>
                    <b>ID:</b> 93813718293
                  </ProductId>
                </Details>
              </ProductDetail>
              <PriceDetail>
                <ProductAmountBox>
                  <ProductAmountContainer>
                    <Remove onClick={() => decreaseQuantity(2)} />
                    <ProductAmount>
                      {products.find((product) => product.id === 2)?.quantity ||
                        0}
                    </ProductAmount>
                    <Add onClick={() => increaseQuantity(2)} />
                  </ProductAmountContainer>
                </ProductAmountBox>
                <ProductPrice>LKR. 18,000</ProductPrice>
              </PriceDetail>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>LKR. 43,000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>LKR. 1000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>LKR. -1000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>LKR. 43,000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Footer />
    </Container>
  );
};

export default ShopCart;

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: '10px' })}
`;

const Title = styled.h1`
  font-weight: 300;
  text-align: center;
  color: #435834;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
  padding: 10px;
  font-weight: 600;
  cursor: pointer;
  border: ${(props) => props.type === 'filled' && 'none'};
  background-color: ${(props) =>
    props.type === 'filled' ? '#304422' : 'transparent'};
  color: ${(props) => props.type === 'filled' && 'white'};
`;

const TopTexts = styled.div`
  ${mobile({ display: 'none' })}
`;
const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: 'column' })}
`;

const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;

const ProductAmountBox = styled.div`
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 5px;
  width: 150px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Image = styled.img`
  width: 250px;
  height: 250px;
  object-fit: cover;
`;

const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span`
  color: #435834;
  margin-bottom: -140px;
  font-size: 18px;
`;

const ProductId = styled.span`
  color: grey;
  font-size: 15px;
`;

const PriceDetail = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ProductAmountContainer = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

const ProductAmount = styled.div`
  font-size: 24px;
  margin: 5px;
  color: #435834;
  ${mobile({ margin: '5px 15px' })}
`;

const ProductPrice = styled.div`
  font-size: 28px;
  font-weight: 200;
  color: #9d6432;
  margin-top: 20px;
  ${mobile({ marginBottom: '20px' })}
`;

const Hr = styled.hr`
  background-color: #eee;
  border: none;
  height: 1px;
`;

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
  font-weight: 200;
  color: #435834;
`;

const SummaryItem = styled.div`
  margin: 30px 0px;
  display: flex;
  justify-content: space-between;
  font-weight: ${(props) => props.type === 'total' && '500'};
  font-size: ${(props) => props.type === 'total' && '24px'};
`;

const SummaryItemText = styled.span`
  color: #435834;
`;

const SummaryItemPrice = styled.span`
  color: #9d6432;
`;

const Button = styled.button`
  width: 100%;
  padding: 10px;
  background-color: #304422;
  color: white;
  font-weight: 600;
  cursor: pointer;
`;
