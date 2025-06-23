if (document.contentType && document.contentType.startsWith('image/')) {
	const bodyChildren = document.body.children
	if (bodyChildren.length === 1 && bodyChildren[0].tagName === 'IMG') {
		document.documentElement.style.height = '100%'
		document.body.style.margin = '0'
		document.body.style.display = 'flex'
		document.body.style.justifyContent = 'center'
		document.body.style.alignItems = 'center'
		const img = bodyChildren[0]
		img.style.maxWidth = '100vw'
		img.style.maxHeight = '100vh'
		img.style.objectFit = 'contain'
	}
}
