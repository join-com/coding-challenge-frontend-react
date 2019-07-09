import React from 'react';
import logo from "assets/departmentofberlin.png";

const InnerHeader = () => {
	return (
		<React.Fragment>
			<div className="col-md-12">
				<div className="row">
					<div className="col-lg-1 col-xl-1"><img src={logo} /></div>
					<div className="col-lg-7 col-xl-6">
						<h1>Police department of Berlin </h1>
						<h4>Stolen bikes</h4>
					</div>
				</div>
				<div></div>
			</div>
			<div className="col-lg-12 or-col">
				<hr />
			</div>
		</React.Fragment>
	);
}

export default InnerHeader;