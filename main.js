// let klaviatura = ["q", "w", "e", "r", "t","y","u","i","o","p","a", "s", "d","f", "g","j","k","l","z", "x", "c", "v", "b", "n","m"]

// console.log(klaviatura)

// console.log(klaviatura[24].toUpperCase() + klaviatura[6] + klaviatura[23] + klaviatura[7] + klaviatura[11] + klaviatura[10])


let ismlar = []

let ul = document.querySelector('ul')



function odamQoshish1() {
    let ismSorash = prompt("Ism yoz")

    ismlar.push(ismSorash)

    ul.innerHTML = ""


    ismlar.map(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        ul.append(li)
    })
}


function odamQoshish2() {
    let ismSorash = prompt("Ism yoz")

    ismlar.unshift(ismSorash)

    ul.innerHTML = ""


    ismlar.map(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        ul.append(li)
    })
}

function odamQoshish3() {

    ismlar.pop()

    ul.innerHTML = ""


    ismlar.map(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        ul.append(li)
    })
}

function odamQoshish4() {   

    ismlar.shift()

    ul.innerHTML = ""


    ismlar.map(item => {
        let li = document.createElement("li")
        li.innerHTML = item
        ul.append(li)
    })
}