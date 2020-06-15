/* ===== Prototype Practice ===== */
// Task: You are to build a cuboid maker that can return values for a cuboid's volume or surface area.
// Cuboids are similar to cubes but do not have even sides. Follow the steps in order to accomplish this challenge.
/* == Step 1: Base Constructor ==
  Create a constructor function named CuboidMaker that accepts properties for length, width, and height */
function CuboidMaker(length, width, height) {
  this.length = length;
  this.width = width;
  this.height = height;
  /* == Step 2: Volume Method == */
  this.volume = function () {
    return length * width * height;
  };
  /* == Step 3: Surface Area Method == */
  this.surfaceArea = function () {
    return 2 * (length * width + length * height + width * height);
  };
}
/* == Step 4: Create a new object that uses CuboidMaker ==
  Create a cuboid object that uses the new keyword to use our CuboidMaker constructor
  Add properties and values of length: 4, width: 5, and height: 5 to cuboid.*/
var cuboid = new CuboidMaker(4, 5, 5);
// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130
