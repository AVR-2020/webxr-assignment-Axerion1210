AFRAME.registerComponent('hit', { 
    init: function() {
        var batEntity = document.querySelector("#bat1");
        var bat = document.querySelector("#bat2");
        document.addEventListener('click', function(e){
            // if (e.key == " ") {
                console.log("Swing!");
                var rotateValue = 'property: rotation; dur: 500; from: "0 -60 7"; to: "0 180 7";';
                // console.log(rotateValue);
                batEntity.setAttribute("position", "0 1.3 0");
                bat.setAttribute("position","1 -0.54 0");
                batEntity.setAttribute("animation__rotation", rotateValue);
                batEntity.emit("swingStart");
                
                setTimeout(function(){
                    var rotateValue2 = 'property: rotation; dur: 0; to: "0 0 70";';
                    batEntity.setAttribute("position", "0.4 1.3 -0.33");
                    bat.setAttribute("position","0.5 -0.54 0");
                    batEntity.setAttribute("animation__rotation", rotateValue2);
                    batEntity.emit("swingStart");
                },500);
            // }
        });
    }
});