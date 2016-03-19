var musicPlayerApp = {

	init: function () {
	//Private Variables
	var myPlayer = new Player();
	var myLibrary = new Library();
	var myPlaylist = new Playlist(); 

	//Helper Functions
	function addToLibrary() {myLibrary.addToLibrary();}
	function addToPlaylist() {myPlaylist.addToPlaylist();}
	function removeFromLibrary() {myLibrary.removeFromLibrary();}
	function removeFromPlaylist() {myPlaylist.removeFromPlaylist();}
	function shufflePlaylist() {myPlaylist.shufflePlaylist();}
	function playSong() {myPlayer.playSong();}
	function pauseSong() {myPlayer.pauseSong();}
	function playnextSong() {myPlayer.nextSong();}


	//Public API
	return musicAPI = 
			{
				addToLibrary: Library.addToLibrary,
				addToPlaylist: Playlist.addToPlaylist,
				removeFromLibrary: Library.removeFromLibrary,
				removeFromPlaylist: Playlist.removeFromPlaylist,
				shufflePlaylist: Playlist.shufflePlaylist,
				playSong: Player.playSong,
				pauseSong: Player.pauseSong,
				playnextSong: Player.nextSong
			};
	}
};