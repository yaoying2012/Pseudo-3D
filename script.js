let elements = {
	'flower1': [
		document.getElementById('flower1'),
		10,
	],
	'flower2': [
		document.getElementById('flower2'),
		13,
	],
	'phoneBooth': [
		document.getElementById('phone-booth'),
		53,
	],
	'character1': [
		document.getElementById('character1'),
		15,
	],
	'character2': [
		document.getElementById('character2'),
		16,
	],
	'largeFlower1': [
		document.getElementById('large-flower1'),
		25,
	],
	'largeFlower2': [
		document.getElementById('large-flower2'),
		28,
	],
}

function setup() {
	for (let key in elements) {
		if (elements.hasOwnProperty(key)) {
			let elementData = elements[key];
			let domElement = elementData[0]; // Get DOM element
			let threshold = elementData[1]; // Get threshold

			domElement.style.zIndex = -threshold;
		}
	}
}

setup();


let previousMouseX = null; // Store previous mouse X coordinate

addEventListener('mousemove', function (event) {
    let currentMouseX = event.clientX; // Get current mouse X coordinate

    if (previousMouseX !== null) { // Ensure there is a previous coordinate to compare
        let diffX = currentMouseX - previousMouseX; // Calculate horizontal movement

        // Update previousMouseX to current coordinate for next comparison
        previousMouseX = currentMouseX;

		for (let key in elements) {
			if (elements.hasOwnProperty(key)) {
				let elementData = elements[key];
				let domElement = elementData[0]; // Get DOM element
				let threshold = elementData[1] / 10; // Get threshold

				// Get current left style, remove 'px', and parse it as a float
				let currentLeft = parseFloat(window.getComputedStyle(domElement).left);
				let newLeft = currentLeft + diffX / threshold; // Calculate new left position

				domElement.style.left = newLeft + 'px'; // Update element's left position
			}
		}
    } else {
        // If this is the first move, just record the position without comparison
        previousMouseX = currentMouseX;
    }
});
