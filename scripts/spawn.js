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
        newBall.setAttribute("dynamic-body","shape: sphere;");
        newBall.setAttribute("position","1 1.43 -10");
        newBall.setAttribute("scale","0.0005 0.0005 0.0005");

        mainScene.appendChild(newBall);
    }
});