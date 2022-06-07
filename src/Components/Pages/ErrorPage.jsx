import React from "react";
import "../Styles/ErrorPage.css";

const ErrorPage = () => {
	return (
		<div className='error-page'>
			<img src='/img/errorimg.jpg' alt='error page' />
			<div className='on-top flex-center flex-col'>
				<h1 className='green'>404</h1>
				<p className='green'>Now, where do you think you are going ?</p>
			</div>
		</div>
	);
};

export default ErrorPage;
