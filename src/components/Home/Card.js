import React from "react";
import { Link } from "react-router-dom";

const Card = ({ task }) => {
	// console.log(task);

	return (
		<div className="col-lg-3 col-sm-6">
			<Link to={`/events/${task.taskId}`}>
				<div className="vn-works-card">
					<img style={{ maxWidth: "100%" }} src={require(`../../images/${task.img}`)} alt="task" />
					<h4>{task.title}</h4>
				</div>
			</Link>
		</div>
	);
};

export default Card;
