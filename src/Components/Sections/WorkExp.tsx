import React from "react";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Recoil/Atoms";

const WorkExp = () => {
	const darkMode = useRecoilValue(DarkMode);

	return (
		<div className="m-2">
			<ol className="border-l-2 border-pink-600">
				<li>
					<div className="flex flex-start items-center">
						<div className="bg-pink-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
						<h4
							className={
								darkMode
									? "font-semibold text-xl m-5 text-[#ccd6f6]"
									: "font-semibold text-xl m-5 text-[#0a192f]"
							}
						>
							Stint Ltd
							<br />
							Customer Support Representative
						</h4>
					</div>
					<div className="ml-9 mb-6 pb-6">
						<a className="text-pink-600 ">2021 to Present</a>
					</div>
				</li>
				<li>
					<div className="flex flex-start items-center">
						<div className="bg-pink-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
						<h4
							className={
								darkMode
									? "font-semibold text-xl m-5 text-[#ccd6f6]"
									: "font-semibold text-xl m-5 text-[#0a192f]"
							}
						>
							Maplin
							<br /> Customer service assistant
							<br />
						</h4>
					</div>
					<div className="ml-9 mb-6 pb-6">
						<a className="text-pink-600">2018 to 2019</a>
					</div>
				</li>
				<li>
					<div className="flex flex-start items-center">
						<div className="bg-pink-600 w-4 h-4 flex items-center justify-center rounded-full -ml-2 mr-3 -mt-2"></div>
						<h4
							className={
								darkMode
									? "font-semibold text-xl m-5 text-[#ccd6f6]"
									: "font-semibold text-xl m-5 text-[#0a192f]"
							}
						>
							Sainsbury's Barkingside
							<br />
							Customer Service Assistant
						</h4>
					</div>
					<div className="ml-9 mb-6 pb-6">
						<a className="text-pink-600">2014 to 2017</a>
					</div>
				</li>
			</ol>
		</div>
	);
};

export default WorkExp;
