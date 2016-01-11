/**
 * The Sudoku board could be partially filled, where empty cells are filled with the character '.'.
 * A valid Sudoku board (partially filled) is not necessarily solvable. Only the filled cells need to be validated.
 * Difficulty: Easy
 * Tags: HashTable
 */
/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
  if (!board) return false;
  var i
    , j
    , matrixHash = [[{}, {}, {}], [{}, {}, {}], [{}, {}, {}]]
    , columnHash = [{}, {}, {}, {}, {}, {}, {}, {}, {}];
  for (i = 0; i < board.length; i++) {
    var hash = {};
    for (j = 0; j < board[i].length; j++) {
      var c = board[i][j];
      // ignore '.'
      if (c === '.') continue;
      // check row
      if (typeof hash[c] === 'undefined') hash[c] = 1;
      else return false;
      // check column
      if (typeof columnHash[j][c] === 'undefined') columnHash[j][c] = 1;
      else return false;
      // check 3 * 3 matrix
      var mi = Math.floor(i / 3)
        , mj = Math.floor(j / 3);
      if (typeof matrixHash[mi][mj][c] === 'undefined') matrixHash[mi][mj][c] = 1;
      else return false;
    }
  }
  return true;
};

// test
// Accepted
// 248 ms
console.log(isValidSudoku(format([".87654321","2........","3........","4........","5........","6........","7........","8........","9........"])));
console.log(isValidSudoku(format([".87654421","2........","3........","4........","5........","6........","7........","8........","9........"])));
console.log(isValidSudoku(format([".87654321","2........","3........","4........","2........","6........","7........","8........","9........"])));


function format(arr) {
  var ret = [];
  arr.forEach(function (a) {
    ret.push(a.split(''));
  });
  return ret;
}
