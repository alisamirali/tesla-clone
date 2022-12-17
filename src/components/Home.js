import React from "react";
import styled from "styled-components";

import Section from "./Section";

const Home = () => {
  return (
    <Container>
      <Section
        title="Model S"
        desc="Order Online For Touchiness Delivery"
        backgroundImg="model-s.jpg"
        leftBtnText="Buy Now"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model Y"
        desc="Order Online For Touchiness Delivery"
        backgroundImg="model-y.jpg"
        leftBtnText="Buy Now"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model 3"
        desc="Order Online For Touchiness Delivery"
        backgroundImg="model-3.jpg"
        leftBtnText="Buy Now"
        rightBtnText="Custom Order"
      />
      <Section
        title="Model X"
        desc="Order Online For Touchiness Delivery"
        backgroundImg="model-x.jpg"
        leftBtnText="Buy Now"
        rightBtnText="Custom Order"
      />
      <Section
        title="Lowest Cost Solar Panels in America"
        desc="Money-Back Guarantee"
        backgroundImg="solar-panel.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Solar For New Roofs"
        desc="Solar Roof Costs Less Than A New Roof Plus Solar Panels"
        backgroundImg="solar-roof.jpg"
        leftBtnText="Order Now"
        rightBtnText="Learn More"
      />
      <Section
        title="Accessories"
        desc=""
        backgroundImg="accessories.jpg"
        leftBtnText="Shop Now"
      />
    </Container>
  );
};

const Container = styled.div`
  height: 100vh;
  z-index: 1;
`;

export default Home;
