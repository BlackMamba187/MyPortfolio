import React from "react";
import { useLocation, useParams } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Recoil/Atoms";
import { FaGithub } from "react-icons/fa";

const ProjectInfo = () => {
	const darkMode = useRecoilValue(DarkMode);
	const params = useParams();

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
				{(() => {
					switch (params.ID) {
						case "1":
							return (
								<div>
									<p
										className={
											darkMode
												? "text-2xl font-bold text-[#ccd6f6]"
												: "text-2xl font-bold text-[#0a192f]"
										}
									>
										My website
									</p>
									<div className="py-5 "></div>
									<div className="p-5 m-2 rounded-lg border-2 border-pink-600">
										<a
											href=""
											type="button"
										>
											<FaGithub
												size={50}
												color={darkMode ? "#ccd6f6" : "#0a192f"}
											/>
										</a>
									</div>
									<div className="divider py-5"></div>
								</div>
							);
						case "2":
							return (
								<div>
									<p
										className={
											darkMode
												? "text-2xl font-bold text-[#ccd6f6]"
												: "text-2xl font-bold text-[#0a192f]"
										}
									>
										Chat app
									</p>
								</div>
							);
						case "10":
							return (
								<div>
									<p
										className={
											darkMode
												? "text-2xl font-bold text-[#ccd6f6]"
												: "text-2xl font-bold text-[#0a192f]"
										}
									>
										My Game
									</p>
								</div>
							);
							case "11":
							return (
								<div>
									<p
										className={
											darkMode
												? "text-2xl font-bold text-[#ccd6f6]"
												: "text-2xl font-bold text-[#0a192f]"
										}
									>
										My Biochemisty Project
									</p>
								</div>
							);
						default:
							return (
								<div>
									<p
										className={
											darkMode
												? "text-2xl font-bold text-[#ccd6f6]"
												: "text-2xl font-bold text-[#0a192f]"
										}
									>
										ERROR 404
									</p>
								</div>
							);
					}
				})()}
			</div>
		</div>
	);
};

export default ProjectInfo;
