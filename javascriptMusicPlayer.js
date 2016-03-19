// Your task is to architect the functionality of a music player in Javascript. 
//Your music player should consist of these parts: 
​
// A player that has a library and a playlist.
//   - A library can have songs added/removed and cannot have duplicates
//   - A song needs to have a title, artist, album name, and cover art
//   - A playlist has songs added/removed from the library and can have duplicates. 
//     Songs can also be reordered in the playlist. 
​
// A user should be able to:
//   -Add/Remove a song from the library
//   -Take a song from the library and add/remove to the playlist 
//   -Swap the order of songs in the playlist
//   -Use player controls stop/start/next to change the current song in the player
// ​
// All other implementation details will be left to you.

// NOTE: you do NOT need to build any user interface (UI), it just needs to work within the console. 

function musicPlayer() {
	
	var Library = []; // Array of Song Objects
	var Playlist= []; // Array of Song Objects
	var Song = { // Song Object w/ Required Properties
		title: "",
		artist: "",
		album: "",
		coverArt: // img src link,
	}; 

	function addSongToLibrary(song){

	}

	function removeSongFromLibrary(song){

	}

	function addSongToPlaylist(song){

	}

	function removeSongFromPlaylist(song){

	}

	function shuffle(Playlist){

	}

	function playSong(song){

	}

	function stopSong(song){

	}

	function nextSong(song){

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
