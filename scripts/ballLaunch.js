AFRAME.registerComponent('launch', { 
    init: function(){
    var ball = document.getElementById("ball1");
    // ball.addEventListener("body-loaded",function(){
    //     console.log(ball.body);
    // });
    var par = ball.parentNode;
    var hit = 0;
    ball.addEventListener("collide",function(ev){
            // var ball = document.getElementById("ball1");
            // var par = ball.parentNode;
            // var lch = document.getElementById("launcher");

            // ball.addEventListener("collide",function(ev){
                // console.log(ball.getAttribute("position").y);
                if(ev.detail.body.el.id === "launcher"){
                    ball.removeEventListener("collide", this.ev);

                    var stand = document.getElementById("launcher");
                    stand.setAttribute("id","stand");
                    stand.setAttribute("position","1.4 0.28 -10");
                    stand.setAttribute("color","red");

                    console.log("launch");
                    setTimeout(function(){
                        // if(ball.getAttribute("position").y < 2){
                            ball.body.applyLocalImpulse(
                                new CANNON.Vec3(0, 0.3, 3),
                                new CANNON.Vec3(0, 0, 0)
                            );
                            stand.setAttribute("id","launcher");
                            stand.setAttribute("position","1.4 0.3 -10");
                            stand.setAttribute("color","blue");
                        // }
                    },1000);

                }
                else if(ev.detail.body.el.id === "batSwing"){
                    console.log("hit");
                    hit = 1;
                    ball.removeEventListener("collide", this.ev);
                }
                else if(ev.detail.body.el.id === "ground"){
                    ball.removeEventListener("collide", this.ev);
                    console.log("ground");
                    if(hit){
                        scoreUp();
                        hit = 0;
                    }
                    par.removeChild(ball);
                }
                else if(ev.detail.body.el.id === "strike"){
                    ball.removeEventListener("collide", this.ev);
                    console.log("strike");
                    strikes();
                    hit = 0;
                    par.removeChild(ball);
                }
            // });
        });
    }
// document.onkeydown = ev => {
//     if (ev.which == 32) {
//         ballCollision();
//     }
// };
});