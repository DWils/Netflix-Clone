import React, { useState, useEffect } from 'react'
import axios from '../API/axios' // il s'agit du composant et non de l'outil du même nom
import './Row.css'
import YouTube from 'react-youtube'
import movieTrailer from "movie-trailer"

const baseUrl = "https:/image.tmdb.org/t/p/original/"

const Row = ({ title, fetchUrl, isLargeRow }) => {

    const [movies, setMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState("");

    useEffect(() => {
        // si les crochets sont vides [] , ça démarre une seule fois lorsque les lignes (Rows) serons chargées
        async function fetchData() {
            const request = await axios.get(fetchUrl)
            setMovies(request.data.results)
            return request;
        }
        fetchData();
    }, [fetchUrl]); // le changement dépends de la requete qu'on souhaite (Netflix , film d'Action ...)

    const opts = {
        height: "390",
        width: "100%",
        playerVars: {

            autoplay: 1,
        },
    }

    const handleClick = (movie) => {
        if (trailerUrl) {
            setTrailerUrl('')
        }else {
            movieTrailer(movie?.name || "")
            .then(url => {
                const urlParams = new URLSearchParams( new URL(url).search);
                setTrailerUrl(urlParams.get('v')) 
            })
            .catch(error => console.log(error))
        }
    }

    return (
        <div className="row">
            <h2>{title}</h2>

            <div className={"row_posters"}>
                {movies.map(movie => (
                    <img
                        key={movie.id}
                        onClick={() => handleClick(movie)}
                        className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                        src={`${baseUrl}${isLargeRow ? movie.poster_path : movie.backdrop_path }`} 
                        alt={movie.name} />
                ))}
            </div>
            <YouTube videoId={trailerUrl} opts={opts}/>
        </div>
    )
}

export default Row
