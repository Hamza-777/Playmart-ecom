import React, { Fragment } from 'react';

const Spinner = () => {
    return (
        <Fragment>
            <img
                src='/img/spinner.gif'
                style={{ width: '20rem', margin: 'auto', display: 'block' }}
                alt='Loading...'
            />
        </Fragment>
    )
}

export default Spinner;