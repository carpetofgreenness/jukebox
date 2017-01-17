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
			$('.glyphicon-play').addClass('glyphicon-pause');
		} else if (this.isLoaded == true) {
			this.playlist[this.place].pause();
			this.isPlaying = false;
			this.isPaused = true;
			pauseStatus(this)
			$('.glyphicon-play').removeClass('glyphicon-pause');
		}
	}

	this.stop = function() {
		document.getElementById("track").src = "";
		this.isLoaded = false;
		this.isPlaying = false;
		this.isPaused = false;
		pauseStatus(this)
		document.getElementById("songname").innerText = "";
		$('.glyphicon-play').removeClass('glyphicon-pause');
	}

	this.next = function() {
		this.place++;
		this.place = this.place%this.playlist.length; //start fromt the beginning
		this.playlist[this.place].load();
		this.isLoaded = true;
		this.playlist[this.place].play();
		this.isPlaying = true;
		this.isPaused = false;
		$('.glyphicon-play').addClass('glyphicon-pause');
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

function upNext(jukeboxName) {
	this.juke = jukeboxName;
	this.playlist = juke.playlist;
	this.htmlstring = ""
	for (var i=0;i<this.playlist.length;i++) {
		this.htmlstring += "<p id=\"" + this.playlist[i].name + "\">" + this.playlist[i].name + "</p>";
	}
	document.getElementById("upnext").innerHTML = this.htmlstring;
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
sunny1 = new Song("sunny1","assets/bensound-sunny.mp3",juke);
buddy1 = new Song("buddy1","assets/bensound-buddy.mp3",juke);
uke1 = new Song("ukulele1","assets/bensound-ukulele.mp3",juke);

//play button
$(".glyphicon-play").click(function() {
	juke.playOrPause();
});

//stop button
$(".glyphicon-stop").click(function() {
	juke.stop();
});

//next button
$(".glyphicon-step-forward").click(function() {
	juke.next();
});