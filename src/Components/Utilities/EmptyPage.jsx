import React from 'react';
import { Link } from 'react-router-dom';
import '../Styles/EmptyPage.css';

const EmptyPage = ({ page }) => {
    return (
        <div className='empty-page'>
            <img src='/img/empty.jpg' alt='empty page' />
            <div className='on-top flex-center flex-col'>
                <h1 className='black'>Your {page} is empty...</h1>
                <Link to='/product-listing' className='black back'>Start adding to your {page} <i className="fa-solid fa-arrow-right-long"></i></Link>
            </div>
        </div>
    )
}

export default EmptyPage;