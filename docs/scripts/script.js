document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	function addShadow() {
		return window.scrollY >= 250
			? nav.classList.add('shadow-bg')
			: nav.classList.remove('shadow-bg');
	}
	window.addEventListener('scroll', addShadow);
});

const allNavElements = document.querySelectorAll('.nav-link');
const navHidden = document.querySelector('.navbar-collapse');

allNavElements.forEach((el) =>
	el.addEventListener('click', () => navHidden.classList.remove('show'))
);

