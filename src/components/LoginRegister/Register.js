import React from "react";

const Register = () => {
	return (
		<div className="container d-flex align-items-center justify-content-center py-5 my-5">
			<div className="vn-login-register register p-md-5 p-4">
				<h4 className="mb-5">Register as a Volunteer</h4>
				<form action="/registerVolunteer">
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Full Name" name="name" />
					</div>
					<div className="form-group">
						<input type="email" className="form-control" placeholder="Username or Email" name="email" />
					</div>
					<div className="form-group">
						<input type="date" className="form-control" placeholder="date" name="date" />
					</div>
					<div className="form-group">
						<input type="text" className="form-control" placeholder="Description" name="description" />
					</div>
					<button type="submit" className="btn btn-primary">
						Registration
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
