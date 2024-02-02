import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpFromBracket } from "@fortawesome/free-solid-svg-icons";
import styled from "styled-components";
import SideBar from "../components/SideBar";
import GraphItem from "../components/GraphItem";
import DownloadGraphContent from "../components/DownloadGraph";
import ProductBar from "../components/ProductBar";

export default function Home() {
  const GraphData = [
    {
      headerText: "Total Product",
      itemCount: "1,134",
      itemData: "Items",
      rangeData: "+10% this week",
      imageUrl: "greenLine.png",
    },
  ];

  const earningData = [
    {
      headerText: "Total Earnings",
      itemCount: "$4,231",
      itemData: "",
      rangeData: "-22% this week",
      imageUrl: "redLine.png",
    },
  ];

  return (
    <HomeContainer>
      <SideBarContainer>
        <SideBar />
      </SideBarContainer>
      <MiddleContainer>
        <HeaderContainer>
          <Header>
            <HeaderTitle>
              Welcome Back ,<Description>Lucy Lure 78999</Description>
            </HeaderTitle>
          </Header>
          <ButtonContainner>
            <Button>
              <FontAwesomeIcon
                icon={faArrowUpFromBracket}
                width={15}
                color="white"
                style={{ marginRight: "0.2rem" }}
              />
              Upload Product
            </Button>
          </ButtonContainner>
        </HeaderContainer>

        <Content>
          <ContentContainer>
            <ContentHeader>
              Want Some <strong>EXTRA</strong> Money?
            </ContentHeader>
            <ContentDesc>
              Refer a friend and earn 10% commision on every referral
            </ContentDesc>
            <ReferralButton>Referral Program</ReferralButton>
          </ContentContainer>
          <ContentImageContainer></ContentImageContainer>
        </Content>
        <ProductGrapgh>
          {GraphData.map((data) => {
            return (
              <GraphItem
                headerText={data.headerText}
                itemCount={data.itemCount}
                itemData={data.itemData}
                rangeData={data.rangeData}
                imageUrl={data.imageUrl}
                type={1}
              />
            );
          })}
        </ProductGrapgh>
        <PriceGraph>
          {earningData.map((data) => {
            return (
              <GraphItem
                headerText={data.headerText}
                itemCount={data.itemCount}
                itemData={data.itemData}
                rangeData={data.rangeData}
                imageUrl={data.imageUrl}
                type={0}
              />
            );
          })}
        </PriceGraph>
        <DownloadGraph>
          <DownloadGraphContent />
        </DownloadGraph>
      </MiddleContainer>
      <Side2>
        <ProductBar />
      </Side2>
    </HomeContainer>
  );
}

const HomeContainer = styled.div`
  display: grid;
  height: 100vh;
  width: 100%;
  background-color: #f3f6fe;
  grid-template-columns: 0.17fr 0.63fr 0.2fr;
  grid-template-areas: "sidebar main side2 ";
  text-align: center;
  grid-gap: 0.6rem;
  padding: 0.6rem;
  box-sizing: border-box;
  overflow: hidden;
`;

const SideBarContainer = styled.div`
  grid-area: sidebar;
  border-radius: 1.4rem;
`;
const HeaderContainer = styled.div`
  background-color: #ffffff;
  grid-area: header;
  display: flex;
  flex-direheaderction: row;
  justify-content: flex-start;
  max-width: 100%;
`;

const Side2 = styled.div`
  grid-area: side2;
`;

const Content = styled.div`
  background-color: #1dcef5;
  grid-area: content;
  border-radius: 1.4rem;
  display: flex;
  flex-direction: row;
  box-sizing: border-box;
  max-width: 100%;
`;

const ContentContainer = styled.div`
  flex: 0.4;
  border-top-left-radius: 1.4rem;
  border-bottom-left-radius: 1.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
  margin: auto;
  padding-left: 2rem;
  padding-right: 2rem;
  gap: 0;
`;

const ContentHeader = styled.h3`
  color: #f1fcfe;
  font-weight: normal;
  font-size: 1.5rem;
  text-align: left;
  padding: 0;
  align-self: flex-start;
  margin: 0;
  @media (max-width: 811px) {
    font-size: 1.3rem;
  }
  @media (max-width: 714px) {
    font-size: 0.9rem;
  }
  @media (max-width: 430px) {
    font-size: 0.8rem;
  }
`;

const ContentDesc = styled.p`
  font-size: 1.1rem;
  color: #f1fcfe;
  text-align: left;
  margin: 0rem;
  width: 80%;
  @media (max-width: 714px) {
    font-size: 0.8rem;
  }
  @media (max-width: 430px) {
    font-size: 0.6rem;
  }
`;
const ReferralButton = styled.button`
  width: 80%;
  padding: 0.2rem;
  color: #617ee3;
  font-weight: bold;
  background-color: #ffffff;
  border-radius: 0.6rem;
  padding: 0.2rem;
  min-height: 2rem;
  margin-bottom: 0.5rem;
  border: none;
  text-shadow: 0px 1px 0px #617ee3;
  @media (max-width: 531px) {
    font-size: 0.5rem;
    width: 100%;
    padding: 0.1rem;
  }

  @media (max-width: 456px) {
    font-size: 0.6rem;
    width: 100%;
    padding: 0.1rem;
  }
`;

const ContentImageContainer = styled.div`
  flex: 0.6;
  width: 100%;
  height: 100%;
  border-top-right-radius: 1.4rem;
  border-bottom-right-radius: 1.4rem;
  background-image: url("BlueLapContent.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const ProductGrapgh = styled.div`
  background-color: #ffffff;
  grid-area: pgraph;
  box-sizing: border-box;
  border-radius: 1.4rem;
  width: 100%;
  height: 100%;
  box-sizing: border-box;
  border-radius: 0.6rem;
`;

const PriceGraph = styled.div`
  background-color: #ffffff;
  box-sizing: border-box;
  grid-area: pricegraph;
  border-radius: 1.4rem;
`;

const DownloadGraph = styled.div`
  background-color: #ffffff;
  grid-area: dgraph;
  border-radius: 1.4rem;
`;
const MiddleContainer = styled.div`
  background-color: #f2f5fd;
  grid-area: main;
  display: grid;
  grid-template-rows: 0.15fr 0.3fr 0.25fr 0.3fr;
  grid-template-areas:
    "header header"
    "content content"
    "pgraph pricegraph"
    "dgraph dgraph";
  gap: 0.6rem;
`;

const HeaderTitle = styled.h3`
  color: block;
  font-weight: normal;
  font-size: 1rem;
  margin: 0rem;
  padding: 0;
  text-align: left;
  // @media (min-width: 1300px) {
  //   font-size: 1.4rem;
  // };
  // @media (max-width: 840px) {
  //   font-size: 1.2rem;
  // };
  // @media (max-width: 700px) {
  //   font-size: 0.8rem;
  // };
`;

const ButtonContainner = styled.div`
  flex: 0.4;
  align-self: center;
`;

const Button = styled.button`
  height: 2rem;
  padding: 0.2rem;
  max-width: 100%;
  min-width: 80%;
  background-color: #2d53da;
  color: #ffffff;
  font-weight: bold;
  border-radius: 0.5rem;
  border: none;
  float: right;
  right: 0;
  box-shadow: 0px 6px 6px #cadfef;
  // @media (min-width: 1300px) {
  //   font-size: 1.1rem;
  //   height: 2.5rem;
  // };
  // @media (max-width: 600px) {
  //   font-size: 0.6rem;
  // };
  // @media (max-width: 400px) {
  //   font-size: 0.5rem;
  //   text-align: center;
  //   min-width: 90%;
  // };
`;
const Description = styled.h1`
  font-weight: bold;
  margin: 0rem;
  @media (min-width: 280px) and (max-width: 345px) {
    font-size: 1.5rem;
  }
`;
const Header = styled.header`
  flex: 0.6;
`;
