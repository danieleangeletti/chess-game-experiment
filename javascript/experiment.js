if (box.player == 0) {
  if (box.y == 6) {
    if (
      (destination.x == box.x && destination.y == box.y - 1) ||
      (destination.x == box.x && destination.y == box.y - 2)
    ) {
      applyMove(box, destination);

      return true;
    } else {
      return false;
    }
  } else {
    if (destination.x == box.x && destination.y == box.y - 1) {
      applyMove(box, destination);

      return true;
    } else {
      return false;
    }
  }
} else if (box.player == 1) {
  if (box.y == 1) {
    if (
      (destination.x == box.x && destination.y == box.y + 1) ||
      (destination.x == box.x && destination.y == box.y + 2)
    ) {
      applyMove(box, destination);

      return true;
    } else {
      return false;
    }
  } else {
    if (destination.x == box.x && destination.y == box.y + 1) {
      applyMove(box, destination);

      return true;
    } else {
      return false;
    }
  }
}
