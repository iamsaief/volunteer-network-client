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
import AdminDashboard from "./components/Admin/AdminDashboard";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";

export const UserContext = createContext();

function App() {
	const [loggedInUser, setLoggedInUser] = useState({});
	const [baseData, setBaseData] = useState({});

	const globalStates = {
		user: [loggedInUser, setLoggedInUser],
		data: [baseData, setBaseData],
	};

	/* 
	const { user, data } = useContext(UserContext);
	const [loggedInUser, setLoggedInUser] = user; 
	const [baseData, setBaseData] = data; 
	*/

	return (
		<UserContext.Provider value={globalStates}>
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
					<Route exact path="/events">
						<EventTasks></EventTasks>
					</Route>
					<PrivateRoute path="/events/:taskId">
						<Register></Register>
					</PrivateRoute>
					<Route path="/admin">
						<AdminDashboard></AdminDashboard>
					</Route>
				</Switch>
				<Footer></Footer>
			</Router>
		</UserContext.Provider>
	);
}

export default App;
