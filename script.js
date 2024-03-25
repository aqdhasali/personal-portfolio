function downloadCV(){
    var cvUrl  = '../images/Aqdhas CV.pdf';

    var link = document.createElement("a");
    link.href = cvUrl;
    link.download = 'Aqdhas CV.pdf';
    document.body.appendChild(link);

     // Trigger the click event of the link to start downloading the CV
     link.click();
    
     // Clean up
     document.body.removeChild(link);
}

// Hamburger Menu
const nav_btn = document.querySelector('.hamburger');
const mobile_nav = document.querySelector('.mobile-nav');

nav_btn.addEventListener('click',function(){
    nav_btn.classList.toggle('is-active'); // To open the hamburger menu when the button is toggled.
    mobile_nav.classList.toggle('is-active') //To display the content iniside the mobile nav

})