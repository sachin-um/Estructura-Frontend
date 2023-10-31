import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';
import RemoveIcon from '@mui/icons-material/Remove';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import Footer from '../../components/Footer';
import TopAppBar from '../../components/TopAppBar';
import useCart from '../../hooks/cart/useCart';
import { useFetchRetailItems } from '../../hooks/retailItem/useFetchRetailItems';
import useCurrentUser from '../../hooks/users/useCurrentUser';
import API from '../../lib/API';
import { mobile } from '../../responsive';

const ShopCart = () => {
  const { fetchRetailItems, retailItems } = useFetchRetailItems();

  useEffect(() => {
    fetchRetailItems({});
  }, [fetchRetailItems]);

  const { addOrIncrementItem, items, removeItem } = useCart();

  const products = items.map((item) => {
    return {
      item: retailItems.find((i) => i.id === item.id),
      quantity: item.quantity,
    };
  });

  const increaseQuantity = (productId: number) => {
    addOrIncrementItem(productId, 1);
  };

  const decreaseQuantity = (productId: number) => {
    addOrIncrementItem(productId, -1);
  };

  const removeProduct = (productId: number) => {
    removeItem(productId);
  };

  const totalPrice = products.reduce((total, product) => {
    // Check if the item exists before accessing its 'price' property
    if (product.item) {
      return total + product.item.price * product.quantity;
    }

    return total;
  }, 0);

  const navigate = useNavigate();

  return (
    <Container>
      <TopAppBar />
      <Wrapper>
        <Title>
          <ShoppingCartIcon
            sx={{ fontSize: '32px', marginBottom: '-5px', marginRight: '10px' }}
          />
          YOUR CART
        </Title>
        <Top>
          <TopButton
            onClick={() => {
              navigate(-1);
            }}
          >
            CONTINUE SHOPPING
          </TopButton>

          {/* <TopButton onClick={saveProgress} type="filled">
            Save Progress
          </TopButton> */}
        </Top>
        <Bottom>
          <Info>
            <ScrollableProducts>
              {products.map((item) => (
                <div key={item.item?.id}>
                  <Product>
                    <ProductDetail>
                      <Image
                        src={`http://localhost:8080/files/retail-item-files/${item.item?.createdBy}/${item.item?.id}/${item.item?.mainImageName}`}
                      />
                      <Details>
                        <ProductName>
                          <b>Product:</b> {item.item?.name}
                        </ProductName>
                        <ProductId>
                          <b>Type:</b> {item.item?.retailItemType}
                        </ProductId>
                      </Details>
                    </ProductDetail>
                    <PriceDetail>
                      <ProductAmountBox>
                        <ProductAmountContainer>
                          <RemoveIcon
                            onClick={() =>
                              decreaseQuantity(item.item?.id ?? -1)
                            }
                          />
                          <ProductAmount>{item.quantity}</ProductAmount>
                          <AddIcon
                            onClick={() =>
                              increaseQuantity(item.item?.id ?? -1)
                            }
                          />
                        </ProductAmountContainer>
                      </ProductAmountBox>
                      <ProductPrice>LKR. {item.item?.price}</ProductPrice>
                    </PriceDetail>
                    <DeleteIcon
                      onClick={() => removeProduct(item.item?.id ?? -1)}
                      sx={{ marginRight: 2, marginTop: 4 }}
                    />
                  </Product>
                  <Hr />
                </div>
              ))}
            </ScrollableProducts>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>LKR. {totalPrice}</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Delivery</SummaryItemText>
              <SummaryItemPrice>LKR. 1000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Delivery Discount</SummaryItemText>
              <SummaryItemPrice>LKR. -1000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>LKR. {totalPrice}</SummaryItemPrice>
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

const ScrollableProducts = styled.div`
  max-height: 450px; /* Adjust the height as needed */
  overflow-y: scroll;
  margin-bottom: 50px;
`;

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

const TopButton = styled.button<{ type?: string }>`
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
  border-radius: 8px;
  border: 2px solid black;
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

const SummaryItem = styled.div<{ type?: string }>`
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
