import { faBell, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled from "styled-components";

export default function SearchBarComponent() {
  return (
    <SearchBarContainer>
      <SearchButtonContainer>
        <FontAwesomeIcon
          icon={faSearch}
          color="#000000"
          style={{ textAlign: "center" }}
        />
        <SearchItem placeholder="Search" />
      </SearchButtonContainer>
      <NotificationIcon>
        <IconContainer>
          <NotificationCountCircle>3</NotificationCountCircle>

          <FontAwesomeIcon
            icon={faBell}
            color="#000000"
            style={{ textAlign: "center", margin: "auto", border: "black" }}
          />
        </IconContainer>
      </NotificationIcon>
    </SearchBarContainer>
  );
}

const IconContainer = styled.div`
  position: relative;
  background-color: #ffffff;
  align-self: center;
  border-radius: 50%;
  padding: 0.5rem;
  font-size: 1.2rem;

  @media (min-width: 418px) and (max-width: 600px) {
    font-size: 0.8rem;
    gap: 0.4;
  }
  @media (min-width: 280px) and (max-width: 343px) {
    font-size: 0.4rem;
    padding: 0.1rem;
  }
`;
const NotificationCountCircle = styled.div`
  position: absolute;
  top: -12px;
  right: -5px;
  background-color: #2d53da;
  color: white;
  font-size: 8px;
  border-radius: 50%;
  padding: 3px;
  float: right;
  @media (max-width: 600px) {
    font-size: 6px;
    padding: 1px;
  }
`;
const SearchBarContainer = styled.div`
  width: 100%;
  height: 100%;
  background-color: #f1f4fc;
  display: grid;
  grid-template-columns: 0.9fr 0.1fr;
  grid-template-areas: "content icon ";
  gap: 1.4rem;
  @media (max-width: 600px) {
    grid-template-columns: 3fr 1fr;
    gap: 0.1rem;
  }
`;

const SearchItem = styled.input`
  width: 100%;
  height: 80%;
  float: right;
  border: none;
  border-top-right-radius: 0.5rem;
  border-bottom-right-radius: 0.5rem;

  @media (min-width: 418px) and (max-width: 600px) {
    font-size: 0.6rem;
    gap: 0.4;
  }
  @media (min-width: 280px) and (max-width: 343px) {
    font-size: 0.5rem;
  }
`;
const SearchButtonContainer = styled.div`
  height: 2rem;
  background-color: #ffffff;
  color: #ffffff;
  font-weight: bold;
  border-radius: 0.5rem;
  border: none;
  float: right;
  right: 0;
  display: flex;
  align-items: center; /* Center the content vertically */
  justify-content: flex-start;
  align-self: center;
  padding-left: 0.4rem;
  grid-area: content;

  @media (min-width: 418px) and (max-width: 600px) {
    font-size: 0.8rem;
    gap: 0.4;
  }
  @media (min-width: 280px) and (max-width: 343px) {
    font-size: 0.5rem;
  }
`;

const NotificationIcon = styled.div`
  background-color: #f1f4fc;
  display: flex;
  justify-content: center;
  grid-area: icon;
`;
