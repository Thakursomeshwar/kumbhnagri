document.addEventListener("contextmenu",
    function(e){
        e.preventDefault()
    },false
)
document.querySelector(".menutoggle").addEventListener("click",
    function(){
        let tg=document.getElementById("ck1");
        tg.checked=false;
    }
)
document.querySelector("#ck2").addEventListener("click",function(){
    let dl=document.getElementById("ck2");
    if(dl.checked == true){
        document.querySelector("body").style.background="black";
        document.querySelector("body").style.color="white";
        document.querySelector(".box").style.background="linear-gradient(rgba(255,255,255,0.3),rgba(0,0,0,0.3)),url(./resource/day.png)";
        document.querySelector(".box").style.backgroundPosition="center";
        document.querySelector(".box").style.border="2px solid white";
        document.querySelector(".box").style.backgroundSize="cover";
        document.querySelector("#f").style.backgroundColor="white";
        document.querySelector("#s").style.backgroundColor="white";
        document.querySelector("#t").style.backgroundColor="white";
        document.querySelector("#opt2").style.color="white";
        document.querySelector("#opt3").style.color="white";
        document.querySelector(".shlok").style.color="white";
        document.querySelector(".shlok").style.border="2px solid white";
        document.querySelector(".fort p").style.border= "2px solid white";
        document.querySelector("#dg").style.border= "2px solid white";
        document.querySelector(".menutoggle").style.backgroundColor="rgba(0, 0, 0, 0.6)";
        document.querySelector(".mcolor").style.color="white";
        document.querySelector(".mcolor2").style.color="white";
        document.querySelector(".mcolor3").style.color="white";
    }
    else{
        document.querySelector("body").style.background="rgb(167, 166, 166)";
        document.querySelector("body").style.color="black";
        document.querySelector(".box").style.background="linear-gradient(rgba(255,255,255,0.3),rgba(0,0,0,0.3)),url(./resource/night.png)";
        document.querySelector(".box").style.backgroundPosition="center";
        document.querySelector(".box").style.backgroundSize="cover";
        document.querySelector(".box").style.border="2px solid white";
        document.querySelector("#f").style.backgroundColor="black";
        document.querySelector("#s").style.backgroundColor="black";
        document.querySelector("#t").style.backgroundColor="black"; 
        document.querySelector(".shlok").style.border="2px solid black";
        document.querySelector(".shlok").style.color="black";
        document.querySelector(".fort p").style.border= "2px solid black";
        document.querySelector("#dg").style.border= "2px solid black";
        document.querySelector("#opt2").style.color="black";
        document.querySelector("#opt3").style.color="black";
        document.querySelector(".menutoggle").style.backgroundColor="rgba(255, 255, 255, 0.6)";  
        document.querySelector(".mcolor").style.color="black";
        document.querySelector(".mcolor2").style.color="black";
        document.querySelector(".mcolor3").style.color="black";
    }
})

let m1 = document.querySelector("#mapf");
let m2 = document.querySelector("#maps");
let m3 = document.querySelector("#mapb");
let fm = document.querySelector("#map1");
let sm = document.querySelector("#map2");
if(m1.checked == true){
    sm.style.height="0px";
}
function clicked1(){
    m1.checked=true;
    if(m1.checked == true){
        sm.style.height="0px";
        fm.style.height="350px";
    }
}
function clicked2(){
    m2.checked=true;
    if(m2.checked==true){
        fm.style.height="0px";
        sm.style.height="350px";
    }
}
function clicked3(){
    m3.checked=true;
    if(m3.checked == true){
        sm.style.height="350px";
        fm.style.height="350px";
    }
}
let ho1 = document.querySelector("#btn1");
        let hov1 = document.querySelector(".hoverUn1"); 
        let ho2 = document.querySelector("#btn2");
        let hov2 = document.querySelector(".hoverUn2");
        let ho3 = document.querySelector("#btn3"); 
        let hov3 = document.querySelector(".hoverUn3");
        let ctn1 = document.querySelector(".pcontainer1");
        let ctn2 = document.querySelector(".pcontainer2");
        let ctn3 = document.querySelector(".pcontainer3");
        ho1.addEventListener("click",function(){
            hov1.style.width="100%";
            hov2.style.width="0%";
            hov3.style.width="0%";
            ho1.style.color="red";
            ho2.style.color="black";
            ho3.style.color="black";
            ctn1.style.width="80%";
            ctn2.style.width="0%";
            ctn3.style.width="0%";
            ctn1.style.margin= "0px 10%";
            ctn2.style.margin= "0px 0px";
            ctn3.style.margin= "0px 0px";
        })
        ho2.addEventListener("click",function(){
            hov2.style.width="100%";
            ho2.style.color="red";
            ho1.style.color="black";
            ho3.style.color="black";
            hov1.style.width="0%";
            hov3.style.width="0%";
            ctn2.style.width="80%";
            ctn1.style.width="0%";
            ctn3.style.width="0%";
            ctn2.style.margin= "0px 10%";
            ctn1.style.margin= "0px 0px";
            ctn3.style.margin= "0px 0px";
        })
        ho3.addEventListener("click",function(){
            hov3.style.width="100%";
            hov2.style.width="0%";
            ho3.style.color="red";
            ho2.style.color="black";
            ho1.style.color="black";
            hov1.style.width="0%";
            ctn3.style.width="80%";
            ctn2.style.width="0%";
            ctn1.style.width="0%";
            ctn3.style.margin= "0px 10%";
            ctn1.style.margin= "0px 0px";
            ctn2.style.margin= "0px 0px";
        })