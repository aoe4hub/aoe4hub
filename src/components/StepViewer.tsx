import { Civilisation, getCivPatternImg, getPicImgUrl, Resources } from '../Entities';
import { EcoBalance, Step } from '../types';
import SubStepViewer from './SubStepViewer';

interface StepViewerProps {
	step: Step
	colorIndex: number;
	civilisation?: Civilisation;
}

export default function StepViewer(props: StepViewerProps) {
	const cPerc = props.colorIndex / 30;

	const cValueR = 255 - (getCivRed(props.civilisation) * cPerc);
	const cValueG = 255 - (getCivGreen(props.civilisation) * cPerc);
	const cValueB = 255 - (getCivBlue(props.civilisation) * cPerc);

	const displayPopCount = props.step.popCount == null ? "invisible" : "";

	return (
		<div className="mb-3 flex" >
			<div className={"w-12 h-12 bg-gray-300 flex items-center justify-center mr-3 rounded flex-shrink-0 " + displayPopCount}>
				{props.step.popCount}
			</div>
			<div>
				<div className="shadow inline-block rounded bg-white" style={{width: "500px", backgroundColor: "rgb(" + cValueR + "," + cValueG + "," + cValueB + ")"}}>
					<div id="civsplash" style={{ backgroundImage: "url('" + getCivPatternImg(props.civilisation) + "')" }}>
						{props.step.subSteps?.map((value, index) => <SubStepViewer subStep={value} isLast={index + 1 == props.step.subSteps?.length} />)}
					</div>
				</div>
				{props.step.ecoBalance ? <EcoBalanceSection balance={props.step.ecoBalance} /> : null}
			</div>

		</div>
	);
}

interface EcoBalanceSectionProps {
	balance: EcoBalance;
}

function EcoBalanceSection(props: EcoBalanceSectionProps) {
	return (
		<div className="flex text-center pt-3 pb-6">
			<div className="mr-3">
				<img className="w-8 h-8 rounded" src={getPicImgUrl(Resources.Food)} />
				{props.balance.food}
			</div>
			<div className="mr-3">
				<img className="w-8 h-8 rounded" src={getPicImgUrl(Resources.Wood)} />
				{props.balance.wood}
			</div>
			<div className="mr-3">
				<img className="w-8 h-8 rounded" src={getPicImgUrl(Resources.Gold)} />
				{props.balance.gold}
			</div>
			<div className="mr-3">
				<img className="w-8 h-8 rounded" src={getPicImgUrl(Resources.Stone)} />
				{props.balance.stone}
			</div>
			<div className="mr-3">
				<img className="w-8 h-8 rounded" src={getPicImgUrl(Resources.Building)} />
				{props.balance.building}
			</div>
		</div>
	);
}

/**
 * Value should be 255 - the actual value. Confusing!
 */
function getCivRed(civ?: Civilisation) {
	switch (civ) {
		case Civilisation.Chinese: return 39;
		case Civilisation.Delhi: return 211;
		case Civilisation.English: return 38;
		case Civilisation.French: return 206;
		case Civilisation.Rus: return 56;
		default: return 39;
	}
}

function getCivGreen(civ?: Civilisation) {
	switch (civ) {
		case Civilisation.Chinese: return 167;
		case Civilisation.Delhi: return 88;
		case Civilisation.English: return 196;
		case Civilisation.French: return 79;
		case Civilisation.Rus: return 192;
		default: return 167;
	}
}

function getCivBlue(civ?: Civilisation) {
	switch (civ) {
		case Civilisation.Chinese: return 197;
		case Civilisation.Delhi: return 154;
		case Civilisation.English: return 212;
		case Civilisation.French: return 13;
		case Civilisation.Rus: return 205;
		default: return 197;
	}
}
