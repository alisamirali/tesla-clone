import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = (props) => {
  return (
    <Wrap bgImage={props.backgroundImg}>
      <Fade bottom>
        <Text>
          <h1>{props.title}</h1>
          <p>{props.desc}</p>
        </Text>
      </Fade>

      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{props.leftBtnText}</LeftButton>
            {props.rightBtnText && (
              <RightButton>{props.rightBtnText}</RightButton>
            )}
          </ButtonGroup>
        </Fade>

        <DownArrow src="/images/down-arrow.svg" />
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  z-index: 10;
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.div`
  padding-top: 15vh;
  text-align: center;

  h1 {
    font-weight: 500;
    font-size: 2.5rem;
  }
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 1.5rem;
  margin-bottom: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.button`
  background-color: rgba(23, 26, 32, 0.8);
  color: #fff;
  height: 40px;
  width: 265px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;
  opacity: 0.85;
  text-transform: uppercase;
  border: none;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 1px;
`;

const RightButton = styled(LeftButton)`
  background-color: #fff;
  color: #393c41;
  opacity: 0.65;
`;

const DownArrow = styled.img`
  height: 40px;
  overflow: hidden;
  animation: animationDown infinite 1.5s;
`;

export default Section;
