// const { Link } = require("react-router-dom")

const items=document.querySelectorAll("li")

const pr=[
    {
        id:1,
        title:"Airforce",
        colors:[
            {
                code:'black',
                img:'air.png'
            },
            {
                code:'blue',
                img:'air2.png'
            }
        ]
    },

    {
        id:2,
        title:"Blazers",
        colors:[
            {
                code:'white',
                img:'blazer.png'
            },
            {
                code:'green',
                img:'blazer2.png'
            }
        ]
    },
    {
        id:3,
        title:"Jordan",
        colors:[
            {
                code:'normal',
                img:'jordan.png'
            },
            {
                code:'crater',
                img:'crater2.png'
            }
        ]
    },
    {
        id:4,
        title:"Hippies",
        colors:[
            {
                code:'maroon',
                img:'hippie.png'
            },
            {
                code:'black',
                img:'hippie2.png'
            }
        ]
    }
]

//initially
let chosenProduct=pr[0]

const pr_Title=document.querySelector('.pr_title')
const container2_img=document.querySelector(".container2-img")
const pr_img=document.querySelector(".product_img")
const pr_color=document.querySelectorAll('.colors p')
const color1=document.querySelector('.color1')
const color2=document.querySelector('.color2')
const buy_btn=document.querySelector('#buy_button')
const payment=document.querySelector('.payment')
const cancel_btn=document.querySelector('.cancel')
const place_order=document.querySelector('.order')
const insta=document.querySelector('.insta')
const twitter=document.querySelector('.twitter')
const linkedin=document.querySelector('.linkedin')
const facebook=document.querySelector('.facebook')

items.forEach((item,index)=>{
    item.addEventListener("click",()=>{
        //image displayed in slider
        container2_img.style.transform=`translateX(${-100 * index}vw)`

        //for products to be displayed it will be the clicked item
        chosenProduct=pr[index]

        //details of the chosen product
        pr_Title.textContent=chosenProduct.title
        pr_img.src=chosenProduct.colors[0].img

        pr_color.forEach((color,index)=>{
            color.textContent=chosenProduct.colors[index].code
        })
    })
})
color1.addEventListener("click",()=>{
    console.log("black clicked") 
    pr_img.src=chosenProduct.colors[0].img
})

color2.addEventListener("click",()=>{
    console.log("blue clicked")
    pr_img.src=chosenProduct.colors[1].img
})

buy_btn.addEventListener('click',()=>{
    payment.style.visibility="visible"
})

cancel_btn.addEventListener('click',()=>{
    payment.style.visibility="hidden"
})

place_order.addEventListener('click',()=>{
    payment.style.visibility="hidden"
    alert('Order PLaced')
})

insta.addEventListener('click',()=>{
    window.open("https://www.instagram.com")
})
twitter.addEventListener('click',()=>{
    window.open("https://www.twitter.com")
})
linkedin.addEventListener('click',()=>{
    window.open("https://www.linkedin.com")
})
facebook.addEventListener('click',()=>{
    window.open("https://www.facebook.com")
})