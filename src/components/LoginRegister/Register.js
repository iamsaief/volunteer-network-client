import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { volunteerTasks } from "../../fakeData/fakeData";

const Register = () => {
	const { taskId } = useParams();
	const selectedTask = volunteerTasks.find((item) => item.taskId === +taskId);

	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [startDate, setStartDate] = useState(new Date());

	const handleSubmitTask = (e) => {
		e.preventDefault();

		const newVolunteer = {
			name: loggedInUser.name,
			email: loggedInUser.email,
			date: startDate,
			taskName: selectedTask.title,
		};

		// Calling post api '/registerVolunteer'
		fetch("http://localhost:5000/registerVolunteer", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newVolunteer),
		})
			.then((res) => res.json())
			.then((data) => console.log(data));
	};

	const handleAddTask = () => {
		// console.log("add task");
	};

	return (
		<div className="container d-flex align-items-center justify-content-center py-5 my-5">
			<div className="vn-login-register register p-md-5 p-4">
				<h4 className="mb-5">Register as a Volunteer</h4>

				<form action="/registerVolunteer" method="post" onSubmit={handleSubmitTask}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="name"
							defaultValue={loggedInUser.name}
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							placeholder="Username or Email"
							name="email"
							defaultValue={loggedInUser.email}
						/>
					</div>
					<div className="form-group">
						<input
							type="date"
							className="form-control"
							placeholder="date"
							name="date"
							defaultValue={startDate}
							onChange={(e) => setStartDate(e.target.value)}
							required={true}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Description"
							name="description"
							defaultValue={selectedTask ? selectedTask.title : "Please pick a task from home page"}
						/>
					</div>
					<button type="submit" className="btn btn-primary" onClick={handleAddTask}>
						Registration
					</button>
				</form>
			</div>
		</div>
	);
};

export default Register;
