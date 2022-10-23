import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Home from "../components/pages/Home";
import AllFoods from "../components/pages/AllFoods";
import FoodDetails from "../components/pages/FoodDetails";
import Cart from "../components/pages/Cart";
import Checkout from "../components/pages/Checkout";
import Contact from "../components/pages/Contact";
import Login from "../components/pages/Login";
import Register from "../components/pages/Register";

const Routers = () => {
	return (
		// needs to be make theme lazy rout
		<Routes>
			<Route path="/" element={<Navigate to="/home" />} />
			<Route path="/home" element={<Home />} />
			<Route path="/foods" element={<AllFoods />} />
			<Route path="/foods/:id" element={<FoodDetails />} />
			<Route path="/cart" element={<Cart />} />
			<Route path="/checkout" element={<Checkout />} />
			<Route path="/login" element={<Login />} />
			<Route path="/register" element={<Register />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	);
};

export default Routers;
