var dataArray = [
  10,
  15,
  20
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
    return 500 - ( d * 15 );
  } );

var newX = 200;

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


var newX = 600;

svg.selectAll( "ellipse.second" )
  .data( dataArray )
  .enter().append( "ellipse" )
  .attr( "class", "second" )
  .attr( "cx", function ( d, i ) {
    newX += ( d * 7 ) + ( i * 20 );
    return newX;
  } )
  .attr( "cy", "100" )
  .attr( "rx", function ( d ) {
    return d * 3

  } )
  .attr( "ry", "30" );

newX = 600;

svg.selectAll( "line" )
  .data( dataArray )
  .enter().append( "line" )
  .style( "stroke", "green" )
  .attr( "stroke-width", "2" )
  .attr( "x1", newX )
  .attr( "y1", function ( d, i ) {
    return 300 + ( i * 20 );
  } )
  .attr( "x2", function ( d ) {
    return newX + ( d * 15 );
  } )
  .attr( "y2", function ( d, i ) {
    return 300 + ( i * 20 );
  } );


var textArray = [ 'start', 'middle', 'end' ]

svg.append( "text" ).selectAll( "tspan" )
  .data( textArray )
  .enter().append( "tspan" )
  .attr( "x", newX )
  .attr( "y", function ( d, i ) {
    return ( 390 + i * 20 );
  } )
  .attr( "fill", "none" )
  .attr( "stroke", "blue" )
  .attr( "stroke-width", "2" )
  .attr( "font-size", "30" )
  .attr( "text-anchor", "start" )
  .attr( "dominant-baseline", "bottom" )
  .text( function ( d ) {
    return d;
  } );


svg.append( "line" )
  .attr( "x1", newX )
  .attr( "y1", 390 )
  .attr( "x2", newX )
  .attr( "y2", 430 )
  .attr( "stroke", "green" )
  .attr( "stroke-width", 2 )
