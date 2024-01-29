import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faEllipsisVertical,
  faSquare,
} from "@fortawesome/free-solid-svg-icons";

interface RangeDataProps {
  color: string;
}

interface GraphItemsProps {
  headerText: string;
  itemCount: string;
  itemData: string;
  rangeData: string;
  imageUrl: string;
  type: number;
}

export default function GraphItem({
  headerText,
  itemCount,
  itemData,
  rangeData,
  imageUrl,
  type,
}: GraphItemsProps) {
  return (
    <GraphItemContainer>
      <GraphHeader>
        <FontAwesomeIcon
          icon={faSquare}
          color="#2D53DA"
          style={{ float: "left" }}
        />
        <GraphHeaderDesc>{headerText}</GraphHeaderDesc>
        <FontAwesomeIcon
          icon={faEllipsisVertical}
          width={8}
          color="#000000"
          style={{ position: "absolute", right: 0 }}
        />
      </GraphHeader>
      <GraphContentContainer>
        <GraphContent>
          <ItemData>
            <SpanCount>{itemCount}</SpanCount> {itemData ?? ""}
          </ItemData>
          <RangeData color={type ? "#76DDC4" : "#D44E7D"}>
            {rangeData}
          </RangeData>
        </GraphContent>
        <GraphImage>
          <ImageContent src={imageUrl} />
        </GraphImage>
      </GraphContentContainer>
    </GraphItemContainer>
  );
}

const GraphItemContainer = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  padding: 0.4rem;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
`;

const GraphHeader = styled.div`
  flex: 0.4;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  padding: 0;
  gap: 0.4rem;
  width: 100%;
  height: 100%;
  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
`;
const GraphContentContainer = styled.div`
  flex: 0.6;
  display: flex;
  flex-direction: row;
  position: relative;
  width: 100%;
  height: 100%;
`;
const GraphContent = styled.div`
  flex: 0.5;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const GraphImage = styled.div`
  flex: 0.5;
  object-fit: cover;
  position: relative;
  width: 100%;
`;

const GraphHeaderDesc = styled.h3`
  font-size: 1.1rem;
  font-weight: normal;
  float: left;
  margin: 0;
  color: #000000;
  overflow: hidden;
  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
`;

const ImageContent = styled.img`
  width: 60%;
  display: block;
  align-self: flex-end;
  float: right;
`;
const ItemData = styled.p`
  font-size: 1rem;
  color: #867676;
  width: 100%;
  padding: 0;
  margin: 0;
  text-align: left;
  box-sizing: border-box;
  @media (max-width: 540px) {
    font-size: 0.8rem;
  }
`;
const SpanCount = styled.span`
  font-size: 1.5rem;
  font-weight: bold;
  color: #000000;
  padding: 0;
  margin: 0;
  @media (max-width: 540px) {
    font-size: 1rem;
  }
`;

const RangeData = styled.p<RangeDataProps>`
  font-size: 0.8rem;
  color: ${(props) => props.color ?? "#000000"};
`;
