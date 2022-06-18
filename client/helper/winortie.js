var checkWin = function(x, y) {
  var winCondition;
  this.state.play === 1 ? (winCondition = "1111") : (winCondition = "3333");
  if (this.state["column" + y].join("").includes(winCondition)) {
    winCondition === "1111" ? alert("Red wins!") : alert("Yellow wins!");
  }

  var rowArray = [];
  for (var i = 0; i < 8; i++) {
    rowArray.push(this.state["column" + i][x]);
  }
  if (rowArray.join("").includes(winCondition)) {
    winCondition === "1111" ? alert("Red wins!") : alert("Yellow wins!");
  }

  var miDiaIndex = x - y;
  var minDiag = [];
  var yStart = 0;
  if (miDiaIndex < 0) {
    yStart = Math.abs(miDiaIndex);
  }
  var xStart = 0;
  if (miDiaIndex > 0) {
    xStart = miDiaIndex;
  }
  while (xStart <= 7 && yStart <= 7) {
    minDiag.push(this.state["column" + yStart][xStart]);
    xStart++;
    yStart++;
  }
  if (minDiag.join("").includes(winCondition)) {
    winCondition === "1111" ? alert("Red wins!") : alert("Yellow wins!");
  }

  var maDiaIndex = x + y;
  var majDiag = [];
  var yStart = 0;
  if (maDiaIndex > 7) {
    yStart = maDiaIndex - 7;
  }
  var xStart = 7;
  if (maDiaIndex < 7) {
    xStart = maDiaIndex;
  }
  while (xStart >= 0 && yStart <= 7) {
    majDiag.push(this.state["column" + yStart][xStart]);
    xStart--;
    yStart++;
  }
  if (majDiag.join("").includes(winCondition)) {
    winCondition === "1111" ? alert("Red wins!") : alert("Yellow wins!");
  }
};

export default checkWin;