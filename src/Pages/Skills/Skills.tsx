import React from "react";
import Tailwind from "../../Data/Icons/tailwindcss.png";
import Firebase from "../../Data/Icons/firebase.png";
import PixiJS from "../../Data/Icons/PixiJS.png";
import Python from "../../Data/Icons/Python.png";
import Svelte from "../../Data/Icons/Svelte.png";
import Vuejs from "../../Data/Icons/Vuejs.png";
import Graphql from "../../Data/Icons/Graphql.png";
import {
	FaReact,
	FaJs,
	FaAws,
} from "react-icons/fa";
import FlatList from "flatlist-react";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Recoil/Atoms";

const CurrentSkills = [
	{
		name: "Reactjs",
		icon: <FaReact size={100} color="#61dbfb" />,
		link: "https://reactjs.org/",
	},
	{
		name: "Javascript",
		icon: <FaJs size={100} color="#f0db4f" />,
		link: "https://www.w3schools.com/js/default.asp",
	},
	{
		name: "React Native",
		icon: <FaReact size={100} color="#61dbfb" />,
		link: "https://reactnative.dev/cs",
	},
	{
		name: "TailwindCSS",
		icon: <img src={Tailwind} width="100" />,
		link: "https://tailwindcss.com/",
	},
	{
		name: "AWS",
		icon: <FaAws size={100} color="#FF9900" />,
		link: "https://aws.amazon.com/",
	},
	{
		name: "Firebase",
		icon: <img src={Firebase} width="100" />,
		link: "https://firebase.google.com/",
	},
	{
		name: "GraphQL",
		icon: <img src={Graphql} width="90" />,
		link: "https://graphql.org/",
	},
];

const UpcomingSkills = [
	{
		name: "PixiJS",
		icon: <img src={PixiJS} width="100" />,
		link: "https://pixijs.com/",
	},
	{
		name: "Python",
		icon: <img src={Python} width="100" />,
		link: "https://www.python.org/",
	},
	{
		name: "Svelte",
		icon: <img src={Svelte} width="100" />,
		link: "https://svelte.dev/",
	},
	{
		name: "Vuejs",
		icon: <img src={Vuejs} width="100" />,
		link: "https://vuejs.org/",
	},
];
const RenderUpcomingSkills = (Uskill: any, idx: number) => {
	const darkMode = useRecoilValue(DarkMode);

	return (
		<div
			key={idx}
			className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-2 border-pink-600 rounded p-5 m-5 content-center"
		>
			<a href={Uskill.link}>
				<div className="m-4 ">{Uskill.icon}</div>
			</a>
			<p className={darkMode ? "text-[#ccd6f6] my-4" : "text-[#0a192f] my-4"}>
				{Uskill.name}
			</p>
		</div>
	);
};

const RenderCurrentSkills = (Cskill: any, idx: number) => {
	const darkMode = useRecoilValue(DarkMode);

	return (
		<a href={Cskill.link}>
			<div
				key={idx}
				className="shadow-md shadow-[#040c16] hover:scale-110 duration-500 border-2 border-pink-600 rounded p-5 m-5 content-center"
			>
				<div className="m-4">{Cskill.icon}</div>
				<p className={darkMode ? "text-[#ccd6f6] my-4" : "text-[#0a192f] my-4"}>
					{Cskill.name}
				</p>
			</div>
		</a>
	);
};

const Skills = () => {
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
							{" "}
							Professional Skils
						</p>
					</div>
					<div className="py-5 "></div>

					<ul className="overflow-auto scrollbar-hide py-5 ">
						<FlatList
							list={CurrentSkills}
							renderItem={RenderCurrentSkills}
							renderWhenEmpty={() => <div>List is empty!</div>}
							displayGrid
							gridGrid="20%"
						/>
					</ul>
					<div></div>
					<div className="py-5"></div>
					<div className="self-center mt-20">
						<p
							className={
								darkMode
									? "text-2xl font-bold text-[#ccd6f6]"
									: "text-2xl font-bold text-[#0a192f]"
							}
						>
							Things I want to work on
						</p>
					</div>
					<div className="py-5 "></div>
					<div>
						<ul className="overflow-auto scrollbar-hide py-5 ">
							<FlatList
								list={UpcomingSkills}
								renderItem={RenderUpcomingSkills}
								renderWhenEmpty={() => <div>List is empty!</div>}
								displayGrid
								gridGrid="20%"
							/>
						</ul>
					</div>
					<div className="py-10 "></div>
					<div className="py-5 "></div>
				</div>
			</div>
		</div>
	);
};

export default Skills;
