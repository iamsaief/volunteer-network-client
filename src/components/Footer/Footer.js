import React from "react";
import "./Footer.css";

const Footer = () => {
	const year = new Date().getFullYear();
	return (
		<div className="container text-center">
			<p className="copyright-info py-2 mt-4">
				&copy; {year} | build with <span>💙 </span>
				&nbsp;by&nbsp;
				<a href="https://www.linkedin.com/in/saiefalemon/" target="_blank">
					Saief Al Emon
				</a>
			</p>
		</div>
	);
};

export default Footer;
