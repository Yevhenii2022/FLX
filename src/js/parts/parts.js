document.addEventListener('DOMContentLoaded', function () {
	const animItems = document.querySelectorAll('._anim-items');

	if (animItems.length > 0) {
		window.addEventListener('scroll', animOnScroll, { passive: true });

		function animOnScroll() {
			for (let index = 0; index < animItems.length; index++) {
				const animItem = animItems[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offset(animItem).top;
				const animStart = 10;
				let animItemPoint = window.innerHeight + animItemHeight / animStart;
				if (animItemHeight < window.innerHeight) {
					animItemPoint = window.innerHeight - window.innerHeight / animStart;
				}

				if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {
					animItem.classList.add('_active');
				} else {
					animItem.classList.remove('_active');
				}
			}
		}

		function offset(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft,
			};
		}

		setTimeout(() => {
			animOnScroll();
		}, 300);
	}

	const animCar = document.querySelectorAll('._anim-items-driver');

	if (animCar.length > 0) {
		window.addEventListener('scroll', animOnScrollCar, { passive: true });

		function animOnScrollCar() {
			for (let index = 0; index < animCar.length; index++) {
				const animItem = animCar[index];
				const animItemHeight = animItem.offsetHeight;
				const animItemOffset = offsetCar(animItem).top;
				const animStart = 10;

				let animItemPoint = window.innerHeight - animItemHeight * animStart;
				if (animItemHeight > window.innerHeight) {
					animItemPoint = window.innerHeight + window.innerHeight * animStart;
				} else if (animItemHeight < window.innerHeight) {
					animItemPoint = window.innerHeight + window.innerHeight * animStart;
				}

				if (scrollY > animItemOffset - animItemPoint && scrollY < animItemOffset + animItemHeight) {
					animItem.classList.add('_active');
				} else {
					animItem.classList.remove('_active');
				}
			}
		}

		function offsetCar(el) {
			const rect = el.getBoundingClientRect(),
				scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,
				scrollTop = window.pageYOffset || document.documentElement.scrollTop;
			return {
				top: rect.top + scrollTop,
				left: rect.left + scrollLeft,
			};
		}

		setTimeout(() => {
			animOnScrollCar();
		}, 300);
	}

	// checkboxes
	const multiselects = document.querySelectorAll('.multiselect');

	multiselects.forEach(ms => {
		const toggle = ms.querySelector('.multiselect-toggle');
		const popup = ms.querySelector('.multiselect-popup');

		toggle.addEventListener('click', e => {
			e.stopPropagation();
			ms.classList.toggle('open');
		});

		popup.addEventListener('change', () => {
			const checked = [...popup.querySelectorAll('input:checked')].map(i => i.value);
			toggle.textContent = checked.length ? checked.join(', ') : 'Vælg område';
		});
	});

	document.addEventListener('click', e => {
		document.querySelectorAll('.multiselect.open').forEach(ms => {
			if (!ms.contains(e.target)) {
				ms.classList.remove('open');
			}
		});
	});

	//video
	const tabs = document.querySelectorAll('.step-tab');
	const video = document.querySelector('.steps-block__video video');
	const playPauseButton = document.querySelector('.video__play');

	const showPlayButton = () => {
		if (playPauseButton) {
			playPauseButton.innerHTML =
				'<svg xmlns="http://www.w3.org/2000/svg" width="50" height="50"><circle cx="25" cy="25" r="22" fill="#fff" opacity=".5"/><path fill="#fff" d="m22 18 10 7-10 7z"/></svg>';
			playPauseButton.style.display = 'flex';
		}
	};

	const hidePlayButton = () => {
		if (playPauseButton) {
			playPauseButton.innerHTML = '';
			playPauseButton.style.display = 'none';
		}
	};

	if (tabs.length && video) {
		tabs.forEach(tab => {
			tab.addEventListener('click', () => {
				tabs.forEach(t => t.classList.remove('active'));
				tab.classList.add('active');

				const newVideo = tab.dataset.video;
				if (newVideo) {
					video.style.opacity = 0;
					setTimeout(() => {
						video.src = newVideo;
						video.pause();
						showPlayButton();
						video.style.opacity = 1;
					}, 300);
				}
			});
		});
	}

	if (playPauseButton && video) {
		playPauseButton.addEventListener('click', () => {
			video.play();
			hidePlayButton();
		});
	}

	if (video) {
		video.addEventListener('click', () => {
			if (!video.paused) {
				video.pause();
				showPlayButton();
			}
		});
	}

	//header
	let header = document.querySelector('.header');
	let scrollPrev = 0;

	window.addEventListener('scroll', function () {
		var scrolled = window.PageYOffset || this.document.documentElement.scrollTop;

		if (scrolled > 100 && scrolled > scrollPrev) {
			header.classList.add('header--hidden');
		} else {
			if (header.classList.contains('header--hidden')) {
				header.classList.remove('header--hidden');
			}
		}
		scrollPrev = scrolled;
	});

	//burger-menu
	const menu = document.querySelector('.header__content');
	const menuButton = document.querySelector('.header__mobile-menu');

	menuButton.addEventListener('click', function () {
		this.classList.toggle('active');
		menu.classList.toggle('open');
		document.body.classList.toggle('burger-open');
	});
});

document.addEventListener('click', function (event) {
	const headerSearch = document.querySelector('.header__search');
	const isClickInside = headerSearch.contains(event.target);

	if (isClickInside) {
		headerSearch.classList.add('active');
	} else {
		headerSearch.classList.remove('active');
	}
});
