/* eslint-disable */
import React, { useState, useEffect, useContext } from "react";
import * as ROUTES from "../constants/routes";
import logo from "../logo.svg";
import axios from "axios";
import Fuse from "fuse.js";
import bell from "./icons/bxs-bell.svg";
import gift from "./icons/bx-gift.svg";
import { FirebaseContext } from "../context/firebase";
import { SelectProfileContainer } from "./profile";
import { FooterContainer } from "./footer";
import MovieTrailer from 'movie-trailer'

import { Header, Loading, Card, Player, Banner} from "../components";

export function BrowseContainer({ slides }) {
  const [category, setCategory] = useState("series");
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [slideRows, setSlideRows] = useState([]);
  const [movieHead, setmovieHead] = useState([]);;
  const [trailerUrl, setTrailerUrl] = useState("");

  const { firebase } = useContext(FirebaseContext);
  const user = firebase.auth().currentUser || {};

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, [profile.displayName]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(
        "https://api.themoviedb.org/3/discover/tv?api_key=c629832bfc957b77eae8af627067c50c&with_network=213"
      );
      setmovieHead(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [category]);

  useEffect(() => {
    const fuse = new Fuse(slideRows, {
      keys: ["data.discription", "data.title", "data.genre"],
    });
    const results = fuse.search(searchTerm).map(({ item }) => item);
    if (slideRows.length > 0 && searchTerm.length > 3 && results.length > 0) {
      setSlideRows(results);
    } else {
      setSlideRows(slides[category]);
    }
  }, [searchTerm]);

  useEffect(() => {
    setSlideRows(slides[category]);
  }, [slides, category]);


  const truncate = (str, n) => {
    return str?.length > n ? str.substr(0, n - 1) + " " + "..." : str;
  };
 
  const handleClick =(item) =>{
    if(trailerUrl){
      setTrailerUrl("")
    }
    else{
      MovieTrailer(item.title|| "")
      .then((url) =>{
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
      }).catch((error) => console.log(error))
    }
  }
  return profile.displayName ? (
    <>
      {loading ? <Loading src={user.photoURL} /> : <Loading.ReleaseBody />}
      {movieHead && (
        <Header src={movieHead.backdrop_path} dontShowOnSmallViewPort>
          <Header.Frame>
            <Header.Group>
              <Header.Logo to={ROUTES.HOME} src={logo} alt="Netflix" />
              <Header.TextLink
                active={category === "series" ? "true" : "false"}
                onClick={() => setCategory("series")}
              >
                Series
              </Header.TextLink>
              <Header.TextLink
                active={category === "flims" ? "true" : "false"}
                onClick={() => setCategory("films")}
              >
                Films
              </Header.TextLink>
              <Header.TextLink>My List</Header.TextLink>
            </Header.Group>
            <Header.Group>
              <Header.Search
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
              <img src={gift} className="icon_color" alt="icon" />
              <img src={bell} className="icon_color" alt="icon" />
              <Header.Profile>
                <Header.Picture src={user.photoURL} />
                <Header.Dropdown>
                  <Header.Group>
                    <Header.Picture src={user.photoURL} />
                    <Header.TextLink>{user.displayName}</Header.TextLink>
                  </Header.Group>
                  <Header.Group>
                    <Header.TextLink onClick={() => firebase.auth().signOut()}>Sign out of Netflix</Header.TextLink>
                  </Header.Group>
                </Header.Dropdown>
              </Header.Profile>
            </Header.Group>
          </Header.Frame>

          <Banner>
            <Banner.Feature>
              <Banner.FeatureCallOut>{movieHead.name}</Banner.FeatureCallOut>
              <Banner.Text>{truncate(movieHead.overview, 165)} </Banner.Text>
              <Banner.Group>
                <Banner.PlayButton>Play </Banner.PlayButton>
                {/* <Banner.MoreButton>My List</Banner.MoreButton> */}
              </Banner.Group>
            </Banner.Feature>
          </Banner>
          <Banner.Bottom />
        </Header>
      )}
      <Card.Group>
{
console.log(slideRows)}
{slideRows.map((slideItem) => (
  <Card key={`${category}-${slideItem.title.toLowerCase()}`}>
     <Card>
    <Card.Title>{slideItem.title}</Card.Title>
    <Card.Entities>
      {slideItem.data.map((item) => (
        <Card.Item key={item.docId} item={item}>
          <Card.Image
            src={`https://image.tmdb.org/t/p/original/${item. poster_path}`}
            alt=""  onClick={()=>handleClick(item)}
          />
          <Card.Meta>
            <Card.SubTitle onClick={()=>handleClick(item)}>{item.title}</Card.SubTitle>                
            <Card.Text onClick={()=>handleClick(item)}>{truncate(item.description, 165)}</Card.Text>
          </Card.Meta>
        </Card.Item>
      ))}
    </Card.Entities>
    <Card.Feature category={category}>
      <Player>
        <Player.Button />
        <Player.Video src={trailerUrl ? trailerUrl : "dQw4w9WgXcQ"} />
      </Player>
    </Card.Feature>
    </Card>
    </Card>
))}
</Card.Group>
      <FooterContainer />
    </>
  ) : (
    <SelectProfileContainer user={user} setProfile={setProfile} />
  );
}
