function musicPlayer() {
	//Make A Library
	function Library ()
	//Make a Storage within Library
	Library.prototype = {
		storage: []; // will store song Objects 
	}
	//Make a Playlist
	var Playlist = new Library();
	//Allow Playlist to access .storage
	Playlist.prototype = inherit (Library.prototype);
	//Make a Song, Allow User Inputs
	function Song(title,artist,album,coverArtURL) {
		this.title: title;
		this.artist: artist;
		this.album: album;
		this.coverArt: coverArtURL;
	}
	//Allow User to add a custom song to Library
	function addSongToLibrary(song){
		song = new Song();
		Library.storage.push(song); 
	}
	//Allow User to remove a song from Library
	function removeSongFromLibrary(song.title){
		for(var i=0;i<Library.storage.length;i++){
			if (song.title === Library.storage[i]){
				Library.storage[i] = undefined;
			} else {
				alert('Error404: Song Not Found Within Library!');
			}
		}
	}
	//Allow User to add song to Playlist from Library
	function addSongToPlaylist(song.title){
		for(var i=0;i<Library.storage.length;i++){
			if (song.title === Library.storage[i]){
				Playlist.storage.push(Library.storage[i]);
			} else {
				alert('Error404: Song Not Found Within Library!');
			}
		}
	}
	//Allow User to remove song from Playlist
	function removeSongFromPlaylist(song.title){
		for(vari=0;i<Playlist.storage.length;i++){
			if(song.title === Playlist.storage.length[i]){
				Playlist.storage[i] = undefined;
			} else {
				alert('Error404: Song Not Found Within Playlist!')
			}
		}
	}
	//Allow User to Shuffle the order of songs within Playlist
	function shuffle(){
    	for (var i = Playlist.storage.length; i; i -= 1) {
			var j, x;
        	j = Math.floor(Math.random() * i);
        	x = Playlist.storage[i - 1];
        	Playlist.storage[i - 1] = Playlist.storage[j];
        	Playlist.storage[j] = x;
    	}
	}

	function playSong(song.title){

	}

	function stopSong(song.title){

	}

	function nextSong(song.title){

	}

	return { // musicPlayer Public API 

		addSongToLibrary: addSongToLibrary,
		removeSongFromLibrary: removeSongFromLibrary,
		addSongToPlaylist: addSongToPlaylist,
		removeSongFromPlaylist: removeSongFromPlaylist,
		shuffle: shuffle,
		playSong: playSong,
		stopSong: stopSong,
		nextSong: nextSong
	};

}
