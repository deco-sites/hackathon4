import PickerColor from "$store/islands/PickerColor.tsx";
import { useEffect, useState } from "preact/hooks";

export interface Props {
  /**
   * @title color block text?
   * @format hex
   */
  size?: number;
}

function ListColors(props: Props) {
  const [numberColors, setNumberColors] = useState<number>(
    props.size ? props.size : 5
  );

  const addColor = function () {
    setNumberColors(numberColors < 10 ? numberColors + 1 : numberColors);
  };
  const removeColor = function () {
    setNumberColors(numberColors > 2 ? numberColors - 1 : numberColors);
  };
  return (
    <div className="h-full relative my-0 flex flex-col justify-between">
      <div>
        <button className="font-bold text-2xl bg-red-600 w-8 h-8 pb-1 rounded-lg justify-center text-center" onClick={() => removeColor()}>-</button>
        <button className="font-bold text-2xl bg-blue-600 w-8 h-8 pb-1 rounded-lg justify-center text-center" onClick={() => addColor()}>+</button>
      </div>
      <ul className="relative flex h-full">
        {[...Array(numberColors)].map((elementInArray, index) => (
          <li className="flex-1 relative h-fit" key={index}>
            <label
              htmlFor={`color-${index}`}
              className="absolute h-full w-full bg-transparent flex items-center shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] rounded-lg"
            ></label>
            <PickerColor value="#ffffff" id={`color-${index}`} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ListColors;
