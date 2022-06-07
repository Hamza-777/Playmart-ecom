import React, { useState } from "react";

const FormThree = ({ displayFilter, formDataThree, setFormDataThree }) => {
	const [formThreeSym, setFormThreeSym] = useState("-");

	const resizeFormThree = (e) => {
		formThreeSym === "-" ? setFormThreeSym("+") : setFormThreeSym("-");
	};

	const { slider, lowToHigh, highToLow } = formDataThree;

	const changeFormThree = (e) => {
		setFormDataThree({
			...formDataThree,
			[e.target.name]: e.target.type !== "radio" && parseInt(e.target.value),
			lowToHigh:
				e.target.name === "lowToHigh"
					? true
					: e.target.name === "highToLow"
					? false
					: formDataThree.lowToHigh,
			highToLow:
				e.target.name === "highToLow"
					? true
					: e.target.name === "lowToHigh"
					? false
					: formDataThree.highToLow,
		});
	};

	return (
		<div
			className='form price-form'
			style={{ display: displayFilter ? "block" : "none" }}
		>
			<div className='form-header flex-center justify-between'>
				<h3 className='form-title'>Price</h3>
				<button className='btn small minimize' onClick={resizeFormThree}>
					{formThreeSym}
				</button>
			</div>
			{formThreeSym === "-" && (
				<form className='filter-form'>
					<div className='form-item slider-form flex flex-col align-start'>
						<div className='prices flex-center justify-between'>
							<span className='small'>0</span>
							<span className='small'>{slider}</span>
							<span className='small'>5,000</span>
						</div>
						<input
							type='range'
							name='slider'
							min='0'
							max='5000'
							step='100'
							value={slider}
							className='slider'
							onChange={changeFormThree}
						/>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='lowToHigh'
								type='radio'
								checked={lowToHigh}
								onChange={changeFormThree}
							/>
							<label htmlFor='radio x-small'>Low To High</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='highToLow'
								type='radio'
								checked={highToLow}
								onChange={changeFormThree}
							/>
							<label htmlFor='radio x-small'>High To Low</label>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default FormThree;
