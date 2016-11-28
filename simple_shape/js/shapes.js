var dataArray = [
  10,
  50,
  30
];

var svg = d3.select( "body" ).append( "svg" )
  .attr( 'height', '1000px' )
  .attr( 'width', '100%' );


svg.selectAll( 'rect' ) // Find the  rect in svg
  .data( dataArray ) // Binds data to slection arr[0] >> 1st rect arr[1 >> 2nd rect]
  .enter().append( 'rect' ) //Adds rectangle
  .attr( 'height', function ( d, i ) {
    return d * 15;
  } )
  .attr( 'width', '50' )
  .attr( 'fill', 'red' )
  .attr( 'x', function ( d, i ) {
    return 90 * i;
  } )
  .attr( 'y', function ( d, i ) {
    return 800 - ( d * 15 );
  } );

var newX = 400;

svg.selectAll( "circle.first" )
  .data( dataArray )
  .enter().append( "circle" )
  .attr( "class", "first" )
  .attr( "cx", function ( d, i ) {
    newX += ( d * 7 ) + ( i * 20 );
    return newX;
  } )
  .attr( "cy", "100" )
  .attr( "r", function ( d ) {
    return d * 3
  } );


var newX = 900;

svg.selectAll( "ellipse.second" )
  .data( dataArray )
  .enter().append( "circle" )
  .attr( "class", "second" )
  .attr( "cx", function ( d, i ) {
    newX += ( d * 7 ) + ( i * 10 );
    return newX;
  } )
  .attr( "cy", "100" )
  .attr( "rx", function ( d ) {
    return d * 3

  } )
  .attr( "ry", "300" );

newX = 600;

svg.selectAll( "line" )
  .data( dataArray )
  .enter().append( "line" )
  .attr( "x1", newX )
  .attr( "y1", function ( d, i ) {
    return 80 + ( i * 20 );
  } )
  .attr( "x2", function ( d ) {
    return newX + ( d * 15 );
  } )
  .attr( "y2", function ( d ) {
    return 80 + ( i * 20 );
  } );
// var newX = 600;/
// svg.selectAll( "ellipse" )
//   .data( dataArray )
//   .enter().append( "ellipse" )
//   .attr( "cx", function ( d, i ) {
//     newX + =
//   } )
//   .attr( "cy", "300" )
//   .attr( "r", )
