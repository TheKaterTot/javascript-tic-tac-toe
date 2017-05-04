$(function() {
  var player = 'x';
  var board = [[null, null, null], [null, null, null], [null, null, null]];
  $('td').on('click', function() {
    if ($(this).text() != '') {
      return;
    }
    $(this).text(player).addClass('played');
    var row = $(this).data('row');
    var column = $(this).data('column');

    board[row][column] = player;
    if (checkForThree()) {
      $('h1').text(`${player} wins!`)
    }

    if (player === 'x') {
      player = 'o';
    } else {
      player = 'x';
    }
  })

  function checkForThree() {
    if (board[0][0] == board[0][1] && board[0][1] == board[0][2] && board[0][0] != null) {
      return true;
    }
    if (board[1][0] == board[1][1] && board[1][1] == board[1][2] && board[1][0] != null) {
      return true;
    }
    if (board[2][0] == board[2][1] && board[2][1] == board[2][2] && board[2][0] != null) {
      return true;
    }
    if (board[0][0] == board[1][0] && board[1][0] == board[2][0] && board[0][0] != null) {
      return true;
    }
    if (board[0][1] == board[1][1] && board[1][1] == board[2][1] && board[0][1] != null) {
      return true;
    }
    if (board[0][2] == board[1][2] && board[1][2] == board[2][2] && board[0][2] != null) {
      return true;
    }
    if (board[0][0] == board[1][1] && board[1][1] == board[2][2] && board[0][0] != null) {
      return true;
    }
    if (board[0][2] == board[1][1] && board[1][1] == board[2][0] && board[0][2] != null) {
      return true;
    }
    return false;
  }
})
