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
  const submit = function (event: any) {
    event.preventDefault();
    let colors = [];
    for (let i = 0; i < numberColors; i++) {
      colors.push(event.target[`color-${i}`].value);
    }
    console.log(colors)
    fetch("http://cores.eu-4.evennode.com/", {
      method: "POST",
      body: JSON.stringify({
        colors: colors,
      }),
      headers: { "Content-type": "application/json; charset=UTF-8" },
    })
      .then((response) => response.json())
      .then((json) => console.log(json))
      .catch((err) => console.log(err));
  };
  return (
    <div className="h-full relative my-0 flex flex-col justify-start gap-1">
      <div className="w-full relative">
        <button
          className="font-bold relative text-2xl bg-red-600 h-8 pb-1 rounded-l-lg justify-center text-center w-1/2"
          onClick={() => removeColor()}
        >
          -
        </button>
        <button
          className="font-bold relative text-2xl bg-blue-600 h-8 pb-1 rounded-r-lg justify-center text-center w-1/2"
          onClick={() => addColor()}
        >
          +
        </button>
      </div>
      <form onSubmit={submit}>
        <ul className="relative flex flex-col h-full md:flex-row md:gap-1 md:gap-0">
          {[...Array(numberColors)].map((elementInArray, index) => (
            <li className="flex-1 relative h-fit" key={index}>
              <label
                htmlFor={`color-${index}`}
                className="absolute md:h-full md:w-full h-20 w-20 bg-transparent flex items-center md:shadow-[inset_0_-2px_4px_rgba(0,0,0,0.6)] md:rounded-t-lg"
              ></label>
              <PickerColor id={`color-${index}`} />
            </li>
          ))}
        </ul>
        <button
          type="submit"
          className="fixed bottom-4 bg-green-700 p-2 rounded text-white right-4"
        >
          Publicar
        </button>
      </form>
    </div>
  );
}

export default ListColors;
