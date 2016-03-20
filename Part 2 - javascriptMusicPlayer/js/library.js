// A library can have songs added/removed and cannot have duplicates

function Library() {
	this.storage = [];
}

Library.prototype.addToLibrary= function(title, artist, album, coverArtURL) {
		var newSong = new Song(title, artist, album, coverArtURL);
		console.log(this.storage);
		var contains = false;
		for(var i=0; i < this.storage.length;i++){
			if (JSON.stringify(newSong) === JSON.stringify(this.storage[i])) {
				contains = true;
				alert('Error404: Song Already Within Library!');	
			} 
			if (!contains) {
				this.storage.push(newSong);
				console.log('newSong: '+ newSong);
			}
		}
	};

Library.prototype.removeFromLibrary= function(title) {
		var songTitle = title;
		for(var i=0;i<this.storage.length;i++){
			if (songTitle === this.storage[i].title){
				this.storage[i] = undefined;
				console.log('song removed from Library');
			} else {
				alert('Error404: Song Not Found Within Library!');
			}
		}
	};
