import { useState } from 'react';
import { fetchSummary } from '../api/Summary';

const Hero = () => {
	const [url, setUrl] = useState('');
	const [summary, setSummary] = useState('');
	const [loading, setLoading] = useState(false);

	const handleSummarize = () => {
		if (url === '') {
			alert(
				'Please enter the url of the product you want to see the summary for the reivews of.'
			);
		} else {
			const response = fetchSummary(url);
			response.then((data) => {
				setLoading(true);
				setSummary(data);
				// console.log(data);
			});
		}
	};

	const handleClear = () => {
		setUrl('');
		setSummary('');
		setLoading(false);
	};

	return (
		<div className="flex justify-center items-center flex-col p-5">
			<div className="flex flex-col gap-2 items-center">
				<div className="text-[48px] font-semibold flex text-center">
					The ultimate solution to view reivews of everything.
				</div>
				<div className="text-[#d3d1cf] font-serif">
					Get summary of all the reviews of anything you wanna see.
				</div>
				<div className="w-[80%]">
					<input
						type="text"
						value={url}
						onChange={(e) => setUrl(e.target.value)}
						placeholder="Enter the url of the product you want to see the summary for the reivews of."
						className="border-solid border-2 border-black p-3 rounded-[8px] w-[100%] mt-5 text-black"
					/>
				</div>
				<div className="flex gap-2">
					<button
						className="border-solid border-2 border-black p-3 bg-[#02699e] rounded-[8px] flex justify-center hover:bg-[#023f5e]"
						onClick={handleSummarize}
					>
						Summarize
					</button>
					<button
						className="border-dashed border-[1px] border-gray-200 p-3 hover:bg-[#1923388f] rounded-lg"
						onClick={handleClear}
					>
						Clear
					</button>
				</div>
			</div>

			{loading ? (
				<div className="w-[95%] border-solid border-[1px] border-[#1a3030] p-9 mt-10">
					<div className="text-white">Summary</div>
					<div className="text-[#d3d1cf] font-serif mt-5">{summary}</div>
				</div>
			) : (
				<div className="p-5 m-5">
					<img src="/assets/preview.png" alt="preview" className="w-full " />
				</div>
			)}
		</div>
	);
};

export default Hero;
