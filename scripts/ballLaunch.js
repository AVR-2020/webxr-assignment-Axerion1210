AFRAME.registerComponent('launch', { 
    init:function() {
        var ball = document.getElementById("ball1");

        ball.addEventListener("collide",function(ev){
            if(ev.detail.body.el.id === "launcher"){
                ball.removeEventListener("collide", this.ev);
                // el.addState("check");
                // if(el.is("check")){
                    console.log("launch");
                    setTimeout(function(){
                        ball.body.applyLocalImpulse(
                            new CANNON.Vec3(0, 10, 150),
                            new CANNON.Vec3(0, 0, 0)
                        );
                    },1000);
                    // el.removeState("check");
                // }
            }
            else if(ev.detail.body.el.id === "ground"){
                // el.addState("check");

                // if(el.is("check")){
                ball.removeEventListener("collide", this.ev);
                // setTimeout(function(){
                    console.log("ground");
                    let par = ball.parentNode;
                    par.removeChild(ball);

                    const newBall = document.createElement("a-entity");
                    newBall.setAttribute("id","ball1");
                    newBall.setAttribute("launch",1);
                    // newBall.setAttribute("sphere-collider");
                    newBall.setAttribute("gltf-model","#ball");
                    newBall.setAttribute("dynamic-body","shape:sphere");
                    newBall.setAttribute("position","1.2 2 -0.33");
                    newBall.setAttribute("scale","0.0005 0.0005 0.0005");

                    par.appendChild(newBall);

                // },0);
                    // newBall.addEventListener("collide",ballCollided);
                // }

                // el.removeState("check");
            }
            else if(ev.detail.body.el.id === "bat2"){
                console.log("hit");
            }
        });
    }
});