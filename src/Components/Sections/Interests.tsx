//@ts-nocheck
import FlatList from "flatlist-react";
import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import UFC from "../../Data/Interests/UFC.mp4";
import Health from "../../Data/Interests/Health.mp4";
import Gaming from "../../Data/Interests/Gaming.mp4";
import Travel from "../../Data/Interests/Travel.mp4";
import Basketball from "../../Data/Interests/Basketball.mp4";
import Music from "../../Data/Interests/Music.mp4";
import PCBuilding from "../../Data/Interests/PCBuilding.mp4";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Recoil/Atoms";

const responsive = {
	superLargeDesktop: {
		// the naming can be any, depends on you.
		breakpoint: { max: 4000, min: 3000 },
		items: 5,
	},
	desktop: {
		breakpoint: { max: 3000, min: 1024 },
		items: 3,
	},
	tablet: {
		breakpoint: { max: 1024, min: 464 },
		items: 2,
	},
	mobile: {
		breakpoint: { max: 464, min: 0 },
		items: 1,
	},
};

const Interests = () => {
	const darkMode = useRecoilValue(DarkMode);

	return (
		<div className="m-2">
			<Carousel responsive={responsive}>
				<div className="flex justify-center p-2 m-2">
					<div
						className={
							darkMode
								? "rounded-lg shadow-lg bg-white max-w-sm"
								: "rounded-lg shadow-lg bg-[#0a192f] max-w-sm"
						}
					>
						<video src={UFC} autoPlay loop />
						<div className="p-6">
							<h5
								className={
									darkMode
										? "text-xl font-medium mb-2 text-[#0a192f]"
										: "text-xl font-medium mb-2 text-[#ccd6f6]"
								}
							>
								UFC
							</h5>
						</div>
					</div>
				</div>

				<div className="flex justify-center p-2 m-2">
					<div
						className={
							darkMode
								? "rounded-lg shadow-lg bg-white max-w-sm"
								: "rounded-lg shadow-lg bg-[#0a192f] max-w-sm"
						}
					>
						<video src={Health} autoPlay loop />
						<div className="p-6">
							<h5
								className={
									darkMode
										? "text-xl font-medium mb-2 text-[#0a192f]"
										: "text-xl font-medium mb-2 text-[#ccd6f6]"
								}
							>
								Health & fitness
							</h5>
						</div>
					</div>
				</div>

				<div className="flex justify-center p-2 m-2">
					<div
						className={
							darkMode
								? "rounded-lg shadow-lg bg-white max-w-sm"
								: "rounded-lg shadow-lg bg-[#0a192f] max-w-sm"
						}
					>
						<video src={Gaming} autoPlay loop />
						<div className="p-6">
							<h5
								className={
									darkMode
										? "text-xl font-medium mb-2 text-[#0a192f]"
										: "text-xl font-medium mb-2 text-[#ccd6f6]"
								}
							>
								Gaming
							</h5>
						</div>
					</div>
				</div>

				<div className="flex justify-center p-2 m-2">
					<div
						className={
							darkMode
								? "rounded-lg shadow-lg bg-white max-w-sm"
								: "rounded-lg shadow-lg bg-[#0a192f] max-w-sm"
						}
					>
						<video src={Travel} autoPlay loop />
						<div className="p-6">
							<h5
								className={
									darkMode
										? "text-xl font-medium mb-2 text-[#0a192f]"
										: "text-xl font-medium mb-2 text-[#ccd6f6]"
								}
							>
								Traveling
							</h5>
						</div>
					</div>
				</div>

				<div className="flex justify-center p-2 m-2">
					<div
						className={
							darkMode
								? "rounded-lg shadow-lg bg-white max-w-sm"
								: "rounded-lg shadow-lg bg-[#0a192f] max-w-sm"
						}
					>
						<video src={Basketball} autoPlay loop />
						<div className="p-6">
							<h5
								className={
									darkMode
										? "text-xl font-medium mb-2 text-[#0a192f]"
										: "text-xl font-medium mb-2 text-[#ccd6f6]"
								}
							>
								Basketball
							</h5>
						</div>
					</div>
				</div>

				<div className="flex justify-center p-2 m-2">
					<div
						className={
							darkMode
								? "rounded-lg shadow-lg bg-white max-w-sm"
								: "rounded-lg shadow-lg bg-[#0a192f] max-w-sm"
						}
					>
						<video src={Music} autoPlay loop />
						<div className="p-6">
							<h5
								className={
									darkMode
										? "text-xl font-medium mb-2 text-[#0a192f]"
										: "text-xl font-medium mb-2 text-[#ccd6f6]"
								}
							>
								Music
							</h5>
						</div>
					</div>
				</div>

				<div className="flex justify-center p-2 m-2">
					<div
						className={
							darkMode
								? "rounded-lg shadow-lg bg-white max-w-sm"
								: "rounded-lg shadow-lg bg-[#0a192f] max-w-sm"
						}
					>
						<video src={PCBuilding} autoPlay loop />
						<div className="p-6">
							<h5
								className={
									darkMode
										? "text-xl font-medium mb-2 text-[#0a192f]"
										: "text-xl font-medium mb-2 text-[#ccd6f6]"
								}
							>
								PC Building
							</h5>
						</div>
					</div>
				</div>
			</Carousel>
		</div>
	);
};

export default Interests;
