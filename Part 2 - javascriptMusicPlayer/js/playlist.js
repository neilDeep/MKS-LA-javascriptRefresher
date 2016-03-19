// A playlist has songs added/removed from the library and can have duplicates.
// Songs can also be reordered in the playlist.

// create a Playlist Object
var Playlist = new Library();

Playlist.prototype = {
	storage: [],
	addToPlaylist: function(title) {
		title = song.title;
		for(var i=0;i<Library.storage.length;i++){
			if (song.title === Library.storage[i]){
				Playlist.storage.push(Library.storage[i]);
				$("#coverartTablePlaylist").addChild('<td><img src=' + this.coverArt +'/></td>');
			} else {
				alert('Error404: Song Not Found Within Library!');
			}
		}
	},
	removeFromPlaylist: function(title){
		title = song.title;
		for(vari=0;i<Playlist.storage.length;i++){
			if(song.title === Playlist.storage.length[i]){
				Playlist.storage[i] = undefined;
			} else {
				alert('Error404: Song Not Found Within Playlist!')
			}
		}
	},
	shuffle: function (){
		for (var i = Playlist.storage.length; i; i -= 1) {
			var j, x;
        	j = Math.floor(Math.random() * i);
        	x = Playlist.storage[i - 1];
        	Playlist.storage[i - 1] = Playlist.storage[j];
        	Playlist.storage[j] = x;
    	}
	}
};