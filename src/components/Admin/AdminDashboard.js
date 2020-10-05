import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddEvent from "./AddEvent";
import VolunteerList from "./VolunteerList";

const AdminDashboard = () => {
	const [volunteerList, setVolunteerList] = useState([]);

	const [toggleView, setToggleView] = useState({
		showList: true,
		showAddEvent: false,
	});

	useEffect(() => {
		if (toggleView.showList) {
			fetch("https://still-stream-80611.herokuapp.com/loadVolunteerList")
				.then((res) => res.json())
				.then((data) => setVolunteerList(data));
		}
	}, []);

	const handleListView = () => {
		setToggleView({
			...toggleView,
			showList: true,
			showAddEvent: false,
		});
	};

	const handleAddEventView = () => {
		setToggleView({
			...toggleView,
			showList: false,
			showAddEvent: true,
		});
	};

	const style = {
		primary: {
			color: "#3f90fc",
		},
		default: {
			color: "#000000",
		},
	};

	const handleDeleteEvent = (id) => {
		if (window.confirm("Are you sure to delete this task permanently?")) {
			console.log("delete clicked", id);
			fetch(`https://still-stream-80611.herokuapp.com/admin/deleteTask/${id}`, {
				method: "DELETE",
			})
				.then((res) => res.json())
				.then((result) => {
					console.log(result, "Task deleted ⚠️");
					if (result) {
						const newVolList = volunteerList.filter((task) => task._id !== id);
						setVolunteerList(newVolList);
					}
				});
		}
	};

	return (
		<div className="container-fluid">
			<div className="vn-admin-dashboard px-lg-5 px-0">
				<div className="row">
					<div className="col-lg-3">
						<div className="admin-controls py-3 d-flex flex-lg-column">
							<button
								className="btn"
								onClick={handleListView}
								style={toggleView.showList ? style.primary : style.default}
							>
								<img
									src={require("../../images/logos/users-alt.png")}
									style={{ maxWidth: "17px" }}
									alt=""
								/>
								<span>Volunteer register list</span>
							</button>
							<button
								className="btn"
								onClick={handleAddEventView}
								style={toggleView.showAddEvent ? style.primary : style.default}
							>
								<img src={require("../../images/logos/plus.png")} style={{ maxWidth: "17px" }} alt="" />
								<span>Add event</span>
							</button>
						</div>
					</div>
					<div className="col-lg-9">
						{toggleView.showList && (
							<VolunteerList tasks={volunteerList} deleteHandler={handleDeleteEvent}></VolunteerList>
						)}
						{toggleView.showAddEvent && <AddEvent></AddEvent>}
					</div>
				</div>
			</div>
		</div>
	);
};

export default AdminDashboard;
