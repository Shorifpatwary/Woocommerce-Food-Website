import React from "react";
import logo from "../../../assets/images/res-logo.png";
import { Link } from "react-router-dom";
import Section from "../../UI/section";
import Heading_4 from "../../UI/Heading/Heading-4";
const Footer = () => {
	return (
		<footer className="footer__wrapper">
			<Section className="" rowClassName="">
				<div className="footer__top flex__center-s-b wrap">
					<div className="col__3 col__bp-3-6 col__bp-5-12">
						<div className=" footer__logo text-start">
							<img src={logo} alt="logo" />
							<Heading_4>Tasty Treat</Heading_4>
							<p>
								Lorem ipsum dolor sit amet consectetur
								adipisicing elit. Nesciunt pariatur accusamus
							</p>
						</div>
					</div>
					<div className="col__3 col__bp-3-6 col__bp-6-12">
						<Heading_4>Delivery Time</Heading_4>
						<ul className="deliver__time-list">
							<li className=" delivery__time-item border-0 ps-0">
								<span>Sunday - Thursday</span>
								<p>10:00am - 11:00pm</p>
							</li>

							<li className=" delivery__time-item border-0 ps-0">
								<span>Friday - Saturday</span>
								<p>Off day</p>
							</li>
						</ul>
					</div>

					<div className="col__3 col__bp-3-6 col__bp-6-12">
						<Heading_4>Contact</Heading_4>
						<ul className="deliver__time-list">
							<li className=" delivery__time-item border-0 ps-0">
								<p>
									Location: ZindaBazar, Sylhet-3100,
									Bangladesh
								</p>
							</li>
							<li className=" delivery__time-item border-0 ps-0">
								<span>Phone: 01712345678</span>
							</li>

							<li className=" delivery__time-item border-0 ps-0">
								<span>Email: example@gmail.com</span>
							</li>
						</ul>
					</div>

					<div className="col__3 col__bp-3-6 col__bp-6-12">
						<Heading_4>Newsletter</Heading_4>
						<p>Subscribe our newsletter</p>
						<div className="newsletter">
							<input
								type="email"
								placeholder="Enter your email"
							/>
							<span>
								<i class="ri-send-plane-line"></i>
							</span>
						</div>
					</div>
					{/* Footer bottom / copyright footer  */}
					<div className="flex__center-s-e grow wrap footer__copyright">
						<div className="col__6 col__bp-3-12">
							<p className="copyright__text">
								Copyright - 2022, website made by Muhibur
								Rahman. All Rights Reserved.
							</p>
						</div>
						<div className="col__6 col__bp-3-12 footer__social">
							<div className="social__links flex__end">
								<p className="m-0 ">Follow: </p>
								{/* <div className="col__6"> */}
								<span>
									<Link to="https://www.facebook.com/muhib160">
										<i class="ri-facebook-line"></i>
									</Link>
								</span>

								<span>
									<Link to="https://github.com/muhib160">
										<i class="ri-github-line"></i>
									</Link>
								</span>

								<span>
									<Link to=" https://www.youtube.com/c/MuhibsTechDiary">
										<i class="ri-youtube-line"></i>
									</Link>
								</span>

								<span>
									<Link to=" https://www.linkedin.com/in/muhib160/">
										<i class="ri-linkedin-line"></i>
									</Link>
								</span>
								{/* </div> */}
							</div>
						</div>
					</div>
				</div>
			</Section>
		</footer>
	);
};

export default Footer;
