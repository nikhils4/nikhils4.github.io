
document.getElementById("navbar-btn").addEventListener("click", (e) => {

	if (document.getElementsByClassName("navbar-toggler-icon")[0].style.display == "none"){
		document.getElementsByClassName("navbar-toggler-icon")[0].style.display = "block";
		document.getElementsByClassName("navbar-toggler-icon")[1].style.display = "none";
	} else {
		document.getElementsByClassName("navbar-toggler-icon")[0].style.display = "none";
		document.getElementsByClassName("navbar-toggler-icon")[1].style.display = "block";
	}

})

