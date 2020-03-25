import { fetch } from './fetch.js'

export const fetchShows = (onSuccess) => {
    fetch('http://api.tvmaze.com/shows', (shows) => {
        onSuccess(shows);
    });
};

export const searchShows = (str, onSuccess) => {
    fetch(`http://api.tvmaze.com/search/shows?q=${str}`, (showsData) => {
        const shows = showsData.map(showData => showData.show);
        onSuccess(shows);
    });
};