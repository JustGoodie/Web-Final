document.getElementById("myBtn").addEventListener("click", Scroll);
function Scroll(){window.scrollTo({top: 0, behavior: "smooth"});}

if ($(window).width() >= 575) {
	window.addEventListener("scroll", ShowHide);
	function ShowHide(){
		if (document.body.scrollTop > 1 || document.documentElement.scrollTop > 1) {
			document.getElementById("myBtn").style.display = "block";
			document.getElementById("navbar").style.top = "0";
			document.getElementById("navbar").style.width = "100%";
			document.getElementById("navbar").style.left = "0";
		} else {
			document.getElementById("myBtn").style.display = "none";
			document.getElementById("navbar").style.top = "38px";
			document.getElementById("navbar").style.width = "92%";
			document.getElementById("navbar").style.left = "4%";};	
}}else{
	document.getElementById("navbar").style.top = "0";
	document.getElementById("navbar").style.width = "100%";
	document.getElementById("navbar").style.left = "0";
}

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

var music = 0;
var audio = new Audio('music.mp3');
document.getElementById("SndBtn").addEventListener("click", play);
function play(){
	if (music == 0) {
		document.getElementById("SndBtn").style.backgroundColor = "DimGray";
		music++;
		audio.play();
	} else if (music == 1) {
		document.getElementById("SndBtn").style.backgroundColor = "black";
		music--;
		audio.pause();
		audio.currentTime = 0;
	}
}

let items = document.querySelectorAll('.carousel .carousel-item')
items.forEach((el) => {
    const minPerSlide = 4
    let next = el.nextElementSibling
    for (var i=1; i<minPerSlide; i++) {
        if (!next) {
            // wrap carousel by using first child
        	next = items[0]
      	}
        let cloneChild = next.cloneNode(true)
        el.appendChild(cloneChild.children[0])
        next = next.nextElementSibling
    }
})