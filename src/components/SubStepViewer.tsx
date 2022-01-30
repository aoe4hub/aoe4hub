import { getPicImgUrl } from '../Entities';
import { SubStep } from '../types';

interface SubStepViewerProps {
	subStep: SubStep;
	isLast: Boolean;
}

export default function SubStepViewer(props: SubStepViewerProps) {
	const border = !props.isLast ? " border-b" : "";

	return (
		<div className={"flex p-3 border-gray-300" + border}>
			<div className="flex-grow">
				<span className="font-semibold">{props.subStep.title}</span>
				<br />
				{props.subStep.description}
				{props.subStep.thenJobs?.map(value => <div>&rarr;{value}</div>)}
				{props.subStep.hint ? <span>&#9733;{props.subStep.hint}</span> : null}
			</div>
			<div className="flex-shrink-0">
				<img className="w-12 h-12 rounded" src={getPicImgUrl(props.subStep.picture)} title={props.subStep.picture} />
			</div>
		</div>
	);
}
