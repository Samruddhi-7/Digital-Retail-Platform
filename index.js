// 
let links=document.querySelectorAll('.bottomNav h3');
let items=document.querySelectorAll('.slider .sliderWraper .item');
let productImg=document.querySelector('.product .image img'); //current product Img
let productName=document.querySelector('.product .title'); //current product name
let productPrice=document.querySelector('.product .price') //current product price
let productSize=document.querySelectorAll('.product .size div') //current product size
let productColor=document.querySelectorAll('.product .info .color div'); //current product color



//all products
const products = [
    {
      id: 1,
      title: "Air Force",
      price: 119,
      colors: [
        {
          code: "black",
          img: "imges/air.png",
        },
        {
          code: "darkblue",
          img: "imges/air2.png",
        },
      ],
    },
    {
      id: 2,
      title: "Air Jordan",
      price: 149,
      colors: [
        {
          code: "lightgray",
          img: "imges/jordan.png",
        },
        {
          code: "green",
          img: "imges/jordan2.png",
        },
      ],
    },
    {
      id: 3,
      title: "Blazer",
      price: 109,
      colors: [
        {
          code: "lightgray",
          img: "imges/blazer.png",
        },
        {
          code: "green",
          img: "imges/blazer2.png",
        },
      ],
    },
    {
      id: 4,
      title: "Crater",
      price: 129,
      colors: [
        {
          code: "black",
          img: "imges/crater.png",
        },
        {
          code: "lightgray",
          img: "imges/crater2.png",
        },
      ],
    },
    {
      id: 5,
      title: "Hippie",
      price: 99,
      colors: [
        {
          code: "gray",
          img: "imges/hippie.png",
        },
        {
          code: "black",
          img: "imges/hippie2.png",
        },
      ],
    },
  ];


let choosenProduct=products[0];


function changeproduct(i){
    
  document.querySelector('.slider .sliderWraper').style.transform = `translateX(${-100 * i}vw)`;
  choosenProduct=products[i]; // to get current product
  // console.log(choosenProduct);
  // console.log(choosenProduct.colors[0].img);
  productImg.src=choosenProduct.colors[0].img; //img
  productName.innerHTML=choosenProduct.title; //name
  productPrice.innerHTML='$'+choosenProduct.price; // price
  productColor[0].style.backgroundColor=choosenProduct.colors[0].code; //color1
  productColor[1].style.backgroundColor=choosenProduct.colors[1].code; //color2
}

//slider 
for(let i=0;i<links.length;i++){

    links[i].addEventListener('click',function(){
      changeproduct(i);
    })
}

//choose size
for (let index = 0; index < productSize.length; index++) {

    productSize[index].addEventListener('click',function(eventInfo){
        //reset all size button
        let allElements=productSize[index].parentElement.children;
        for (let i = 0; i < allElements.length; i++) {
            allElements[i].style.backgroundColor='transparent';  
            allElements[i].style.color='black';  
        }
        eventInfo.target.style.backgroundColor='black';
        eventInfo.target.style.color='white';
    });
}


// to search about product
let searchField=document.getElementById('searchBox');
searchField.addEventListener('input',function(){
  let inputValue=this.value.toLowerCase();
  let productsSuggestion=["Air Force","Jordan","Blazer","Crater","Hippie"];
  for (let i = 0; i < productsSuggestion.length; i++) {
    if(productsSuggestion[i].toLowerCase().includes(inputValue)==true){
      changeproduct(i);
    }
    
  }
})

//color change of product
for (let index = 0; index < productColor.length; index++) {
    productColor[index].addEventListener('click',function(){
        productImg.src=choosenProduct.colors[index].img
    });
}


//open payment page
let buyNowBtn=document.querySelector('.product .buy-btn');
buyNowBtn.addEventListener('click',function(){
    document.querySelector('.payment').style.display='block';

});
//close payment page
let closeButton=document.getElementById('closeBtn');
closeButton.addEventListener('click',function(){
    document.querySelector('.payment').style.display='none';
})


