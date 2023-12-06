const Use = () => {
	return (
		<section className="flex justify-center items-center flex-col gap-2">
			<div className="text-3xl border-b-2 border-white border-solid font-bold">
				How to use
			</div>

			<div className="flex mt-4 p-5 flex-col gap-5">
				<div className="flex items-center">
					<div className="font-bold">Step 1</div>
					<div className="ml-2">Copy the link of the product you want to buy.</div>
				</div>
				<div className="flex items-center">
					<div className="font-bold">Step 2</div>
					<div className="ml-2">Paste the link in the search bar.</div>
				</div>
				<div className="flex items-center">
					<div className="font-bold">Step 3</div>
					<div className="ml-2">Click on the search button.</div>
				</div>
				<div className="flex items-center">
					<div className="font-bold">Step 4</div>
					<div className="ml-2">Get the summary of the reviews.</div>
				</div>
			</div>
		</section>
	);
};

export default Use;
