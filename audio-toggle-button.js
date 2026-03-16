AFRAME.registerComponent("audio-toggle-button", {
  schema: {
	sound: { type: "selector" },
	playSrc: { type: "selector" },
	stopSrc: { type: "selector" }
  },

  init() {
	this.isPlaying = false;

	// Ensure our initial icon is "play"
	this.setIcon(this.data.playSrc);

	// Stop click events from bubbling up (helps avoid weirdness)
	this.el.addEventListener("click", (e) => {
	  e.stopPropagation();
	  this.toggle();
	});

	// If audio ends naturally, reset icon
	if (this.data.sound) {
	  this.data.sound.addEventListener("sound-ended", () => {
		this.isPlaying = false;
		this.setIcon(this.data.playSrc);
	  });
	}
  },

  toggle() {
	const soundEl = this.data.sound;
	if (!soundEl || !soundEl.components.sound) return;

	const sound = soundEl.components.sound;

	if (this.isPlaying) {
	  sound.stopSound();
	  this.isPlaying = false;
	  this.setIcon(this.data.playSrc);
	} else {
	  sound.playSound();
	  this.isPlaying = true;
	  this.setIcon(this.data.stopSrc);
	}
  },

  setIcon(assetEl) {
	// assetEl is the <img id="..."> element from <a-assets>
	if (!assetEl) return;
	this.el.setAttribute("material", "src", assetEl);
  }
});
