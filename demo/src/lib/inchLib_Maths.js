//-----------------------------------------------------------------------------------------------
//	Inchinn Maths helpers.
//-----------------------------------------------------------------------------------------------

inchlib				=	window.inchlib || {};
inchlib.Maths		=	inchlib.Maths || {};

//-----------------------------------------------------------------------------------------------

(function(window)
{
	//-----------------------------------------------------------------------------------------------
	//	const-ish.
	//-----------------------------------------------------------------------------------------------

	var	gjsMATHS_QUAKEx32 = 0x5f3759df,
		gjsMATHS_x32      = 0x5f375a86,
		gjsMATHS_x64      = 0x5fe6eb50c7aa19f9;

	//-----------------------------------------------------------------------------------------------

	var	Maths	=	inchlib.Maths;

	//-----------------------------------------------------------------------------------------------
	//
	//	Vector2
	//
	//-----------------------------------------------------------------------------------------------

	//	Define the base function for our Vector2...
	Maths.Vector2	=	function( x, y )
	{
		if( x instanceof Maths.Vector2 )	{ this.X=x.X;	this.Y=x.Y;		}
		else
		{
			this.X			=	x || 0;
			this.Y			=	y || 0;
		}
	};

	//	...& let's have a local reference to save on typing.
	var	Vector2	=	Maths.Vector2;

	Vector2.prototype	=
	{
		Set:			function( x, y )
		{
			if( x instanceof Vector2 )	{ this.X=x.X;	this.Y=x.Y;		}
			else						{ this.X=x;		this.Y=y;		}
		},

		Add:			function( v )
		{
			if( v instanceof Vector2 )	{ this.X+=v.X;	this.Y+=v.Y;	}
			else						{ this.X+=v;	this.Y+=v;		}
		},

		Subtract:		function( v )
		{
			if( v instanceof Vector2 )	{ this.X-=v.X;	this.Y-=v.Y;	}
			else						{ this.X-=v;	this.Y-=v;		}
		},

		Multiply:		function( v )
		{
			if( v instanceof Vector2 )	{ this.X*=v.X;	this.Y*=v.Y;	}
			else						{ this.X*=v;	this.Y*=v;		}
		},

		Divide:			function( v )
		{
			if( v instanceof Vector2 )	{ this.X/=v.X;	this.Y/=v.Y;	}
			else
			{
				var	recip	=	1.0/v;

				this.X	*=	recip;
				this.Y	*=	recip;
			}
		},

		GetLengthSq:	function()
		{
			//	Return the length squared.
			return	(this.X*this.X)+(this.Y*this.Y);
		},

		GetLength:		function()
		{
			//	Return the square root of the length.
			return	Math.sqrt( (this.X*this.X)+(this.Y*this.Y) );
		},

		GetInvLength:	function()
		{
			//	Return the inverse square root of the length.
			return	Maths.fisqrt( (this.X*this.X)+(this.Y*this.Y) );
		},

		toString:		function()
		{
			return	"Vector2[ X:" + this.X.toString() + ", Y:" + this.Y.toString() + " ]";
		}
	};

	Vector2.Zero		=	function()			{	return	new	Vector2( 0, 0);	};
	Vector2.One			=	function()			{	return	new	Vector2( 1, 1);	};
	Vector2.Up			=	function()			{	return	new	Vector2( 0,-1);	};
	Vector2.Down		=	function()			{	return	new	Vector2( 0, 1);	};
	Vector2.Left		=	function()			{	return	new	Vector2(-1, 0);	};
	Vector2.Right		=	function()			{	return	new	Vector2( 1, 0);	};
	Vector2.Dot			=	function( a, b )	{	return	a.X*b.X + a.Y*b.Y;	};
	Vector2.Add			=	function( a, b )
	{
		if( b instanceof Vector2 )	return	new	Vector2( a.X+b.X, a.Y+b.Y );
		else						return	new	Vector2( a.X+b,   a.Y+b	  );
	};
	Vector2.Subtract	=	function( a, b )
	{
		if( b instanceof Vector2 )	return	new	Vector2( a.X-b.X, a.Y-b.Y );
		else						return	new	Vector2( a.X-b,   a.Y-b	  );
	};
	Vector2.Multiply	=	function( a, b )
	{
		if( b instanceof Vector2 )	return	new	Vector2( a.X*b.X, a.Y*b.Y );
		else						return	new	Vector2( a.X*b,   a.Y*b	  );
	};
	Vector2.Divide		=	function( a, b )
	{
		if( b instanceof Vector2 )	return	new	Vector2( a.X/b.X, a.Y/b.Y );
		else
		{
			var	recip	=	1.0/b;
			return	new	Vector2( a.X*recip,   a.Y*recip	  );
		}
	};
	Vector2.Normalised	=	function( v )
	{
		var	inv_length	=	1.0/v.GetLength();

		return	new	Vector2( v.X*inv_length, v.Y*inv_length );
	};

	//-----------------------------------------------------------------------------------------------
	//
	//	Vector3
	//
	//-----------------------------------------------------------------------------------------------

	//	Define the base function for our Vector3...
	Maths.Vector3	=	function( x, y, z )
	{
		if( x instanceof Maths.Vector3 )	{ this.X=x.X; this.Y=x.Y; this.Z=x.z;	}
		else
		{
			this.X			=	x || 0;
			this.Y			=	y || 0;
			this.Z			=	z || 0;
		}
	};

	//	...& let's have a local reference to save on typing.
	var	Vector3	=	Maths.Vector3;

	Vector3.prototype	=
	{
		toString:		function()
		{
			return	"Vector3[ X:" + this.X.toString() + ", Y:" + this.Y.toString() + ", Z:" + this.Z.toString() + " ]";
		}
	};

	Vector3.Zero		=	function()			{	return	new	Vector2( 0, 0, 0 );	};
	Vector3.One			=	function()			{	return	new	Vector2( 1, 1, 1 );	};
	Vector3.Up			=	function()			{	return	new	Vector2( 0,-1, 0 );	};
	Vector3.Down		=	function()			{	return	new	Vector2( 0, 1, 0 );	};
	Vector3.Left		=	function()			{	return	new	Vector2(-1, 0, 0 );	};
	Vector3.Right		=	function()			{	return	new	Vector2( 1, 0, 0 );	};
	Vector3.Forward		=	function()			{	return	new	Vector2( 0, 0, 1 );	};
	Vector3.Backward	=	function()			{	return	new	Vector2( 0, 0,-1 );	};

	//-----------------------------------------------------------------------------------------------
	//
	//	Fast Inverse Square Root.
	//
	//-----------------------------------------------------------------------------------------------

	/**
	 * References:
	 * [1] ftp://ftp.idsoftware.com/idstuff/source/quake3-1.32b-source.zip
	 * [2] http://www.lomont.org/Math/Papers/2003/InvSqrt.pdf
	 * [3] http://en.wikipedia.org/wiki/Newton%27s_method
	 * [4] https://developer.mozilla.org/en/JavaScript_typed_arrays
	 * [5] http://en.wikipedia.org/wiki/Fast_inverse_square_root
	 */

	//	Private properties.
	var	fisqrt_buf	=	new ArrayBuffer( Float32Array.BYTES_PER_ELEMENT ),
		fisqrt_f	=	new Float32Array( fisqrt_buf ),
		fisqrt_l	=	new Uint32Array( fisqrt_buf ),
		fisqrt_1p5	=	1.5;

	/**
	 * Appearing in the Quake III Arena source code[1],
	 * this strange algorithm uses integer operations
	 * along with a 'magic number' to calculate floating point
	 * approximation values of inverse square roots[5].
	 *
	 * @param  {Number} n     Number
	 * @param  {Number} p = 1 Number of iterations for performing Newton's method[3]
	 * @return {Number}       Result
	 */

		//	Public method.
	Maths.fisqrt	=	function( x, i )
	{
		var	half_x	=	x * 0.5;

		i			=	i || 1;
		fisqrt_f[0]	=	x;
		fisqrt_l[0]	=	gjsMATHS_QUAKEx32 - ( fisqrt_l[0] >> 1 );

		var	y	=	fisqrt_f[0];

		while( i-- )
		{
			y	=	y * ( fisqrt_1p5 - ( half_x * y * y ) );
		}

		return y;
	};

	//-----------------------------------------------------------------------------------------------
	//	Namespace path.
	//-----------------------------------------------------------------------------------------------


	//-----------------------------------------------------------------------------------------------
}(window));

//-----------------------------------------------------------------------------------------------

//	A few bits of test code.

/*
 var	test	=	new	gjs.Maths.Vector2( 111, 123 );

 test.Set( 414, 567 );

 var	vec1	=	new	gjs.Maths.Vector2( test ),
 vec2	=	new	gjs.Maths.Vector2( 3, 4 );

 vec1.Add( vec2 );

 console.log( test.toString() );
 console.log( vec1.toString() );
 console.log( vec2.toString() );

 console.log( 1.0/vec2.GetInvLength() );

 console.log( gjs.Maths.Vector2.Up().toString() );
 */

//-----------------------------------------------------------------------------------------------
