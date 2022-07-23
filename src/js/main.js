const btnOpen = document.querySelector('.btn-open-sidebar');
const btnClose = document.querySelector('.btn-close-sidebar');
const mblbar = document.querySelector('.mbl-bar');

btnOpen.addEventListener('click', () => {
	mblbar.classList.add('show-mbl-bar');
});
btnClose.addEventListener('click', () => {
	mblbar.classList.remove('show-mbl-bar');
});

// video
const player = document.querySelector('.player');
const video = player.querySelector('.viewer');
function togglePlay() {
	const method = video.paused ? 'play' : 'pause';
	video[method]();
}
video.addEventListener('click', togglePlay);

// sidebar
const sidebarOpenbtn = document.querySelectorAll('.show-sidebar-btn');
const sidebarClosebtn = document.querySelectorAll('.close-sidebar');

sidebarOpenbtn.forEach((e) => {
	e.addEventListener('click', () => {
		const btn = e.closest('.sidebar');
		btn.classList.add('show-sidebar');
		// console.log(btn);
	});
});
sidebarClosebtn.forEach((e) => {
	e.addEventListener('click', () => {
		const btn = e.closest('.sidebar');
		btn.classList.remove('show-sidebar');
		// console.log(btn);
	});
});

// dropdown
const select = document.querySelectorAll('.selectBtn');
const option = document.querySelectorAll('.option');
let index = 1;

select.forEach((a) => {
	a.addEventListener('click', (b) => {
		const next = b.target.nextElementSibling;
		next.classList.toggle('toggle');
		next.style.zIndex = index++;
	});
});
option.forEach((a) => {
	a.addEventListener('click', (b) => {
		b.target.parentElement.classList.remove('toggle');

		const parent = b.target.closest('.select').children[0];
		parent.setAttribute('data-type', b.target.getAttribute('data-type'));
		parent.innerText = b.target.innerText;
	});
});

// range slider
const range = document.querySelectorAll('.range-slider span input');
progress = document.querySelector('.range-slider .progress');
let gap = 0.1;
const inputValue = document.querySelectorAll('.numberVal .input');

range.forEach((input) => {
	input.addEventListener('input', (e) => {
		let minRange = parseInt(range[0].value);
		let maxRange = parseInt(range[1].value);

		if (maxRange - minRange < gap) {
			if (e.target.className === 'range-min') {
				range[0].value = maxRange - gap;
			} else {
				range[1].value = minRange + gap;
			}
		} else {
			console.log(minRange);
			progress.style.left = (minRange / range[0].max) * 100 + '%';
			// progress.style.left = 0 + '%';
			progress.style.right = 100 - (maxRange / range[1].max) * 100 + '%';

			inputValue[0].innerHTML = minRange;
			inputValue[1].innerHTML = maxRange;
		}
	});
});

// accordion
const accordionItems = document.querySelectorAll('[data-accordion] > details');
const siblings = (el) => {
	if (el.parentNode === null) return [];
	return Array.prototype.filter.call(el.parentNode.children, function (child) {
		return child !== el;
	});
};

accordionItems.forEach((el) => {
	el.addEventListener('click', () => {
		const others = siblings(el);
		others.forEach((sibling) => {
			sibling.removeAttribute('open');
		});
	});
});
