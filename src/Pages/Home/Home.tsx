import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Recoil/Atoms";

const Home = () => {
	const navigate = useNavigate();

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
				<p className="text-pink-600 text-4xl">Hi, my name is</p>

				<h1
					className={
						darkMode
							? "text-4xl sm:text-7xl font-bold text-[#ccd6f6]"
							: "text-4xl sm:text-7xl font-bold text-[#0a192f]"
					}
				>
					Perry Matovu
				</h1>

				<p
					className={
						darkMode
							? "text-[#ccd6f6] py-4 max-w-[700px]"
							: "text-[#0a192f] py-4 max-w-[700px]"
					}
				>
					I fell in love with programming and I have at least learnt something,
					I think… 🤷‍♂️
					<br />
					<br />I am currently learning
					<i>
						<b className={
						darkMode
							? "text-[#ccd6f6]"
							: "text-[#0a192f]"
					}> Javascript</b>
					<p>as well as </p>
						<b className={
						darkMode
							? "text-[#ccd6f6]"
							: "text-[#0a192f]"
					}> AWS & Firebase services </b>
					</i>
					<br />
					<br />
					My field of Interest's are building new
					<i>
						<b className={
						darkMode
							? "text-[#ccd6f6]"
							: "text-[#0a192f]"
					}> Web Technologies and Products </b>{" "}
						and also in areas related to
						<b className={
						darkMode
							? "text-[#ccd6f6]"
							: "text-[#0a192f]"
					}>
							{" "}
							Game development and App building.
						</b>
					</i>
					<br />
					<br />
					Whenever possible, I also apply my passion for developing products
					with
					<i>
						<b className={
						darkMode
							? "text-[#ccd6f6]"
							: "text-[#0a192f]"
					}>
							{" "}
							Modern Javascript Library and Frameworks
						</b>
					</i>{" "}
					like
					<i>
						<b className={
						darkMode
							? "text-[#ccd6f6]"
							: "text-[#0a192f]"
					}> React.js and React Native</b>
					</i>
				</p>
				<div className="card-actions justify-start">
					<button
						onClick={() => navigate("projects")}
						className={darkMode ? "rounded-lg text-[#ccd6f6] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600 hover:text-white" : "rounded-lg text-[#0a192f] group border-pink-600 border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"}
					>
						View Work
						<span className="group-hover:rotate-90 duration-300"></span>
					</button>
					<button className={darkMode ? "rounded-lg text-[#ccd6f6] group border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600" : "rounded-lg text-[#0a192f] group border-pink-600 border-2 px-6 py-3 my-2 flex items-center hover:bg-pink-600 hover:border-pink-600"}>
						My CV
						<span className="group-hover:rotate-90 duration-300"></span>
					</button>
				</div>
			</div>
		</div>
	);
};

export default Home;
