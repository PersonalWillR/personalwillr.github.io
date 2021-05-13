var truths = []
var dares = []

function loadFile(file, onLoad) {
	var rawFile = new XMLHttpRequest();
	rawFile.open("GET",file,true);
	rawFile.onreadystatechange = function() {
		if (rawFile.readyState === 4) {
			if (rawFile.status === 200 || rawFile.status == 0) {
				var allText = rawFile.responseText;
				onLoad(allText)
			}
		}
	}
	rawFile.send()
}

var truthsText = loadFile('https://personalwillr.github.io/truths.txt', (text)=>{
	truths = text.split("\n")
	console.log("LOADED")
})
var daresText = loadFile('https://personalwillr.github.io/dares.txt', (text)=>{
	dares = text.split("\n")
})

function randomFromList(list) {
	return list[parseInt(Math.random() * list.length)]

}

document.getElementById("truth").addEventListener("click", (e) => {
	let val = randomFromList(truths);
	console.log(truths);
	document.getElementById("text").innerHTML = val;
})

document.getElementById("dare").addEventListener("click", (e) => {
	document.getElementById("text").innerHTML = randomFromList(dares);
})