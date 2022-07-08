
import { useRecoilValue } from "recoil";
import Education from "../../Components/Sections/Education";
import Goals from "../../Components/Sections/Goals";
import Interests from "../../Components/Sections/Interests";
import WorkExp from "../../Components/Sections/WorkExp";
import { DarkMode, NavbarOpen } from "../../Recoil/Atoms";

const About = () => {
	const nav = useRecoilValue(NavbarOpen);

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
				<div className="self-center mt-20">
					<p
						className={
							darkMode
								? "text-2xl font-bold text-[#ccd6f6]"
								: "text-2xl font-bold text-[#0a192f]"
						}
					>
						{" "}
						About me
					</p>
				</div>
				<div className="overflow-auto scrollbar-hide py-5 ">
					<div className="py-2"></div>
					<div className="self-center mt-20">
						<p
							className={
								darkMode
									? "text-2xl font-bold text-[#ccd6f6]"
									: "text-2xl font-bold text-[#0a192f]"
							}
						>
							{" "}
							Education
						</p>
					</div>
					<div className="py-5 "></div>
					<div className="p-5 m-2 rounded-lg border-2 border-pink-600">
						<Education />
					</div>
					<div className="divider py-5"></div>
					<div className="self-center mt-20">
						<p
							className={
								darkMode
									? "text-2xl font-bold text-[#ccd6f6]"
									: "text-2xl font-bold text-[#0a192f]"
							}
						>
							{" "}
							Work Experience
						</p>
					</div>
					<div className=" py-5 "></div>
					<div className="p-5 m-2 rounded-lg border-2 border-pink-600">
						<WorkExp />
					</div>
					<div className="divider py-5"></div>
					<div className="self-center mt-20">
						<p
							className={
								darkMode
									? "text-2xl font-bold text-[#ccd6f6]"
									: "text-2xl font-bold text-[#0a192f]"
							}
						>
							{" "}
							Interests
						</p>
					</div>
					<div className=" py-5 "></div>
					<div
						className={
							!nav ? "p-5 m-2 rounded-lg border-2 border-pink-600" : "hidden"
						}
					>
						<Interests />
					</div>
					<div className="divider py-5"></div>
					<div className="self-center mt-20">
						<p
							className={
								darkMode
									? "text-2xl font-bold text-[#ccd6f6]"
									: "text-2xl font-bold text-[#0a192f]"
							}
						>
							{" "}
							Goals
						</p>
					</div>
					<div className="py-5 "></div>
					<div className="p-5 m-2 rounded-lg border-2 border-pink-600">
						<Goals />
					</div>
					<div className="divider py-5"></div>
				</div>
			</div>
		</div>
	);
};

export default About;
