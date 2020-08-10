import axios from 'axios'

// url de base pour pour des requetes à TMDB
const instance = axios.create({
    baseURL: "https://api.themoviedb.org/3",
});

export default instance;