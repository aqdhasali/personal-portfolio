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