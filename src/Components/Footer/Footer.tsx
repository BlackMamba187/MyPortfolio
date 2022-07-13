import { useRecoilValue } from "recoil";
import { DarkMode } from "../../Recoil/Atoms";
import { FaLinkedin, FaGithub } from "react-icons/fa";

const Footer = () => {
	const darkMode = useRecoilValue(DarkMode);

	return (
		<footer
			className={
				darkMode
					? "footer fixed inset-x-0 bottom-0 justify-between items-center px-4 bg-[#0a192f]"
					: "footer fixed inset-x-0 bottom-0 justify-between items-center px-4 bg-[#ffffff]"
			}
		>
			<div
				className={
					darkMode
						? "text-center text-[#ccd6f6] flex flex-row p-4 text-xl"
						: "text-center text-[#0a192f] flex flex-row p-4 text-xl"
				}
			>
				Made by Perry Matovu | Using
				<a href="https://tailwindcss.com/">
					<p className="link link-secondary">Tailwind CSS</p>
				</a>
				and
				<a href="https://daisyui.com/">
					<p className="link link-secondary">DasiyUI</p>
				</a>
			</div>

			<ul className="hidden md:flex">
				<li className="p-4 flex flex-row">
					<a
						className="p-2"
						href="https://github.com/BlackMamba187"
						type="button"
					>
						<FaGithub size={50} color={darkMode ? "#ccd6f6" : "#0a192f"} />
					</a>
					<a
						className="p-2"
						href="https://www.linkedin.com/in/perry-matovu-5ab226221/"
						type="button"
					>
						<FaLinkedin size={50} color={darkMode ? "#ccd6f6" : "#0a192f"} />
					</a>
				</li>
			</ul>
		</footer>
	);
};

export default Footer;
