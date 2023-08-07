
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (arguments.length) return matrix.map((row, index) => (index % 2) ? row.reverse() : row).flat();
  return [];
}
