let select1 = document.getElementById("popular");
let select2 = document.getElementById("comment");
let img1=document.getElementById("tab_img1");
let img2=document.getElementById("tab_img2");
let img3=document.getElementById("tab_img3");
let content1=document.getElementById("tab_content1");
let content2=document.getElementById("tab_content2");
let content3=document.getElementById("tab_content3");


select1.addEventListener("click",function(){
    select2.classList.remove("active_tab");
    select1.classList.add("active_tab");
    img1.src="images/recent_5.jpg";
    img2.src="images/recent_6.jpg";
    img3.src="images/recent_7.jpg";
    content1.innerText="Mediteranean Atractions";
    content2.innerText="Choose your stay";
    content3.innerText="Time pass atractions";
})


select2.addEventListener("click",function(){
    select1.classList.remove("active_tab");
    select2.classList.add("active_tab");
    img1.src="images/recent_1.jpg";
    img2.src="images/recent_2.jpg";
    img3.src="images/recent_3.jpg";
    content1.innerText="Seasonal Offers";
    content2.innerText="Traveling with kids?";
    content3.innerText="Why you need to visit Bali?";
})