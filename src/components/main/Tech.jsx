const Tech = () => {
	return (
		<div className="flex flex-col gap-2 justify-center items-center py-14">
			<div className="mb-5 text-[#e8e6e3]">Technologies used</div>
			<div className="flex justify-between w-[80%] items-center">
				<div>
					<img
						src="https://img.icons8.com/color/48/000000/react-native.png"
						alt="react"
						width="74"
						height="74"
					/>
				</div>
				<div>
					{/* Used Tailwind */}
					<img
						width="74"
						height="74"
						src="https://img.icons8.com/color/48/tailwind_css.png"
						alt="tailwind_css"
					/>
				</div>
				<div>
					{/* Javascript */}
					<img
						src="https://img.icons8.com/color/48/000000/javascript--v1.png"
						alt="javascript"
						width="74"
						height="74"
					/>
				</div>
				<div>
					{/* Node js */}
					<img
						width="74"
						height="74"
						src="https://img.icons8.com/color/48/nodejs.png"
						alt="nodejs"
					/>
				</div>
				<div>
					{/* Langchain */}
					<img
						src="https://cdn.analyticsvidhya.com/wp-content/uploads/2023/07/langchain3.png"
						alt="langchain"
						width="74"
						height="74"
					/>
				</div>
			</div>
		</div>
	);
};

export default Tech;
