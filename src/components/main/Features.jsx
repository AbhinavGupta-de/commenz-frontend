import Card from './Card';

const Features = () => {
	return (
		<div className="flex flex-col items-center justify-center py-20">
			<h2 className="text-3xl font-bold">Features</h2>

			<div className="grid grid-cols-1 mt-[6rem] lg:grid-cols-3  items-center justify-center gap-8 lg:w-[90%]">
				<Card
					title="Amazon Comments"
					description="Amazon comments can be summarized to get a better understanding of the product."
					src="/assets/amazon.png"
					alt="Amazon"
				/>
				<Card
					title="Flipkart Comments"
					description="Flipkart comments can be summarized to get a better understanding of the product."
					src="/assets/flipkart.png"
					alt="Flipkart"
					width="w-36"
				/>
				<Card
					title="YouTube Comments"
					description="Youtube video comments	can be summarized to get a better understanding of the video."
					src="/assets/youtube.png"
					alt="YouTube"
				/>
				<Card
					title="Google Maps Comments"
					description="Google Maps reviews can be summarized to get a better understanding of the place."
					src="/assets/googlemaps.png"
					alt="Google Maps"
				/>
			</div>
		</div>
	);
};

export default Features;
