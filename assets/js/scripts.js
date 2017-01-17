//create jukebox function
function Jukebox() {
	this.playlist = [];
	var place = 0; //which song in the playlist should play
	var isLoaded = false;

	this.queueSong = function(song) {
		this.playlist.push(song);
	}

	this.play = function() {
		if (isLoaded == false) {
			this.playlist[place].load();
			isLoaded = true;
		}

		this.playlist[place].play();
	}
}

juke = new Jukebox();

//create song function
function Song(name, filename, jukeboxName) {
	this.name = name;
	this.filename = filename;
	jukeboxName.queueSong(this);

	this.load = function() {
		var audioElement = document.getElementById("track")
		audioElement.src = this.filename;
		audioElement.play();

		document.getElementById("songname").innerText = this.name;
	}

	this.play = function() {
		var audioElement = document.getElementById("track")
		audioElement.play();

		document.getElementById("songname").innerText = this.name;
	}

	this.pause = function() {
		var audioElement = document.getElementById("track")
		audioElement.pause();

		document.getElementById("songname").innerText = this.name + " paused";
	}
}

//load songs
sunny = new Song("sunny","assets/bensound-sunny.mp3",juke);
buddy = new Song("buddy","assets/bensound-buddy.mp3",juke);
uke = new Song("ukulele","assets/bensound-ukulele.mp3",juke);