import {
	Card,
	CardBody,
	CardFooter,
	Typography,
	Button,
} from "@material-tailwind/react";


export function BlogCard({icon, title, description='Not available' , link='#', date=''}) {
	return (
		<Card className="relative mt-6 w-96 m-auto h-96 bg-gray-100">
			<CardBody>
				{icon}
				<Typography variant="h5" color="blue-gray" className="mb-2">
					{title}
				</Typography>
				<Typography>
					{description}
				</Typography>
			</CardBody>
			<CardFooter className="pt-0">
				<a href={link} target="_blank" className="inline-block">
					<Button
						size="sm"
						variant="text"
						className="flex items-center gap-2"
					>
						Read More
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth={2}
							stroke="currentColor"
							className="h-4 w-4"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"
							/>
						</svg>
					</Button>
				</a>
			</CardFooter>

			<div className="absolute bottom-2 right-2 text-sm opacity-70">{ date }</div>
		</Card>
	);
}
