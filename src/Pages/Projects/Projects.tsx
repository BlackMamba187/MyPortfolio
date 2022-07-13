import React from "react";
import FlatList from "flatlist-react";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Recoil/Atoms";
import { Link } from "react-router-dom";
const CompletedProjects = [
	{
		id: 1,
		name: "My Website",
		pic: "minivan",
		tech1: "Reactjs",
		tech2: "TailwindCSS",
	},
	{
		id: 2,
		name: "Chat App",
		pic: "minivan",
		tech1: "React Native",
		tech2: "AWS",
	},
];

const UpcomingProjects = [
	{
		id: 10,
		name: "Pokemon style RPG Game",
		pic: "minivan",
		tech1: "PixiJS",
		tech2: "AWS",
	},
	{
		id: 11,
		name: "Health & Fitness Website",
		pic: "minivan",
		tech1: "Reactjs",
		tech2: "Firebase",
	},
];

const RenderCompletedProject = (project: any, idx: number) => {
	const darkMode = useRecoilValue(DarkMode);

	const ID = project.id;
	return (
		<div className="flex justify-center p-2 m-2">
			<Link to={`/projects/${ID}`}>
				<div
					className={
						darkMode
							? "rounded-lg shadow-lg bg-white max-w-sm"
							: "rounded-lg shadow-lg bg-[#0a192f] max-w-sm"
					}
				>
					<img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" />
					<div className="p-6">
						<h5
							className={
								darkMode
									? "text-xl font-medium mb-2 text-[#0a192f]"
									: "text-xl font-medium mb-2 text-[#ccd6f6]"
							}
						>
							{project.name}
						</h5>
						<div className=" py-2"></div>
						<div
							className={
								darkMode
									? "badge badge-outline badge-secondary badge-sm m-2 px-2 py-1"
									: "badge badge-outline badge-sm m-2 px-2 py-1"
							}
						>
							{project.tech1}
						</div>
						<div
							className={
								darkMode
									? "badge badge-outline badge-secondary badge-sm m-2 px-2 py-1"
									: "badge badge-outline badge-sm m-2 px-2 py-1"
							}
						>
							{project.tech2}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

const RenderUpcomingProjects = (project: any, idx: number) => {
	const darkMode = useRecoilValue(DarkMode);

	const ID = project.id;
	return (
		<div className="flex justify-center p-2 m-2">
			<Link to={`/projects/${ID}`}>
				<div
					className={
						darkMode
							? "rounded-lg shadow-lg bg-white max-w-sm"
							: "rounded-lg shadow-lg bg-[#0a192f] max-w-sm"
					}
				>
					<img src="https://mdbootstrap.com/img/new/standard/nature/182.jpg" />
					<div className="p-6">
						<h5
							className={
								darkMode
									? "text-xl font-medium mb-2 text-[#0a192f]"
									: "text-xl font-medium mb-2 text-[#ccd6f6]"
							}
						>
							{project.name}
						</h5>
						<div className=" py-2"></div>
						<div
							className={
								darkMode
									? "badge badge-outline badge-secondary badge-sm m-2 px-2 py-1"
									: "badge badge-outline badge-sm m-2 px-2 py-1"
							}
						>
							{project.tech1}
						</div>
						<div
							className={
								darkMode
									? "badge badge-outline badge-secondary badge-sm m-2 px-2 py-1"
									: "badge badge-outline badge-sm m-2 px-2 py-1"
							}
						>
							{project.tech2}
						</div>
					</div>
				</div>
			</Link>
		</div>
	);
};

const Projects = () => {
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
							Completed Projects
						</p>
					</div>
					<div className="py-5 "></div>
					<div>
						<ul className="overflow-auto scrollbar-hide py-5 ">
							<FlatList
								list={CompletedProjects}
								renderItem={RenderCompletedProject}
								renderWhenEmpty={() => <div>List is empty!</div>}
								displayGrid
								gridGap="10%"
							/>
						</ul>
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
							Upcoming Projects
						</p>
					</div>
					<div className=" py-5 "></div>
					<div>
						<ul className="overflow-auto scrollbar-hide py-5 ">
							<FlatList
								list={UpcomingProjects}
								renderItem={RenderUpcomingProjects}
								renderWhenEmpty={() => <div>List is empty!</div>}
								displayGrid
								gridGap="10%"
							/>
						</ul>
					</div>

					<div className="divider py-5 "></div>
				</div>
			</div>
		</div>
	);
};

export default Projects;
