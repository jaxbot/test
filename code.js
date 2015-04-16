// Returns a cat gif from the API and passes URL to the callback
function getCatGif(callback) {
	ajax("/api/gifs", { type: DOG }, function(data) {
		callback(data.url);
	});
}

