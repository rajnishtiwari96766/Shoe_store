// console.log("Hello Javascript")

const container2_img=document.querySelector(".container2-img")
const items=document.querySelectorAll("li")
const product_img=document.querySelector(".product_img")
const color1=document.querySelector(".color1")
const color2=document.querySelector(".color2")

items.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log("you clicked"+index)
        container2_img.style.transform=`translateX(${-50 * index}vw)`
    })
})

color1.addEventListener("click",()=>{
    console.log("black clicked") 
    product_img.src="air.png"
})

color2.addEventListener("click",()=>{
    console.log("blue clicked")
    product_img.src="air2.png"
})

