const Card = ({ title, description }) => {
	return (
		<div className="flex flex-col items-center justify-center mt-10 border-solid border-2 border-[#171f46]">
			<div className="flex flex-col items-center justify-center w-[80%] md:w-[60%] lg:w-[40%] text-center">
				<h3 className="text-2xl font-bold">{title}</h3>
				<p className="mt-5">{description}</p>
			</div>
		</div>
	);
};

export default Card;
