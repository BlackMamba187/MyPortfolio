import React from "react";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Recoil/Atoms";

import Pic from "../../Data/Profile/Pic.png"

const Contact = () => {
	const darkMode = useRecoilValue(DarkMode);

	return (
		<div
			className={
				darkMode
					? "w-full h-screen bg-[#0a192f]"
					: "w-full h-screen bg-[#ffffff]"
			}
		>
			{/* Container */}
			<div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
				<div className="hero-content text-center text-neutral-content">
					<div className="max-w-md">
						<div className="hero min-h-screen">
							<div className="hero-content flex-col lg:flex-row-reverse">
								<div className="avatar">
									<div className="rounded-full">
										<img src={Pic} />
									</div>
								</div>
								<div>
									<h1 className="text-5xl font-bold text-pink-600">
										Contact Me
									</h1>
									<p
										className={
											darkMode
												? "text-[#ccd6f6] py-4 mb-5"
												: "text-[#0a192f] py-4 mb-5"
										}
									>
										Phone number: <br /> +44 73 78 67 63 63
										<br />
										<br />
										Email: <br />
										pmatovu12@hotmail.co.uk
										<br />
										<br />
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Contact;
