import {
  faEllipsisVertical,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import styled from "styled-components";

interface BalanceDescProps {
  color: string;
}

export default function Balance() {
  return (
    <BalanceContainer>
      <GraphHeader>
        <FontAwesomeIcon
          icon={faSquare}
          // fontSize={20}
          color="#2D53DA"
          style={{ float: "left" }}
        />
        <GraphHeaderDesc>Balances</GraphHeaderDesc>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          // width={8}
          color="#000000"
          style={{ position: "absolute", right: 0 }}
        />
      </GraphHeader>
      <GraphContentContainer>
        <BalanceSide1>
          <BalanceSmount>$537</BalanceSmount>
          <BalanceDesc color={"#18DD96"}>Available</BalanceDesc>
        </BalanceSide1>
        <BalanceSide2>
          <BalanceSmount>$234</BalanceSmount>
          <BalanceDesc color="#FF9696">Pending</BalanceDesc>
        </BalanceSide2>
      </GraphContentContainer>
      <ButtonContainer>
        <Button>Withdraw Money</Button>
      </ButtonContainer>
    </BalanceContainer>
  );
}

const BalanceContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding: 0.4rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 1.4rem;
  background-color: #ffffff;
`;
const GraphHeader = styled.div`
  flex: 0.2;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 0;
  gap: 0.4rem;
  width: 100%;
  height: 100%;
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

const GraphHeaderDesc = styled.h3`
  font-size: 1.1rem;
  font-weight: normal;
  float: left;
  margin: 0;
  color: #000000;
  overflow: hidden;
  @media (min-width: 280px) and (max-width: 300px) {
    font-size: 0.4rem;
  }
  @media (min-width: 430px) and (max-width: 550px) {
    font-size: 0.8rem;
  }
  @media (min-width: 300px) and (max-width: 430px) {
    font-size: 0.5rem;
  }
  @media (min-width: 280px) and (max-width: 300px) {
    font-size: 0.4rem;
  }
`;

const GraphContentContainer = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
`;

const BalanceSide1 = styled.div`
  flex: 0.5;
`;

const BalanceSide2 = styled.div`
  flex: 0.5;
`;

const BalanceSmount = styled.p`
  font-weight: bold;
  font-size: 1rem;
  @media (min-width: 280px) {
    font-size: 0.3rem;
  }
  @media (min-width: 301px) and (max-width: 489px) {
    font-size: 0.5rem;
  }
  @media (min-width: 434px) and (max-width: 600px) {
    font-size: 0.7rem;
  }
  @media (min-width: 600px) and (max-width: 900px) {
    font-size: 0.9rem;
  }
  @media (min-width: 900px) {
    font-size: 1rem;
  }
`;
const BalanceDesc = styled.p<BalanceDescProps>`
  font-size: 0.8rem;
  color: ${(props) => props.color ?? "#FF0000"};
  @media (min-width: 280px) and (max-width: 300px) {
    font-size: 0.2rem;
  }
  @media (min-width: 300px) and (max-width: 489px) {
    font-size: 0.3rem;
  }
  @media (min-width: 489px) and (max-width: 600px) {
    font-size: 0.4rem;
    color: blue;
  }
`;

const ButtonContainer = styled.div`
  flex: 0.2;
`;

const Button = styled.button`
  width: 90%;
  height: 2rem;
  color: #ffffff;
  background-color: #2d53da;
  border-radius: 0.5rem;
  border: none;
  font-size: 0.8rem;
  @media (min-width: 280px) and (max-width: 490px) {
    font-size: 0.4rem;
  }
  @media (min-width: 280px) and (max-width: 300px) {
    font-size: 0.35rem;
  }
`;
