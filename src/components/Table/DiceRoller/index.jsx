import { initialDiceState } from "constants/game";
import {
  Cursor,
  DiceFive,
  DiceFour,
  DiceOne,
  DiceSix,
  DiceThree,
  DiceTwo,
} from "phosphor-react";
import { useActivePlayer, useDice } from "providers/game/hooks";
import { useState } from "react";
import { getPlayerColor } from "utils/player";
import { CursorWrapper, DiceRollerWrapper, DiceWrapper } from "./styled";

const DiceRoller = () => {
  const [dice, setDice] = useDice();
  const player = useActivePlayer();
  const [isSpinning, setIsSpinning] = useState(false);

  const possibleDiceOutcomes = [
    DiceOne,
    DiceTwo,
    DiceThree,
    DiceFour,
    DiceFive,
    DiceSix,
  ];
  const Dice =
    dice !== initialDiceState ? possibleDiceOutcomes[dice - 1] : null;

  const handleRoll = () => {
    if (isSpinning) {
      return;
    }

    setIsSpinning(true);

    setTimeout(() => {
      setDice(Math.floor(Math.random() * 6) + 1);
    }, 500);

    setTimeout(() => {
      setIsSpinning(false);
    }, 750);
  };

  return (
    <DiceRollerWrapper>
      {dice === initialDiceState ? (
        <CursorWrapper isSpinning={isSpinning}>
          <Cursor
            size="60%"
            color={getPlayerColor(player)}
            weight="duotone"
            onClick={handleRoll}
          />
        </CursorWrapper>
      ) : (
        <DiceWrapper isSpinning={isSpinning}>
          <Dice size="60%" color={getPlayerColor(player)} weight="duotone" />
        </DiceWrapper>
      )}
    </DiceRollerWrapper>
  );
};

export default DiceRoller;
