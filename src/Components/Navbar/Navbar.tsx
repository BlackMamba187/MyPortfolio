import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaBars, FaTimes } from "react-icons/fa";
import { useRecoilState } from "recoil";
import { DarkMode, NavbarOpen } from "../../Recoil/Atoms";
//{darkMode ? "#ccd6f6" : "#0a192f"}
const Navbar = () => {
	const [nav, setNav] = useRecoilState(NavbarOpen);

	const [darkMode, setDarkMode] = useRecoilState(DarkMode);

	const handleClick = () => setNav(!nav);

	const handleMode = () => setDarkMode(!darkMode);
	return (
		<div
			className={
				darkMode
					? "fixed navbar justify-between items-center px-10 bg-[#0a192f]"
					: "fixed navbar justify-between items-center px-10 bg-[#ffffff]"
			}
		>
			<div>
				<a
					className={
						darkMode ? "text-5xl text-[#ccd6f6]" : "text-5xl text-[#0a192f]"
					}
				>
					PM
				</a>
			</div>

			{/*Theme button */}

			{/* Menu */}

			<ul className="hidden md:flex">
				<label className="switch p-5" onClick={handleMode}>
					<input
						type="checkbox"
						className={darkMode ? "toggle toggle-secondary" : "toggle"}
						checked={darkMode}
					/>
				</label>

				<li className={darkMode ? "text-[#ccd6f6] p-4" : "text-[#0a192f] p-4"}>
					<Link to="/">Home</Link>
				</li>
				<li className={darkMode ? "text-[#ccd6f6] p-4" : "text-[#0a192f] p-4"}>
					<Link to="/about">About</Link>
				</li>
				<li className={darkMode ? "text-[#ccd6f6] p-4" : "text-[#0a192f] p-4"}>
					<Link to="/projects">Projects</Link>
				</li>
				<li className={darkMode ? "text-[#ccd6f6] p-4" : "text-[#0a192f] p-4"}>
					<Link to="/skills">Skills</Link>
				</li>
				<li className={darkMode ? "text-[#ccd6f6] p-4" : "text-[#0a192f] p-4"}>
					<Link to="/contact">Contact</Link>
				</li>
			</ul>

			{/* Hamburger*/}
			<div onClick={handleClick} className="md:hidden z-10">
				{!nav ? (
					<FaBars size={25} color={darkMode ? "#ccd6f6" : "#0a192f"} />
				) : (
					<FaTimes size={25} color={darkMode ? "#ccd6f6" : "#0a192f"} />
				)}
			</div>

			{/*Mobile  Menu */}
			<ul
				className={
					!nav
						? "hidden"
						: darkMode
						? "absolute top-0 left-0 w-full h-screen bg-[#0a192f] flex flex-col justify-center items-center"
						: "absolute top-0 left-0 w-full h-screen bg-[#ffffff] flex flex-col justify-center items-center"
				}
			>
				<label className="switch p-5" onClick={handleMode}>
					<input
						type="checkbox"
						className={darkMode ? "toggle toggle-secondary" : "toggle"}
						checked={darkMode}
					/>
				</label>
				<li
					className={
						darkMode
							? "py-6 p-4 text-2xl text-[#ccd6f6]"
							: "py-6 p-4 text-2xl text-[#0a192f]"
					}
				>
					<Link to="/" onClick={handleClick}>
						Home
					</Link>
				</li>
				<li
					className={
						darkMode
							? "py-6 p-4 text-2xl text-[#ccd6f6]"
							: "py-6 p-4 text-2xl text-[#0a192f]"
					}
				>
					<Link to="/about" onClick={handleClick}>
						About
					</Link>
				</li>
				<li
					className={
						darkMode
							? "py-6 p-4 text-2xl text-[#ccd6f6]"
							: "py-6 p-4 text-2xl text-[#0a192f]"
					}
				>
					<Link to="/projects" onClick={handleClick}>
						Projects
					</Link>
				</li>
				<li
					className={
						darkMode
							? "py-6 p-4 text-2xl text-[#ccd6f6]"
							: "py-6 p-4 text-2xl text-[#0a192f]"
					}
				>
					<Link to="/skills" onClick={handleClick}>
						Skills
					</Link>
				</li>
				<li
					className={
						darkMode
							? "py-6 p-4 text-2xl text-[#ccd6f6]"
							: "py-6 p-4 text-2xl text-[#0a192f]"
					}
				>
					<Link to="/contact" onClick={handleClick}>
						Contact
					</Link>
				</li>
			</ul>
		</div>
	);
};

export default Navbar;
