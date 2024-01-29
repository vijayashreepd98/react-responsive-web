import React from "react";
import styled from "styled-components";
import SearchBarComponent from "./SearchBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSquare } from "@fortawesome/free-solid-svg-icons";
import Product from "./Product";
import Balance from "./Balance";

export default function ProductBar() {
  const productList = [
    {
      productImage: "blueRing.webp",
      prodTitle: "Niky -icon 3D Pack",
      prodDesc: "3D Illustrations",
    },
    {
      productImage: "brownBall.png",
      prodTitle: "Lika - 3D Abstract",
      prodDesc: "3D Illustrations",
    },
    {
      productImage: "blueBall.png",
      prodTitle: "Cube 3D",
      prodDesc: "3D Illustrations",
    },
    {
      productImage: "heady.png",
      prodTitle: "Heady 3D  Head",
      prodDesc: "3D Illustrations",
    },
    {
      productImage: "smiley.png",
      prodTitle: "Astro Illustration",
      prodDesc: "3D Illustrations",
    },
    {
      productImage: "blueRing.webp",
      prodTitle: "Astro Illustration",
      prodDesc: "3D Illustrations",
    },
    {
      productImage: "blueRing.webp",
      prodTitle: "Astro Illustration",
      prodDesc: "3D Illustrations",
    },
  ];

  return (
    <ProductBarContainer>
      <SearchBar>
        <SearchBarComponent />
      </SearchBar>
      <ProductList>
        <ProductListHeader>
          <FontAwesomeIcon
            icon={faSquare}
            color="#2D53DA"
            style={{ float: "left", marginRight: "0.3rem" }}
          />
          <GraphHeaderDesc>Top Products</GraphHeaderDesc>
        </ProductListHeader>
        <ProductListContent>
          {productList.map((item) => {
            return (
              <Product
                productTitle={item.prodTitle}
                productDesc={item.prodDesc}
                productImage={item.productImage}
              />
            );
          })}
        </ProductListContent>
      </ProductList>
      <BalanceContainer>
        <Balance />
      </BalanceContainer>
    </ProductBarContainer>
  );
}

const GraphHeaderDesc = styled.h3`
  font-size: 1rem;
  font-weight: normal;
  float: left;
  margin: 0;
  color: #000000;
  overflow: hidden;
  @media (max-width: 588px) {
    font-size: 0.8rem;
  }
`;

const ProductBarContainer = styled.div`
  background-color: #f2f5fd;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-rows: 0.15fr 0.55fr 0.3fr;
  grid-template-areas:
    "header"
    "product"
    "balance";
  row-gap: 0.6rem;
  border-top-left-radius: 1.4rem;
  border-top-right-radius: 1.4rem;
`;

const SearchBar = styled.div`
  grid-area: header;
`;

const ProductList = styled.div`
  grid-area: product;
  display: flex;
  flex-direction: column;
  padding: 0.5rem;
  width: 100%;
  height: 100%;
  overflow: hidden;
  box-sizing: border-box;
  border-radius: 1.4rem;
  background-color: #ffffff;
`;

const BalanceContainer = styled.div`
  grid-area: balance;
  border-radius: 1.4rem;
`;

const ProductListHeader = styled.div`
  flex: 0.05;
  font-size: 1.5rem;
  @media (min-width: 280px) {
    font-size: 0.5rem;
    gap: 0.1rem;
  }
  @media (min-width: 418px) {
    font-size: 0.8rem;
    gap: 0.4;
  }
  @media (min-width: 280px) and (max-width: 300px) {
    font-size: 0.5rem;
  }
`;

const ProductListContent = styled.div`
  flex: 0.95;
  list-style-type: none;
  display: flex;
  margin-top: 0.4rem;
  width: 100%;
  height: 100%;
  overflow-y: scroll;
  &::-webkit-scrollbar {
    width: 0; /* WebKit browsers */
  }
  flex-direction: column;
  box-sizing: border-box;
  justify-content: space-between;
`;
