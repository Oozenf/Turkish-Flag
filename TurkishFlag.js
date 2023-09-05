// CENG492 Computer Graphics Samed Onur Özen 

// WebGL and simple drawing

var gl;
var points;

window.onload = function init()
{
    var canvas = document.getElementById( "gl-canvas" );
    
    gl = WebGLUtils.setupWebGL( canvas );
    if ( !gl ) { alert( "WebGL isn't available" ); }

    
    // Four Vertices
    // I got help from https://www.cs.unm.edu/~angel/WebGL/7E/CLASS/
	
    var vertices = [
        vec2( -0.75, -0.5 ),
        vec2(  -0.75,  0.5 ),
        vec2(  0.75, 0.5 ),
        vec2( 0.75, -0.5)
    ];

    
    //  Configure WebGL
    gl.viewport( 0, 0, canvas.width, canvas.height );
    gl.clearColor( 0.0, 0.2, 0.9, 0.3,);
    
    //  Load shaders and initialize attribute buffers
    var program = initShaders( gl, "vertex-shader", "fragment-shader" );
    gl.useProgram( program );
    
    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    gl.clear( gl.COLOR_BUFFER_BIT );
    gl.drawArrays( gl.TRIANGLE_FAN, 0, 4 ); // 0 1 2 3
	
	
	
	
	
	// White Circle
	// I got help from http://joshuagrams.github.io/webgl-intro/global-variables.html

	var x = -0.25; // x coordinate for the center of the circle
	var y = 0; // y coordinate for the center of the circle
	var r = 0.25; // radius of the circle

	var vertices_ = [];

	for (var i = 0; i <= 360; i+=5) {
		var angle = i * Math.PI / 180;
		var xCoord = x + r * Math.cos(angle);
		var yCoord = y + r * Math.sin(angle);
		vertices_.push(xCoord);
		vertices_.push(yCoord);
	}

	var program_ = initShaders(gl, "vertex-shader", "fragment-shader2");
	gl.useProgram(program_);

	// Load the data into the GPU
	bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
	gl.bufferData(gl.ARRAY_BUFFER,  flatten(vertices_), gl.STATIC_DRAW);

	// Associate out shader variables with our data buffer
	vPosition = gl.getAttribLocation(program_, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices_.length / 2);





	// Red Circle
    // I got help from http://joshuagrams.github.io/webgl-intro/global-variables.html
	
	var x = -0.19; // x coordinate for the center of the circle
	var y = 0; // y coordinate for the center of the circle
	var r = 0.2; // radius of the circle

	var vertices_2 = [];

	for (var i = 0; i <= 360; i+=5) {
		var angle = i * Math.PI / 180;
		var xCoord = x + r * Math.cos(angle);
		var yCoord = y + r * Math.sin(angle);
		vertices_2.push(xCoord);
		vertices_2.push(yCoord);
	}

	var program_2 = initShaders(gl, "vertex-shader", "fragment-shader");
	gl.useProgram(program_2);

	// Load the data into the GPU
	bufferId = gl.createBuffer();
	gl.bindBuffer(gl.ARRAY_BUFFER, bufferId);
	gl.bufferData(gl.ARRAY_BUFFER,  flatten(vertices_2), gl.STATIC_DRAW);

	// Associate out shader variables with our data buffer
	vPosition = gl.getAttribLocation(program_2, "vPosition");
	gl.vertexAttribPointer(vPosition, 2, gl.FLOAT, false, 0, 0);
	gl.enableVertexAttribArray(vPosition);
	
	gl.drawArrays(gl.TRIANGLE_FAN, 0, vertices_.length / 2);
	
	
	
	
	
	
	// PENTAGON
	// I got help from https://codepen.io/Oozen_/pen/ZEqGzLZ?editors=1010
	
	var x = 0.6; //x coordinate for the center of the pentagon
	var y = 0; //y coordinate for the center of the pentagon
	var r = 0.42; //radius of the circle upon which the vertices of the pentagon lie
	var angle = (2*Math.PI)/5; //angle between each pair of vertices

	var xCoord = new Array(6);
	var yCoord = new Array(6);

	for (var i = 0; i < 5; i++) {
		xCoord[i] = x + r*Math.cos(i*angle);
		yCoord[i] = y + r*Math.sin(i*angle);
	}

	xCoord[5] = xCoord[0];
	yCoord[5] = yCoord[0];
	
	var vertices2 = [xCoord[0],yCoord[0]];// Initialize Array
	
    for ( var i = 1; i < xCoord.length; ++i ) {
		vertices2.push(xCoord[i]);
        vertices2.push(yCoord[i]);

		console.log("Coordinate " + i + ": " + xCoord[i] + "," + yCoord[i]);
    }
	
	program2 = initShaders( gl, "vertex-shader2", "fragment-shader2" );
	gl.useProgram( program2 );
    
    // Load the data into the GPU 
    bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices2), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer
    vPosition = gl.getAttribLocation( program2, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, 5);
	
	
	
	
	
	// I got help for triangles from https://www.cs.unm.edu/~angel/WebGL/7E/CLASS/

	// First Triangle
    var vertices3 = [
        vec2( xCoord[1], yCoord[1] ), // the first corner of the pentagon
        vec2( xCoord[2], yCoord[2] ), //  the second corner of the pentagon
        vec2(  0.25, 1.05 ) // third point of triangle
    ]
    
    var program3 = initShaders( gl, "vertex-shader2", "fragment-shader2" );
    gl.useProgram( program3 );
    
    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices3), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program3, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, 3);
	
	
	
	
	
	// Second Triangle
  
    var vertices4 = [
        vec2( xCoord[2], yCoord[2] ), // the second corner of the pentagon
        vec2( xCoord[3], yCoord[3] ), // // the third corner of the pentagon
        vec2(  -0.45, 0 ) // third point of triangle
    ]
    
    var program4 = initShaders( gl, "vertex-shader2", "fragment-shader2" );
    gl.useProgram( program4 );
    
    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices4), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program4, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, 3);
	
	
	
	
	// Third Triangle
    
    var vertices4 = [
        vec2( xCoord[3], yCoord[3] ), // the third corner of the pentagon
        vec2( xCoord[4], yCoord[4] ), // the fourth corner of the pentagon
        vec2(  0.32, -1.05 ) // third point of triangle
    ]
    
    var program5 = initShaders( gl, "vertex-shader2", "fragment-shader2" );
    gl.useProgram( program5 );
    
    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices4), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer 
    var vPosition = gl.getAttribLocation( program5, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, 3);
	
	
	
	
	// Fourth Triangle
    
    var vertices4 = [
        vec2( xCoord[4], yCoord[4] ), // the fourth corner of the pentagon
        vec2( xCoord[5], yCoord[5] ), // the fifth corner of the pentagon
        vec2(  1.5, -0.63 ) // third point of triangle
    ]
    
    var program6 = initShaders( gl, "vertex-shader2", "fragment-shader2" );
    gl.useProgram( program6 );
    
    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices4), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program6, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, 3);
	
	
	
	
	// Fifth Triangle
    
    var vertices5 = [
        vec2( xCoord[5], yCoord[5] ), // the fifth corner of the pentagon
        vec2( xCoord[1], yCoord[1] ), // the first corner of the pentagon
        vec2(  1.45, 0.66 ) // third point of triangle
    ]
    
    var program6 = initShaders( gl, "vertex-shader2", "fragment-shader2" );
    gl.useProgram( program6 );
    
    // Load the data into the GPU
    var bufferId = gl.createBuffer();
    gl.bindBuffer( gl.ARRAY_BUFFER, bufferId );
    gl.bufferData( gl.ARRAY_BUFFER, flatten(vertices5), gl.STATIC_DRAW );

    // Associate out shader variables with our data buffer
    var vPosition = gl.getAttribLocation( program6, "vPosition" );
    gl.vertexAttribPointer( vPosition, 2, gl.FLOAT, false, 0, 0 );
    gl.enableVertexAttribArray( vPosition );

    gl.drawArrays( gl.TRIANGLE_FAN, 0, 3);
	

};




