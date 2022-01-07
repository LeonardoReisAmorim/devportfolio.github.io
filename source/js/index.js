document.getElementById("navSide").addEventListener('mouseover', ()=>{
    document.getElementById("divlinks").style.visibility = "visible";
    document.getElementById("divlinks").style.opacity = 1;

    document.getElementById("links").style.visibility = "visible"

})

document.getElementById("navSide").addEventListener('mouseout', ()=>{
    document.getElementById("divlinks").style.visibility = "hidden";
    document.getElementById("divlinks").style.opacity = 0;
})