import React from "react";
import {
  Container,
  Group,
  Background,
  FeatureCallOut,
  PlayButton,
  Text,
  Feature,
  Bottom,
  MoreButton
} from "./style/banner";

export default function Banner({
  bg = true,
  movieHead,
  children,
   ...restProps
}) {
  return bg ? (
    <Background data-testid="header-bg" {...restProps}>
      {children}
    </Background>
  ) : (
    children
  );
}

Banner.Frame = function BannerFrame({ children, ...restProps }) {
  return <Container {...restProps}>{children}</Container>;
};

Banner.Group = function BannerGroup({ children, ...restProps }) {
    return <Group {...restProps}>{children}</Group>;
  };

  
Banner.Feature = function BannerFeature({ children, ...restProps }) {
  return <Feature {...restProps}>{children}</Feature>;
};


Banner.Bottom = function BannerBottom({ children, ...restProps }) {
  return <Bottom {...restProps}>{children}</Bottom>;
};


Banner.PlayButton = function BannerPlayButton({ children, ...restProps }) {
  return <PlayButton {...restProps}>{children}</PlayButton>;
};

Banner.MoreButton = function BannerMoreButton({ children, ...restProps }) {
  return <MoreButton {...restProps}>{children}</MoreButton>;
};

Banner.FeatureCallOut = function BannerFeatureCallOut({
  children,
  ...restProps
}) {
  return <FeatureCallOut {...restProps}>{children}</FeatureCallOut>;
};

Banner.Text = function BannerText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};

