import React from "react";

const AddEvent = () => {
	const handleAddEvent = (e) => {
		e.preventDefault();
	};

	return (
		<div className="admin-add-event">
			<h5 className="display-5 py-md-4 py-0">Add event</h5>
			<div className="admin-content">
				<form action="/addEvent" onSubmit={handleAddEvent}>
					<div className="row">
						<div className="col-md-6">
							<div className="form-group">
								<label>Enter title</label>
								<input type="text" className="form-control" placeholder="Enter title" name="taskName" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Event Date</label>
								<input type="date" className="form-control" placeholder="Event Date" name="date" />
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Description</label>
								<input
									type="text"
									className="form-control"
									placeholder="Enter Description"
									name="taskDesc"
								/>
							</div>
						</div>
						<div className="col-md-6">
							<div className="form-group">
								<label>Banner</label>
								<input
									type="url"
									className="form-control"
									placeholder="Upload Banner link"
									name="img"
								/>
							</div>
						</div>
						<div className="col-md-12 col-md-12 text-right">
							<button type="submit-" className="btn btn-primary">
								submit
							</button>
						</div>
					</div>
				</form>
			</div>
		</div>
	);
};

export default AddEvent;
