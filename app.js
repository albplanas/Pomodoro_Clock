


var DrawController=(function(){
    var canvas,ctx;
    var main=function(){  
      
      canvas=document.getElementById('base');

        if(canvas.getContext('2d')){
            ctx=canvas.getContext('2d');
        }
        else{
            alert("esto no corre en este browser");
        }
    };

   
   var Picture=function(pointSet){
        ctx.fillStyle = 'rgba(204, 193, 193, 0.664)';
        ctx.fillRect(30,30,250,45);
        ctx.fillRect(30,420,250,45);
        ctx.fillStyle = 'rgba(204, 100, 193, 0.664)';
        ctx.fillRect(60,75,190,15);
        ctx.fillRect(60,405,190,15);
        
        ctx.beginPath();
        ctx.strokeStyle = 'white';
        ctx.moveTo(60, 90);
        ctx.quadraticCurveTo(155, 408.5, 250, 90);
        ctx.moveTo(60,405);
        ctx.quadraticCurveTo(155, 91.5, 250, 405);
        ctx.stroke();
    };
    
    //animation
    var Hole_animation=function(n,color1){
        n=n%6+1;
    var Full_top=function(){
        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.moveTo(60, 90);
        ctx.quadraticCurveTo(155, 408.5, 250, 90);
        ctx.fill();
    } 

    var Anime1=function(){
        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.moveTo(70, 120);
        ctx.quadraticCurveTo(155, 380, 240, 120);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle =  color1;
        ctx.moveTo(60,405);
        ctx.quadraticCurveTo(155, 91.5, 250, 405);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle ='black';
        ctx.moveTo(70,380);
        ctx.quadraticCurveTo(155, 121.5, 240, 380);
        ctx.fill();

    } 

    var Anime2=function(){
        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.moveTo(80, 150);
        ctx.quadraticCurveTo(155, 350, 230, 150);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.moveTo(60,405);
        ctx.quadraticCurveTo(155, 91.5, 250, 405);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.moveTo(80,350);
        ctx.quadraticCurveTo(155, 151.5, 230, 350);
        ctx.fill();

    } 

    var Anime3=function(){
        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.moveTo(90, 180);
        ctx.quadraticCurveTo(155, 320, 220, 180);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.moveTo(60,405);
        ctx.quadraticCurveTo(155, 91.5, 250, 405);
        ctx.fill();

        ctx.beginPath();
        ctx.fillStyle = 'black';
        ctx.moveTo(90,320);
        ctx.quadraticCurveTo(155, 181.5, 220, 320);
        ctx.fill();

    }

    var Anime4=function(){
            ctx.beginPath();
            ctx.fillStyle = color1;
            ctx.moveTo(110, 210);
            ctx.quadraticCurveTo(155, 290, 200, 210);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = color1;
            ctx.moveTo(60,405);
            ctx.quadraticCurveTo(155, 91.5, 250, 405);
            ctx.fill();

            ctx.beginPath();
            ctx.fillStyle = 'black' ;
            ctx.moveTo(110,290);
            ctx.quadraticCurveTo(155, 211.5, 200, 290);
            ctx.fill();

        }
    var Full_botton=function(){
        ctx.beginPath();
        ctx.fillStyle = color1;
        ctx.moveTo(60,405);
        ctx.quadraticCurveTo(155, 91.5, 250, 405);
        ctx.fill();
    }
    if(n===1){
        return Full_top();
    }
    
    if(n===2){
        return Anime1();
    }
    if(n===3){
        return Anime2();
    }
    if(n===4){
        return Anime3();
    }
    if(n===5){
        return Anime4();
    }
    if(n===6){
        return Full_botton();
    }
  
    }
    

    
   var  Display=function(time,break_time){
      $("#board1").html(time);
      $("#board2").html(break_time);
    }



    var nIntervId,clockId;
    
  var Interface=function(time,break_time){

    $('#btn1').on('click',function(){  
        time=time+1;
        Display(time,break_time);
        //Clear();
        return time;
    });
    $('#btn2').on('click',function(){
        Clear();
        time=time-1;
        Display(time,break_time);
        return time;
    });
    $('#btn3').on('click',function(){
        Clear();
        break_time++;
        Display(time,break_time);
        return break_time;
    });
    $('#btn4').on('click',function(){
        Clear();
        break_time--;
        Display(time,break_time);
        return break_time;
    });
    
    $('#base').on('click',function(){
            $('#board3').html('Seasson');
            var seg=time*60;
            bool=true;
            Clear();
            console.log(time,'Im in animation 1');
            nIntervId = setInterval(flashText, 1000);
            clockId = setInterval(Clock, 1000);   
           
           
            function Clock() {
            if(seg===0){
                if(bool===true){
                    seg=break_time*60;
                    bool=false;
                    $('#board3').html('Break');
                }
                else{
                    seg=time*60;
                    bool=true;
                    $('#board3').html('Session');
                }
                
            }
            var segund=seg%60;
            var min=((seg-segund)/60);
            console.log(min+':'+segund);
            $("#clock1").html(min+':'+segund);
            seg--;
            
            
        }
        });

        
}

   

   function flashText() {
        void ctx.clearRect(0, 0, 300, 500);
        Picture();
        Hole_animation(cont,'aqua');
        console.log(cont);
        cont++;
        
        }
 
        
    
    
    function Clear() {

        clearInterval(nIntervId);
        clearInterval(clockId);
        void ctx.clearRect(0, 0, 300, 500);
        Picture();
        $("#clock1").html('00:00');
        cont=0;                             
        }     

var Init=function(){
   
    var time=25;
    var break_time=5;
    var cont=0;
    console.log(Interface(time,break_time));
   
    
}

 
 
 

    
        return{
            getContextCanvas:function(){
                main();
            },

           get_Picture:function(){
            Picture();
           },
       
            get_Init:function(){
                Init();
            }
        }  
  }());






$(document).ready(function() {

     

    DrawController.getContextCanvas();
    DrawController.get_Picture();
    DrawController.get_Init();

    
}); 
