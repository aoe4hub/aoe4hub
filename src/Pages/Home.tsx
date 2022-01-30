import { Link } from 'react-router-dom';

export default function Home() {
	document.title = "Age of Empires 4 Build Orders";

	return (
		<div className="max-w-screen-xl mx-auto py-10 px-3">
			<div className="max-w-screen-xl mx-auto py-10 mb-5" >
				<div className="text-3xl pb-3">Age of Empire IV Build Orders</div>
				<Link to="/emailme" className="text-blue-600 underline cursor-pointer">Submit A Build</Link>
			</div>

			<Link to="/build-orders/chinese-lancers">&bull; <img src="/civs/chinese.png" className="inline" /> <span className="font-semibold">Chinese lancers</span> - by Aussie Drongo</Link>
			<br /><br />
			<Link to="/build-orders/english-longbowmen-rush">&bull; <img src="/civs/english.png" className="inline" /> <span className="font-semibold">English Longbowmen Rush</span> - by Farm Man Official</Link>
			<br /><br />
			<Link to="/build-orders/french-royal-knight-opening">&bull; <img src="/civs/french.png" className="inline" /> <span className="font-semibold">French Royal Knight Opening</span> - by FitzBro</Link>
			<br /><br />
			<Link to="/build-orders/standard-delhi-opening">&bull; <img src="/civs/delhi.png" className="inline" /> <span className="font-semibold">Standard Delhi Opening</span> - by FitzBro</Link>
			<br /><br />
			<Link to="/build-orders/rus-speedy-2nd-town-center">&bull; <img src="/civs/rus.png" className="inline" /> <span className="font-semibold">Rus Speedy 2nd Town Center</span> - by fiftyfivecats</Link>
		</div>
	);
}
