// A song needs to have a title, artist, album name, and cover art

function Song (title,artist,album,coverArtURL) {
	this.title = title;
	this.artist = artist;
	this.album = album;
	$('#coverartTableLibrary').append('<td><img src=' + JSON.stringify(coverArtURL) +'/></td>');
}