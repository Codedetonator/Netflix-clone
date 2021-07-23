import {useState,createContext, useContext } from 'react'
import {
    Container,
    Group,
    Feature,
    FeatureTitle,
    FeatureText,
    FeatureClose,
    Maturity,
    Content,
    Item,SubTitle,
    Text,Meta
  } from './style/details';
  
  export const FeatureContext = createContext();
  
  export default function Details({ children, ...restProps }) {
    const [showFeature, setShowFeature] = useState(false);
    const [itemFeature, setItemFeature] = useState({});
  
    return (
      <FeatureContext.Provider value={{ showFeature, setShowFeature, itemFeature, setItemFeature }}>
        <Container {...restProps}>{children}</Container>
      </FeatureContext.Provider>
    );
  }
  
  Details.Item = function DetailsItem({ item, children, ...restProps }) {
    const { setShowFeature, setItemFeature }= useContext(FeatureContext);
  
    return (
      <Item
        onClick={() => {
          setItemFeature(item);
          setShowFeature(true);
        }}
        {...restProps}
      >
        {children}
      </Item>
    );
  };

  
Details.SubTitle = function DetailsSubTitle({ children, ...restProps }) {
  return <SubTitle {...restProps}>{children}</SubTitle>;
};

Details.Text = function DetailsText({ children, ...restProps }) {
  return <Text {...restProps}>{children}</Text>;
};
  Details.Meta = function DetailsMeta({ children, ...restProps }) {
    return <Meta {...restProps}>{children}</Meta>;
  };

Details.Feature = function DetailsFeature({children, category, ...restProps }) {
    const { showFeature, itemFeature, setShowFeature } = useContext(FeatureContext);
    const truncate = (str, n) => {
      return str?.length > n ? str.substr(0, n - 1) + "." : str;
    };
  
    return showFeature ? (
        <Feature {...restProps} src={`https://image.tmdb.org/t/p/original/${itemFeature.backdrop_path}`}>
        <Content>
          <FeatureTitle>{itemFeature.title}</FeatureTitle>
          <FeatureText>{truncate(itemFeature.description, 250)}</FeatureText>
          <FeatureClose onClick={() => setShowFeature(false)}>
            <img src="/images/icons/close.png" alt="Close" />
          </FeatureClose>
          <Group margin="30px 0" flexDirection="row" alignItems="center">
            <Maturity rating={itemFeature.maturity}>{itemFeature.maturity < 12 ? 'PG' : itemFeature.maturity}</Maturity>
            <FeatureText fontWeight="bold">
              {itemFeature.genre.charAt(0).toUpperCase() + itemFeature.genre.slice(1)}
            </FeatureText>
          </Group>
          {children}
        </Content>
      </Feature>
    ) : null;
    };