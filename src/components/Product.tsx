import { faChevronRight, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

interface ProductProps {
  productTitle: string;
  productDesc: string;
  productImage: string;
}

export default function Product({
  productTitle,
  productDesc,
  productImage,
}: ProductProps) {
  return (
    <ProductContainer>
      <ProductIcon>
        <ImageContainer>
          <Imgae src={productImage} />
        </ImageContainer>
      </ProductIcon>
      <ProdDesc>
        <ProdDescTitle>{productTitle}</ProdDescTitle>
        <ProdDescContent>{productDesc}</ProdDescContent>
      </ProdDesc>
      <ProdMore>
        <FontAwesomeIcon
          icon={faChevronRight}
          // fontSize={15}
          color="#000000"
          style={{
            textAlign: "center",
            margin: "auto",
            transform: "translate(0, 50%)",
          }}
        />
      </ProdMore>
    </ProductContainer>
  );
}

const ProductContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  box-sizing: border-box;
  padding: 0.2rem;
`;

const ImageContainer = styled.div`
  width: 100%;
  display: block;
  height: 100%;
`;
const Imgae = styled.img`
  width: 100%;
`;

const ProductIcon = styled.div`
  flex: 0.2;
`;
const ProdDesc = styled.div`
  flex: 0.8;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const ProdDescTitle = styled.h3`
  flex: 0.2;
  font-size: 0.8rem;
  margin: 0;
  padding: 0;
  text-align: left;
  @media (max-width: 595px) {
    font-size: 0.6rem;
  }
  @media (min-width: 280px) and (max-width: 300px) {
    font-size: 0.5rem;
  }
`;

const ProdDescContent = styled.p`
  flex: 0.6;
  font-size: 0.7rem;
  padding: 0;
  margin: 0;
  text-align: left;
  margin-top: 0.4rem;
  @media (max-width: 595px) {
    font-size: 0.6rem;
  }
  @media (min-width: 280px) and (max-width: 300px) {
    font-size: 0.4rem;
  }
`;

const ProdMore = styled.div`
  flex: 0.2;
  @media (max-width: 595px) {
    font-size: 0.5rem;
  }
  @media (min-width: 280px) and (max-width: 300px) {
    font-size: 0.4rem;
  }
`;
