// get body element reference
// here we can get element reference in 5 ways
const bodyE1 = document.getElementsByTagName('body');

//onchange event handler 
//it will be triggered when ever we change the background color 
function changeBackgroundcolor(event) {
    const backgroundcolor = event?.target?.value;
    bodyE1[0].style,backgroundcolor = backgroundcolor;

}
