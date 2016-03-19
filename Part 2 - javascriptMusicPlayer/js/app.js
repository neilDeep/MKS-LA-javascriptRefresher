var musicPlayerApp = {

	init: function () {
	//Private Variables
	var myPlayer = new Player();
	var myLibrary = new Library();
	var myPlaylist = new Playlist(); 

	//Helper Functions
	addToLibrary: Library.addToLibrary();
	function addToPlaylist() {Playlist.addToPlaylist();}
	function removeFromLibrary() {Library.removeFromLibrary();}
	function removeFromPlaylist() {Playlist.removeFromPlaylist();}
	function shufflePlaylist() {Playlist.shufflePlaylist();}
	function playSong() {Player.playSong();}
	function pauseSong() {Player.pauseSong();}
	function playnextSong() {Player.nextSong();}


	//Public API
	return musicAPI = 
			{
				addToLibrary: Library.addToLibrary(),
				addToPlaylist: Playlist.addToPlaylist(),
				removeFromLibrary: Library.removeFromLibrary(),
				removeFromPlaylist: Playlist.removeFromPlaylist(),
				shufflePlaylist: Playlist.shufflePlaylist(),
				playSong: Player.playSong(),
				pauseSong: Player.pauseSong(),
				playnextSong: Player.nextSong()
			};
	}
};