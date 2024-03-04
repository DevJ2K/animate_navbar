var selector_box = document.getElementById("selector-box");
var main_nav = document.getElementById("main_nav");
const menuItems = document.querySelectorAll('.menu-item');
const nb_nav = 5;

function hideNavbar() {
	// main_nav.style.position = 'absolute';
	main_nav.style.marginLeft = '-400px';
}

function displayNavbar() {
	main_nav.style.marginLeft = '10px';
	// main_nav.style.position = 'relative';
}

menuItems.forEach((item) => {
    item.addEventListener('click', function() {
		let nClass = undefined;
		for (let i = 1; i <= nb_nav; i++) {
			if (this.classList.contains('n-' + i))
				nClass = i;
		}
		console.log("Élement " + nClass);
		if (nClass != undefined) {
			selector_box.style.display = 'block';
			selector_box.style.marginTop = (nClass - 1) * 80 + 'px';
		}
		else
		{
			selector_box.style.display = 'none';
		}
	});
});

