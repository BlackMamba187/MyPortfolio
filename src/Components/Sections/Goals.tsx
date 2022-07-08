import FlatList from "flatlist-react";
import { DarkMode } from "../../Recoil/Atoms";
import { useRecoilValue } from "recoil";

const AllGoals = [
	{
		name: "Spend more time with my family",
		description:
			"It's is so easy to fall into a the work-home-work cycle but my two younger sisters are going to be 18 and 14 respectively. Honestly I have  no idea how their age creeped up on me.",
		goal: "See my sisters if not every weekend at least every other weekend",
	},
	{
		name: "Keep Learning New Skill",
		description:
			"Don't know about you but I sometimes fall in a bit of a rut. Were I can get uninspired or demoitivated. I've found that learning something new is a good way to keep me motivated. This  skill can be something like a new Javascript framework.",
		goal: "I'm really keen on trying out Unity for game development in my peronal time.",
	},
	{
		name: "Sleep better",
		description:
			"Sleep has a massive impact on how you think and feel. I remember all my time researching about sleep and the brain at University, so this is something I don't want to neglate. I've got to get out of the habit of broswering the internet on my phone till late.",
		goal: "I want to get at least 7-8 hours every night",
	},
];

const RenderGoal = (Goal: any, idx: number) => {
	const darkMode = useRecoilValue(DarkMode);

	return (
		<div key={idx}>
			<h1 className="text-2xl font-normal leading-normal mt-0 mb-2 text-pink-600">
				{Goal.name}
			</h1>
			<p
				className={
					darkMode ? "mt-0 mb-4 text-[#ccd6f6]" : "mt-0 mb-4 text-[#0a192f]"
				}
			>
				{Goal.description}
			</p>
			<br />

			<p className=" text-pink-600">{Goal.goal}</p>
		</div>
	);
};

const Goals = () => {
	return (
		<div className="m-2">
			<ul className="overflow-auto scrollbar-hide py-5 ">
				<FlatList
					list={AllGoals}
					renderItem={RenderGoal}
					renderWhenEmpty={() => <div>List is empty!</div>}
					displayGrid
					gridGap="10%"
				/>
			</ul>
		</div>
	);
};

export default Goals;
