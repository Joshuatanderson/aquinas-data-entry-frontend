import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { AppBar } from "@mui/material";
import Header from "./components/Header";
import InputForm from "./components/InputForm";

function App() {
	return (
		<div className="App">
			<Header />
			<InputForm />
		</div>
	);
}

export default App;
