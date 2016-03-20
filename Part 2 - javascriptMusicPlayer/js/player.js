// Use player controls stop/start/next to change the current song in the player

function Player() {
	currentSong: undefined;
}

Player.prototype.playSong= function (title){
		title = song.title;
		for(var i=0; i<Playlist[storage].length; i++){
			for(var key in Playlist[storage][i]) {
				if (song.title === key){
					Player.currentSong = Playlist[storage][i];
					console.log("Now Playing: " + Playlist[storage][i]);
				} else {
					alert('Error404: Song Not Found Within Playlist! Please add it from your Library & try again.');
				}
			}	
		}
	};

Player.prototype.pauseSong= function (){
		if (Player.currentSong === undefined){
			console.log('Error404: No currentSong Playing!')
		} else {	
			console.log('Paused: ' + Player.currentSong);
		}
	};

Player.prototype.nextSong= function (){
		if (Playlist.storage.length === 0){
			console.log('Error404: There Are No Songs Within Your Playlist! Please add some from your Library & try again.');
		} else{
			if (Player.currentSong === undefined){
				console.log('Now Playing: ' + Playlist.storage[0]); 
			} else {
				console.log('Now Playing: ' + Player.currentSong++); 
			}	
		}
	}; 