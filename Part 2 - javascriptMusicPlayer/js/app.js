var musicPlayerApp = {

	init: function () {
	//Private Variables
	var myPlayer = new Player();
	var myLibrary = new Library();
	var myPlaylist = new Playlist(); 

	//Helper Functions
	function addToLibrary(title, artist, album, coverArtURL) { myLibrary.addToLibrary(title, artist, album, coverArtURL); }
	function addToPlaylist(title) { myPlaylist.addToPlaylist(title); }
	function removeFromLibrary(title) { myLibrary.removeFromLibrary(title); }
	function removeFromPlaylist(title) { myPlaylist.removeFromPlaylist(title); }
	function shufflePlaylist() { myPlaylist.shufflePlaylist(); }
	function playSong(title) { myPlayer.playSong(title); }
	function pauseSong() { myPlayer.pauseSong(); }
	function playNextSong() { myPlayer.nextSong(); }


	//Public API
	return musicAPI = 
			{
				addToLibrary: addToLibrary,
				addToPlaylist: addToPlaylist,
				removeFromLibrary: removeFromLibrary,
				removeFromPlaylist: removeFromPlaylist,
				shufflePlaylist: shufflePlaylist,
				playSong: playSong,
				pauseSong: pauseSong,
				playnextSong: playNextSong
			};
	}
};