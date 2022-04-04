import axios from 'axios';
import { getAuth, setAuth } from './localStorage';
import {
  logInSuccess,
  notFound,
  SignUpSuccess,
  unauthorized,
  userExists,
} from './toasts';

const sendLoginReq = async (body) => {
  try {
    const response = await axios.post('/api/auth/login', body);
    setAuth(response.data.encodedToken);
    logInSuccess();
    return response.data.encodedToken;
  } catch (err) {
    err.response.status === 401 ? unauthorized() : notFound();
  }
};

const sendSignupReq = async (body) => {
  try {
    const response = await axios.post('/api/auth/signup', body);
    setAuth(response.data.encodedToken);
    SignUpSuccess();
    return response.data.encodedToken;
  } catch (err) {
    if (err.response.status === 422) {
      userExists();
    }
  }
};

const sendWishlistAddReq = async (body) => {
  try {
    const response = await axios.post(
      '/api/user/wishlist',
      { product: body },
      {
        headers: {
          authorization: getAuth(),
        },
      }
    );
    return response.data.wishlist;
  } catch (err) {
    console.log(err);
  }
};

export { sendLoginReq, sendSignupReq, sendWishlistAddReq };
