AFRAME.registerComponent('hit', { 
    init: function() {
        var batEntity = document.querySelector("#batSwing");
        var bat = document.querySelector("#batObj");
        var batStandby = document.querySelector("#batStandBy");
        document.addEventListener('click', function(){
            // if (e.key == " ") {
                console.log("Swing!");
                var rotateValue = 'property: rotation; dur: 300; to: "0 180 0";';
                // console.log(rotateValue);
                // batEntity.setAttribute("position", "0 1.4 -0.33");
                // batEntity.setAttribute("static-body", true);
                // bat.setAttribute("position","1 -0.54 0");
                batEntity.setAttribute("animation__rotation", rotateValue);
                batEntity.setAttribute("visible", true);
                batStandby.setAttribute("visible", false);
                batEntity.emit("swingStart");
                
                setTimeout(function(){
                    var rotateValue2 = 'property: rotation; dur: 0; to: "0 0 0";';
                    // batEntity.setAttribute("position", "0.4 1.4 -0.33");
                    // bat.setAttribute("position","0.5 -0.54 0");
                    batEntity.setAttribute("animation__rotation", rotateValue2);
                    batEntity.emit("swingStart");
                    batEntity.setAttribute("static-body", false);
                    batEntity.setAttribute("visible", false);
                    batStandby.setAttribute("visible", true);
                },300);
            // }
        });
    }
});