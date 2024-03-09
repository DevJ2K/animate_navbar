var selector_box = document.getElementById("selector-box");
var main_nav = document.getElementById("main_nav");
const menuItems = document.querySelectorAll('.menu-item');

function hideNavbar() {
	// main_nav.style.position = 'absolute';
	// main_nav.style.marginLeft = '-400px';
	main_nav.style.opacity = '0';
}

function displayNavbar() {
	main_nav.style.marginLeft = '10px';
	main_nav.style.opacity = '1';
	// main_nav.style.position = 'relative';
}

menuItems.forEach((item) => {
    item.addEventListener('click', function() {
		let nClass = undefined;
		for (let i = 1; i <= menuItems.length; i++) {
			if (this.classList.contains('n-' + i))
				nClass = i;
		}
		console.log("Élement " + nClass);
		for (let i = 1; i <= menuItems.length; i++) {
			if (nClass != i)
			{
				console.log("yo");
				menuItems[i - 1].classList.remove('item-active');
			}

		}
		if (nClass != undefined) {
			console.log(
				menuItems[nClass - 1]
				);

			console.log("here");
			menuItems[nClass - 1].classList.add('item-active');
			selector_box.style.display = 'block';
			selector_box.style.marginTop = (nClass - 1) * 80 + 'px';
		}
		else
		{
			selector_box.style.display = 'none';
		}
	});
});

