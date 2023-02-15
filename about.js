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
a4.setAttribute("class","active");
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
section2.setAttribute("class","about-header");
document.querySelector("#Parent-section").append(section2);

var h2=document.createElement("h2");
h2.innerText="#KnowUs";
var p=document.createElement("p");
p.innerText="Lorem ipsum dolor sit, amet consectetur";
document.querySelector("#page-header").append(h2,p);
/*section page header end*/


var section3=document.createElement("section");
section3.setAttribute("id","about-head");
section3.setAttribute("class","section-p1");
document.querySelector("#Parent-section").append(section3);


var image=document.createElement("img");
    image.setAttribute("src","img/about/a6.jpg");
    document.querySelector("#about-head").append(image);

var div=document.createElement("div");
   div.setAttribute("class","div-content");
   document.querySelector("#about-head").append(div);

var h4=document.createElement("h4");
   h4.innerText="Who WE Are";
var p=document.createElement("p");
   p.innerText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias tempora sint ipsam dolor sequi molestiae, ullam reprehenderit repellat excepturi id? Corporis, assumenda. Maiores dolore commodi qui, tempora mollitia fugit officiis?";
var abbr=document.createElement("abbr");
   abbr.innerText="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Debitis eaque fugit";
   document.querySelector(".div-content").append(h4,p,abbr);
   
var section4=document.createElement("section");
   section4.setAttribute("id","about-app");
   section4.setAttribute("class","section-p1");
   document.querySelector("#Parent-section").append(section4);

var h1=document.createElement("h1");
   h1.setAttribute("id","head-video")
   h1.innerText="Download ";
   document.querySelector("#about-app").append(h1);

var link=document.createElement("a");
   link.setAttribute("href","#");
   link.innerText=" App";
   document.querySelector("#head-video").append(link);

   
var div=document.createElement("div");
    div.setAttribute("class","video");
    document.querySelector("#about-app").append(div);

var video=document.createElement("video");
    video.setAttribute("src","img/about/1.mp4");
    document.querySelector(".video").append(video);


  /* <section id="about-app" class="section-p1">
   <h1>Download <a href="#"> App</a></h1>
   <div class="video">
       <video autoplay muted loop src="img/about/1.mp4"></video>
   </div>
</section>
*/

/* section Features*/
var section3=document.createElement("section");
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

