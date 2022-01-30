
export default function Tips() {
	document.title = "Age of Empires 4 Tips";

	return (
		<div className="max-w-screen-xl mx-auto py-10 px-3">
			<div className="text-2xl">
				Tips!
			</div>

			<ul className="list-disc my-10">
				<li>Manually animation cancelling your scout when hunting deer is 2/3 times as fast as just queuing each deer.</li>
				<li>If multiple vills all go for the same sheep at the same time, they will all do a lengthy killing animation. Instead, send one vill ahead of the others to perform the kill. This way the others never stop collecting.</li>
				<li><a href="https://www.youtube.com/watch?v=VUD14BP-Zlg" className="underline text-blue-600" target="_blank">Spirit Of The Law's tips</a></li>
			</ul>
		</div>
	);
}
