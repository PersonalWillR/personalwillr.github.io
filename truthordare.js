var truths = []
var dares = []

const logFileText = async file => {
    const response = await fetch(file, {
		
		mode: 'no-cors'
	
	})
    const text = await response.text()
    console.log(text)
}

logFileText('truths.txt')
logFileText('dares.txt')

function randomFromList(list) {
	return list[parseInt(Math.random() * list.length)]

}

document.getElementById("truth").addEventListener("click", (e) => {
	document.getElementById("text").value = randomFromList(truths);
})

document.getElementById("dare").addEventListener("click", (e) => {
	document.getElementById("text").value = randomFromList(dares);
})