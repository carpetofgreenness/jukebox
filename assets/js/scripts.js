//create jukebox function
function Jukebox() {
	this.playlist = [];
	this.place = 0; //which song in the playlist should play
	this.isLoaded = false;
	this.isPlaying = false;
	this.isPaused = false;

	this.queueSong = function(song) {
		this.playlist.push(song);
	}

	this.playOrPause = function() {
		if (this.isPlaying == false) {
			if (this.isLoaded == false) {
				this.playlist[this.place].load();
				this.isLoaded = true;
			}
			this.playlist[this.place].play();
			this.isPlaying = true;
			this.isPaused = false;
			pauseStatus(this)
		} else if (this.isLoaded == true) {
			this.playlist[this.place].pause();
			this.isPlaying = false;
			this.isPaused = true;
			pauseStatus(this)
		}
	}

	this.stop = function() {
		document.getElementById("track").src = "";
		this.isLoaded = false;
		this.isPlaying = false;
		this.isPaused = false;
		pauseStatus(this)
	}
}

function pauseStatus(jukeboxName) {
	if (jukeboxName.isPaused) {
		console.log("it is paused")
		document.getElementById("playStatus").innerText = " paused"
	} else {
		document.getElementById("playStatus").innerText = " "
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

		document.getElementById("songname").innerText = this.name;
	}
}

//load songs
sunny = new Song("sunny","assets/bensound-sunny.mp3",juke);
buddy = new Song("buddy","assets/bensound-buddy.mp3",juke);
uke = new Song("ukulele","assets/bensound-ukulele.mp3",juke);

//play button
$(".glyphicon-play").click(function() {
	juke.playOrPause();
	$('.glyphicon-play').toggleClass('glyphicon-pause');
});

//stop button
$(".glyphicon-stop").click(function() {
	juke.stop();
	$('.glyphicon-pause').removeClass('glyphicon-pause');
});