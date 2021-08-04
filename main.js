let btn = document.getElementById("getTZ");

if (btn !== null){
    btn.addEventListener("click", timezone);
}

function timezone(){
    let time = document.getElementById("showTimezone");
    time.innerHTML = Date();
}