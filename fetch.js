export const fetch = (url, onSuccess) => {
    const request = new XMLHttpRequest();
    request.open('GET', url);
    request.send();

    request.addEventListener('load', () => {
        const response = JSON.parse(request.responseText);
        onSuccess(response);
    })
}