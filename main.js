// NavBar
window.addEventListener("scroll", ()=>{
	let navbar = document.getElementById("navbar");
	navbar.classList.toggle("sticky", window.scrollY > 0);
});
// Type
const typed = new Typed(".typed", {
	strings: [
	"freelancer",
	"designer",
	"self-taught",
	"student"
	],
	typeSpeed: 75,
	startDelay: 300,
	backSpeed: 75,
	shuffle: false,
	backDelay: 1500,
	loop: true,
	loopCount: false,
});