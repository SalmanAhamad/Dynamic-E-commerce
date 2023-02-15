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
a3.setAttribute("class","active");
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
section2.setAttribute("class","blog-header");
document.querySelector("#Parent-section").append(section2);

var h2=document.createElement("h2");
h2.innerText="#readmore";
var p=document.createElement("p");
p.innerText="Read all case studies about our products!";
document.querySelector("#page-header").append(h2,p);
/*section page header end*/


/*section blog*/

/* blog one*/
var section3=document.createElement("section");
section3.setAttribute("id","blog");
document.querySelector("#Parent-section").append(section3);


var div=document.createElement("div");
    div.setAttribute("class","blog-box")
    document.querySelector("#blog").append(div);

var div=document.createElement("div");
    div.setAttribute("class","blog-img")
    document.querySelector(".blog-box").append(div);

var image=document.createElement("img");
    image.setAttribute("src","img/blog/b1.jpg");
    document.querySelector(".blog-img").append(image);

var div=document.createElement("div");
    div.setAttribute("class","blog-details")
    document.querySelector(".blog-box").append(div);

var h4=document.createElement("h4");
    h4.innerText="The Cotton-jersey zip-up hoodie";
    document.querySelector(".blog-details").append(h4);

    
var p=document.createElement("p");
    p.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores quia maxime tenetur deserunt reprehenderit facilis aliquam labore nesciunt repudiandae nisi reiciendis vitae consectetur delectus iure corporis culpa, quod dolorem!";
    document.querySelector(".blog-details").append(p);

var a=document.createElement("a");
    a.setAttribute("href","#");
    a.innerText="CONTINUE RAEDING";
    document.querySelector(".blog-details").append(a);

var h1=document.createElement("h1");
    h1.innerText="13/01";
    document.querySelector(".blog-box").append(h1);

  /* blog2*/  
var div=document.createElement("div");
div.setAttribute("class","blog-box blog-box1")
document.querySelector("#blog").append(div);

var div=document.createElement("div");
div.setAttribute("class","blog-img blog-img1")
document.querySelector(".blog-box1").append(div);

var image=document.createElement("img");
image.setAttribute("src","img/blog/b2.jpg");
document.querySelector(".blog-img1").append(image);

var div=document.createElement("div");
div.setAttribute("class","blog-details blog-details1")
document.querySelector(".blog-box1").append(div);

var h4=document.createElement("h4");
h4.innerText="How to style a Quiff";
document.querySelector(".blog-details1").append(h4);

var p=document.createElement("p");
p.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores quia maxime tenetur deserunt reprehenderit facilis aliquam labore nesciunt repudiandae nisi reiciendis vitae consectetur delectus iure corporis culpa, quod dolorem!";
document.querySelector(".blog-details1").append(p);

var a=document.createElement("a");
a.setAttribute("href","#");
a.innerText="CONTINUE RAEDING";
document.querySelector(".blog-details1").append(a);

var h1=document.createElement("h1");
h1.innerText="13/01";
document.querySelector(".blog-box1").append(h1);

  /* blog3*/  
  var div=document.createElement("div");
  div.setAttribute("class","blog-box blog-box2")
  document.querySelector("#blog").append(div);
  
  var div=document.createElement("div");
  div.setAttribute("class","blog-img blog-img2")
  document.querySelector(".blog-box2").append(div);
  
  var image=document.createElement("img");
  image.setAttribute("src","img/blog/b3.jpg");
  document.querySelector(".blog-img2").append(image);
  
  var div=document.createElement("div");
  div.setAttribute("class","blog-details blog-details2")
  document.querySelector(".blog-box2").append(div);
  
  var h4=document.createElement("h4");
  h4.innerText="Must have skater Girl Items";
  document.querySelector(".blog-details2").append(h4);
   
  var p=document.createElement("p");
  p.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores quia maxime tenetur deserunt reprehenderit facilis aliquam labore nesciunt repudiandae nisi reiciendis vitae consectetur delectus iure corporis culpa, quod dolorem!";
  document.querySelector(".blog-details2").append(p);
  
  var a=document.createElement("a");
  a.setAttribute("href","#");
  a.innerText="CONTINUE RAEDING";
  document.querySelector(".blog-details2").append(a);
  
  var h1=document.createElement("h1");
  h1.innerText="13/01";
  document.querySelector(".blog-box2").append(h1);

  /* blog4*/  
  var div=document.createElement("div");
  div.setAttribute("class","blog-box blog-box4")
  document.querySelector("#blog").append(div);
  
  var div=document.createElement("div");
  div.setAttribute("class","blog-img blog-img4")
  document.querySelector(".blog-box4").append(div);
  
  var image=document.createElement("img");
  image.setAttribute("src","img/blog/b4.jpg");
  document.querySelector(".blog-img4").append(image);
  
  var div=document.createElement("div");
  div.setAttribute("class","blog-details blog-details4")
  document.querySelector(".blog-box4").append(div);
  
  var h4=document.createElement("h4");
  h4.innerText="Runway-Inspired Trends";
  document.querySelector(".blog-details4").append(h4);
  
  var p=document.createElement("p");
  p.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores quia maxime tenetur deserunt reprehenderit facilis aliquam labore nesciunt repudiandae nisi reiciendis vitae consectetur delectus iure corporis culpa, quod dolorem!";
  document.querySelector(".blog-details4").append(p);
  
  var a=document.createElement("a");
  a.setAttribute("href","#");
  a.innerText="CONTINUE RAEDING";
  document.querySelector(".blog-details4").append(a);

  var h1=document.createElement("h1");
  h1.innerText="13/01";
  document.querySelector(".blog-box4").append(h1);
  
  /* blog5*/  
  var div=document.createElement("div");
  div.setAttribute("class","blog-box blog-box5")
  document.querySelector("#blog").append(div);
  
  var div=document.createElement("div");
  div.setAttribute("class","blog-img blog-img5")
  document.querySelector(".blog-box5").append(div);
  
  var image=document.createElement("img");
  image.setAttribute("src","img/blog/b5.jpg");
  document.querySelector(".blog-img5").append(image);
  
  var div=document.createElement("div");
  div.setAttribute("class","blog-details blog-details5")
  document.querySelector(".blog-box5").append(div);
  
  var h4=document.createElement("h4");
  h4.innerText="AW20 Menswear Trends";
  document.querySelector(".blog-details5").append(h4);
   
  var p=document.createElement("p");
  p.innerText="Lorem ipsum dolor, sit amet consectetur adipisicing elit. Rerum maiores quia maxime tenetur deserunt reprehenderit facilis aliquam labore nesciunt repudiandae nisi reiciendis vitae consectetur delectus iure corporis culpa, quod dolorem!";
  document.querySelector(".blog-details5").append(p);
  
  var a=document.createElement("a");
  a.setAttribute("href","#");
  a.innerText="CONTINUE RAEDING";
  document.querySelector(".blog-details5").append(a);
  
  var h1=document.createElement("h1");
  h1.innerText="13/01";
  document.querySelector(".blog-box5").append(h1);
  
/*section blog end*/

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
