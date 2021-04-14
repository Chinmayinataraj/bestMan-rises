class Form{
        constructor(){
            friction=0.1;
            this.rain = Bodies.circle(x,y,5,options);
            var maxDrops=100;
            
        }
        for(var i=0; i<maxDrops; i++){
            drops.push(new createDrop(random(0,400),random(0,400)));
        }
        update(){
            Matter.Body.setPosition(this.rain,{x:random(0,400),y:ranbdom(0,400)})
        }
        if(frameCount>=200)
        Image(this.batmanImg,pos.x,pis.y+70,200,300)
    }