if (turn == 0) {
  if (
    (destination.x == box.x && destination.y == box.y - 1) ||
    destination.y == box.y - 2
  ) {
    applyMove(box, destination);

    return true;
  } else {
    return false;
  }
}

if (turn != 0) {
  if (destination.x == box.x && destination.y == box.y - 1) {
    applyMove(box, destination);

    return true;
  } else {
    return false;
  }
}
