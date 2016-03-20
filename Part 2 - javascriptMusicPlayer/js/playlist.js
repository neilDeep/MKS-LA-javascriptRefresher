// A playlist has songs added/removed from the library and can have duplicates.
// Songs can also be reordered in the playlist.

// create a Playlist Object
function Playlist() {
	Library.call(this);
	this.storage= [];
}

Playlist.prototype.addToPlaylist= function(title) {
		var songTitle = title;
		var contains = false;
		for(var i=0;i<this.storage.length;i++){
			if (songTitle === this.storage[i].title){
				this.storage.push(this.storage[i]);
				console.log(this.storage[i]);
				contains = true;
				$("#coverartTablePlaylist").append('<td><img src=' + this.coverArt +'/></td>');
			} else {
				alert('Error404: Song Not Found Within Library!');
			}
		}
	};

Playlist.prototype.removeFromPlaylist= function(title) {
		var songTitle = title;
		for(vari=0;i<this.storage.length;i++){
			if(songTitle === this.storage.length[i].title){
				this.storage[i] = undefined;
				console.log('removed song from Playlist');
			} else {
				alert('Error404: Song Not Found Within Playlist!')
			}
		}
	};

Playlist.prototype.shuffle= function () {
		for (var i = this.storage.length; i; i -= 1) {
			var j, x;
        	j = Math.floor(Math.random() * i);
        	x = this.storage[i - 1];
        	this.storage[i - 1] = this.storage[j];
        	this.storage[j] = x;
    	}
	};
