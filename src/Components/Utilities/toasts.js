import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const addedToWishList = () =>
	toast.success("Added to wishlist successfully!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const removedFromWishList = () =>
	toast.error("Removed from wishlist successfully!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const addedToCart = () =>
	toast.success("Added to cart successfully!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const removedFromCart = () =>
	toast.error("Removed from cart successfully!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const loginToProceed = () =>
	toast.info("Please login to perform this action!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const logInSuccess = () =>
	toast.success("Logged In successfully!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const SignUpSuccess = () =>
	toast.success("Signed Up successfully!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const LogOutSuccess = () =>
	toast.success("Logged Out successfully!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const passwordsNotSame = () =>
	toast.error("Passwords do not match!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const notFound = () =>
	toast.error("No such user exists!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const unauthorized = () =>
	toast.error("Authorization denied! Wrong credentials.", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const userExists = () =>
	toast.error("User already exists!", {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});

const infoPopup = (message) => {
	toast.info(message, {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

const errorPopup = (message) => {
	toast.error(message, {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

const successPopup = (message) => {
	toast.success(message, {
		position: "top-center",
		autoClose: 3000,
		hideProgressBar: false,
		closeOnClick: true,
		pauseOnHover: true,
		draggable: true,
		progress: undefined,
	});
};

export {
	addedToWishList,
	removedFromWishList,
	addedToCart,
	removedFromCart,
	loginToProceed,
	passwordsNotSame,
	notFound,
	unauthorized,
	userExists,
	logInSuccess,
	SignUpSuccess,
	LogOutSuccess,
	infoPopup,
	successPopup,
	errorPopup,
};
