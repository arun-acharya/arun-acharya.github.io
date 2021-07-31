const toggleButton = document.getElementsByClassName('toggle-button')[0]
const navbarLinks = document.getElementsByClassName('navbar')[0]

toggleButton.addEventListener('click', () => {
    navbarLinks.classList.toggle('active')
})


let btn = document.getElementById('button');
let div = document.getElementById('image');


const tabs = document.querySelectorAll('[data-tab-target]') 
const tabContents = document.querySelectorAll('[data-tab-content]')

tabs.forEach(tab =>{
    tab.addEventListener('click', () =>{
        const target = document.querySelector(tab.dataset.tabTarget) 
        tabContents.forEach(tabContent =>  {
            tabContent.classList.remove('active')
        })
        target.classList.add('active')
    })
})

//navbar javascript
var tab = document.getElementById('btn')
var ta = document.getElementById('bt')
var tab1 = document.getElementById('btn1')
var tab2 = document.getElementById('btn2')
var tab3 = document.getElementById('btn3')
var tab4 = document.getElementById('btn4')
var tab5 = document.getElementById('service-btn')
var tab6 = document.getElementById('service-btn1')
var tab7 = document.getElementById('service-btn2')
var tab8 = document.getElementById('service-btn3')
var tab9 = document.getElementById('service-btn4')
var tab10 = document.getElementById('service-btn5')

tab5.addEventListener('click', () => {
   tab.className = "";
   ta.className = "";
   tab1.className = "";
   tab2.className = "";
   tab3.className = "active";
})
tab6.addEventListener('click', () => {
   tab.className = "";
   ta.className = "";
   tab1.className = "";
   tab2.className = "";
   tab3.className = "active";
})
tab7.addEventListener('click', () => {
   tab.className = "";
   ta.className = "";
   tab1.className = "";
   tab2.className = "";
   tab3.className = "active";
})
tab8.addEventListener('click', () => {
   tab.className = "";
   ta.className = "";
   tab1.className = "";
   tab2.className = "";
   tab3.className = "active";
})
tab9.addEventListener('click', () => {
   tab.className = "";
   ta.className = "";
   tab1.className = "";
   tab2.className = "";
   tab3.className = "active";
})
tab10.addEventListener('click', () => {
   tab.className = "";
   ta.className = "";
   tab1.className = "";
   tab2.className = "";
   tab3.className = "active";
})

 tab.addEventListener('click', () => {
    tab.className = "active";
    ta.className = "";
    tab1.className = "";
    tab2.className = "";
    tab3.className = "";
 })

 tab1.addEventListener('click', () => {
    tab.className = "";
    ta.className = "";
    tab1.className = "active";
    tab2.className = "";
    tab3.className = "";
 })

 tab2.addEventListener('click', () => {
    tab.className = "";
    ta.className = "";
    tab1.className = "";
    tab2.className = "active";
    tab3.className = "";
 })

 tab3.addEventListener('click', () => {
    tab.className = "";
    ta.className = "";
    tab1.className = "";
    tab2.className = "";
    tab3.className = "active";
 })



 ta.addEventListener('click', () => {
    tab.className = "";
    ta.className = "active";
    tab1.className = "";
    tab2.className = "";
    tab3.className = "";
 })

 tab4.addEventListener('click', () => {
    tab.className = "active";
    ta.className = "";
    tab1.className = "";
    tab2.className = "";
    tab3.className = "";
 })


//navbar-mobile

var navbtn = document.getElementById('navbtn')
var navbtn1 = document.getElementById('navbtn1')
var navbtn2 = document.getElementById('navbtn2')
var navbtn3 = document.getElementById('navbtn3')
var navbtn4 = document.getElementById('navbtn4')
var navbarmobile = document.getElementById('navbar-mobile')
var togglebtn = document.getElementById('toggle-button');
var logo = document.getElementById('logo')

logo.addEventListener('click', () => {
   togglebtn.click();
})
navbtn.addEventListener('click', () => {
   togglebtn.click();
})
navbtn1.addEventListener('click', () => {
   togglebtn.click();
})
navbtn2.addEventListener('click', () => {
   togglebtn.click();
})
navbtn3.addEventListener('click', () => {
   togglebtn.click();
})
navbtn4.addEventListener('click', () => {
   togglebtn.click();
})

navbtn.addEventListener('click', () => {
   navbtn.className = "active1"
   navbtn1.className = ""
   navbtn2.className = ""
   navbtn3.className = ""
   navbtn4.className = ""
})

navbtn1.addEventListener('click', () => {
   navbtn.className = ""
   navbtn1.className = "active1"
   navbtn2.className = ""
   navbtn3.className = ""
   navbtn4.className = ""
})
navbtn2.addEventListener('click', () => {
   navbtn.className = ""
   navbtn1.className = ""
   navbtn2.className = "active1"
   navbtn3.className = ""
   navbtn4.className = ""
})
navbtn3.addEventListener('click', () => {
   navbtn.className = ""
   navbtn1.className = ""
   navbtn2.className = ""
   navbtn3.className = "active1"
   navbtn4.className = ""
})
navbtn4.addEventListener('click', () => {
   navbtn.className = ""
   navbtn1.className = ""
   navbtn2.className = ""
   navbtn3.className = ""
   navbtn4.className = "active1"
})
logo.addEventListener('click', () => {
   navbtn.className = ""
   navbtn1.className = "active1"
   navbtn2.className = ""
   navbtn3.className = ""
   navbtn4.className = ""
})



 //portfolio
 var ct1 = document.getElementById('ct1')
 var ct2 = document.getElementById('ct2')
 var ct3 = document.getElementById('ct3')
 var ct4 = document.getElementById('ct4')
 var bt1 = document.getElementById('all')
 var bt2 = document.getElementById('media')
 var bt3 = document.getElementById('illustration')
 var bt4 = document.getElementById('video')

 bt1.addEventListener('click', () => {
   ct1.className = "content1";
   ct2.className = "content2";
   ct3.className = "content2";
   ct4.className = "content2";
})

bt2.addEventListener('click', () => {
   ct1.className = "content2";
   ct2.className = "content1";
   ct3.className = "content2";
   ct4.className = "content2";
})

bt3.addEventListener('click', () => {
   ct1.className = "content2";
   ct2.className = "content2";
   ct3.className = "content1";
   ct4.className = "content2";
})

bt4.addEventListener('click', () => {
   ct1.className = "content2";
   ct2.className = "content2";
   ct3.className = "content2";
   ct4.className = "content1";
})


/* 
var closebutton = document.getElementById('close-button')
var media1 = document.getElementById('port-content')

closebutton.addEventListener('click', () => {
   media1.style.visibility = "hidden";
})

/*
var closebutton3 = document.getElementById('close-button3')
var media3 = document.getElementById('port-content3')

closebutton3.addEventListener('click', () => {
   media3.style.visibility = "hidden";
})
*/