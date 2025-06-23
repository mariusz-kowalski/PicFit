function fitImageToViewport() {
	if(document.contentType && document.contentType.startsWith('image/')) {
		const bodyChildren = document.body.children
		if(bodyChildren.length === 1 && bodyChildren[0].tagName === 'IMG') {
			const img = bodyChildren[0]

			const window_ratio = window.innerWidth / window.innerHeight
			const img_ratio = img.naturalWidth / img.naturalHeight

			if(img_ratio > window_ratio) {
				img.style.width = '100%'
				img.style.height = 'auto'
			} else {
				img.style.width = 'auto'
				img.style.height = '100%'
			}
		}
	}
}

fitImageToViewport()

let resizeTimeout
window.addEventListener('resize', () => {
	clearTimeout(resizeTimeout)
	resizeTimeout = setTimeout(fitImageToViewport, 100)
})