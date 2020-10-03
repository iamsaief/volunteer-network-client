import React from "react";
import AddEvent from "./AddEvent";
import VolunteerList from "./VolunteerList";

const Admin = () => {
	return (
		<div>
			<VolunteerList></VolunteerList>
			<AddEvent></AddEvent>
		</div>
	);
};

export default Admin;
