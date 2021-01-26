for(var i=0;i<document.getElementsByTagName("button").length;i++){
document.querySelectorAll("button")[i].addEventListener("click",function(){
    var buttonInnerHTML = this.innerHTML;
drumSound(buttonInnerHTML);
buttonAnnimation(buttonInnerHTML);
});


}

addEventListener("keydown",function(event){
    var keyvalue = this.event.key;
    drumSound(keyvalue);
    buttonAnnimation(keyvalue);
});

function drumSound(key){
    
   switch (key) {
       case "w":
        var drumSound = new Audio('sounds/tom-1.mp3');
        drumSound.play();
        break;

        case "a":
        var drumSound = new Audio('sounds/tom-2.mp3');
        drumSound.play();
        break;

        case "s":
        var drumSound = new Audio('sounds/tom-3.mp3');
        drumSound.play();
        break;

        case "d":
        var drumSound = new Audio('sounds/tom-4.mp3');
        drumSound.play();
        break;
        case "j":
            var drumSound = new Audio('sounds/crash.mp3');
            drumSound.play();
        break;

        case "k":
            var drumSound = new Audio('sounds/kick-bass.mp3');
            drumSound.play();
        break;  
        
        case "l":
        var drumSound = new Audio('sounds/snare.mp3');
        drumSound.play();
        break;

        case "m":
            var drumSound = new Audio('sounds/Hi-Hat.mp3');
            drumSound.play();
            break;

       default: console.log(buttonInnerHTML);
           break;
   }
}

function buttonAnnimation(currentkey){
    var activeKey = document.querySelector("." + currentkey);
    activeKey.classList.add("pressed");
    setTimeout(function(){
        activeKey.classList.remove("pressed");
    },100);

}






