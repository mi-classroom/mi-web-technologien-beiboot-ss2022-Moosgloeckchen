import { useEffect, useState } from "react";

/**
 * hook that handles key events for controls
 */
export const useControls = (keyboardKeys) => {
  const [move, setMovement] = useState({
    moveForward: false,
    moveBackward: false,
    moveLeft: false,
    moveRight: false,
  });

  const handleKeyDown = (e) => setMovement((movement) => ({
    ...movement,
    [keyboardKeys[e.code]]: true
  }));
  const handleKeyUp = (e) => setMovement((movement) => ({
    ...movement,
    [keyboardKeys[e.code]]: false
  }));

  useEffect(() => {
    document.addEventListener('keydown', handleKeyDown);
    document.addEventListener('keyup', handleKeyUp);
  }, []);

  return move;
};
