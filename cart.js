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
a6.setAttribute("class","active");
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

/* section Hero */

/*var section2=document.createElement("section");
section2.setAttribute("id","hero");
document.querySelector("#Parent-section").append(section2);

var heading1=document.createElement("h4");
heading1.innerHTML="Trade-in-offer"
var heading2=document.createElement("h2");
heading2.innerHTML="Super value deales"
var heading3=document.createElement("h1");
heading3.innerHTML="On all products"
var p1=document.createElement("p");
p1.innerHTML="Save more with coupons & up to 70% off!"
var btn1=document.createElement("button");
btn1.innerHTML="Shop Now"

document.querySelector("#hero").append(heading1);
document.querySelector("#hero").append(heading2);
document.querySelector("#hero").append(heading3);
document.querySelector("#hero").append(p1);
document.querySelector("#hero").append(btn1);
/* section Hero end*/

/* section Features*/
/*var section3=document.createElement("section");
section3.setAttribute("id","features");
section3.setAttribute("class","section-p1");
document.querySelector("#Parent-section").append(section3);

var fdiv1=document.createElement("div");
fdiv1.setAttribute("class","fe-box fe-box1");
 document.querySelector("#features").append(fdiv1);

 var fimg1=document.createElement("img");
 fimg1.setAttribute("src","img/features/f1.png");
 document.querySelector(".fe-box1").append(fimg1);

 var fhead1=document.createElement("h6");
 fhead1.innerHTML="Free Shipping"
document.querySelector(".fe-box1").append(fhead1);

var fdiv2=document.createElement("div");
fdiv2.setAttribute("class","fe-box fe-box2");
 document.querySelector("#features").append(fdiv2);

 var fimg2=document.createElement("img");
 fimg2.setAttribute("src","img/features/f2.png");
 document.querySelector(".fe-box2").append(fimg2);

 var fhead2=document.createElement("h6");
 fhead2.innerHTML="Online Order"
document.querySelector(".fe-box2").append(fhead2);

var fdiv3=document.createElement("div");
fdiv3.setAttribute("class","fe-box fe-box3");
 document.querySelector("#features").append(fdiv3);

 var fimg3=document.createElement("img");
 fimg3.setAttribute("src","img/features/f3.png");
 document.querySelector(".fe-box3").append(fimg3);

 var fhead3=document.createElement("h6");
 fhead3.innerHTML="Save Money"
document.querySelector(".fe-box3").append(fhead3);

var fdiv4=document.createElement("div");
fdiv4.setAttribute("class","fe-box fe-box4");
 document.querySelector("#features").append(fdiv4);

 var fimg4=document.createElement("img");
 fimg4.setAttribute("src","img/features/f4.png");
 document.querySelector(".fe-box4").append(fimg4);

 var fhead4=document.createElement("h6");
 fhead4.innerHTML="Promotion"
document.querySelector(".fe-box4").append(fhead4);

var fdiv5=document.createElement("div");
fdiv5.setAttribute("class","fe-box fe-box5");
 document.querySelector("#features").append(fdiv5);

 var fimg5=document.createElement("img");
 fimg5.setAttribute("src","img/features/f5.png");
 document.querySelector(".fe-box5").append(fimg5);

 var fhead5=document.createElement("h6");
 fhead5.innerHTML="Happy Sell"
document.querySelector(".fe-box5").append(fhead5);

var fdiv6=document.createElement("div");
fdiv6.setAttribute("class","fe-box fe-box6");
 document.querySelector("#features").append(fdiv6);

 var fimg6=document.createElement("img");
 fimg6.setAttribute("src","img/features/f6.png");
 document.querySelector(".fe-box6").append(fimg6);

 var fhead6=document.createElement("h6");
 fhead6.innerHTML="F24/7 Support"
document.querySelector(".fe-box6").append(fhead6);

/*section features end*/

/*section product1*/

/*var section4=document.createElement("section");
section4.setAttribute("id","product1");
section4.setAttribute("class","section-p1 parentproduct");
document.querySelector("#Parent-section").append(section4);

var pdthead1=document.createElement("h2");
var pdtp1=document.createElement("p");
pdthead1.innerHTML="Features products"
pdtp1.innerText="Summer Collection New Modern Design"
document.querySelector(".parentproduct").append(pdthead1);
document.querySelector(".parentproduct").append(pdtp1);

var pdtdiv1=document.createElement("div");
pdtdiv1.setAttribute("class", "pro-container");
document.querySelector(".parentproduct").append(pdtdiv1);
/*one*/
/*var pdtdiv2=document.createElement("div");
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
/*var pdtdiv2=document.createElement("div");
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
/*var pdtdiv2=document.createElement("div");
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
/*var pdtdiv2=document.createElement("div");
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
/*var pdtdiv2=document.createElement("div");
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
/*var pdtdiv2=document.createElement("div");
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
/*var pdtdiv2=document.createElement("div");
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
/*var pdtdiv2=document.createElement("div");
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

/*Banner section 5*/
/*var section5=document.createElement("section");
section5.setAttribute("id","banner");
section5.setAttribute("class","section-m1");
document.querySelector("#Parent-section").append(section5);

var bnrhead1=document.createElement("h4");
bnrhead1.innerText="Repair Service"
var bnrhead2=document.createElement("h2");
bnrhead2.innerText="Up to 70% off  All t-shirts & Accessories"
var bnrbtn1=document.createElement("button");
bnrbtn1.setAttribute("class","normal");
bnrbtn1.innerText="Explore More"

document.querySelector("#banner").append(bnrhead1);
document.querySelector("#banner").append(bnrhead2);
document.querySelector("#banner").append( bnrbtn1);

/* Banner section end*/


/*section product2*/

/*var section6=document.createElement("section");
section6.setAttribute("id","product1");
section6.setAttribute("class","section-p1 parentproduct parentproduct1");
document.querySelector("#Parent-section").append(section6);

var pdt2head1=document.createElement("h2");
var pdt2p1=document.createElement("p");
pdt2head1.innerHTML="New Arrivals"
pdt2p1.innerText="Summer Collection New Modern Design"
document.querySelector(".parentproduct1").append(pdt2head1);
document.querySelector(".parentproduct1").append(pdt2p1);

var pdt2div1=document.createElement("div");
pdt2div1.setAttribute("class", "pro-container pro-container1");
document.querySelector(".parentproduct1").append(pdt2div1);

/*one*/
/*var pdt2div2=document.createElement("div");
pdt2div2.setAttribute("class", "pro pro-pdt1");
document.querySelector(".pro-container1").append(pdt2div2);

var pdt2img1=document.createElement("img");
pdt2img1.setAttribute("src", "img/products/n1.jpg");
document.querySelector(".pro-pdt1").append(pdt2img1);

var pdt2div3=document.createElement("div");
pdt2div3.setAttribute("class", "des des-1");
document.querySelector(".pro-pdt1").append(pdt2div3);

var pd2span1=document.createElement("span");
pd2span1.innerHTML="adidas";
document.querySelector(".des-1").append(pd2span1);

var pdt2head2=document.createElement("h5");
pdt2head2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des-1").append(pdt2head2);


var pdt2div4=document.createElement("div");
pdt2div4.setAttribute("class", "star star-1");
document.querySelector(".des-1").append(pdt2div4);

for(var str=1; str<=5; str++)
{
    var star1=document.createElement("i");
    star1.setAttribute("class","fas fa-star");
    document.querySelector(".star-1").append(star1);
}

var pdt2head3=document.createElement("h5");
pdt2head3.innerText="$78";
document.querySelector(".star-1").after(pdt2head3);


var pdt2link1=document.createElement("a");
pdt2link1.setAttribute("href", "#");
pdt2link1.setAttribute("class","pdtlink pdtlink-1");
document.querySelector(".des-1").after(pdt2link1);

var pdt2cart1=document.createElement("i");
pdt2cart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlink-1").append(pdt2cart1);

/*two*/
/*var pdt2div2=document.createElement("div");
pdt2div2.setAttribute("class", "pro pro-pdt2");
document.querySelector(".pro-container1").append(pdt2div2);

var pdt2img1=document.createElement("img");
pdt2img1.setAttribute("src", "img/products/n2.jpg");
document.querySelector(".pro-pdt2").append(pdt2img1);

var pdt2div3=document.createElement("div");
pdt2div3.setAttribute("class", "des des-2");
document.querySelector(".pro-pdt2").append(pdt2div3);

var pd2span1=document.createElement("span");
pd2span1.innerHTML="adidas";
document.querySelector(".des-2").append(pd2span1);

var pdt2head2=document.createElement("h5");
pdt2head2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des-2").append(pdt2head2);


var pdt2div4=document.createElement("div");
pdt2div4.setAttribute("class", "star star-2");
document.querySelector(".des-2").append(pdt2div4);

for(var str=1; str<=5; str++)
{
    var star1=document.createElement("i");
    star1.setAttribute("class","fas fa-star");
    document.querySelector(".star-2").append(star1);
}

var pdt2head3=document.createElement("h5");
pdt2head3.innerText="$78";
document.querySelector(".star-2").after(pdt2head3);


var pdt2link1=document.createElement("a");
pdt2link1.setAttribute("href", "#");
pdt2link1.setAttribute("class","pdtlink pdtlink-2");
document.querySelector(".des-2").after(pdt2link1);

var pdt2cart1=document.createElement("i");
pdt2cart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlink-2").append(pdt2cart1);


/*three*/
/*var pdt2div2=document.createElement("div");
pdt2div2.setAttribute("class", "pro pro-pdt3");
document.querySelector(".pro-container1").append(pdt2div2);

var pdt2img1=document.createElement("img");
pdt2img1.setAttribute("src", "img/products/n3.jpg");
document.querySelector(".pro-pdt3").append(pdt2img1);

var pdt2div3=document.createElement("div");
pdt2div3.setAttribute("class", "des des-3");
document.querySelector(".pro-pdt3").append(pdt2div3);

var pd2span1=document.createElement("span");
pd2span1.innerHTML="adidas";
document.querySelector(".des-3").append(pd2span1);

var pdt2head2=document.createElement("h5");
pdt2head2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des-3").append(pdt2head2);


var pdt2div4=document.createElement("div");
pdt2div4.setAttribute("class", "star star-3");
document.querySelector(".des-3").append(pdt2div4);

for(var str=1; str<=5; str++)
{
    var star1=document.createElement("i");
    star1.setAttribute("class","fas fa-star");
    document.querySelector(".star-3").append(star1);
}

var pdt2head3=document.createElement("h5");
pdt2head3.innerText="$78";
document.querySelector(".star-3").after(pdt2head3);


var pdt2link1=document.createElement("a");
pdt2link1.setAttribute("href", "#");
pdt2link1.setAttribute("class","pdtlink pdtlink-3");
document.querySelector(".des-3").after(pdt2link1);

var pdt2cart1=document.createElement("i");
pdt2cart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlink-3").append(pdt2cart1);



/*four*/
/*var pdt2div2=document.createElement("div");
pdt2div2.setAttribute("class", "pro pro-pdt4");
document.querySelector(".pro-container1").append(pdt2div2);

var pdt2img1=document.createElement("img");
pdt2img1.setAttribute("src", "img/products/n4.jpg");
document.querySelector(".pro-pdt4").append(pdt2img1);

var pdt2div3=document.createElement("div");
pdt2div3.setAttribute("class", "des des-4");
document.querySelector(".pro-pdt4").append(pdt2div3);

var pd2span1=document.createElement("span");
pd2span1.innerHTML="adidas";
document.querySelector(".des-4").append(pd2span1);

var pdt2head2=document.createElement("h5");
pdt2head2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des-4").append(pdt2head2);


var pdt2div4=document.createElement("div");
pdt2div4.setAttribute("class", "star star-4");
document.querySelector(".des-4").append(pdt2div4);

for(var str=1; str<=5; str++)
{
    var star1=document.createElement("i");
    star1.setAttribute("class","fas fa-star");
    document.querySelector(".star-4").append(star1);
}

var pdt2head3=document.createElement("h5");
pdt2head3.innerText="$78";
document.querySelector(".star-4").after(pdt2head3);


var pdt2link1=document.createElement("a");
pdt2link1.setAttribute("href", "#");
pdt2link1.setAttribute("class","pdtlink pdtlink-4");
document.querySelector(".des-4").after(pdt2link1);

var pdt2cart1=document.createElement("i");
pdt2cart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlink-4").append(pdt2cart1);



/*five*/
/*var pdt2div2=document.createElement("div");
pdt2div2.setAttribute("class", "pro pro-pdt5");
document.querySelector(".pro-container1").append(pdt2div2);

var pdt2img1=document.createElement("img");
pdt2img1.setAttribute("src", "img/products/n5.jpg");
document.querySelector(".pro-pdt5").append(pdt2img1);

var pdt2div3=document.createElement("div");
pdt2div3.setAttribute("class", "des des-5");
document.querySelector(".pro-pdt5").append(pdt2div3);

var pd2span1=document.createElement("span");
pd2span1.innerHTML="adidas";
document.querySelector(".des-5").append(pd2span1);

var pdt2head2=document.createElement("h5");
pdt2head2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des-5").append(pdt2head2);


var pdt2div4=document.createElement("div");
pdt2div4.setAttribute("class", "star star-5");
document.querySelector(".des-5").append(pdt2div4);

for(var str=1; str<=5; str++)
{
    var star1=document.createElement("i");
    star1.setAttribute("class","fas fa-star");
    document.querySelector(".star-5").append(star1);
}

var pdt2head3=document.createElement("h5");
pdt2head3.innerText="$78";
document.querySelector(".star-5").after(pdt2head3);


var pdt2link1=document.createElement("a");
pdt2link1.setAttribute("href", "#");
pdt2link1.setAttribute("class","pdtlink pdtlink-5");
document.querySelector(".des-5").after(pdt2link1);

var pdt2cart1=document.createElement("i");
pdt2cart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlink-5").append(pdt2cart1);




/*six*/
/*var pdt2div2=document.createElement("div");
pdt2div2.setAttribute("class", "pro pro-pdt6");
document.querySelector(".pro-container1").append(pdt2div2);

var pdt2img1=document.createElement("img");
pdt2img1.setAttribute("src", "img/products/n6.jpg");
document.querySelector(".pro-pdt6").append(pdt2img1);

var pdt2div3=document.createElement("div");
pdt2div3.setAttribute("class", "des des-6");
document.querySelector(".pro-pdt6").append(pdt2div3);

var pd2span1=document.createElement("span");
pd2span1.innerHTML="adidas";
document.querySelector(".des-6").append(pd2span1);

var pdt2head2=document.createElement("h5");
pdt2head2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des-6").append(pdt2head2);


var pdt2div4=document.createElement("div");
pdt2div4.setAttribute("class", "star star-6");
document.querySelector(".des-6").append(pdt2div4);

for(var str=1; str<=5; str++)
{
    var star1=document.createElement("i");
    star1.setAttribute("class","fas fa-star");
    document.querySelector(".star-6").append(star1);
}

var pdt2head3=document.createElement("h5");
pdt2head3.innerText="$78";
document.querySelector(".star-6").after(pdt2head3);


var pdt2link1=document.createElement("a");
pdt2link1.setAttribute("href", "#");
pdt2link1.setAttribute("class","pdtlink pdtlink-6");
document.querySelector(".des-6").after(pdt2link1);

var pdt2cart1=document.createElement("i");
pdt2cart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlink-6").append(pdt2cart1);



/*seven*/
/*var pdt2div2=document.createElement("div");
pdt2div2.setAttribute("class", "pro pro-pdt7");
document.querySelector(".pro-container1").append(pdt2div2);

var pdt2img1=document.createElement("img");
pdt2img1.setAttribute("src", "img/products/n7.jpg");
document.querySelector(".pro-pdt7").append(pdt2img1);

var pdt2div3=document.createElement("div");
pdt2div3.setAttribute("class", "des des-7");
document.querySelector(".pro-pdt7").append(pdt2div3);

var pd2span1=document.createElement("span");
pd2span1.innerHTML="adidas";
document.querySelector(".des-7").append(pd2span1);

var pdt2head2=document.createElement("h7");
pdt2head2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des-7").append(pdt2head2);


var pdt2div4=document.createElement("div");
pdt2div4.setAttribute("class", "star star-7");
document.querySelector(".des-7").append(pdt2div4);

for(var str=1; str<=5; str++)
{
    var star1=document.createElement("i");
    star1.setAttribute("class","fas fa-star");
    document.querySelector(".star-7").append(star1);
}

var pdt2head3=document.createElement("h5");
pdt2head3.innerText="$78";
document.querySelector(".star-7").after(pdt2head3);


var pdt2link1=document.createElement("a");
pdt2link1.setAttribute("href", "#");
pdt2link1.setAttribute("class","pdtlink pdtlink-7");
document.querySelector(".des-7").after(pdt2link1);

var pdt2cart1=document.createElement("i");
pdt2cart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlink-7").append(pdt2cart1);




/*eight*/
/*var pdt2div2=document.createElement("div");
pdt2div2.setAttribute("class", "pro pro-pdt8");
document.querySelector(".pro-container1").append(pdt2div2);

var pdt2img1=document.createElement("img");
pdt2img1.setAttribute("src", "img/products/n8.jpg");
document.querySelector(".pro-pdt8").append(pdt2img1);

var pdt2div3=document.createElement("div");
pdt2div3.setAttribute("class", "des des-8");
document.querySelector(".pro-pdt8").append(pdt2div3);

var pd2span1=document.createElement("span");
pd2span1.innerHTML="adidas";
document.querySelector(".des-8").append(pd2span1);

var pdt2head2=document.createElement("h5");
pdt2head2.innerText="Cotton Astronaut T-shirt";
document.querySelector(".des-8").append(pdt2head2);


var pdt2div4=document.createElement("div");
pdt2div4.setAttribute("class", "star star-8");
document.querySelector(".des-8").append(pdt2div4);

for(var str=1; str<=5; str++)
{
    var star1=document.createElement("i");
    star1.setAttribute("class","fas fa-star");
    document.querySelector(".star-8").append(star1);
}

var pdt2head3=document.createElement("h5");
pdt2head3.innerText="$78";
document.querySelector(".star-8").after(pdt2head3);


var pdt2link1=document.createElement("a");
pdt2link1.setAttribute("href", "#");
pdt2link1.setAttribute("class","pdtlink pdtlink-8");
document.querySelector(".des-8").after(pdt2link1);

var pdt2cart1=document.createElement("i");
pdt2cart1.setAttribute("class","fa-solid fa-cart-shopping cart");
document.querySelector(".pdtlink-8").append(pdt2cart1);

/*section product2 end*/

/*section7 sm-banner
var section7=document.createElement("section");
    section7.setAttribute("id","sm-banner");
    section7.setAttribute("class","section-p1");
    document.querySelector("#Parent-section").append(section7);

 var bardiv1=document.createElement("div");
    bardiv1.setAttribute("class","banner-box");
    document.querySelector("#sm-banner").append(bardiv1);

var barhead1=document.createElement("h4");
     barhead1.innerText="Crazy deals";
     document.querySelector(".banner-box").append(barhead1);

var barhead2=document.createElement("h2");
     barhead2.innerText="buy 1 get 1 free";
     document.querySelector(".banner-box").append(barhead2);

var barspan1=document.createElement("span");
    barspan1.innerText="The best classic dress is on sale at cara";
     document.querySelector(".banner-box").append(barspan1);

var barbtn1=document.createElement("button");
    barbtn1.setAttribute("class", "white");
    barbtn1.innerText="Learn More";
      document.querySelector(".banner-box").append(barbtn1);


      var bardiv1=document.createElement("div");
      bardiv1.setAttribute("class","banner-box banner-box2");
      document.querySelector("#sm-banner").append(bardiv1);
  
  var barhead1=document.createElement("h4");
       barhead1.innerText="Spring/Summer";
       document.querySelector(".banner-box2").append(barhead1);
  
  var barhead2=document.createElement("h2");
       barhead2.innerText="Upcoming season";
       document.querySelector(".banner-box2").append(barhead2);
  
  var barspan1=document.createElement("span");
      barspan1.innerText="The best classic dress is on sale at cara";
       document.querySelector(".banner-box2").append(barspan1);
  
  var barbtn1=document.createElement("button");
      barbtn1.setAttribute("class", "white");
      barbtn1.innerText="Collection";
        document.querySelector(".banner-box2").append(barbtn1);

/*section7 sm-banner end*/   
 
/*section8 banner3
var section8=document.createElement("section");
    section8.setAttribute("id","banner3");
    document.querySelector("#Parent-section").append(section8);

var bnrdiv1=document.createElement("div");
    bnrdiv1.setAttribute("class","banner-box banner-p");
    document.querySelector("#banner3").append(bnrdiv1);

var bnrhead1=document.createElement("h2");   
    bnrhead1.innerText="SEASONAL SALE";
    document.querySelector(".banner-p").append(bnrhead1);

var bnrhead2=document.createElement("h3");   
    bnrhead2.innerText="Winter Collection -50% Off";
    document.querySelector(".banner-p").append(bnrhead2)

 var bnrdiv1=document.createElement("div");
    bnrdiv1.setAttribute("class","banner-box banner-box2 banner-p1");
    document.querySelector("#banner3").append(bnrdiv1);

var bnrhead1=document.createElement("h2");   
    bnrhead1.innerText="NEW FOOTWEAR COLLECTION";
    document.querySelector(".banner-p1").append(bnrhead1);

var bnrhead2=document.createElement("h3");   
    bnrhead2.innerText="Spring/summer 2023";
    document.querySelector(".banner-p1").append(bnrhead2)
   
 var bnrdiv1=document.createElement("div");
     bnrdiv1.setAttribute("class","banner-box banner-box3 banner-p2");
     document.querySelector("#banner3").append(bnrdiv1);

var bnrhead1=document.createElement("h2");   
    bnrhead1.innerText="T-SHIRTS";
    document.querySelector(".banner-p2").append(bnrhead1);

var bnrhead2=document.createElement("h3");   
    bnrhead2.innerText="New trendy prints";
    document.querySelector(".banner-p2").append(bnrhead2);
 /*section8 banner3 end*/

/*section9 news letter
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

/*footer start

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

      /*<footer class="section-p1">
            <div class="col install">
                <p>Secured Payment Gateways</p>
                <img src="img/pay/pay.png" alt="">
            </div>
        </footer> */

