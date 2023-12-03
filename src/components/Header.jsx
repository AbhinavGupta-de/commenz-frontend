const Header = () => {
	return (
		<header className="flex justify-between p-5 font-medium">
			{/* Logo */}
			<a href="/" className="w-[88px] m-0 justify-center">
				<img src="../../assets/commenz-logos_transparent.png" alt="Logo" />
			</a>

			<div className="tracking-widest items-center flex">Commenz</div>

			{/* Navigation */}
			<a href="/about" className="flex justify-center items-center">
				<div className=" border-solid border-2 px-2 rounded-md">About us</div>
			</a>
		</header>
	);
};

export default Header;
