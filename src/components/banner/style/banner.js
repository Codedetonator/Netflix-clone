import styled from 'styled-components/macro';

export const Background = styled.header`
  display: flex;
  flex-direction: column;
  max-height:550px;
  @media (max-width: 700px) {
    ${({ dontShowOnSmallViewPort }) => dontShowOnSmallViewPort && `background: none;`}
  }
}
`;
export const Bottom =styled.div`
height:7.4rem;
background-image:linear-gradient(180deg,transparent,rgba(37, 37, 37, 0.61),#000);
@media (max-width: 700px) {
 dispaly:none;
}
`;

export const Container = styled.div`
  display: flex;
  margin: 0 56px;
  height: 100px;
  justify-content: space-between;
  align-items: center;
  a {
    display: flex;
  }
  @media (max-width: 1000px) {
    margin: 0 30px;
  }
`;

export const Feature = styled(Container)`
  padding: 150px 0 500px 0;
  flex-direction: column;
  align-items: normal;
  width: 50%;

  @media (max-width: 1100px) {
    display: none;
  }
`;

export const FeatureCallOut = styled.h2`
  color: white;
  font-size: 50px;
  line-height: normal;
  font-weight: bold;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
  margin: 0;
`;

export const Text = styled.p`
  color: white;
  font-size: 22px;
  line-height: normal;
  text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.45);
`;

export const PlayButton = styled.button`
  box-shadow: 0 0.6vw 1vw -0.4vw rgba(0, 0, 0, 0.35);
  background-color: #e6e6e6;
  color: #000;
  text-align: center;
  border-width: 0;
  padding: 10px 20px;
  border-radius: 5px;
  width: 130px;
  font-weight: bold;
  font-size: 20px;
  margin-top: 10px;
  cursor: pointer;
  transition: background-color 0.5s ease;

  &:hover {
    background-color:rgba(109, 109, 110, 0.9);
    color: #000;
  }
`;

export const Group = styled.div`
display: flex;
align-items: center;
`;

export const MoreButton =styled.button`
cursor:pointer;
color:#fff;
outline:none;
border:none;
font-weight:600;
border-radius:0.2w;
padding-left:2rem;
padding-right:1rem;
height: 40px;
padding-top:0.5rem;
padding-bottom:0.5rem;
margin-right:2rem;
margin-top:1.5rem;
background-color:rgba(51,51,51,0.5);
transition: background-color 0.5s ease;

&:hover {
  background-color:rgba(109, 109, 110, 0.4);
  color: #fff;
}
` ;

