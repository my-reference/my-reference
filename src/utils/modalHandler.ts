export const closeModal = (action: (isModalOn: boolean) => void, type: string) => {
	document.body.classList.remove('fix-scroll');
	document.querySelector('header')?.classList.remove('is-blur');
	document.querySelector('main')?.classList.remove('is-blur');

	document.querySelector(`#${type}-modal`)?.classList.remove('translateZero');
	document.querySelector(`#${type}-modal-inner`)?.classList.remove('translateZero');

	setTimeout(() => {
		action(false);
	}, 500);
};

export const showModal = (action: (isModalOn: boolean) => void, type: string) => {
	action(true);
	document.body.classList.add('fix-scroll');
	document.querySelector('header')?.classList.add('is-blur');
	document.querySelector('main')?.classList.add('is-blur');

	setTimeout(() => {
		document.querySelector(`#${type}-modal`)?.classList.add('translateZero');
		document.querySelector(`#${type}-modal-inner`)?.classList.add('translateZero');
	}, 10);
};
