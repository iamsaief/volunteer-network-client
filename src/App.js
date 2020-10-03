import React, { createContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/LoginRegister/Login";
import Register from "./components/LoginRegister/Register";
import EventTasks from "./components/EventTasks/EventTasks";
import Admin from "./components/Admin/Admin";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});

	return (
		<UserContext.Provider value={[loggedInUser, setLoggedInUser]}>
			<Router>
				<Header></Header>
				<Switch>
					<Route exact path="/">
						<Home></Home>
					</Route>
					<Route path="/login">
						<Login></Login>
					</Route>
					<Route path="/register">
						<Register></Register>
					</Route>
					<Route path="/event">
						<EventTasks></EventTasks>
					</Route>
					<Route path="/events/:taskId">
						<Register></Register>
					</Route>
					<Route path="/admin">
						<Admin></Admin>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
