// console.log("Hello Javascript")

const container2_img=document.querySelector(".container2-img")
const items=document.querySelectorAll("li")

items.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        console.log("you clicked"+index)
        container2_img.style.transform=`translateX(${-100 * index}vw)`
    })
})