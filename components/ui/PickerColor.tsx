import { useEffect, useState } from "preact/hooks";

export interface Props {
  /**
   * @title color block text?
   * @format hex
   */
  id: string;
}

function PickerColor(props: Props) {
  const [color, setColor] = useState<string>("#ffffff");
  const handleColor = (e:any)=>{
    setColor(e.target.value)
  }
  return (
    <div className="flex md:flex-col items-center bg-black text-white rounded-t-lg">
      <div
        className={`md:w-full md:h-96 h-20 w-20 md:rounded-lg flex justify-center items-center`}
        style={{ background: color }}
      >
        <input
          type="color"
          id={props.id}
          name={props.id}
          onChange={handleColor}
          className={`-z-50`}
          value={color}
        ></input>
      </div>
      <input
        className={`z-50 font-bold text-2xl border-hidden bg-transparent w-full`}
        value={color}
        onChange={handleColor}
      ></input>
    </div>
  );
}

export default PickerColor;
