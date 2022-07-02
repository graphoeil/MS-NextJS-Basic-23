// https://www.ourdomain.com/news
// In NextJS the filename become the pathName
// Can be the subfolder name here news with index.js file

// Imports
import React from "react";
import Link from "next/link";

// Component
const NewsPage = () => {

	// Return
	return(
		<React.Fragment>
			<h1>The News Page</h1>
			<ul>
				<li>
					<Link href="/news/nextjs-is-a-great-framework">
						NextJS is a great framework
					</Link>
				</li>
				<li>
					<Link href="news/reactjs-is-a-great-library">
						ReactJS is a great library
					</Link>
				</li>
			</ul>
		</React.Fragment>
	);

};

// Export
export default NewsPage;