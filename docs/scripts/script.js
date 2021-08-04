document.addEventListener('DOMContentLoaded', function () {
	const nav = document.querySelector('.navbar');
	function addShadow() {
		return window.scrollY >= 250
			? nav.classList.add('shadow-bg')
			: nav.classList.remove('shadow-bg');
	}
	window.addEventListener('scroll', addShadow);
});
