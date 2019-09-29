import axios from "axios";

const api = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    params: {
        api_key: "b88cb1468da4a8108d7084081016b36e",
        language: "en-US"
    }
});

export const movies = {
    getNowPlaying: () => api.get("movie/now_palying"),
    getUpcoming: () => api.get("movie/upcoming"),
    getPopular: () => api.get("movie/popular"),
    getMovie: id => api.get(`movie/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    searchMovies: term => api.get("search/movie", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};

export const tv = {
    getTopRated: () => api.get("tv/top_rated"),
    getPopular: () => api.get("tv/popular"),
    getAiringToday: () => api.get("tv/airing_today"),
    getShow: id => api.get(`tv/${id}`, {
        params: {
            append_to_response: "videos"
        }
    }),
    searchTV: term => api.get("search/tv", {
        params: {
            query: encodeURIComponent(term)
        }
    })
};