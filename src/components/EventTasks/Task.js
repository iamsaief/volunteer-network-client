import React from "react";

const Task = ({ task, deleteTask }) => {
	return (
		<div className="col-lg-6">
			<div className="vn-task">
				<img
					style={{ maxWidth: "100%", minWidth: "100px" }}
					src={require(`../../images/${task.img}`)}
					alt="task"
				/>
				<div className="info">
					<h5>{task.taskName}</h5>
					<p>{task.date}</p>
				</div>
				<button className="btn btn-secondary" onClick={() => deleteTask(task._id)}>
					Cancel
				</button>
			</div>
		</div>
	);
};

export default Task;
