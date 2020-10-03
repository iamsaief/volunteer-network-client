import React from "react";
import logo from "../../images/logos/google.png";

const Login = () => {
	return (
		<div className="container d-flex align-items-center justify-content-center py-5 my-5">
			<div className="vn-login-register login p-md-5 p-3">
				<h4 className="mb-5">Login With</h4>
				<button className="btn btn-outline-secondary social-login">
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
