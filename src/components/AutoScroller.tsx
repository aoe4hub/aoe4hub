import { useState } from 'react';

export default function AutoScroller() {
	const [intervalId, setIntervalId] = useState<any>();

	function scroll() {
		window.scrollBy({
			top: 30,
			behavior: 'smooth'
		});
	}

	function clicked() {
		if (intervalId == null) {
			scroll();

			const newIntervalId = setInterval(() => {
				scroll();
			}, 5000);

			setIntervalId(newIntervalId);
		} else {
			clearInterval(intervalId);
			setIntervalId(null);
		}
	}

	return (
		<div className="fixed right-6 bottom-6 bg-red-100 shadow-md p-3 cursor-pointer rounded" onClick={clicked}>
			{ intervalId == null ? "Click for autoscroll!" : "Click to stop autoscroll!" }
		</div>
	);
}
