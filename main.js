
// Create canvas variable
var canvas = new fabric.canvas('my canvas');

//Set initial positions for ball and hole images.
 boll_y=0;
 boll_x=0;
 hole_y=400;
 hole_x=400;

block_image_width = 5;
block_image_height = 5;

function load_img(){
	// write code to Upload golf image on the canvas
	function load_img() {
		fabric.Image.formURL("golf-h1.png", function(Img){
			hole_obj = Img;
			hole_obj.scaleToWidth(50);
			hole_obj.scaleToHeight(50);
			hole_obj.set({
				top:hole_y,
				left:hole_x
			});
		canvas.add(hole_obj);
		});
	}
	new_image();
}

function new_image()
{
	// write code to Upload ball image on canvas
	function new_image() { 
		fabriv.Image.formURL("ball.png", function(Img) {
			ball_obj = Img;
			ball_obj.scaleToWidth(50);
			ball_obj.scaleToHeight(50);
			ball_obj.set({
				top:ball_y,
				left:ball_x
			});	
			canvas.add(ball_obj)
		});
	}
}

window.addEventListener("keydown", my_keydown);

function my_keydown(e)
{
	keyPressed = e.keyCode;
	console.log(keyPressed);
	/* Check the coordinates of the ball and hole images to finish the game. 
	And id coordinates matches them remove ball image, 
	display "GAME OVER!!!" 
	and make canvas border 'red'. */
	if ((ball_x==hole_x)&&(ball_y==hole_y)) {
		canvas.remove(ball_obj);
		document.getElementById("hd3").innerHTML="you have hit the goal!!!!";
		document.getElementById("mycanvas").style.borderColor="red";
	}
	
	else{
		if(keyPressed == '38')
		{
			up();
			console.log("up");
		}
		if(keyPressed == '40')
		{
			down();
			console.log("down");
		}
		if(keyPressed == '37')
		{
			left();
			console.log("left");
		}
		if(keyPressed == '39')
		{
			right();
			console.log("right");
		}
	}
	
	function up()
	{
		// Write a code to move ball upward.
		if (player_y >= 0) {
			player_y = player_y-block_image_height;
			console.log (block_image_height);
			console.log ("when up key is pressed, x = " + player_x + ", y = " + player_y);
			canvas.remove (player_object);
			player_update ();
		} 
	}

	function down()
	{
		 // Write a code to move ball downward.
		 if (ball_y <=450) {
			 ball_y = ball_y + block_image_height;
			 console.log ( "block image height = " + block_image_height);
			console.log ("when down key is pressed, x = " + player_x + ", y = " + player_y);
			canvas.remove (player_object);
			player_update ();
		 }

		 
	}

	function left()
	{
		if(ball_x >5)
		{
			// Write a code to move ball left side.
			if (player_x > 0) {
				player_x = player_x-block_image_width;
				console.log (block_image_width);
				console.log ("when left key is pressed, x = " + player_x + ", y = " + player_y);
				canvas.remove (player_object);
				player_update ();
			}
		}
	}

	function right()
	{
		if(ball_x <=1050)
		{
			// Write a code to move ball right side.
			if (player_x <= 850) {
				player_x = player_x+block_image_width;
				console.log (block_image_width);
				console.log ("when right key is pressed, x = " + player_x + ", y = " + player_y);
				canvas.remove (player_object);
				player_update ();
			}
		}
	}
	
}

