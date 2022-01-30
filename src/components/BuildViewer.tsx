import Step from '../components/StepViewer';
import { getCivBgImg, getCivColor } from '../Entities';
import { Build } from '../types';
import AutoScroller from './AutoScroller';

interface BuildViewerProps {
	build: Build;
}

export default function BuildViewer(props: BuildViewerProps) {
	document.title = "AOE4 Build - " + props.build.title ?? "Age of Empires 4 Build Orders";

	return (
		<div className="">
			<div style={{backgroundColor: getCivColor(props.build.civ)}}>
				<div id="civsplash" style={{ backgroundImage: "url('" + getCivBgImg(props.build.civ) + "')" }}>
					<div className="max-w-screen-xl mx-auto text-xl py-10 sm:py-20 px-3 mb-5 text-white" >
						<div className="text-3xl sm:text-5xl pb-3">{props.build.title}</div>
						By&nbsp;
						{props.build.authorLink != null ?
							<a href={props.build.authorLink} target="_blank"><span className="underline">{props.build.author}</span> <img className="h-4 inline" src="/youtube.png" /></a>
						:
							props.build.author}

						{props.build.description != null ?
							<div className="mt-5 text-base">{props.build.description}</div>
						: null}
					</div>
				</div>
			</div>
			<div className="max-w-screen-xl mx-auto py-5 px-3">
				{props.build.steps?.map((value, index) => <Step step={value} colorIndex={index} civilisation={props.build.civ} />)}
				{props.build.afterTips != null ?
					<div>
						Then:
						{props.build.afterTips?.map(value => <div>&bull; {value}</div>)}
					</div>
				: null}
			</div>

			<AutoScroller />
		</div>
	);
}
