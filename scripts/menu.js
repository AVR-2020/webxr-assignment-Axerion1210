AFRAME.registerComponent('play', { 
    init: function(){
        let el = this.el;
        var menu = document.querySelector("#menu");
        var playArea = document.querySelector("#playArea");
        var cur = document.querySelector("#cursor");
        el.addEventListener("click",function(){
            if(menu.getAttribute("visible")==true){
                console.log("play!")
                menu.setAttribute("visible","false");
                menu.setAttribute("position","0 -10 -1.2");
                cur.setAttribute("visible","false");
                setTimeout(function(){
                    playArea.setAttribute("visible","true");
                },1000);
            }
        });
    }
});

AFRAME.registerComponent('retry', { 
    init: function(){
        let el = this.el;
        var gOver = document.querySelector("#gameOver");
        var playArea = document.querySelector("#playArea");
        var cur = document.querySelector("#cursor");
        el.addEventListener("click",function(){
            if(gOver.getAttribute("visible")==true){
                console.log("play!")
                gOver.setAttribute("visible","false");
                gOver.setAttribute("position","0 -10 -1.2");
                cur.setAttribute("visible","false");
                setTimeout(function(){
                    playArea.setAttribute("visible","true");
                },1000);
            }
        });
    }
});

AFRAME.registerComponent('howto', { 
    init: function(){
        let el = this.el;
        var menu = document.querySelector("#menu");
        var howTo = document.querySelector("#howToPlay");
        el.addEventListener("click",function(){
            if(menu.getAttribute("visible")==true){
                console.log("how to play")
                menu.setAttribute("visible","false");
                menu.setAttribute("position","0 -10 -1.2");
                howTo.setAttribute("visible","true");
                howTo.setAttribute("position","0 1.6 -1.2");
            }
        });
    }
});

AFRAME.registerComponent('backto', { 
    init: function(){
        let el = this.el;
        var menu = document.querySelector("#menu");
        var gOver = document.querySelector("#gameOver");
        el.addEventListener("click",function(){
            if(gOver.getAttribute("visible")==true){
                console.log("backto menu")
                gOver.setAttribute("visible","false");
                gOver.setAttribute("position","0 -10 -1.2");
                menu.setAttribute("visible","true");
                menu.setAttribute("position","0 1.6 -1.2");
            }
        });
    }
});

AFRAME.registerComponent('backto2', { 
    init: function(){
        let el = this.el;
        var menu = document.querySelector("#menu");
        var howTo = document.querySelector("#howToPlay");
        el.addEventListener("click",function(){
            if(howTo.getAttribute("visible")==true){
                console.log("backto menu")
                howTo.setAttribute("visible","false");
                howTo.setAttribute("position","0 -10 -1.2");
                menu.setAttribute("visible","true");
                menu.setAttribute("position","0 1.6 -1.2");
            }
        });
    }
});