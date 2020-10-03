import React from "react";

const Card = ({ task }) => {
	return (
		<div className="col-lg-3 col-sm-6">
			<div className="vn-works-card">
				<img style={{ maxWidth: "100%" }} src={require(`../../images/${task.img}`)} alt="task" />
				<h4>{task.title}</h4>
			</div>
		</div>
	);
};

export default Card;
