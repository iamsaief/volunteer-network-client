import React from "react";

const Task = ({ task }) => {
	return (
		<div className="col-lg-6">
			<div className="vn-task">
				<img style={{ maxWidth: "100%", minWidth: "100px" }} src={task.image} alt="task" />
				<div className="info">
					<h5>{task.title}</h5>
					<p>{task.date}</p>
				</div>
				<button className="btn btn-secondary">Cancel</button>
			</div>
		</div>
	);
};

export default Task;
