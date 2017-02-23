/* Scraper Template  (18.10)
 * ========================= */

// Students: Using this skeleton, the cheerio documentation,
// and what you've learned in class so far, scrape a website
// of your choice, save it in a result array, and log it to the console.

// Dependencies:

// Snatches HTML from URLs
var request = require('request');
// Scrapes our HTML
var cheerio = require('cheerio');

// Make a request call to grab the HTML body from the site of your choice

request("https://news.ycombinator.com/", function(error,response,html){


	var $ = cheerio.load(html);

	var result = [];

	$("a.storylink").each(function(i, element) {

		var title = $(this).text();

		var link = $(element).children().attr("href");

		result.push({
			title:title, 
			link: link
		});
	});
	console.log(result);
});