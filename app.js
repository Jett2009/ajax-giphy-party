console.log("Let's get this party started!");

const form = document.querySelector("#searchform");
const input = document.getElementById("Search");

form.addEventListener("submit", function (e) {
	e.preventDefault();

	getGiphyValue(input.value);
});

async function getGiphyValue(searchTerm) {
	const result = await axios.get("http://api.giphy.com/v1/gifs/search", {
		params: {
			q: searchTerm,
			api_key: "s17uYcbkV12VdnJO0TM5RXcuLFuYg8za",
			limit: 20,
		},
	});

	newGif(result.data);
}

function newGif(result) {
	const randNum = Math.floor(Math.random() * 20);
	let newDiv = document.createElement("div");
	let newGif = document.createElement("img");
	newDiv.style.margin = "8px";
	(newGif.src = result.data[randNum].images.original.url),
		newDiv.append(newGif);
	document.querySelector("#gifs").append(newDiv);
}

const remove = document.getElementById("remove");
remove.addEventListener("click", function (e) {
	document.getElementById("gifs").innerHTML = "";
	input.value = "";
});
