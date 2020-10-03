import React from "react";
import { volunteerTasks } from "../../fakeData/fakeData";
import Card from "./Card";

const Home = () => {
	const tasks = volunteerTasks;

	return (
		<main className="vn-home pt-5 mt-2">
			<div className="container text-center">
				<div className="vn-works-search">
					<h2 className="display-5 mb-4">I grow by helping people in need.</h2>
					<div className="form-group">
						<input type="search" placeholder="Search ... " className="form-control" />
						<button className="btn btn-primary" type="button" id="button-addon2">
							Search
						</button>
					</div>
				</div>
				<div className="vn-works py-5 mt-2">
					<div className="row">
						{tasks.map((task) => (
							<Card task={task} key={task.taskId}></Card>
						))}
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;
