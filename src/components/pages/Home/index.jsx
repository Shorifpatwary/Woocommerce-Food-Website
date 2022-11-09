import React, { useState, useEffect } from "react";
import HeadingLg from "../../UI/Heading/Heading-lg";
import heroImg from "../../../assets/images/hero.png";

import { Link } from "react-router-dom";

// import Category from "../components/UI/category/Category.jsx";

// import featureImg01 from "../../../assets/images/service-01.png";
// import featureImg02 from "../../../assets/images/service-02.png";
// import featureImg03 from "../../../assets/images/service-03.png";

// import products from "../../../assets/fake-data/products.js";

// import foodCategoryImg01 from "../../../assets/images/hamburger.png";
// import foodCategoryImg02 from "../../../assets/images/pizza.png";
// import foodCategoryImg03 from "../../../assets/images/bread.png";

// import ProductCard from "../components/UI/product-card/ProductCard.jsx";

// import whyImg from "../../../assets/images/location.png";

// import networkImg from "../../../assets/images/network.png";

// import TestimonialSlider from "../components/UI/slider/TestimonialSlider.jsx";

import Section from "../../UI/Section";
import ButtonPrimary from "../../UI/Button/Primary";
import ButtonOutline from "../../UI/Button/BtnOutline";
import Paragraph from "../../UI/Paragraph";

// const featureData = [
// 	{
// 	  title: "Quick Delivery",
// 	  imgUrl: featureImg01,
// 	  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
// 	},

// 	{
// 	  title: "Super Dine In",
// 	  imgUrl: featureImg02,
// 	  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
// 	},
// 	{
// 	  title: "Easy Pick Up",
// 	  imgUrl: featureImg03,
// 	  desc: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minus, doloremque.",
// 	},
//   ];
const Home = (props) => {
	useEffect(() => {
		document.title = "Food ordering app -";
	}, []);

	return (
		<Section className="home__hero_wrapper">
			<div className="home__hero-content flex__center wrap">
				<div className="col__6 col__bp-4-12">
					<div className="hero__content flex__column-start gap__2">
						<h5 className="">Easy way to make an order</h5>
						<HeadingLg>
							<span>HUNGRY?</span> Just wait <br /> food at
							<span> your door</span>
						</HeadingLg>

						<Paragraph>
							Lorem ipsum dolor sit amet, consectetur adipisicing
							elit. Qui magni delectus tenetur autem, sint
							veritatis!
						</Paragraph>
						<div className="flex__center gap__2">
							<ButtonPrimary className="flex__center">
								Order now
								<i className="ri-arrow-right-s-line"></i>
							</ButtonPrimary>

							<ButtonOutline>
								<Link to="/foods">See all foods</Link>
							</ButtonOutline>
						</div>

						<div className="hero__service d__flex wrap gap__2 ">
							<p className="d__flex gap__1 ">
								<span className="shipping__icon">
									<i class="ri-car-line"></i>
								</span>
								No shipping charge
							</p>

							<p className="d__flex gap__1 ">
								<span className="shipping__icon">
									<i class="ri-shield-check-line"></i>
								</span>
								100% secure checkout
							</p>
						</div>
					</div>
				</div>

				<div className="col__6 col__bp-4-12">
					<div className="hero__img">
						<img src={heroImg} alt="hero-img" className="w-100" />
					</div>
				</div>
			</div>
		</Section>
	);
};

export default Home;
