import React, { useState } from "react";
import { useModal } from "../Providers/ModalProvider";
import "../Styles/LoginSignup.css";
import "../Styles/AddressModal.css";

const AddressModal = () => {
	const { setModalOpen, dispatchModal } = useModal();
	const [formData, setFormData] = useState({
		name: "",
		street: "",
		city: "",
		state: "",
		pincode: "",
	});
	const { name, street, city, state, pincode } = formData;

	const changeData = (e) => {
		setFormData({ ...formData, [e.target.name]: e.target.value });
	};

	const submitData = (e) => {
		dispatchModal({
			type: "UPDATE_ADDRESS",
			payload: formData,
		});
		setModalOpen(false);
		e.preventDefault();
	};

	return (
		<div className='address-modal-container flex-center'>
			<div className='address-modal'>
				<form
					className='login-signup-form flex flex-col align-center'
					onSubmit={submitData}
				>
					<div className='form-item flex flex-col align-start'>
						<input
							type='text'
							name='name'
							value={name}
							placeholder='Enter your name'
							onChange={changeData}
							required
						/>
					</div>
					<div className='form-item flex flex-col align-start'>
						<input
							type='text'
							name='street'
							value={street}
							placeholder='Enter street ex: Hudson Street'
							onChange={changeData}
							required
						/>
					</div>
					<div className='form-item flex flex-col align-start'>
						<input
							type='text'
							name='city'
							value={city}
							placeholder='Enter city ex: Hyderabad'
							onChange={changeData}
							required
						/>
					</div>
					<div className='form-item flex flex-col align-start'>
						<input
							type='text'
							name='state'
							value={state}
							placeholder='Enter state ex: Telengana'
							onChange={changeData}
							required
						/>
					</div>
					<div className='form-item flex flex-col align-start'>
						<input
							type='text'
							name='pincode'
							value={pincode}
							placeholder='Enter pincode ex: 603103'
							onChange={changeData}
							required
						/>
					</div>
					<div className='form-item form-btns flex-center'>
						<button type='submit'>Add</button>
						<button
							className='btn btn-link flex-center'
							onClick={(e) => setModalOpen(false)}
						>
							Close
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddressModal;
