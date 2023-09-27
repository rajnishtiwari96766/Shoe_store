
const container2_img=document.querySelector(".container2-img")
const items=document.querySelectorAll("li")
const product_img=document.querySelectorAll(".product_img")
const color1=document.querySelectorAll(".color1")
const color2=document.querySelectorAll(".color2")

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
    product_img.src="jordan.png"
})


