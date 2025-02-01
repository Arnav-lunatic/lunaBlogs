import { Typography } from "@material-tailwind/react";

export function Footer() {  
	return (
		<footer className="w-full bg-white p-8">
			<div className="flex flex-row flex-wrap items-center justify-center gap-y-6 gap-x-12 bg-white text-center md:justify-between">
				<img
					src="https://docs.material-tailwind.com/img/logo-ct-dark.png"
					alt="logo-ct"
					className="w-10"
				/>
				<ul className="flex flex-wrap items-center gap-y-2 gap-x-8">
					<li>
						<Typography
							as="a"
							href="https://discoverarnav.vercel.app"
							target="_blank"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							About Me
						</Typography>
					</li>
					<li>
						<Typography
							as="a"
							href="https://github.com/Arnav-lunatic"
							target="_blank"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							Github
						</Typography>
					</li>
					<li>
						<Typography
							as="a"
							href="https://www.linkedin.com/in/arnav-singh-1360642b9/"
							target="_blank"
							color="blue-gray"
							className="font-normal transition-colors hover:text-blue-500 focus:text-blue-500"
						>
							linkedIn
						</Typography>
					</li>
				</ul>
			</div>
			<hr className="my-8 border-blue-gray-50" />
			<Typography color="blue-gray" className="text-center font-normal">
				&copy; 2024 Arnav Builds
			</Typography>
		</footer>
	);
}
