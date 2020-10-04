import React, { useContext } from "react";
import logo from "../../images/logos/google.png";
import * as firebase from "firebase/app";
import "firebase/auth";
import { firebaseConfig } from "../../config/firebaseConfig";
import { UserContext } from "../../App";
import { useHistory, useLocation } from "react-router-dom";

const Login = () => {
	const [loggedInUser, setLoggedInUser] = useContext(UserContext);

	/* Route redirects after login */
	const history = useHistory();
	const location = useLocation();
	const { from } = location.state || { from: { pathname: "/events" } };

	// Initialize Firebase
	if (!firebase.apps.length) {
		firebase.initializeApp(firebaseConfig);
	}
	/* GOOGLE Sign in */
	const handleGoogleSignIn = () => {
		const provider = new firebase.auth.GoogleAuthProvider();

		firebase
			.auth()
			.signInWithPopup(provider)
			.then(function(result) {
				const { displayName, email } = result.user;
				const newUser = {
					isLoggedIn: true,
					name: displayName,
					email: email,
				};
				setLoggedInUser(newUser);
				history.replace(from);

				console.log(newUser);
			})
			.catch(function(error) {
				console.log(error.message);
			});
	};

	return (
		<div className="container d-flex align-items-center justify-content-center py-5 my-5">
			<div className="vn-login-register login p-md-5 p-3">
				<h4 className="mb-5">Login With</h4>
				<button className="btn btn-outline-secondary social-login" onClick={handleGoogleSignIn}>
					<img src={logo} alt="" />
					Continue with Google
				</button>
				<h5 className="mt-3">
					<span>Don’t have an account?</span>
					<a href="/">Create an account</a>
				</h5>
			</div>
		</div>
	);
};

export default Login;
