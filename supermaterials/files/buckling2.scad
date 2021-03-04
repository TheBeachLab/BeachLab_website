// Parameters
sides=100; //number of sides cylinders
nx=7; //number of cells in x
ny=nx; //number of cells in y
ratio= 0.55; // 0 to 1 ratio of void to solid
cellsize= 10; // mm cell size
// ---------

$fn=sides;

// calculate radius that matches void to solid ratio
radius= sqrt(cellsize*cellsize*ratio/3.141592);
echo (radius);
//radius=cellsize*ratio/2;


intersection() {
// 1 Cube    
cube ([(nx-1)*cellsize,(nx-1)*cellsize,cellsize]);
    
// 2 Array
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


