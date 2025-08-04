var btn = document.querySelector("#back-to-top");
btn.addEventListener("click", function() {
    window.scrollTo(0, 0);
});

document.getElementById("navSide").addEventListener('mouseover', ()=>{
    document.getElementById("divlinks").style.visibility = "visible";
    document.getElementById("divlinks").style.opacity = 1;
    
})
document.getElementsByClassName("ball")[0].addEventListener('mouseover', ()=>{
    document.getElementsByClassName("liA")[0].style.visibility = "visible";
    document.getElementsByClassName("liA")[0].animate([
        { transform: 'translateY(200px)', opacity: 0 },
        { transform: 'translateY(-5px)', opacity: 1 },
        { transform: 'translateY(10px)'},
        { transform: 'translateY(0)' }
    ],{
        duration: 1500,
    })
});
document.getElementsByClassName("ball")[1].addEventListener('mouseover', ()=>{
    document.getElementsByClassName("liA")[1].style.visibility = "visible";
    document.getElementsByClassName("liA")[1].animate([
        { transform: 'translateY(200px)', opacity: 0 },
        { transform: 'translateY(-5px)', opacity: 1 },
        { transform: 'translateY(10px)'},
        { transform: 'translateY(0)' }
    ],{
        duration: 1500,
    })
});
document.getElementsByClassName("ball")[2].addEventListener('mouseover', ()=>{
    document.getElementsByClassName("liA")[2].style.visibility = "visible";
    document.getElementsByClassName("liA")[2].animate([
        { transform: 'translateY(200px)', opacity: 0 },
        { transform: 'translateY(-5px)', opacity: 1 },
        { transform: 'translateY(10px)'},
        { transform: 'translateY(0)' }
    ],{
        duration: 1500,
    })
});
document.getElementsByClassName("ball")[3].addEventListener('mouseover', ()=>{
    document.getElementsByClassName("liA")[3].style.visibility = "visible";
    document.getElementsByClassName("liA")[3].animate([
        { transform: 'translateY(200px)', opacity: 0 },
        { transform: 'translateY(-5px)', opacity: 1 },
        { transform: 'translateY(10px)'},
        { transform: 'translateY(0)' }
    ],{
        duration: 1500,
    })
});
document.getElementsByClassName("ball")[4].addEventListener('mouseover', ()=>{
    document.getElementsByClassName("liA")[4].style.visibility = "visible";
    document.getElementsByClassName("liA")[4].animate([
        { transform: 'translateY(200px)', opacity: 0 },
        { transform: 'translateY(-5px)', opacity: 1 },
        { transform: 'translateY(10px)'},
        { transform: 'translateY(0)' }
    ],{
        duration: 1500,
    })
});
document.getElementsByClassName("ball")[5].addEventListener('mouseover', ()=>{
    document.getElementsByClassName("liA")[5].style.visibility = "visible";
    document.getElementsByClassName("liA")[5].animate([
        { transform: 'translateY(200px)', opacity: 0 },
        { transform: 'translateY(-5px)', opacity: 1 },
        { transform: 'translateY(10px)'},
        { transform: 'translateY(0)' }
    ],{
        duration: 1500,
    })
});

document.getElementById("navSide").addEventListener('mouseout', ()=>{
    document.getElementById("divlinks").style.visibility = "hidden";
    document.getElementById("divlinks").style.opacity = 0;
})

document.addEventListener("DOMContentLoaded", function () {
  const buttons = document.querySelectorAll(".hamburguer-bt");
  const navMobile = document.getElementById("nav-mobile");

  buttons.forEach(function (button) {
    button.addEventListener("click", function () {
      this.classList.toggle("on");
      navMobile.classList.toggle("show");
    });
  });
});