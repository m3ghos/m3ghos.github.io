
function get_video() {
    var api = `https://pin.porn/api/videoInfo/?ipp=${generateRandomNumber()}&from_page=${generateRandomNumber()}`;

    fetch(api)
        .then(response => {
            // Check if the response is successful
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            // Parse the JSON body of the response
            return response.json();
        })
        .then(data => {
            // Log the data received from the API
            console.log(data);
        })
        .catch(error => {
            // Log any errors that occurred during the fetch
            console.error('There was a problem with the fetch operation:', error);
        });
    
    document.getElementById('vid').setAttribute('scr','hi')
}

function generateRandomNumber() {
    return Math.floor(Math.random() * (100 - 10 + 1)) + 10;
};
