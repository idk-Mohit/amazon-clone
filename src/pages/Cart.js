import styled from "styled-components";
import { Skeleton } from "@mui/material";
import { useSelector } from "react-redux";
import React, { useEffect, useRef, useState } from "react";
import {
  CartHolder,
  NoProduct,
  CartProductCard,
  SubTotal,
  SubTotalAmount,
} from "../components";
import { FetchedProduct } from "../Store";

const Cart = () => {
  const Auth = useSelector((state) => state.Auth);
  const Cart = useSelector((state) => state.Cart);
  const [priceToPay, setPriceToPay] = useState(0);
  const [ProductList, setProductList] = useState([]);
  var loadingRef = useRef();

  useEffect(() => {
    function setCart() {
      loadingRef.current = true;
      setProductList([]);
      Cart?.items.forEach(async (product) => {
        let ProductData = await FetchedProduct(product.id);
        if (ProductData?.name !== "") {
          setProductList((prev) => [
            ...prev,
            {
              name: ProductData?.name,
              image: ProductData?.image,
              price: ProductData?.price,
              id: product?.id,
              category: product?.category,
              quantity: product?.quantity,
            },
          ]);
        }
      });
    }
    setCart();
  }, [Cart]);
  useEffect(() => {
    var PricePayable = 0;
    ProductList?.forEach((product) => {
      PricePayable += product.price * product.quantity;
    });
    setPriceToPay(PricePayable);
  }, [ProductList]);
  const loadingList = Cart.items.map((item) => {
    return (
      <Loader key={item.id}>
        <Skeleton variant="rectangular" width={"90%"} height={170} />
        <div className="loadingDataDiv flex-column">
          <Skeleton variant="rectangular" width={"100%"} height={"20%"} />
          <Skeleton variant="rectangular" width={"50%"} height={"15%"} />
          <Skeleton variant="rectangular" width={"100%"} height={"40%"} />
        </div>
      </Loader>
    );
  });

  return (
    <>
      {!Auth.isLoggedIn ? (
        <CartHolder />
      ) : (
        <Container className="main-container">
          <div className="flex-column">
            {Cart.items.length < 1 ? (
              <NoProduct />
            ) : (
              <>
                <Products>
                  <h1>Shopping Cart</h1>
                  <span className="PriceHeader">Price</span>
                  {ProductList?.length === Cart?.items.length
                    ? (loadingRef.current = false)
                    : (loadingRef.current = true)}
                  {loadingRef.current
                    ? loadingList
                    : ProductList?.map((product, index) => {
                        let quantity = product.quantity;
                        return (
                          <CartProductCard
                            product={product}
                            key={index}
                            quantity={quantity}
                          />
                        );
                      })}
                  <SubTotalAmount
                    totalQty={Cart.totalQuantity}
                    price={priceToPay}
                    loading={loadingRef.current}
                  />
                </Products>
                <SubTotal
                  totalQty={Cart.totalQuantity}
                  price={priceToPay}
                  loading={loadingRef.current}
                />
              </>
            )}
          </div>
        </Container>
      )}
    </>
  );
};

export default Cart;

const Container = styled.section`
  background: #eaeded;
  padding: 1.5rem;
  display: grid;
  grid-template-columns: 75% auto;
  grid-gap: 1rem;

  @media (max-width: 900px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;
const Products = styled.div`
  background: white;
  padding: 2rem 1rem;
  border-radius: 1px;

  h1 {
    font-family: "Amazon-light";
    font-weight: 600;
    margin-bottom: 0.4rem;
  }
  p {
    font-weight: 100;
    font-size: 0.9rem;
  }
  .PriceHeader {
    display: flex;
    justify-content: flex-end;
    color: var(--gray);

    @media (max-width: 900px) {
      display: none;
    }
  }
  .TotalFooter {
    display: flex;
    justify-content: flex-end;
  }
`;
const Loader = styled.div`
  display: grid;
  grid-template-columns: auto 75%;
  grid-gap: 1rem;
  border: 1px solid rgba(200, 200, 200, 0.4);
  border-radius: 5px;
  margin-bottom: 1rem;
  padding: 1rem;

  .loadingDataDiv {
    justify-content: space-between;
    padding: 1rem 1rem 1rem 0;
  }
`;
