import React, { useState } from 'react';
import { useModal } from '../Providers/ModalProvider';
import '../Styles/LoginSignup.css';
import '../Styles/AddressModal.css';

const AddressModal = () => {
  const { setModalOpen, dispatchModal } = useModal();
  const [formData, setFormData] = useState({
    name: '',
    street: '',
    city: '',
    state: '',
    pincode: '',
  });
  const { name, street, city, state, pincode } = formData;

  const changeData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const submitData = (e) => {
    dispatchModal({
      type: 'UPDATE_ADDRESS',
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
            <label htmlFor='name'>Name</label>
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
            <label htmlFor='street'>Street</label>
            <input
              type='text'
              name='street'
              value={street}
              placeholder='Enter street'
              onChange={changeData}
              required
            />
          </div>
          <div className='form-item flex flex-col align-start'>
            <label htmlFor='city'>City</label>
            <input
              type='text'
              name='city'
              value={city}
              placeholder='Enter city'
              onChange={changeData}
              required
            />
          </div>
          <div className='form-item flex flex-col align-start'>
            <label htmlFor='state'>State</label>
            <input
              type='text'
              name='state'
              value={state}
              placeholder='Enter state'
              onChange={changeData}
              required
            />
          </div>
          <div className='form-item flex flex-col align-start'>
            <label htmlFor='pincode'>Pincode</label>
            <input
              type='text'
              name='pincode'
              value={pincode}
              placeholder='Enter pincode'
              onChange={changeData}
              required
            />
          </div>
          <div className='form-item flex-center flex-col'>
            <input type='submit' value='Add' />
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
