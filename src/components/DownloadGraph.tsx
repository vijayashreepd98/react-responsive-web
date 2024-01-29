import { faSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Line } from "react-chartjs-2";
import styled from "styled-components";
import {
  Chart,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler,
} from "chart.js";
Chart.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Filler
);

export default function DownloadGraphContent() {
  return (
    <GraphItemContainer>
      <GraphHeader>
        <FontAwesomeIcon
          icon={faSquare}
          color="#2D53DA"
          style={{ float: "left" }}
        />
        <GraphHeaderDesc>Latest Download</GraphHeaderDesc>
      </GraphHeader>
      <GraphContentContainer>
        <Line
          options={{
            elements: {
              line: {
                tension: 0.4, // Adjust tension as needed
              },
            },
            maintainAspectRatio: false, // Allow the chart to adjust to its container size
          }}
          data={{
            // x-axis label values
            labels: [
              "0",
              "",
              "Mon",
              "",
              "Sun",
              "",
              "Tue",
              "",
              "Wed",
              "",
              "Thu",
              "",
              "Fri",
              "",
              "Sat",
            ],
            datasets: [
              {
                data: [
                  300, 300, 250, 310, 310, 180, 200, 200, 300, 300, 210, 210,
                  150, 250, 250,
                ],
                fill: "start",
                borderWidth: 2,
                backgroundColor: ({ chart: { ctx } }) => {
                  const gradient = ctx.createLinearGradient(0, 0, 0, 100);
                  gradient.addColorStop(0, "#C7F2FF");
                  gradient.addColorStop(1, "#FCFEFF");
                  return gradient;
                },
                borderColor: "#587BE3",
                pointRadius: 0,
                cubicInterpolationMode: "monotone",
              },
            ],
          }}
          style={{ width: "100%" }}
        />
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
`;
const GraphContentContainer = styled.div`
  flex: 0.8;
  width: 100%;
  height: 50%;
  padding: 0;
  box-sizing: border-box;
`;
