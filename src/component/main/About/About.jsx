import React from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "./tab.css";
import "./about.scss";
import styled from "styled-components";
import Card from "./Card/Card";
import {
  Img10,
  Img11,
  Img6,
  Img7,
  Img8,
  Img9,
} from "../../../assets/image/img";

const TabList1 = styled(TabList)`
  border: none;
  width: 664px;
  background: rgba(17, 19, 23, 0.5);
  border: 1px solid #4e4e4e;
  backdrop-filter: blur(2px);
  border-radius: 90px;
  display: flex;
  list-style: none;
`;
const Tab1 = styled(Tab)`
  padding: 16px 32px;
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 19px;
  color: #dadada;
`;
const TabPanel1 = styled(TabPanel)`
  width: 100%;
  display: flex;
  gap: 30px;
  align-items: center;
  justify-content: flex-start;
  flex-wrap: wrap;
`;
const Tabs1 = styled(Tabs)`
  display: flex;
  align-items: center;
  gap: 40px;
  flex-direction: column;
`;
export default function About() {
  return (
    <section className="about">
      <div className="container">
        <div className="about__box">
          <h1 className="about__title">Bajargan loyihalarimiz</h1>
          <Tabs1>
            <TabList1>
              <Tab1>Barchasi</Tab1>
              <Tab1>VebSayt</Tab1>
              <Tab1>VebDizayn</Tab1>
              <Tab1>SMM</Tab1>
              <Tab1>MobilIlova</Tab1>
            </TabList1>

            <TabPanel1>
              <Card img={Img6} />
              <Card img={Img7} />
              <Card img={Img8} />
              <Card img={Img9} />
              <Card img={Img10} />
              <Card img={Img11} />
              <Card img={Img6} />
              <Card img={Img7} />
              <Card img={Img8} />
            </TabPanel1>
            <TabPanel1>
              <Card img={Img7} />
              <Card img={Img8} />
            </TabPanel1>
            <TabPanel1>
              <Card img={Img8} />
              <Card img={Img9} />
              <Card img={Img10} />
              <Card img={Img11} />
            </TabPanel1>
            <TabPanel1>
              <Card img={Img8} />
              <Card img={Img9} />
              <Card img={Img10} />
              <Card img={Img11} />
              <Card img={Img6} />
              <Card img={Img7} />
              <Card img={Img8} />
            </TabPanel1>
            <TabPanel1>
              <Card img={Img6} />
            </TabPanel1>
          </Tabs1>
        </div>
      </div>
    </section>
  );
}
