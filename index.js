
let mainDiv = document.querySelector(".Product-body")
let global = []

let Searchval = document.querySelector(".serachText")
let serachbtn = document.querySelector(".serachbtn")

let selectEl = document.querySelector("select")


async function GetData() {
    let req = await fetch("https://63c63c7fd307b769673517f8.mockapi.io/product")
    let data = await req.json()
    console.log(data)
    global = data
    FilteredData(data)
    Sorted(data)
    DisplayShoes(data)
}
GetData()

let imgCatch = document.querySelector(".imageCreated")
console.log(imgCatch);

function DisplayShoes(data) {
    mainDiv.innerHTML = ""
    data.forEach((element, index) => {
        let div = document.createElement("div")
        let image = document.createElement("img")
        let productName = document.createElement("h2")
        let div2 = document.createElement("div")
        let desc = document.createElement("p")
        let price = document.createElement("h4")
        // let anchor = document.createElement("a")
        // let url = "http://google.com"
        // anchor.setAttribute("href", url)
        // anchor.textContent = productName.textContent = element.name

        image.setAttribute("src", element.image)
        image.addEventListener("click", () => {
            let url2 = "http://127.0.0.1:5500/productspage.html"
            window.open(url2)
        })

        productName.textContent = element.name
        desc.textContent = element.description
        price.textContent = `$${Number(element.price)}.00 `
        // div2.setAttribute("class", mini-div)


        div2.append(desc, price)
        div.append(image, productName, div2)
        mainDiv.append(div)
    })
}

let addtocart = document.querySelector(".Addtocart-btn")
let countcatch = document.querySelector(".count")
let mycart = document.querySelector("#mycart")


addtocart.addEventListener("click", () => {
    alert("Product Added to Cart")
    countcatch.textContent = 1
})

// cart page design 
let demo = document.querySelector(".demo")

let decre = document.getElementsByClassName("decrement")

decre.addEventListener("click", () => {
    let h1 = document.createElement("h1")

    h1.textContent = "i am demo"

    demo.append(h1)
})



function FilteredData(Searching) {
    serachbtn.addEventListener("click", () => {
        let searchin = Searchval.value
        let filtered = Searching.filter((element) => {
            if (element.name.toUpperCase().includes(searchin.toUpperCase()) == true) {
                return true
            } else {
                return false
            }
        })
        DisplayShoes(filtered)
    })
}


function Sorted(sortedData) {


    selectEl.addEventListener("change", () => {
        if (selectEl.value == "") {
            DisplayShoes(global)
        } else if (selectEl.value == "low") {
            let store = sortedData.sort(function (a, b) {
                if (a.price < b.price) {
                    return -1
                } else if (a.price > b.price) {
                    return 1
                } else if (a.price == b.price) {
                    return 0
                }
            })
            DisplayShoes(store)
        } else if (selectEl.value == "high") {
            let storetwo = sortedData.sort(function (b, a) {
                if (a.price < b.price) {
                    return -1
                } else if (a.price > b.price) {
                    return 1
                } else if (a.price == b.price) {
                    return 0
                }
            })
            DisplayShoes(storetwo)
        }
    })
}





// loginbtn.addEventListener("submit", ()=>{

// })














