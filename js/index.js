const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo

//Update images to the webpage

let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

const CTAIMAGE = document.querySelector('#cta-img');
CTAIMAGE.setAttribute('src', 'img/header-img.png');

const MIDDLEIMAGE = document.querySelector('#middle-img');
MIDDLEIMAGE.setAttribute('src', 'img/mid-page-accent.jpg');

//set the navigation bar

const navAnchorTags = document.querySelectorAll('nav a');
navAnchorTags[0].textContent = siteContent['nav']['nav-item-1'];
navAnchorTags[1].textContent = siteContent['nav']['nav-item-2'];
navAnchorTags[2].textContent = siteContent['nav']['nav-item-3'];
navAnchorTags[3].textContent = siteContent['nav']['nav-item-4'];
navAnchorTags[4].textContent = siteContent['nav']['nav-item-5'];
navAnchorTags[5].textContent = siteContent['nav']['nav-item-6'];

// navAnchorTags[0].style.color = 'green';
// navAnchorTags[1].style.color = 'green';
// navAnchorTags[2].style.color = 'green';
// navAnchorTags[3].style.color = 'green';
// navAnchorTags[4].style.color = 'green';
// navAnchorTags[5].style.color = 'green';
navAnchorTags.forEach(element => element.style.color = 'green');

const nav = document.querySelector("nav");
var anchor1 = document.createElement("A");
var text1 = document.createTextNode("Hello World!");
var anchor2 = document.createElement("A");
var text2 = document.createTextNode("Goodbye World!");
anchor1.appendChild(text1);
nav.prepend(anchor1);
anchor2.appendChild(text2);
nav.appendChild(anchor2);

//NodeList is not dynamic, it is static so it must be updated after
//anchor1 and anchor2 are appended to the navAnchorTags node list

const navAnchorTagsUpdated = document.querySelectorAll("nav a");
navAnchorTagsUpdated.forEach(element => element.style.color = 'green');

//set the top content

const ctaText = document.querySelector('.cta .cta-text h1');
ctaText.innerHTML = 'Dom <br> Is <br> Awesome';

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent['cta']['button'];

//set the main content

const h4 = document.querySelectorAll('h4');
h4[0].textContent = siteContent['main-content']['features-h4'];
h4[1].textContent = siteContent['main-content']['about-h4'];
h4[2].textContent = siteContent['main-content']['services-h4'];
h4[3].textContent = siteContent['main-content']['product-h4'];
h4[4].textContent = siteContent['main-content']['vision-h4'];

const paragraphs = document.querySelectorAll('p');
paragraphs[0].textContent = siteContent['main-content']['features-content'];
paragraphs[1].textContent = siteContent['main-content']['about-content'];
paragraphs[2].textContent = siteContent['main-content']['services-content'];
paragraphs[3].textContent = siteContent['main-content']['product-content'];
paragraphs[4].textContent = siteContent['main-content']['vision-content'];

//set the contact
h4[5].textContent = siteContent['contact']['contact-h4'];
paragraphs[5].innerHTML = '123 Way 456 Street <br> Somewhere, USA';
paragraphs[6].textContent = siteContent['contact']['phone'];
paragraphs[7].textContent = siteContent['contact']['email'];

//set the footer
paragraphs[8].textContent = siteContent['footer']['copyright'];

//stretch
const getStarted = document.querySelector('.cta .cta-text button');
getStarted.addEventListener('click', toggleCTAImage);
getStarted.addEventListener('click', toggleContent);
CTAIMAGE.style.visibility = 'hidden';
paragraphs[0].style.visibility = 'hidden';
paragraphs[1].style.visibility = 'hidden';

function toggleCTAImage(){
  if(CTAIMAGE.style.visibility === 'hidden'){
    CTAIMAGE.style.visibility = 'visible';
  } else {
    CTAIMAGE.style.visibility = 'hidden';
  }
}

function toggleContent(){
  if(paragraphs[0].style.visibility === 'hidden'){
    paragraphs[0].style.visibility = 'visible';
  } else {
    paragraphs[0].style.visibility = 'hidden';
  }
  if(paragraphs[1].style.visibility === 'hidden'){
    paragraphs[1].style.visibility = 'visible';
  } else {
    paragraphs[1].style.visibility = 'hidden';
  }
}