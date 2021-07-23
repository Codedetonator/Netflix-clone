import React,{useState} from "react";
import "./style/row.css";
import MovieTrailer from 'movie-trailer'
import YouTube from 'react-youtube'
function Row({ title,item}) {
 const[trailerUrl,setTrailerUrl] =useState("")
    
  const handleClick =(item) =>{
    if(trailerUrl){
      setTrailerUrl("")
    }
    else{
      MovieTrailer(item?.original_title || "https://www.youtube.com/watch?v=dQw4w9WgXcQ")
      .then((url) =>{
          const urlParams = new URLSearchParams(new URL(url).search)
          setTrailerUrl(urlParams.get('v'))
          console.log("fun",trailerUrl)
      }).catch((error) => console.log(error))
    }
  }
  
  const opts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
    },
  };
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {item.map((item) => (
          <img
            className="row_poster"
            src={`https://image.tmdb.org/t/p/original/${item.poster_path}`}
            alt={item.name}
            onClick={()=>handleClick(item)}/>
        ))}
      </div>  
  {trailerUrl && <YouTube videoId={trailerUrl} opts={opts} />}
    </div>
  );
}

export default Row;
