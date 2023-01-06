const colors = [
    {
        id: 1,
        name: "pink",

    },
    {
        id: 2,
        name: "yellow",
    },
    {
        id: 2,
        name: "orange"
    },
    {
        id: 4,
        name: "gray"
    },
    {
        id: 5,
        name: "plum"
    },

]
createCricle();
function createCricle() {
    let body = document.querySelector("body");
    let newCricle = document.getElementById("cricle").content.querySelector(".color-main");
    for (let color of colors) {
        let newElement = newCricle.cloneNode(true)
        let newColor = newElement.querySelector(".color");
        let productElement = document.querySelector(".entry");
        productElement.append(newColor)
        
        newColor.addEventListener('click', function () {

            body.style.background = color.name;
            body.style.transition = "0.6s"

        })

    }
}
