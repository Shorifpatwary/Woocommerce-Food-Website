import React from "react";

const Heading_4 = (props) => {
	return (
		<>
			<h4 className="_heading-4" {...props}>
				{props.children}
			</h4>
		</>
	);
};

export default Heading_4;
