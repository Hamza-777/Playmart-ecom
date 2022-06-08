import React from "react";
import { Link, useLocation } from "react-router-dom";
import "../Styles/Footer.css";

const Footer = () => {
	const location = useLocation().pathname;
	const scrollToTop = (e) => {
		document.body.scrollTop = 0;
		document.documentElement.scrollTop = 0;
	};

	return (
		<footer className='footer'>
			{location !== "/login" && location !== "/signup" && (
				<div className='btn to-top flex-center' onClick={scrollToTop}>
					Back To Top
				</div>
			)}
			<div className='footer-nav flex align-start justify-around'>
				<div className='footer-nav-item flex-center flex-col align-start'>
					<h3>Products We Offer</h3>
					<div className='footer-list flex-center flex-col align-start'>
						<a href='!#' className='footer-item'>
							Video Games
						</a>
					</div>
				</div>
				<div className='footer-nav-item flex-center flex-col align-start'>
					<h3>Get to know us</h3>
					<div className='footer-list flex-center flex-col align-start'>
						<a href='!#' className='footer-item'>
							About Us
						</a>
						<a href='!#' className='footer-item'>
							Contact Us
						</a>
						<a href='!#' className='footer-item'>
							Press
						</a>
					</div>
				</div>
				<div className='footer-nav-item flex-center flex-col align-start'>
					<h3>Help</h3>
					<div className='footer-list flex-center flex-col align-start'>
						<a href='!#' className='footer-item'>
							Payment
						</a>
						<a href='!#' className='footer-item'>
							Shipping
						</a>
						<a href='!#' className='footer-item'>
							Cancellation & return
						</a>
						<a href='!#' className='footer-item'>
							FAQ
						</a>
					</div>
				</div>
				<div className='footer-nav-item flex-center flex-col align-start'>
					<h3>Social</h3>
					<div className='footer-list flex-center flex-col align-start'>
						<a href='!#' className='footer-item'>
							<i className='fa-brands fa-facebook-square'></i>
						</a>
						<a href='!#' className='footer-item'>
							<i className='fa-brands fa-twitter-square'></i>
						</a>
						<a href='!#' className='footer-item'>
							<i className='fa-brands fa-instagram-square'></i>
						</a>
					</div>
				</div>
			</div>
			<Link to='/' className='logo'>
				<p>&copy; 2022 PlayMart</p>
			</Link>
		</footer>
	);
};

export default Footer;
