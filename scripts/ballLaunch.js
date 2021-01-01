const ballCollision = () => {
    var ball = document.querySelector("#ball1");
    ball.addEventListener("collide",ballCollided);
};

const ballCollided = ev => {
    if(ev.detail.body.el.id === "launcher"){
        console.log("launch");
        setTimeout(function(){
        let positionObject = ball.getAttribute("position");
        ball.body.applyImpulse(
            new CANNON.Vec3(0, 2,  20),
            new CANNON.Vec3(0, 0.1, 0)
        );
        },1000);
    }
    else if(ev.detail.body.el.id === "ground"){
        ball.removeEventListener("collide", ballCollided);

        mainScene.removeChild(ball);

        const newBall = document.createElement("a-entity");
        newBall.setAttribute("id","ball1");
        newBall.setAttribute("launch");
        newBall.setAttribute("gltf-model","#ball");
        newBall.setAttribute("dynamic-body","mass:10;");
        newBall.setAttribute("position","1.8 1.7 -10");
        newBall.setAttribute("scale","0.0007 0.0007 0.0007");
        mainScene.appendChild(newBall);
        // newBall.addEventListener("collide",ballCollided);
    }
};

setTimeout(function(){
    ballCollision();
}, 5000);