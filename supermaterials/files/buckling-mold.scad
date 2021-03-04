// Parameters
sides=50; //number of sides cylinders
nx=5; //number of cells in x
ny=nx; //number of cells in y
ratio= 0.7; // 0 to 1 ratio of void to solid
cellsize= 20; // mm cell size
wall=2; // mm wall and bottom thickness
// ---------
$fn=sides;
// calculate radius
radius=cellsize*ratio/2;

difference() { // box - auxetic
    
// create and center the mold with the model
translate ([-cellsize/2-wall,-cellsize/2-wall,-cellsize/2-wall])
cube([cellsize*nx+2*wall,cellsize*ny+2*wall,cellsize+wall]);

intersection() {
// 1 Cube    
cube ([(nx-1)*cellsize,(nx-1)*cellsize,cellsize]);
// 2 Array of building blocks
// for (i =[ origin : spacing : distance ] )
for ( i=[0:cellsize:(nx-1)*cellsize]) {
for ( j=[0:cellsize:(ny-1)*cellsize]) {
    translate([i,j,0])
    difference() {
cube(cellsize, center=true);
cylinder(r=radius, h=2*cellsize, center=true);
}  
}} // end of array
} //end intersection
} // end of difference


