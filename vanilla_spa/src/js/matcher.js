const EXTRACT = /\/:[^\/]+/g;

export default function (matcher) {
	console.log(matcher)
	const extracted = matcher.match(EXTRACT);
	console.log(extracted)
}
