var truths = []
var dares = []

const logFileText = async file => {
    const response = await fetch(file, {
		
		mode: 'no-cors'
	
	})
    const text = await response.text()
    return text
}

truths = logFileText('truths.txt').split("\n")
dares = logFileText('dares.txt').split("\n")

function randomFromList(list) {
	return list[parseInt(Math.random() * list.length)]

}

document.getElementById("truth").addEventListener("click", (e) => {
	document.getElementById("text").value = randomFromList(truths);
})

document.getElementById("dare").addEventListener("click", (e) => {
	document.getElementById("text").value = randomFromList(dares);
})