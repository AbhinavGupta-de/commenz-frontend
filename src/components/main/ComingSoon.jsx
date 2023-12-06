const ComingSoon = () => {
	return (
		<section className="flex justify-center items-center flex-col gap-8 p-8">
			<div className="text-4xl border-b-2 border-white font-bold">Coming Soon</div>

			<ul className="mt-9 p-5 flex flex-col gap-8">
				<li className="text-lg">
					<h2 className="text-2xl font-bold">Browser Extension</h2>
					<p>An extension to increase its use and power.</p>
				</li>
				<li className="text-lg">
					<h2 className="text-2xl font-bold">Support for more websites</h2>
					<p>
						There are many more websites that require a way to summarise reviews and
						support for them will come soon!
					</p>
				</li>
				<li className="text-lg">
					<h2 className="text-2xl font-bold">Faster and more secure Responses</h2>
					<p>
						A major update with even more fast, reliable and secure response will be
						here soon.
					</p>
				</li>
			</ul>
		</section>
	);
};

export default ComingSoon;
