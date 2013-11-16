// JavaScript Document

window.onload = function(){
	//canvas init
	var canvas = document.getElementById("canvas");
	var ctx = canvas.getContext("2d");
	//ctx.globalAlpha=.1;
	//canvas dimensions
	var W = window.innerWidth;
	var H = window.innerHeight;
	canvas.width = W;
	canvas.height = H;
	
	// @ var mp - the maximum number pf musical particals/notes 
	// @ var mb - the maximum number of binary particles, if you change this be sure to add another string in the binaries array to match the number
	// @ particles - array to hold mucical note info
	// @ binaries - array to hold binary strings info
	var mp = 10; //max particles
	var particles = [];
	var mb = 10;
	var binaries = [];
	var strings = ["0001 1100 1001 1101", "1111 0000", "10011000 11001010", "0001 0001 1110 1001", "Hello World!", "1110 0011", "1001 1001 1011", "0100 1000 1001 1010 1011 1011", "01 1000 1110", "1101 1101 1011"];
	/* Setting up and intalizing the values for the musical notes and binary string */
	for(var i = 0; i < mp; i++)
	{
		particles.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*4+1, //radius
			d: Math.random()*mp //density
		})
	}
	
	for(var i = 0; i < mb; i++)
	{
		binaries.push({
			x: Math.random()*W, //x-coordinate
			y: Math.random()*H, //y-coordinate
			r: Math.random()*4+1, //radius
			d: Math.random()*mb, //density
			h: Math.random()*30,
			s: strings[i]
		})
	}
	//Lets draw these bad boys
	// Use a oval for the bottom portion and a simple block for the stem
	function draw()
	{
		 ctx.clearRect(0, 0, W, H);
		 ctx.globalAlpha=.25;
		 ctx.fillStyle = "black";
  		 ctx.strokeStyle="black";
		 ctx.beginPath();
		for(var i = 0; i < mp; i++) 
		{
			var p = particles[i];
			var b = binaries[i];
			ctx.save();
			ctx.scale(2, 1);
			ctx.moveTo(p.x, p.y);
			ctx.arc(p.x, p.y, p.r, 0, Math.PI*2, true);
			ctx.moveTo(p.x + p.r, p.y);
			//ctx.lineTo(p.x+p.r , p.y - p.r* 7);
	        ctx.fillRect(p.x +p.r-p.r*.4, p.y - p.r*7 , p.r*.5 , p.r*7); 
			//ctx.stroke();	
			ctx.restore();
			ctx.moveTo(b.x,b.y);
			ctx.font=b.h+"px Arial";
			ctx.fillText(b.s,b.x,b.y);
		}
		ctx.fill();
		update();
	}
	
	//Function to move the particles around
	// angle will be an ongoing incremental flag. Sin and Cos functions will be applied to it to create vertical and horizontal movements of the particles
	var angle = 0;
	function update()
	{
		angle += 0.01;
		for(var i = 0; i < mp; i++)
		{
			var p = particles[i];
			//Updating X and Y coordinates
			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
			//Every particle has its own density which can be used to make the downward movement different for each flake
			//Lets make it more random by adding in the radius
			p.y += Math.cos(angle+p.d) + p.r/2;
			p.x += Math.sin(angle) * 2-1;
			//Sending flakes back from the top when it exits
			//Lets make it a bit more organic and let flakes enter from the left and right also.
			if(p.x > W+5 || p.x < -5 || p.y > H)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
					particles[i] = {x: Math.random()*W, y: -10, r: p.r, d: p.d};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
						particles[i] = {x: -5, y: Math.random()*H, r: p.r, d: p.d};
					}
					else
					{
						//Enter from the right
						particles[i] = {x: W+5, y: Math.random()*H, r: p.r, d: p.d};
					}
				}
			}
		}
		for(var i = 0; i < mb; i++)
		{
			var b = binaries[i];
			//Updating X and Y coordinates
			//We will add 1 to the cos function to prevent negative values which will lead flakes to move upwards
			//Every particle has its own density which can be used to make the downward movement different for each flake
			//Lets make it more random by adding in the radius
			b.y += Math.cos(angle+b.d) + b.r/2;
			b.x += Math.sin(angle) * 2-1;
			//Sending flakes back from the tob when it exits
			//Lets make it a bit more organic and let flakes enter from the left and right also.
			if(b.x > W+5 || b.x < -5 || b.y > H)
			{
				if(i%3 > 0) //66.67% of the flakes
				{
					binaries[i] = {x: Math.random()*W, y: -10, r: b.r, d: b.d, h: b.h, s: b.s};
				}
				else
				{
					//If the flake is exitting from the right
					if(Math.sin(angle) > 0)
					{
						//Enter from the left
						binaries[i] = {x: -5, y: Math.random()*H, r: b.r, d: b.d, h: b.h, s: b.s};
					}
					else
					{
						//Enter from the right
						binaries[i] = {x: W+5, y: Math.random()*H, r: b.r, d: b.d, h: b.h, s: b.s};
					}
				}
			}
		}
		
	}
	
	//animation loop
	setInterval(draw, 35);
}