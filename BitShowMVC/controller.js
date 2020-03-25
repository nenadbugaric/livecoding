import { fetchShows, searchShows } from "./data.js";
import { renderShows, getSearchField, getSearchValue } from "./ui.js";

const onSearch = () => {
    const searchVal = getSearchValue();
    searchShows(searchVal, renderShows);
}

export const startHomepage = () => {
   getSearchField()
    .addEventListener('keyup', onSearch)


    fetchShows((shows) => renderShows(shows));
};