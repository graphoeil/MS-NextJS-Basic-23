// https://www.ourdomain.com/news/any-identifier

// [] => make this page dynamic, in index.js in news folder
// we can have a list of news and when clicking we are
// redirect to this dynamic page with newsID (then database ...)

// Imports
import React from "react";
import { useRouter } from "next/router"; // To extract identifier

// Component
const DetailPage = () => {

	// Get identifier, because [newsID]
	const { query:{ newsID } } = useRouter();

	// Send request to database to get all page data ,-)

	// Return
	return(
		<React.Fragment>
			{/* Warning newsID is undefined first ! */}
			<h1>The { newsID && `${ newsID.slice(0,1).toUpperCase() }${ newsID.slice(1) }` } Page</h1>
		</React.Fragment>
	);

};

// Export
export default DetailPage;