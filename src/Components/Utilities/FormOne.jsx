import React, { useState } from "react";

const FormOne = ({ displayFilter, formDataOne, setFormDataOne }) => {
	const [formOneSym, setFormOneSym] = useState("-");

	const resizeFormOne = (e) => {
		formOneSym === "-" ? setFormOneSym("+") : setFormOneSym("-");
	};

	const {
		openWorld,
		actionAdventure,
		rts,
		rolePlaying,
		survival,
		horror,
		party,
	} = formDataOne;

	const changeFormOne = (e) => {
		setFormDataOne({ ...formDataOne, [e.target.name]: e.target.checked });
	};

	return (
		<div
			className='form collection-form'
			style={{ display: displayFilter ? "block" : "none" }}
		>
			<div className='form-header flex-center justify-between'>
				<h3 className='form-title'>Collection</h3>
				<button className='btn small minimize' onClick={resizeFormOne}>
					{formOneSym}
				</button>
			</div>
			{formOneSym === "-" && (
				<form className='filter-form'>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='openWorld'
								type='checkbox'
								checked={openWorld}
								onChange={changeFormOne}
							/>
							<label htmlFor='password x-small'>Open World</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='actionAdventure'
								type='checkbox'
								checked={actionAdventure}
								onChange={changeFormOne}
							/>
							<label htmlFor='password x-small'>Action-Adventure</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='rts'
								type='checkbox'
								checked={rts}
								onChange={changeFormOne}
							/>
							<label htmlFor='password x-small'>RTS</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='rolePlaying'
								type='checkbox'
								checked={rolePlaying}
								onChange={changeFormOne}
							/>
							<label htmlFor='password x-small'>Role-Playing</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='survival'
								type='checkbox'
								checked={survival}
								onChange={changeFormOne}
							/>
							<label htmlFor='password x-small'>Survival</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='horror'
								type='checkbox'
								checked={horror}
								onChange={changeFormOne}
							/>
							<label htmlFor='password x-small'>Horror</label>
						</div>
					</div>
					<div className='form-item flex flex-col align-start misc-inputs'>
						<div className='remember'>
							<input
								name='party'
								type='checkbox'
								checked={party}
								onChange={changeFormOne}
							/>
							<label htmlFor='password x-small'>Party</label>
						</div>
					</div>
				</form>
			)}
		</div>
	);
};

export default FormOne;
