import React, { useState } from "react";

const FormTwo = ({ displayFilter, formDataTwo, setFormDataTwo }) => {
	const [formTwoSym, setFormTwoSym] = useState("-");

	const resizeFormTwo = (e) => {
		formTwoSym === "-" ? setFormTwoSym("+") : setFormTwoSym("-");
	};

	const { aboveFour, aboveThree, aboveTwo, aboveOne } = formDataTwo;

	const changeFormTwo = (e) => {
		if (e.target.name === "aboveFour") {
			setFormDataTwo({
				...formDataTwo,
				[e.target.name]: e.target.checked,
				aboveOne: false,
				aboveTwo: false,
				aboveThree: false,
			});
		} else if (e.target.name === "aboveThree") {
			setFormDataTwo({
				...formDataTwo,
				[e.target.name]: e.target.checked,
				aboveOne: false,
				aboveTwo: false,
				aboveFour: false,
			});
		} else if (e.target.name === "aboveTwo") {
			setFormDataTwo({
				...formDataTwo,
				[e.target.name]: e.target.checked,
				aboveOne: false,
				aboveThree: false,
				aboveFour: false,
			});
		} else if (e.target.name === "aboveOne") {
			setFormDataTwo({
				...formDataTwo,
				[e.target.name]: e.target.checked,
				aboveTwo: false,
				aboveThree: false,
				aboveFour: false,
			});
		}
	};
	return (
		<div
			className='form rating-form'
			style={{ display: displayFilter ? "block" : "none" }}
		>
			<div className='form-header flex-center justify-between'>
				<h3 className='form-title'>Rating</h3>
				<button className='btn small minimize' onClick={resizeFormTwo}>
					{formTwoSym}
				</button>
			</div>
			{formTwoSym === "-" && (
				<form className='filter-form'>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='aboveFour'
								type='radio'
								checked={aboveFour}
								onChange={changeFormTwo}
							/>
							<label htmlFor='radio x-small'>4 Stars & Above</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='aboveThree'
								type='radio'
								checked={aboveThree}
								onChange={changeFormTwo}
							/>
							<label htmlFor='radio x-small'>3 Stars & Above</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='aboveTwo'
								type='radio'
								checked={aboveTwo}
								onChange={changeFormTwo}
							/>
							<label htmlFor='radio x-small'>2 Stars & Above</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='aboveOne'
								type='radio'
								checked={aboveOne}
								onChange={changeFormTwo}
							/>
							<label htmlFor='radio x-small'>1 Star & Above</label>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default FormTwo;
