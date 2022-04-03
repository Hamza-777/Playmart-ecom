import React from 'react';
import { useModal } from '../Providers/ModalProvider';
import AddressModal from './AddressModal';

const Address = () => {
  const {
    modalOpen,
    setModalOpen,
    modalState: {
      address: { name, street, city, state, pincode },
    },
  } = useModal();

  return (
    <div className='address flex-center justify-between'>
      <div className='address-left flex-center flex-col align-start'>
        <p className='h4'>Deliver To:</p>
        {name && <p className='small'>{name}</p>}
        {street && city && state && pincode && (
          <p className='small'>
            {street}, {city}, {state}-{pincode}
          </p>
        )}
      </div>
      <div className='address-right'>
        <button
          className='btn btn-link flex-center'
          onClick={(e) => setModalOpen(true)}
        >
          Edit
        </button>
      </div>
      {modalOpen ? <AddressModal /> : ''}
    </div>
  );
};

export default Address;
