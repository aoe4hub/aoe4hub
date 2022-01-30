import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from './Pages/Home';
import BuildViewer from './components/BuildViewer';
import { chineseLancers, delhiStandard, englishLongbowmen, frenchKnights, rusTC } from './builds';
import EmailMe from "./Pages/EmailMe";
import Counters from "./Pages/Counters";
import Tips from "./Pages/Tips";
import CivBonuses from "./Pages/CivBonuses";

export default function App() {
	return (
		<Router>
			<div>
				<div className="w-full bg-gray-200">
					<nav className="max-w-screen-xl mx-auto px-3 py-5 flex text-md sm:text-xl">
						<div className="mr-8"><Link to="/">Build Orders</Link></div>
						<div className="mr-8 hidden sm:block"><Link to="/tips">Tips</Link></div>
						<div className="mr-8 hidden sm:block"><Link to="/counters">Unit Counters</Link></div>
						<div className="mr-8 hidden sm:block"><Link to="/civilisation-bonuses">Civ Bonuses</Link></div>
						<div className="mr-8"><a href="https://docs.google.com/spreadsheets/d/1LG0We2pTFZsbFm_k1SKLix8gxSq_9n5R_Ic3G2tVzBg" target="_blank">Unit Stats</a></div>
						<div className="mr-8"><Link to="/emailme">Submit a build order</Link></div>
					</nav>
				</div>

				<div className="w-full bg-gray-100">
					<Switch>
						<Route exact path="/"><Home /></Route>
						<Route exact path="/emailme"><EmailMe /></Route>
						<Route exact path="/counters"><Counters /></Route>
						<Route exact path="/tips"><Tips /></Route>
						<Route exact path="/civilisation-bonuses"><CivBonuses /></Route>

						<Route exact path="/build-orders/chinese-lancers"><BuildViewer build={chineseLancers} /></Route>
						<Route exact path="/build-orders/english-longbowmen-rush"><BuildViewer build={englishLongbowmen} /></Route>
						<Route exact path="/build-orders/standard-delhi-opening"><BuildViewer build={delhiStandard} /></Route>
						<Route exact path="/build-orders/french-royal-knight-opening"><BuildViewer build={frenchKnights} /></Route>
						<Route exact path="/build-orders/rus-speedy-2nd-town-center"><BuildViewer build={rusTC} /></Route>
					</Switch>
				</div>
			</div>
		</Router>
	);
}
