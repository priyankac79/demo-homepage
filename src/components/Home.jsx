import React from "react";
import bg_image from "../assets/background-image.jpg";

const Home = () => {
	return (
		<div className="">
			<div className="flex justify-between">
				<h1 className="text-4xl text-indigo-950">QUEST</h1>
				<nav className="text-sm font-semibold text-indigo-950">
					<ul className="flex gap-8">
						<li>Home</li>
						<li>About</li>
						<li>Courses</li>
						<li>
							Pages
							<select
								className="bg-transparent"
								name="pages
                            "
								id="pages"
							></select>
						</li>
						<li>Blog</li>
					</ul>
				</nav>
			</div>
			<div className="flex items-center justify-between h-screen">
				<div className="w-[50%] flex flex-col gap-8">
					<h1 className="text-6xl font-bold text-indigo-800">Grow your skills, define your future</h1>
					<p className="text-gray-500">
						Presenting Academy, the tech school of the future. We teach you the
						right skills to be prepared for tomorrow.
					</p>
					<div className="flex gap-4 text-xs font-bold">
						<button className="px-4 py-2 text-white uppercase bg-blue-800 border rounded-full">Explore Courses</button>
						<button className="px-4 py-2 text-blue-900 uppercase bg-gray-200 border rounded-full">Learn More</button>
					</div>
				</div>
                <div className="">
                    <img src={bg_image} alt="bg_image" className="w-96" />
                </div>
			</div>
		</div>
	);
};

export default Home;
