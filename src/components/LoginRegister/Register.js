import React, { useContext, useState } from "react";
import { useHistory, useParams } from "react-router-dom";
import { UserContext } from "../../App";
import { volunteerTasks } from "../../fakeData/fakeData";

const Register = () => {
	const history = useHistory();

	const { taskId } = useParams();
	const selectedTask = volunteerTasks.find((item) => item.taskId === +taskId);

	const [loggedInUser, setLoggedInUser] = useContext(UserContext);
	const [startDate, setStartDate] = useState(new Date());

	const [volunteer, setVolunteer] = useState({
		name: loggedInUser.name,
		email: loggedInUser.email,
		date: "",
		taskName: selectedTask.title,
		taskDesc: "",
		img: selectedTask.img,
	});

	const handleSubmitTask = (e) => {
		e.preventDefault();

		const newVolunteer = { ...volunteer };

		// Calling post api '/registerVolunteer'
		fetch("https://still-stream-80611.herokuapp.com/registerVolunteer", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify(newVolunteer),
		})
			.then((res) => res.json())
			.then((data) => {
				console.log(data);
				if (data) {
					history.push("/events");
				}
			})
			.catch((err) => {
				console.log(err);
			});
	};

	const handleInputValue = (e) => {
		console.log(e.target.name, e.target.value);
		const newVolunteer = { ...volunteer };
		newVolunteer[e.target.name] = e.target.value;
		if (e.target.name === "date") {
			setStartDate(e.target.value);
		}
		setVolunteer(newVolunteer);
	};

	// console.log(volunteer);

	return (
		<div className="container d-flex align-items-center justify-content-center py-5 my-5">
			<div className="vn-login-register register p-md-5 p-4">
				<h4 className="mb-5">Register as a Volunteer</h4>

				<form action="/registerVolunteer" onSubmit={handleSubmitTask}>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Full Name"
							name="name"
							value={volunteer.name}
							onChange={handleInputValue}
							required={true}
							minLength="3"
						/>
					</div>
					<div className="form-group">
						<input
							type="email"
							className="form-control"
							placeholder="Username or Email"
							name="email"
							value={volunteer.email}
							onChange={handleInputValue}
							disabled={true}
						/>
					</div>
					<div className="form-group">
						<input
							type="date"
							className="form-control"
							placeholder="date"
							name="date"
							value={startDate}
							onChange={handleInputValue}
							required={true}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Event task name"
							name="taskName"
							value={selectedTask ? selectedTask.title : "Please pick a task from home page"}
							onChange={handleInputValue}
							disabled={true}
						/>
					</div>
					<div className="form-group">
						<input
							type="text"
							className="form-control"
							placeholder="Description"
							name="taskDesc"
							onChange={handleInputValue}
						/>
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
