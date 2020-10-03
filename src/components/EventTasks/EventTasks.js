import React from "react";
import image from "../../images/babySit.png";
import Task from "./Task";

const EventTasks = () => {
	const tasks = [
		{
			title: "Humanity More",
			date: "29 sep, 2020",
			image: image,
		},
		{
			title: "Humanity More",
			date: "29 sep, 2020",
			image: image,
		},
		{
			title: "Humanity More",
			date: "29 sep, 2020",
			image: image,
		},
		{
			title: "Humanity More",
			date: "29 sep, 2020",
			image: image,
		},
	];

	return (
		<div className="container py-5 my-5">
			<div className="vn-event-tasks">
				<div className="row">
					{tasks.map((task) => (
						<Task task={task} key={Math.random()}></Task>
					))}
				</div>
			</div>
		</div>
	);
};

export default EventTasks;
