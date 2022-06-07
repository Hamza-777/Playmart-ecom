import React, { useState, useEffect } from "react";
import FormOne from "../Utilities/FormOne";
import FormTwo from "../Utilities/FormTwo";
import FormThree from "../Utilities/FormThree";

const FilterForms = ({
	dispatchState,
	products,
	setDisplayFilter,
	displayFilter,
}) => {
	const [formDataOne, setFormDataOne] = useState({
		openWorld: true,
		actionAdventure: true,
		rts: true,
		rolePlaying: true,
		survival: true,
		horror: true,
		party: true,
	});
	const [formDataTwo, setFormDataTwo] = useState({
		aboveFour: false,
		aboveThree: false,
		aboveTwo: false,
		aboveOne: false,
	});
	const [formDataThree, setFormDataThree] = useState({
		slider: 5000,
		lowToHigh: false,
		highToLow: false,
	});

	const {
		openWorld,
		actionAdventure,
		rts,
		rolePlaying,
		survival,
		horror,
		party,
	} = formDataOne;
	const { aboveFour, aboveThree, aboveTwo, aboveOne } = formDataTwo;
	const { slider, lowToHigh, highToLow } = formDataThree;

	const resetForms = (e) => {
		setFormDataOne({
			...formDataOne,
			openWorld: true,
			actionAdventure: true,
			rts: true,
			rolePlaying: true,
			survival: true,
			horror: true,
			party: true,
		});
		setFormDataTwo({
			...formDataTwo,
			aboveOne: false,
			aboveTwo: false,
			aboveThree: false,
			aboveFour: false,
		});
		setFormDataThree({
			...formDataThree,
			slider: 5000,
			lowToHigh: false,
			highToLow: false,
		});
	};

	useEffect(() => {
		dispatchState({
			type: "FILTER_PRODUCTS",
			payload: {
				lowToHigh,
				highToLow,
				slider,
				starValue: aboveFour
					? 4
					: aboveThree
					? 3
					: aboveTwo
					? 2
					: aboveOne
					? 1
					: 0,
				openWorld,
				actionAdventure,
				rts,
				rolePlaying,
				survival,
				horror,
				party,
				products,
			},
		});
	}, [
		lowToHigh,
		highToLow,
		slider,
		aboveOne,
		aboveTwo,
		aboveThree,
		aboveFour,
		openWorld,
		actionAdventure,
		rts,
		rolePlaying,
		survival,
		horror,
		party,
		products,
		dispatchState,
	]);

	return (
		<aside className='form-container-filter flex flex-col'>
			<div className='filter-header flex-center justify-between'>
				<h2 className='header-title'>Filter By</h2>
				<button
					className='btn small clear toggle-filter'
					onClick={(e) => setDisplayFilter(!displayFilter)}
				>
					toggle filter
				</button>
				<button className='btn small clear' onClick={resetForms}>
					Clear All
				</button>
			</div>
			<hr className='rule' />
			<FormOne
				displayFilter={displayFilter}
				formDataOne={formDataOne}
				setFormDataOne={setFormDataOne}
			/>
			<FormTwo
				displayFilter={displayFilter}
				formDataTwo={formDataTwo}
				setFormDataTwo={setFormDataTwo}
			/>
			<FormThree
				displayFilter={displayFilter}
				formDataThree={formDataThree}
				setFormDataThree={setFormDataThree}
			/>
		</aside>
	);
};

export default FilterForms;
