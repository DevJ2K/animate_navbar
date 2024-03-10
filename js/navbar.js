var selector_box = document.getElementById("selector-box");
var main_nav = document.getElementById("main_nav");
const menuItems = document.querySelectorAll('.menu-item');

function end_animation() {
	console.log("end");
}

function hideNavItems() {
	for (let i = 0; i < menuItems.length; i++) {
		// menuItems[i].style.display = 'none';
		menuItems[i].hidden = true;
	}
}

function showNavItems() {
	for (let i = 0; i < menuItems.length; i++) {
		// menuItems[i].style.display = 'flex';
		menuItems[i].hidden = false;
	}
}



function hideNavbar() {
	main_nav.style.width = '0px';
	main_nav.style.opacity = '0';

	main_nav.addEventListener('transitionend', function transitionEnd(event) {
		if (event.propertyName === 'opacity') {
			if (main_nav.style.opacity == '0') {
				hideNavItems();
			}
			main_nav.removeEventListener('transitionend', transitionEnd);
		}
	});
}

function displayNavbar() {
	showNavItems();
	main_nav.style.width = '120px';
	main_nav.style.opacity = '1';
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

