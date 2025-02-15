import React from "react";
import LoadingAnimation from "../LoadingAnimation/LoadingAnimation";

const VolunteerList = ({ tasks, deleteHandler, loader }) => {
	return (
		<div className="admin-vol-list">
			<h5 className="display-5 py-lg-4 pb-2">Volunteer register list</h5>
			<div className="admin-content">
				<table>
					<thead>
						<tr>
							<th>Name</th>
							<th>Email ID</th>
							<th>Registration Date</th>
							<th>Volunteer task</th>
							<th>Action</th>
						</tr>
					</thead>
					<tbody>
						{loader ? (
							<tr>
								<td colSpan="5">
									<LoadingAnimation></LoadingAnimation>
								</td>
							</tr>
						) : tasks.length > 0 ? (
							tasks.map((task) => (
								<tr key={task._id}>
									<td>{task.name}</td>
									<td>{task.email}</td>
									<td>{task.date}</td>
									<td>{task.title}</td>
									<td>
										<button className="btn btn-danger" onClick={() => deleteHandler(task._id)}>
											<img
												src={require("../../images/logos/trash-2.png")}
												alt="delete"
												style={{ width: "21px" }}
											/>
										</button>
									</td>
								</tr>
							))
						) : (
							<tr>
								<td colSpan="5">
									<div className="alert alert-warning text-center" role="alert">
										No task found on database
									</div>
								</td>
							</tr>
						)}
					</tbody>
				</table>
			</div>
		</div>
	);
};

export default VolunteerList;
