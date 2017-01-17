function Song(name, filename) {
	this.name = name;
	this.filename = filename;

	this.play() {
		document.getElementById("track").innertext="<source src=\"" + filename + "\" type=\"audio/mp3\">"
	}
}

sunny = new Song("sunny","assets/bensound-sunny.mp3");
sunny.play();