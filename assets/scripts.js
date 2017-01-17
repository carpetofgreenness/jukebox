//create song function
function Song(name, filename) {
	this.name = name;
	this.filename = filename;

	this.play = function() {
		var audioElement = document.getElementById("track")
		audioElement.src = this.filename;
		audioElement.play();

		document.getElementById("songname").innerText = this.name;
	}
}

//load songs
sunny = new Song("sunny","assets/bensound-sunny.mp3");
buddy = new Song("buddy","assets/bensound-buddy.mp3");
uke = new Song("ukulele","assets/bensound-ukulele.mp3");