import Card from './Card';

const Features = () => {
	return (
		<div className="flex flex-col items-center justify-center py-20">
			<div className="text-[32px] border-b-2 border-b-white border-solid font-bold">
				Features
			</div>

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
					src="https://imagedelivery.net/5MYSbk45M80qAwecrlKzdQ/b81466db-0e48-4929-4ff3-635ec7e31900/preview"
					alt="Flipkart"
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
