        function Reloj() {
            this.canvas=document.getElementsByTagName('canvas')[0];
            this.canvas.width=200;
            this.canvas.height=200;
            this.ctx = this.canvas.getContext('2d');

            this.setHora();
            var self=this;
            this.intervalo = setInterval(function(){self.actualizar();},1000);
        }
        Reloj.prototype.setHora=function(){
            var hora = new Date();
            this.segundos=hora.getSeconds();
            this.minutos=hora.getMinutes();
            this.horas=(hora.getHours()>12?hora.getHours()-12:(hora.getHours()==0)?12:hora.getHours());

            this.rad12=2*Math.PI/12;
            this.rad60=2*Math.PI/60;
        }
        Reloj.prototype.incrementar=function()
        {
            this.segundos=(++this.segundos)%60;
            if (this.segundos==0)
            {
                this.minutos=(++this.minutos)%60;
                if (this.minutos==0)
                {
                    this.horas=(++this.horas)%12;
                }
            }
        }
        Reloj.prototype.dibujar=function()
        {
            this.ctx.clearRect(0,0,200,200);
            this.ctx.lineWidth = 2;
            this.ctx.strokeStyle = "black";
            this.ctx.beginPath();
            this.ctx.arc(100, 100, 95, 0, 2 * Math.PI, false);
            this.ctx.stroke();

            this.ctx.save();
                this.ctx.translate(100,100);

                this.ctx.font = "bold 20px monospace";
                this.ctx.fillStyle="black";
                this.ctx.fillText(12,-12,-70);
                this.ctx.fillText(6,-6,82);
                this.ctx.fillText(1,32,-58);
                this.ctx.fillText(7,-45,70);
                this.ctx.fillText(2,60,-32);
                this.ctx.fillText(8,-72,46);
                this.ctx.fillText(3,70,5);
                this.ctx.fillText(9,-82,5);
                this.ctx.fillText(4,60,47);
                this.ctx.fillText(10,-71,-33);
                this.ctx.fillText(5,33,72);
                this.ctx.fillText(11,-47,-57);

                for (var i=0;i<30;i++)
                {
                    this.ctx.save();
                        this.ctx.rotate(i*this.rad60);
                        this.ctx.lineWidth = 2;
                        this.ctx.strokeStyle = "red";
                        this.ctx.beginPath();
                        this.ctx.moveTo(0,-90);
                        this.ctx.lineTo(0,-95);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(0,90);
                        this.ctx.lineTo(0,95);
                        this.ctx.stroke();
                    this.ctx.restore();
                }
                for (var i=0;i<6;i++)
                {
                    this.ctx.save();
                        this.ctx.rotate(i*this.rad12);
                        this.ctx.lineWidth = 5;
                        this.ctx.strokeStyle = "blue";
                        this.ctx.beginPath();
                        this.ctx.moveTo(0,-85);
                        this.ctx.lineTo(0,-95);
                        this.ctx.stroke();
                        this.ctx.beginPath();
                        this.ctx.moveTo(0,85);
                        this.ctx.lineTo(0,95);
                        this.ctx.stroke();
                    this.ctx.restore();
                }

                this.ctx.save();
                    this.ctx.rotate(this.horas*this.rad12+this.minutos/60*this.rad12);
                    this.ctx.lineWidth = 7;
                    this.ctx.strokeStyle = "blue";
                    this.ctx.beginPath();
                    this.ctx.moveTo(0,7);
                    this.ctx.lineTo(0,-60);
                    this.ctx.stroke();
                this.ctx.restore();

                this.ctx.save();
                    this.ctx.rotate(this.minutos*this.rad60+this.segundos/60*this.rad60);
                    this.ctx.lineWidth = 4;
                    this.ctx.strokeStyle = "black";
                    this.ctx.beginPath();
                    this.ctx.moveTo(0,10);
                    this.ctx.lineTo(0,-70);
                    this.ctx.stroke();
                this.ctx.restore();

                this.ctx.save();
                    this.ctx.rotate(this.segundos*this.rad60);
                    this.ctx.lineWidth = 1;
                    this.ctx.strokeStyle = "red";
                    this.ctx.beginPath();
                    this.ctx.moveTo(0,15);
                    this.ctx.lineTo(0,-80);
                    this.ctx.stroke();
                this.ctx.restore();

            this.ctx.restore();
            
            this.ctx.fillStyle = "red";
            this.ctx.beginPath();
            this.ctx.arc(100, 100, 4, 0, 2 * Math.PI, false);
            this.ctx.fill();
            
        }
        Reloj.prototype.actualizar=function()
        {
            this.incrementar();
            this.dibujar();

            console.log(this.horas+":"+this.minutos+":"+this.segundos);
        }
        
        var reloj = new Reloj();    