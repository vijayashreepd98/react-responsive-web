import React, { useState } from "react";
import styled from "styled-components";
import NavItem from "./NavItem";

export default function SideBar() {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const NavItemList = [
    {
      itemName: "Overview",
      itemImage: "",
    },
    {
      itemName: "Products",
      itemImage: "",
    },
    {
      itemName: "Campaigns",
      itemImage: "",
    },
    {
      itemName: "Schedules",
      itemImage: "",
    },
    {
      itemName: "Payouts",
      itemImage: "",
    },
    {
      itemName: "Statements",
      itemImage: "",
    },
    {
      itemName: "Settings",
      itemImage: "",
    },
    {
      itemName: "Settings",
      itemImage: "",
    },
    {
      itemName: "Settings",
      itemImage: "",
    },
  ];

  return (
    <SideBarConatiner>
      <SideBarTitle>
        <ImageContainer>
          <Image src="hexaShape.png" />
        </ImageContainer>
        <SideBarHeaderTitle>Neuro.</SideBarHeaderTitle>
      </SideBarTitle>
      <SideBarNavs>
        <SideBarNavHeaderContainer>
          <SideBarNavHeader>Admin Tools</SideBarNavHeader>
        </SideBarNavHeaderContainer>
        <SideBarNavContent>
          {NavItemList.map((navData, index) => {
            return (
              <NavItem
                itemName={navData.itemName}
                setSelected={(value) => {
                  setSelectedIndex(value);
                }}
                selected={index == selectedIndex}
                currentId={index}
              />
            );
          })}
        </SideBarNavContent>
      </SideBarNavs>
      <SideBarFooter>
        <ContactContainer>
          <ContactDetail>
            Have any problems with manage your dashboard?
            <br />
            Try to contact the customer support
          </ContactDetail>
          <ContactUsButton>Contact Us</ContactUsButton>
        </ContactContainer>
      </SideBarFooter>
    </SideBarConatiner>
  );
}

const SideBarTitle = styled.div`
  background-color: #2d53da;
  border-top-left-radius: 1.4rem;
  border-top-right-radius: 1.4rem;
  grid-area: title;
  display: flex;
  flex-direction: row;
  justify-content: center;
`;
const ImageContainer = styled.div`
  height: 3rem;
  margin: auto 0.2rem;
  @media (max-width: 560px) {
    height: 2rem;
  }
`;
const Image = styled.img`
  width: 100%;
  height: 100%;
  display: block;
`;

const SideBarNavs = styled.div`
  overflow: hidden;
  width: 100%;
  height: 100%;
  display: flex;
  gap: 0;
  flex-direction: column;
  grid-area: navs;
`;

const SideBarNavContent = styled.div`
  flex-direction: column;
  gap: 0.5rem;
  height: 100%;
  max-width: 100%;
  justify-content: center;
  display: inline-block;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0; /* WebKit browsers */
  }
  overflow-x: hidden;
`;

const SideBarConatiner = styled.div`
  background-color: #2d53da;
  width: 100%;
  height: 100%;
  border-radius: 1.4rem;
  overflow: auto;
  display: grid;
  grid-template-rows: 0.1fr 0.6fr 0.4fr;
  grid-template-areas: "title" "navs" "footer";
  @media (max-width: 558px) {
    grid-template-rows: 0.1fr 0.5fr 0.5fr;
  }

  @media (max-width: 408px) {
    grid-template-rows: 0.1fr 0.6fr 0.6fr;
  }
`;

const SideBarNavHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  max-width: 90%;
  min-width: 80%;
  border-radius: 0.5rem;
  height: 1rem;
  border: none;
  align-self: center;
  margin: auto;
  margin-top: 0.4rem;
  font-weight: normal;
  color: #ffffff;
`;

const SideBarNavHeader = styled.h5`
  text-align: left;
  margin-left: 2.5rem;
  font-size: 0.8rem;

  @media (max-width: 1092px) {
    margin-left: 2rem;
  }
  @media (max-width: 800px) {
    margin-left: 1.5rem;
  }

  @media (max-width: 700px) {
    margin-left: 0.8rem;
  }
  @media (max-width: 614px) {
    margin-left: 0.6rem;
    font-size: 0.6rem;
  }
  @media (max-width: 468px) {
    margin-left: 0.1rem;
    font-size: 0.6rem;
  }
  @media (max-width: 424px) {
    margin-left: 0rem;
    font-size: 0.5rem;
  }
  @media (max-width: 360px) {
    margin-left: 0rem;
    font-size: 0.4rem;
  }
`;

const SideBarFooter = styled.div`
  grid-area: footer;
  background-color: #2d53da;
  border-bottom-left-radius: 1.4rem;
  border-bottom-right-radius: 1.4rem;
  width: 100%;
  max-height: 100%;
  overflow: hidden;
`;
const SideBarHeaderTitle = styled.h2`
  font-size: 1rem;
  color: #ffffff;
  align-self: center;

  @media (max-width: 386px) {
    font-size: 0.5rem;
  }
  @media (max-width: 250px) {
    font-size: 0.3rem;
  }
  @media (min-width: 537px) {
    font-size: 1.3rem;
  }
  @media (min-width: 1010px) {
    font-size: 1.5rem;
  }
  @media (min-width: 1098px) {
    font-size: 1.8rem;
  }
`;

const ContactContainer = styled.div`
  min-width: 80%;
  max-width: 90%;
  height: 85%;
  background-color: #3e65f2;
  margin: auto;
  margin-top: 0.5rem;
  border-radius: 0.6rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  overflow: hidden;
`;
const ContactDetail = styled.p`
  font-size: 1.1rem;
  color: white;
  @media (max-width: 571px) {
    font-size: calc(0.6rem);
  }
  @media (max-width: 643px) {
    font-size: calc(0.8rem);
  }
  @media (min-width: 644px) {
    font-size: calc(0.9rem);
  }
  @media (min-width: 700px) {
    font-size: calc(1rem);
  }
  @media (min-width: 1078px) {
    font-size: calc(1rem);
  }

  @media (min-width: 1281px) {
    font-size: calc(1.2rem);
  }

  @media (max-width: 280px) {
    font-size: calc(0.6rem);
  }
  @media (max-width: 172px) {
    font-size: calc(0.6rem);
  }
`;

const ContactUsButton = styled.div`
  width: 80%;
  flex: 0.2;
  padding: 0.1rem;
  background-color: #1dcef5;
  color: #ffffff;
  align-self: center;
  margin-top: 0.3rem;
  margin-bottom: 0.5rem;
  border-radius: 0.3rem;

  @media (max-width: 571px) {
    font-size: calc(0.6rem);
  }
  @media (max-width: 643px) {
    font-size: calc(0.8rem);
  }
  @media (min-width: 280px) {
    font-size: calc(0.5rem);
    margin-bottom: 0.5rem;
  }
  @media (min-width: 644px) {
    font-size: calc(0.9rem);
  }
  @media (min-width: 700px) {
    font-size: calc(1rem);
    margin-bottom: 1.5rem;
  }
  @media (min-width: 1078px) {
    font-size: calc(1.1rem);
  }

  @media (min-width: 1281px) {
    font-size: calc(1.2rem);
    margin-bottom: 1.5rem;
  }

  @media (max-width: 280px) {
    font-size: calc(0.6rem);
  }
  @media (max-width: 172px) {
    font-size: calc(0.6rem);
  }
`;
