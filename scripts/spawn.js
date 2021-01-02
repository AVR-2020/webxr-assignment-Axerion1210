document.addEventListener("keypress",function(e){
    if(e.key==" "){
        var oldBall = document.querySelector("#ball1");
        const newBall = document.createElement("a-entity");

        if(oldBall)
            mainScene.removeChild(oldBall);

        newBall.setAttribute("id","ball1");
        newBall.setAttribute("launch",true);
        // newBall.setAttribute("sphere-collider");
        newBall.setAttribute("gltf-model","#ball");
        newBall.setAttribute("dynamic-body","shape: sphere; mass:0.1;");
        newBall.setAttribute("position","1.4 1.43 -10");
        newBall.setAttribute("scale","0.0005 0.0005 0.0005");

        mainScene.appendChild(newBall);

        var stand = document.getElementById("stand");
        if(stand){
            stand.setAttribute("id","launcher");
            stand.setAttribute("position","1.4 0.3 -10");
            stand.setAttribute("color","blue");
        }
        // var ball1 = document.querySelector("#ball1"); 
        // ballCollision();
        // setTimeout(() => {
        // }, 1000);
    }
});