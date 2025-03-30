const buttons = document.querySelectorAll(".nav-button")

buttons.forEach((button) => {
    button.addEventListener("click", () => {
        buttons.forEach((btn) => btn.classList.remove("active"))
        button.classList.add("active")
    })
})

// Button Age 0

function inject0() {
    const imageContainer = document.getElementById("mid")
    const textContainer = document.getElementById("right")

    imageContainer.innerHTML = ""
    textContainer.innerHTML = ""

    // Image 0
    const img = document.createElement("img")
    img.src = "https://i.imgur.com/taVjzZ5.jpeg"
    img.alt = "Amie 0"
    img.style.maxHeight = "400px"
    img.style.maxWidth = "300px"
    imageContainer.appendChild(img)

    // Text 0
    const text = document.createElement("p")
    text.innerText = `We got her when I was seven. Our neighbor's dog had an accidental litter. \n \nThere were 12 little black puppies each with a different colored headband. We chose the one with the orange headband, Pumpkin. My sister and I carried her home in a box.`
    textContainer.appendChild(text)
}

// Button Age 1

function inject1() {
    const imageContainer = document.getElementById("mid")
    const textContainer = document.getElementById("right")

    imageContainer.innerHTML = ""
    textContainer.innerHTML = ""

    // Image 1
    const img = document.createElement("img")
    img.src = "https://i.imgur.com/uECvcVn.jpeg"
    img.alt = "Amie 1"
    img.style.maxHeight = "400px"
    img.style.maxWidth = "300px"
    imageContainer.appendChild(img)

    // Text 1
    const text = document.createElement("p")
    text.innerText = `We named her Amie. My brother was taking French class, and Amie means friend in French. She was a very friendly dog. \n\n Whenever I'd come home from school, she'd jump on me and smother me with kisses. Her bark was so loud people would worry that she would attack, but she only wanted to meet them.`
    textContainer.appendChild(text)
}

// Button Age 6

function inject6() {
    const imageContainer = document.getElementById("mid")
    const textContainer = document.getElementById("right")

    imageContainer.innerHTML = ""
    textContainer.innerHTML = ""

    // Image 6
    const img = document.createElement("img")
    img.src = "https://i.imgur.com/xCcOzcF.jpeg"
    img.alt = "Amie 6"
    img.style.maxHeight = "400px"
    img.style.maxWidth = "300px"
    imageContainer.appendChild(img)

    // Text 6
    const text = document.createElement("p")
    text.innerText = `Amie was an athlete. She could chase after a tennis ball — her one true love — for hours.\n\n We'd take her on hikes a few times a week. She would run way ahead and then come back for us. She loved to swim, and she was most happy when my family would go camping all together. 
`
    textContainer.appendChild(text)
}

// Button Age 9

function inject9() {
    const imageContainer = document.getElementById("mid")
    const textContainer = document.getElementById("right")

    imageContainer.innerHTML = ""
    textContainer.innerHTML = ""

    // Image 9
    const img = document.createElement("img")
    img.src = "https://i.imgur.com/V4jEJny.jpeg"
    img.alt = "Amie 9"
    img.style.maxHeight = "400px"
    img.style.maxWidth = "300px"
    imageContainer.appendChild(img)

    // Text 9
    const text = document.createElement("p")
    text.innerText = `Like any athlete, she needed her rest. 
\nAmie would spend hours lying on her chair overlooking the sidewalk, only to be interrupted by a belly rub. \n\nIn high school, I'd tiptoe home late at night to not wake up my parents, then see Amie and give her a long hug. We’d snuggle until Amie decided she was done with me and would stroll to some other part of the house.`
    textContainer.appendChild(text)
}

// Button Age 16

function inject16() {
    const imageContainer = document.getElementById("mid")
    const textContainer = document.getElementById("right")

    imageContainer.innerHTML = ""
    textContainer.innerHTML = ""

    // Image 16
    const img = document.createElement("img")
    img.src = "https://i.imgur.com/lwyvG4q.jpeg"
    img.alt = "Amie 16"
    img.style.maxHeight = "400px"
    img.style.maxWidth = "400px"
    imageContainer.appendChild(img)

    // Text 16
    const text = document.createElement("p")
    text.innerText = `I went to college and moved to New York. Suddenly, I didn't see Amie so often. But, everytime I came home Amie would be greeted the same way. Jumps and kisses. \n\n I came home after a year during the pandemic. She’d gone blind but as soon as she smelled me, she threw her paws onto my chest in excitement. \n\n We had a family friend who Amie loved. Her name was Carolyn and she was like a grandmother to me and Amie. If you ever walked near Carolyn's house, Amie would pull until you had to go. \n\n When Carolyn was sick in the hospital, we went to her house together. Just so that Amie could sniff her porch. \n\nThey both passed away in 2022. Home never felt the same.`
    textContainer.appendChild(text)
}

// Button Age 17

function inject17() {
    const imageContainer = document.getElementById("mid")
    const textContainer = document.getElementById("right")

    imageContainer.innerHTML = ""
    textContainer.innerHTML = ""

    // Image 17
    const img = document.createElement("img")
    img.src = "https://i.imgur.com/6nfW0k4.gif"
    img.alt = "Amie 17"
    img.style.maxHeight = "400px"
    img.style.maxWidth = "300px"
    imageContainer.appendChild(img)

    // Text 17
    const text = document.createElement("p")
    text.innerText = `I miss you Amie.`
    textContainer.appendChild(text)
}