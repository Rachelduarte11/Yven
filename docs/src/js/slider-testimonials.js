document.addEventListener("DOMContentLoaded",(function(){const t=document.querySelector(".slider-resenas"),e=document.querySelector(".prev-btn"),n=document.querySelector(".next-btn");let o=0;n.addEventListener("click",(function(){o+=t.offsetWidth/1,o>t.scrollWidth-t.offsetWidth&&(o=t.scrollWidth-t.offsetWidth),t.style.transform=`translateX(-${o}px)`})),e.addEventListener("click",(function(){o-=t.offsetWidth/1,o<0&&(o=0),t.style.transform=`translateX(-${o}px)`}))}));