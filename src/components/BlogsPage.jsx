import { BlogCard } from "./BlogCard";
import React from "react";
import { SiDarkreader } from "react-icons/si";
import { IoLogoReact } from "react-icons/io5";
import { TbBrandJavascript } from "react-icons/tb";

function BlogsPage() {
	const blogArr = [
		{
			icon: <SiDarkreader className="w-20 h-24 text-black" />,
			title: "Theme Switcher",
			description:
                "Explore how to implement a smooth and dynamic theme switcher in React, allowing users to toggle between light and dark modes. Perfect for enhancing user experience with just a few lines of code!",
            link: "https://arnav404.notion.site/Theme-Switcher-10a671219a29804c971bde016596ab86"
        },
        {
			icon: <IoLogoReact className="w-20 h-24 text-black" />,
			title: "React Hook",
			description:
                "Learn how to harness the power of React Hooks to manage state and side effects more effectively. This blog walks you through essential Hooks like useState and useEffect, helping you write cleaner, more efficient code in your React applications!",
            link: "https://arnav404.notion.site/Hooks-5cbd8a08a109464686f5a1f4f61cf283?pvs=74"
		},
		{
			icon: <IoLogoReact className="w-20 h-24 text-black" />,
			title: "React Router DOM",
			description:
                "Master the art of navigation in React with React Router DOM! In this blog, I’ll guide you through creating dynamic and user-friendly routes, enabling seamless transitions and enhanced user experiences in your web applications	",
            link: "https://arnav404.notion.site/React-Router-DOM-e66c65bca045400aa04e7e53a9525cc6"
		},
		{
			icon: <TbBrandJavascript className="w-20 h-24 text-black" />,
			title: "Javascript Promises",
			description:
                "Dive into the world of JavaScript Promises! This blog breaks down how Promises work, making asynchronous programming easier to manage. Learn how to handle async operations, avoid callback hell, and write cleaner, more efficient code.",	
            link: "https://arnav404.notion.site/Promises-101671219a298051a1d8e1b3b13e7e5a"
		},		
	];

	return (
		<div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 w-full max-w-[1300px] m-auto">
			{blogArr.map((eachBlog, index) => {
				return (
                    <BlogCard
                        key={index}
                        icon={eachBlog.icon}
                        title={eachBlog.title}
                        description={eachBlog.description}
                        link={eachBlog.link}
					/>
				);
			})}
		</div>
	);
}

export default BlogsPage;
