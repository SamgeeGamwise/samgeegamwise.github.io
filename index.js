const images = []

for (let index = 0; index < 20; index++) {
    fetch("https://api.giphy.com/v1/gifs/random?api_key=UKEp6Ufc3yA8sRK4LMvKSHbgM7ZbYNF2&tag=&rating=g").then((res) => {
        return res.json()
    }).then((data) => {
        images.push(data.data.images.downsized)
    });
}

document.getElementById("window").addEventListener("click", (e) => {
    const image = document.createElement("img");
    image.src = images[0].url
    image.style.position = "absolute"
    image.style.top = String(e.clientY - (images[0].height/2)) + "px"
    image.style.left = String(e.clientX - (images[0].width/2)) + "px"
    image.style.pointerEvents = "none"
    document.getElementById("window").appendChild(image)
    images.shift()

    fetch("https://api.giphy.com/v1/gifs/random?api_key=UKEp6Ufc3yA8sRK4LMvKSHbgM7ZbYNF2&tag=&rating=g").then((res) => {
        return res.json()
    }).then((data) => {
        console.log("loaded new image!");
        images.push(data.data.images.downsized)
    })
})
