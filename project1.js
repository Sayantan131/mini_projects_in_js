var rect = document.querySelector("#center");

rect.addEventListener('mousemove',function(){
    console.log(rect.getBoundingClientRect());
})