import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

interface NavItemProps {
  itemName: string;
  itemImage?: any;
  setSelected: (value: number) => void;
  selected: Boolean;
  currentId: number;
}

export default function NavItem({
  itemName,
  itemImage = faArrowUpFromBracket,
  setSelected,
  selected,
  currentId,
}: NavItemProps) {
  return (
    <NavItemContainer
      onClick={() => setSelected(currentId)}
      buttonText={selected ? "blue" : "white"}
      backgroundColor={selected ? "white" : "transparent"}
    >
      <IconWrapper>
        <FontAwesomeIcon icon={itemImage} color={selected ? "blue" : "white"} />
      </IconWrapper>
      <NavText>{itemName}</NavText>
    </NavItemContainer>
  );
}

interface ItemContainerProps {
  buttonText: string;
  backgroundColor: string;
}

const NavItemContainer = styled.button<ItemContainerProps>`
  display: flex;
  align-items: center;
  max-width: 90%;
  min-width: 70%;
  height: 2rem;
  border-radius: 0.5rem;
  border: none;
  color: ${(props) => props.buttonText ?? "black"};
  align-self: center;
  margin: auto;
  margin-top: 0.4rem;
  font-weight: bold;
  text-shadow: 0px 1px 0px blue;
  background-color: ${(props) => props.backgroundColor ?? "red"};
  box-sizing: border-box;

  @media (max-width: 1000px) {
    max-width: 95%;
    min-width: 80%;
  }
  @media (max-width: 780px) {
    max-width: 100%;
    min-width: 90%;
  }
  @media (min-width: 280px) {
    height: 1.5rem;
    min-width: 95%;
  }
`;

const NavText = styled.p`
  font-size: 0.9rem;
  margin: 0;
  padding: 0;

  @media (max-width: 778px) {
    font-size: 0.6rem;
  }
  @media (max-width: 1150px) {
    font-size: 0.9rem;
  }
  @media (min-width: 280px) {
    font-size: 0.4rem;
  }
  @media (min-width: 423px) {
    font-size: 0.47rem;
    margin-left: 0.1rem;
    margin-right: 0.1rem;
  }
  @media (min-width: 496px) {
    font-size: 0.47rem;
    margin-left: 0.5rem;
    margin-right: 0.2rem;
  }
  @media (min-width: 574px) {
    font-size: 0.6rem;
  }
  @media (min-width: 711px) {
    font-size: 0.7rem;
  }
  @media (min-width: 859px) {
    font-size: 0.8rem;
  }
  @media (min-width: 994px) {
    margin-left: 0.9rem;
    margin-right: 0.1rem;
    font-size: 0.9rem;
  }
  @media (max-width: 280px) {
    margin-left: 0;
    font-size: 0.4rem;
  }
`;

const IconWrapper = styled.div`
  margin-right: 0.5rem;
  margin-left: 1.5rem;
  text-align: left;
  font-size: 1rem;

  @media (max-width: 1150px) {
    margin-left: 1rem;
  }
  @media (max-width: 1080px) {
    margin-left: 0.4rem;
  }
  @media (max-width: 1017px) {
    margin-left: 0.2rem;
  }
  @media (max-width: 975px) {
    margin-left: 0.05rem;
  }
  @media (min-width: 280px) {
    font-size: 0.3rem;
    margin-left: 0rem;
    margin-right: 0.05rem;
  }
  @media (min-width: 423px) {
    font-size: 0.5rem;
    margin-left: 0rem;
    margin-right: 0.02rem;
  }
  @media (min-width: 574px) {
    font-size: 0.6rem;
    margin-left: 0.45rem;
    margin-right: 0.1rem;
  }
  @media (min-width: 711px) {
    font-size: 0.7rem;
  }
  @media (min-width: 800px) {
    margin-left: 0.9rem;
    margin-right: 0.1rem;
  }
  @media (min-width: 859px) {
    margin-left: 0.9rem;
    margin-right: 0.1rem;
    font-size: 0.8rem;
  }
  @media (min-width: 994px) {
    margin-left: 1rem;
    margin-right: 0.1rem;
    font-size: 0.9rem;
  }
  @media (min-width: 1188px) {
    margin-left: 20%;
    margin-right: 0.1rem;
    font-size: 0.9rem;
  }
  @media (min-width: 1500px) {
    margin-left: 4.5vw;
    margin-right: 0.1rem;
    font-size: 0.9rem;
  }

  @media (min-width: 2500px) {
    margin-left: 6vw;
    margin-right: 0.1rem;
    font-size: 0.9rem;
  }

  @media (max-width: 280px) {
    margin-left: 0;
    margin-right: 0.02rem;
    font-size: 0.3rem;
  }
`;
