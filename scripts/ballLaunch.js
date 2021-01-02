AFRAME.registerComponent('launch', { 
    init:function() {
        var ball = document.getElementById("ball1");
        var par = ball.parentNode;

        ball.addEventListener("collide",function(ev){
            // console.log(ball.getAttribute("position").y);
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
            else if(ev.detail.body.el.id === "batSwing"){
                console.log("hit");
                ball.removeEventListener("collide", this.ev);
            }
            else if(ev.detail.body.el.id === "ground"){
                ball.removeEventListener("collide", this.ev);
                // setTimeout(function(){
                console.log("ground");
                // let par = ball.parentNode;
                par.removeChild(ball);
                // },0);
                    // newBall.addEventListener("collide",ballCollided);
            }
        });
    }
});