// A library can have songs added/removed and cannot have duplicates

function Library ()

Library.prototype = {
	storage: [];
	addToLibrary: function(title, artist, album, coverArtURL){
		// create a new song with user inputs
		var newSong = Song(title, artist, album, coverArtURL);
		// go through Library.storage to check if song already exists
		for(var i=0; i<Library.storage.length;i++){
			if (newSong === Libary.storage[i]) {
				alert('Error404: Song Already Within Library!');	
			} else { // if song doesn't already exit, push song into Library.storage
				Library.storage.push(newSong);
			}
		}
	},
	removeFromLibrary: function(song.title){
		for(var i=0;i<Library.storage.length;i++){
			if (song.title === Library.storage[i]){
				Library.storage[i] = undefined;
			} else {
				alert('Error404: Song Not Found Within Library!');
			}
		}
	}
}