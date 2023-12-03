const Card = ({ title, description }) => {
	return (
		<div className="flex justify-center">
			<div className="flex flex-col items-center justify-center mt-5 border-solid border-2 border-[#171f46] py-5 w-[80%] hover:border-white">
				<div className="flex flex-col items-center justify-center lg:w-[80%] md:w-[60%]  text-center">
					<h3 className="text-2xl font-bold">{title}</h3>
					<p className="mt-5">{description}</p>
				</div>
			</div>
		</div>
	);
};

export default Card;
