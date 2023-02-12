/* javascript Home page*/
/* section header */
var section1=document.createElement("section");
section1.setAttribute("id","header");
document.querySelector("#Parent-section").append(section1);

var header=document.createElement("a");
header.setAttribute("href","#");
header.setAttribute("id","a");
document.querySelector("#header").append(header);

var img=document.createElement("img");
img.setAttribute("src","img/logo.png");
document.querySelector("#a").append(img);

var div=document.createElement("div");
div.setAttribute("id","headdiv")
document.querySelector("#header").append(div);

var ul=document.createElement("ul");
ul.setAttribute("id","navbar");
document.querySelector("div").append(ul);

var li1=document.createElement("li");
li1.setAttribute("id","navbar-li1");
document.querySelector("#navbar").append(li1);

var a1=document.createElement("a");

a1.setAttribute("href","index.html");
a1.innerHTML="HOME"
document.querySelector("#navbar-li1").append(a1);

var li2=document.createElement("li");
li2.setAttribute("id","navbar-li2");
document.querySelector("#navbar").append(li2);

var a2=document.createElement("a");
a2.setAttribute("class","active");
a2.setAttribute("href","shop.html");
a2.innerHTML="Shop"
document.querySelector("#navbar-li2").append(a2);

var li3=document.createElement("li");
li3.setAttribute("id","navbar-li3");
document.querySelector("#navbar").append(li3);

var a3=document.createElement("a");
a3.setAttribute("href","blog.html");
a3.innerHTML="Blog"
document.querySelector("#navbar-li3").append(a3);

var li4=document.createElement("li");
li4.setAttribute("id","navbar-li4");
document.querySelector("#navbar").append(li4);

var a4=document.createElement("a");
a4.setAttribute("href","about.html");
a4.innerHTML="About"
document.querySelector("#navbar-li4").append(a4);

var li5=document.createElement("li");
li5.setAttribute("id","navbar-li5");
document.querySelector("#navbar").append(li5);
var a5=document.createElement("a");
a5.setAttribute("href","contact.html");
a5.innerHTML="Contact"
document.querySelector("#navbar-li5").append(a5);

var li6=document.createElement("li");
li6.setAttribute("id","navbar-li6");
document.querySelector("#navbar").append(li6);
var a6=document.createElement("a");
a6.setAttribute("id","lg-bag");
a6.setAttribute("href","cart.html");
document.querySelector("#navbar-li6").append(a6);

var icon1=document.createElement("i");
icon1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector("#lg-bag").append(icon1);

var a7=document.createElement("a");
a7.setAttribute("href","#");
a7.setAttribute("id","cross");
document.querySelector("#navbar").append(a7);

var icon2=document.createElement("i");
icon2.setAttribute("id","close");
icon2.setAttribute("class","fa fa-times");
document.querySelector("#cross").append(icon2);


var div=document.createElement("div");
    div.setAttribute("id","mobile")
    document.querySelector("#header").append(div);

var a7=document.createElement("a");
     a7.setAttribute("href","cart.html");
     a7.setAttribute("class","mobile-icon");
     document.querySelector("#mobile").append(a7);

var icon1=document.createElement("i");
    icon1.setAttribute("class","fa-solid fa-cart-shopping cart");
     document.querySelector(".mobile-icon").append(icon1);

var icon1=document.createElement("i");
    icon1.setAttribute("class","fas fa-outdent");
    icon1.setAttribute("id","bar");
     document.querySelector("#mobile").append(icon1);

/* section header  end */

/*section page header*/
var section2=document.createElement("section");
section2.setAttribute("id","page-header");
document.querySelector("#Parent-section").append(section2);

var h2=document.createElement("h2");
h2.innerText="#Stayhome";
var p=document.createElement("p");
p.innerText="Save more with coupons & up to 70% off!";
document.querySelector("#page-header").append(h2,p);
/*section page header end*/




/*section product1*/

var section4=document.createElement("section");
section4.setAttribute("id","product1");
section4.setAttribute("class","section-p1 parentproduct");
document.querySelector("#Parent-section").append(section4);

var pdtdiv1=document.createElement("div");
pdtdiv1.setAttribute("class", "pro-container");
document.querySelector(".parentproduct").append(pdtdiv1);
/*one*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/f1.jpg");
document.querySelector(".pro").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des");
document.querySelector(".pro").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star");
document.querySelector(".des").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star").after(pdthead3);


var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink");
document.querySelector(".des").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlink").append(pdtcart1);

/*two*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro1");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/f2.jpg");
document.querySelector(".pro1").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des1");
document.querySelector(".pro1").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des1").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des1").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star1");
document.querySelector(".des1").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star1").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star1").after(pdthead3);


var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkone");
document.querySelector(".des1").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkone").append(pdtcart1);



/*three*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro2");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/f3.jpg");
document.querySelector(".pro2").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des2");
document.querySelector(".pro2").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des2").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des2").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star2");
document.querySelector(".des2").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star2").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star2").after(pdthead3);


var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinktwo");
document.querySelector(".des2").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinktwo").append(pdtcart1);



/*four*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro3");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/f4.jpg");
document.querySelector(".pro3").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des3");
document.querySelector(".pro3").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des3").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des3").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star3");
document.querySelector(".des3").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star3").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star3").after(pdthead3);


var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkthree");
document.querySelector(".des3").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkthree").append(pdtcart1);



/*five*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro4");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/f5.jpg");
document.querySelector(".pro4").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des4");
document.querySelector(".pro4").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des4").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des4").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star4");
document.querySelector(".des4").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star4").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star4").after(pdthead3);


var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkfour");
document.querySelector(".des4").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkfour").append(pdtcart1);



/*six*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro5");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/f6.jpg");
document.querySelector(".pro5").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des5");
document.querySelector(".pro5").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des5").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des5").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star5");
document.querySelector(".des5").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star5").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star5").after(pdthead3);


var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkfive");
document.querySelector(".des5").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkfive").append(pdtcart1);


/*seven*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro6");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/f7.jpg");
document.querySelector(".pro6").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des6");
document.querySelector(".pro6").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des6").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des6").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star6");
document.querySelector(".des6").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star6").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star6").after(pdthead3);


var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinksix");
document.querySelector(".des6").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinksix").append(pdtcart1);


/*eight*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro7");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/f8.jpg");
document.querySelector(".pro7").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des7");
document.querySelector(".pro7").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des7").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des7").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star7");
document.querySelector(".des7").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star7").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star7").after(pdthead3);


var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkseven");
document.querySelector(".des7").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkseven").append(pdtcart1);



/*nine*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro9");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/n1.jpg");
document.querySelector(".pro9").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des9");
document.querySelector(".pro9").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des9").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des9").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star9");
document.querySelector(".des9").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star9").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star9").after(pdthead3);


var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkseven");
document.querySelector(".des9").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkseven").append(pdtcart1);

/*Ten*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro10");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/n2.jpg");
document.querySelector(".pro10").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des10");
document.querySelector(".pro10").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des10").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des10").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star10");
document.querySelector(".des10").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star10").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star10").after(pdthead3);

var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkseven");
document.querySelector(".des10").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkseven").append(pdtcart1);

/*eleven*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro11");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/n3.jpg");
document.querySelector(".pro11").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des11");
document.querySelector(".pro11").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des11").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des11").append(pdthead2);

var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star11");
document.querySelector(".des11").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star11").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star11").after(pdthead3);

var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkseven");
document.querySelector(".des11").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkseven").append(pdtcart1);

/*Twoeleve*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro12");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/n4.jpg");
document.querySelector(".pro12").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des12");
document.querySelector(".pro12").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des12").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des12").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star12");
document.querySelector(".des12").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star12").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star12").after(pdthead3);

var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkseven");
document.querySelector(".des12").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkseven").append(pdtcart1);

/*Thirdteen*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro13");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/n5.jpg");
document.querySelector(".pro13").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des13");
document.querySelector(".pro13").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des13").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des13").append(pdthead2);


var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star13");
document.querySelector(".des13").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star13").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star13").after(pdthead3);

var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkseven");
document.querySelector(".des13").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkseven").append(pdtcart1);

/*Fourteen*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro14");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/n6.jpg");
document.querySelector(".pro14").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des14");
document.querySelector(".pro14").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des14").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des14").append(pdthead2);

var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star14");
document.querySelector(".des14").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star14").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star14").after(pdthead3);

var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkseven");
document.querySelector(".des14").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkseven").append(pdtcart1);


/*Fiveteen*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro15");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/n7.jpg");
document.querySelector(".pro15").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des15");
document.querySelector(".pro15").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des15").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des15").append(pdthead2);

var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star15");
document.querySelector(".des15").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star15").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star15").after(pdthead3);

var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkseven");
document.querySelector(".des15").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkseven").append(pdtcart1);

/*sixteen*/
var pdtdiv2=document.createElement("div");
pdtdiv2.setAttribute("class", "pro pro16");
document.querySelector(".pro-container").append(pdtdiv2);

var pdtimg1=document.createElement("img");
pdtimg1.setAttribute("src", "img/products/n7.jpg");
document.querySelector(".pro16").append(pdtimg1);

var pdtdiv3=document.createElement("div");
pdtdiv3.setAttribute("class", "des des16");
document.querySelector(".pro16").append(pdtdiv3);

var pdspan1=document.createElement("span");
pdspan1.innerHTML="adidas";
document.querySelector(".des16").append(pdspan1);

var pdthead2=document.createElement("h5");
pdthead2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des16").append(pdthead2);

var pdtdiv4=document.createElement("div");
pdtdiv4.setAttribute("class", "star star16");
document.querySelector(".des16").append(pdtdiv4);

for(var str=1; str<=5; str++)
{
    var star=document.createElement("i");
    star.setAttribute("class","fas fa-star");
    document.querySelector(".star16").append(star);
}

var pdthead3=document.createElement("h5");
pdthead3.innerText="$78";
document.querySelector(".star16").after(pdthead3);

var pdtlink1=document.createElement("a");
pdtlink1.setAttribute("href", "#");
pdtlink1.setAttribute("class","pdtlink pdtlinkseven");
document.querySelector(".des16").after(pdtlink1);

var pdtcart1=document.createElement("i");
pdtcart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlinkseven").append(pdtcart1);

/*pagenation start*/
var section8=document.createElement("section");
    section8.setAttribute("id","pagination");
    section8.setAttribute("class","section-p1");
    document.querySelector("#Parent-section").append(section8);

var a1=document.createElement("a");   
var a2=document.createElement("a"); 
var a3=document.createElement("a"); 
  a1.setAttribute("href","#");
  a1.innerText="1"
  a2.setAttribute("href","#");
  a2.innerText="2"
  a3.setAttribute("href","#");
  a3.setAttribute("id","arrow");
  document.querySelector("#pagination").append(a1,a2,a3);

  var arrow1=document.createElement("i"); 
  arrow1.setAttribute("class","fa fa-long-arrow-alt-right");
  document.querySelector("#arrow").append(arrow1);
 
/*pagenation end*/

/*section9 news letter*/
var section9=document.createElement("section");
    section9.setAttribute("id","newsletter");
    section9.setAttribute("class","section-p1 section-m1");
    document.querySelector("#Parent-section").append(section9);

    var newsdiv1=document.createElement("div");
    newsdiv1.setAttribute("class","newstext");
    document.querySelector("#newsletter").append(newsdiv1);

    var newshead1=document.createElement("h4");   
        newshead1.innerText="Singup for Newsletter";
    document.querySelector(".newstext").append(newshead1);

    var newsp1=document.createElement("h4");   
        newsp1.innerText="Get Email updates about our latest shop and special offer.";
        document.querySelector(".newstext").append(newsp1);

    var newsdiv2=document.createElement("div");
        newsdiv2.setAttribute("class","form");
        document.querySelector("#newsletter").append(newsdiv2); 
        
    var newsinput=document.createElement("input");
         newsinput.setAttribute("type","text");
         newsinput.setAttribute("placeholder", "your email address"); 
         document.querySelector(".form").append(newsinput); 

  var newsbtn=document.createElement("button");
         newsbtn.setAttribute("class","normal"); 
         newsbtn.innerText="Sing Up"; 
         document.querySelector(".form").append(newsbtn); 
        
/*section9 news letter end*/

/*footer start*/

var footer=document.createElement("footer");
    footer.setAttribute("class","section-p1 ftr");
    document.querySelector("#Parent-section").append(footer);
    
var ftrdiv1=document.createElement("div");
    ftrdiv1.setAttribute("class","col");
    document.querySelector(".ftr").append(ftrdiv1);

var ftrimg1=document.createElement("img");
    ftrimg1.setAttribute("class","logo");
    ftrimg1.setAttribute("src","img/logo.png");
    document.querySelector(".col").append(ftrimg1);

var ftrhead1=document.createElement("h4");
    ftrhead1.innerText="Contact";
    document.querySelector(".col").append(ftrhead1); 

var ftrp1=document.createElement("p");
    ftrp1.innerText="Address:Lucknow uttar pradesh";
    document.querySelector(".col").append(ftrp1); 

 var ftrp2=document.createElement("p");
    ftrp2.innerText="Phones:7408983897";
    document.querySelector(".col").append(ftrp2); 

var ftrp3=document.createElement("p");
    ftrp3.innerText="Hours:10:00 to 06:00";
    document.querySelector(".col").append(ftrp3); 

 var ftrdiv2=document.createElement("div");
    ftrdiv2.setAttribute("class","follow");
    document.querySelector(".col").append(ftrdiv2); 

var ftrhead2=document.createElement("h4");
    ftrhead2.innerText="Follow Us";
    document.querySelector(".follow").append(ftrhead2);   
    
 var ftrdiv3=document.createElement("div");
    ftrdiv3.setAttribute("class","icon");
    document.querySelector(".follow").append(ftrdiv3);
    
    
 var ftricon=document.createElement("i");
    ftricon.setAttribute("class","fa-brands fa-facebook"); 
    document.querySelector(".icon").append(ftricon);

var ftricon=document.createElement("i");
    ftricon.setAttribute("class","fa-brands fa-twitter"); 
    document.querySelector(".icon").append(ftricon);

var ftricon=document.createElement("i");
    ftricon.setAttribute("class","fa-brands fa-instagram"); 
    document.querySelector(".icon").append(ftricon);

var ftricon=document.createElement("i");
    ftricon.setAttribute("class","fa-brands fa-youtube"); 
    document.querySelector(".icon").append(ftricon);

var ftrdiv3=document.createElement("div");
    ftrdiv3.setAttribute("class","col about");
    document.querySelector(".ftr").append(ftrdiv3);  
    
   var ftrhead3=document.createElement("h4");
   ftrhead3.innerText="About Us";
   document.querySelector(".about").append(ftrhead3); 
  
   var ftrlink1=document.createElement("a");
       ftrlink1.setAttribute("href","#");
       ftrlink1.innerText="Delievry Information";
       document.querySelector(".about").append(ftrlink1); 

   var ftrlink1=document.createElement("a");
       ftrlink1.setAttribute("href","#");
       ftrlink1.innerText="Privacy Policy";
       document.querySelector(".about").append(ftrlink1);

       
   var ftrlink1=document.createElement("a");
       ftrlink1.setAttribute("href","#");
       ftrlink1.innerText="Term & Condition";
       document.querySelector(".about").append(ftrlink1);

  var ftrlink1=document.createElement("a");
       ftrlink1.setAttribute("href","#");
       ftrlink1.innerText="Contact Us";
       document.querySelector(".about").append(ftrlink1);



  var ftrdiv4=document.createElement("div");
       ftrdiv4.setAttribute("class","col account");
       document.querySelector(".ftr").append(ftrdiv4);  
       
      var ftrhead4=document.createElement("h4");
      ftrhead4.innerText="My Account";
      document.querySelector(".account").append(ftrhead4); 
     
      var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="Sign IN";
          document.querySelector(".account").append(ftrlink1); 
   
      var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="View Cart";
          document.querySelector(".account").append(ftrlink1);
   
          
      var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="My wishlist";
          document.querySelector(".account").append(ftrlink1);
   
     var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="Track My Order";
          document.querySelector(".account").append(ftrlink1);

     var ftrlink1=document.createElement("a");
          ftrlink1.setAttribute("href","#");
          ftrlink1.innerText="Helps";
          document.querySelector(".account").append(ftrlink1);
      
    var ftrdiv5=document.createElement("div");
          ftrdiv5.setAttribute("class","col install");
          document.querySelector(".ftr").append(ftrdiv5);  

     var ftrhead4=document.createElement("h4");
          ftrhead4.innerText="Install App";
          document.querySelector(".install").append(ftrhead4);  

    var ftrp=document.createElement("p");
        ftrp.innerText="From App Store or Google Play";
          document.querySelector(".install").append(ftrp); 
          
          
    var ftrdiv5=document.createElement("div");
          ftrdiv5.setAttribute("class","row");
          document.querySelector(".install").append(ftrdiv5); 

    var ftrimg1=document.createElement("img");
        ftrimg1.setAttribute("src","img/pay/app.jpg");
        document.querySelector(".row").append(ftrimg1);  
        
    var ftrimg2=document.createElement("img");
        ftrimg2.setAttribute("src","img/pay/app.jpg"); 
        document.querySelector(".row").append(ftrimg2); 

    var ftrp=document.createElement("p");
        ftrp.innerText="Secured Payment Gateways";
        document.querySelector(".install").append(ftrp); 

    var ftrimg2=document.createElement("img");
        ftrimg2.setAttribute("src","img/pay/pay.png"); 
        document.querySelector(".install").append(ftrimg2); 

