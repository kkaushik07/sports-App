import React from "react";

const SubscribeForm = () => {
	return (
		<div className="head-img">
			<div className="hero d-flex">

				<div className="hero-box text-center">
					<h2 className="hero-title">
						Be billionaire
						<br/>
						<lable>With</lable><br />
						<span>Sports Casino</span>
					</h2>
				</div>


				<div className="box d-flex">
					<h2>Sports + Casino = <strong>Billionaire</strong>
						<small className="clr-w">Be Billionaire With Sports Casino</small>
					</h2>
					<div>
						<div>
							<input type="text" placeholder="Enter your email address..." />
							<span >
								<button type="button">Subscribe!</button>
							</span>
						</div>
					</div>
				</div>

			</div>
		</div>
	)
}

export default SubscribeForm