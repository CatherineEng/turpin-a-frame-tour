AFRAME.registerComponent("toggle-sound", {
  schema: { target: { type: "selector" } },
  init() {
	this.el.addEventListener("click", () => {
	  const soundEl = this.data.target;
	  if (!soundEl) return;

	  const sound = soundEl.components.sound;
	  if (!sound) return;

	  sound.isPlaying ? sound.stopSound() : sound.playSound();
	});
  }
});
