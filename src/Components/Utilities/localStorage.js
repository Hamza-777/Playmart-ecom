const setAuth = (data) => {
	localStorage.setItem("auth", data);
};

const getAuth = () => {
	return localStorage.getItem("auth") ? localStorage.getItem("auth") : null;
};

const removeAuth = () => {
	localStorage.removeItem("auth");
};

const setUser = (data) => {
	localStorage.setItem("user", JSON.stringify(data));
};

const getUser = () => {
	return localStorage.getItem("user")
		? JSON.parse(localStorage.getItem("user"))
		: null;
};

const removeUser = () => {
	localStorage.removeItem("user");
};

export { setAuth, getAuth, removeAuth, setUser, getUser, removeUser };
