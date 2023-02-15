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

/*section news letter*/
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
        
/*section news letter end*/

/* product details start*/
var section2=document.createElement("section");
    section2.setAttribute("id","prodetails");
    section2.setAttribute("class","section-p1");
document.querySelector("#Parent-section").append(section2);

var div=document.createElement("div");
    div.setAttribute("class","single-pro-image");
    document.querySelector("#prodetails").append(div);

    var img=document.createElement("img");
    img.setAttribute("id","MainImg");
    img.setAttribute("src","img/products/f1.jpg");
    img.setAttribute("width","100%");
    document.querySelector(".single-pro-image").append(img);

var div=document.createElement("div");
    div.setAttribute("class","small-img-group");
    document.querySelector(".single-pro-image").append(div);

var div=document.createElement("div");
    div.setAttribute("class","small-img-col");
    document.querySelector(".small-img-group").append(div);

var img=document.createElement("img");
    img.setAttribute("class","small-img");
    img.setAttribute("src","img/products/f1.jpg");
    img.setAttribute("width","100%");
    document.querySelector(".small-img-col").append(img);

var div=document.createElement("div");
    div.setAttribute("class","small-img-col small-img-col1");
    document.querySelector(".small-img-group").append(div);

var img=document.createElement("img");
    img.setAttribute("class","small-img");
    img.setAttribute("src","img/products/f2.jpg");
    img.setAttribute("width","100%");
    document.querySelector(".small-img-col1").append(img);

var div=document.createElement("div");
    div.setAttribute("class","small-img-col small-img-col2");
    document.querySelector(".small-img-group").append(div);

var img=document.createElement("img");
    img.setAttribute("class","small-img");
    img.setAttribute("src","img/products/f3.jpg");
    img.setAttribute("width","100%");
    document.querySelector(".small-img-col2").append(img);

var div=document.createElement("div");
    div.setAttribute("class","small-img-col small-img-col3");
    document.querySelector(".small-img-group").append(div);

var img=document.createElement("img");
    img.setAttribute("class","small-img");
    img.setAttribute("src","img/products/f4.jpg");
    img.setAttribute("width","100%");
    document.querySelector(".small-img-col3").append(img);

var div=document.createElement("div");
    div.setAttribute("class","single-pro-details");
    document.querySelector("#prodetails").append(div);

var h6=document.createElement("h6");
    h6.innerText="Home / T-Shirts";
var h4=document.createElement("h4");
    h4.innerText="Men's Fashtion T Shirts";
var h2=document.createElement("h2");
    h2.innerText="$139.00";
    document.querySelector(".single-pro-details").append(h6,h4,h2);

 var select=document.createElement("select");
     select.setAttribute("id","select");   
     document.querySelector(".single-pro-details").append(select);


var option1=document.createElement("option");
    option1.innerText="Select Size";
var option2=document.createElement("option");
    option2.innerText="XL";
var option3=document.createElement("option");
    option3.innerText="XXL";
var option4=document.createElement("option");
    option4.innerText="Small";
var option5=document.createElement("option");
    option5.innerText="Large";
document.querySelector("#select").append(option1,option2,option3,option4,option5);

var input=document.createElement("input");
         input.setAttribute("type","number"); 
         input.setAttribute("value","1"); 
         document.querySelector(".single-pro-details").append(input); 

  var newsbtn=document.createElement("button");
         newsbtn.setAttribute("class","normal"); 
         newsbtn.innerText="Add To Cart"; 
         document.querySelector(".single-pro-details").append(newsbtn); 

var h4=document.createElement("h4");
    h4.innerText="Product Details";
        
    
var span=document.createElement("span");
span.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero totam quas neque, tenetur quia quaerat vitae eos. Cum maxime, atque placeat, modi itaque omnis totam expedita voluptatem neque, fugiat dolore.";
document.querySelector(".single-pro-details").append(h4,span);
/* product details start*/

/*
<section id="prodetails" class="section-p1">
        
            <div class="single-pro-details">
              <h6>Home / T-Shirts</h6> 
              <h4>Men's Fashtion T Shirts</h4> 
              <h2>$139.00</h2>
              <select>
                <option>Select Size</option>
                <option>XL</option>
                <option>XXL</option>
                <option>Small</option>
                <option>Large</option>
              </select>
              <input type="number" value="1">
              <button class="normal">Add To Cart</button>
              <h4>Product Details</h4>
              <span>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero totam quas neque, tenetur quia quaerat vitae eos. Cum maxime, atque placeat, modi itaque omnis totam expedita voluptatem neque, fugiat dolore.</span>
            </div>

        </section>
*/


/*section product*/

var section6=document.createElement("section");
section6.setAttribute("id","product1");
section6.setAttribute("class","section-p1 parentproduct parentproduct1");
document.querySelector("#Parent-section").append(section6);

var pdt2head1=document.createElement("h2");
var pdt2p1=document.createElement("p");
pdt2head1.innerHTML="Features Products"
pdt2p1.innerText="Summer Collection New Modern Design"
document.querySelector(".parentproduct1").append(pdt2head1);
document.querySelector(".parentproduct1").append(pdt2p1);

var pdt2div1=document.createElement("div");
pdt2div1.setAttribute("class", "pro-container pro-container1");
document.querySelector(".parentproduct1").append(pdt2div1);

/*one*/
var pdt2div2=document.createElement("div");
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
var pdt2div2=document.createElement("div");
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
var pdt2div2=document.createElement("div");
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
var pdt2div2=document.createElement("div");
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

  /* sproducts script */
  var MainImg=document.getElementById("MainImg");
  var smallimg=document.getElementsByClassName("small-img");
   smallimg[0].onclick=function(){
      MainImg.src=smallimg[0].src;
   }
   smallimg[1].onclick=function(){
      MainImg.src=smallimg[1].src;
   }
   smallimg[2].onclick=function(){
      MainImg.src=smallimg[2].src;
   }
   smallimg[3].onclick=function(){
      MainImg.src=smallimg[3].src;
   }


   // Script for navigation bar
const bar=document.getElementById('bar');
const close=document.getElementById('close');
const nav=document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',()=>{
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',()=>{
        nav.classList.remove('active');
    })
}