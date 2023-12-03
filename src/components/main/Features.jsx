import Card from './Card';

const Features = () => {
	return (
		<div className="flex flex-col items-center justify-center py-20">
			<h2 className="text-3xl font-bold">Features</h2>

			<div className="grid grid-cols-1 mt-[6rem] lg:grid-cols-3  items-center justify-center gap-8 lg:w-[90%]">
				<Card
					title="Easy to use"
					description="With a simple interface, you can easily get the information you need without any hassle."
				/>
				<Card
					title="Fast"
					description="With a simple interface, you can easily get the information you need without any hassle."
				/>
				<Card
					title="Accurate"
					description="Built with the latest technology, you can be sure that the information you get is accurate."
				/>
			</div>
		</div>
	);
};

export default Features;
