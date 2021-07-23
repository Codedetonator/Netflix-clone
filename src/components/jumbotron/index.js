import React from "react";
import {
  Inner,
  Container,
  Pane,
  Image,
  Title,
  Item,
  SubTitle
} from "./styles/jumbotron";
function Jumbotron({ children, direction = "row", ...restProps }) {
  return (
    <Item  {...restProps}>
      <Inner direction={direction}>{children}</Inner>
    </Item>
  );
}
export default Jumbotron;

Jumbotron.Container = function JumbotronContainer({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Jumbotron.Pane = function JumbotronPane({ children, ...restProps }) {
  return <Pane {...restProps}>{children}</Pane>;
};

Jumbotron.Title = function JumbotronPane({ children, ...restProps }) {
  return <Title {...restProps}>{children}</Title>;
};

Jumbotron.SubTitle = function JumbotronSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Jumbotron.Image = function JumbotronImage({ ...restProps }) {
  return <Image {...restProps} />;
};
