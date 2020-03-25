const $showsList = document.querySelector('.listOfShows');

export const getSearchField = () => document.querySelector('.search');
export const getSearchValue = () => getSearchField().value;

export const renderShows = (shows) => {
    let allShowCards = '';
    
    shows.forEach(show => {
        let url = !show.image
            ? 'https://via.placeholder.com/300'
            : show.image.medium;

        allShowCards += `
            <div class="col-sm-12 col-md-6 col-lg-4 col-ex-3">
                <div class="card">
                    <img src="${url}" class="card-img-top">
                    <div class="card-body">
                        <h5 class="card-title">${show.name}</h5>
                    </div>
                </div>
            </div>`;
    });

    $showsList.innerHTML = allShowCards;
}

export const renderList = (shows) => {
    // ...
}