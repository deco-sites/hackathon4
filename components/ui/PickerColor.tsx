import { useEffect, useState } from "preact/hooks";

export interface Props {
  /**
   * @title color block text?
   * @format hex
   */
  value: string;
  id: string;

}
export const loader = (props: Props, req: Request) => {
  const isOpen = "#eeff1f";
  props.value = "#eeff1f";

  return { ...props, isOpen };
};

function PickerColor(props: Props) {
  const [color, setColor] = useState<string>(props.value);
  return (
    <div className="flex flex-col items-center bg-black text-white rounded-lg">
      <div
        className={`w-full h-96 bg-[${color}] rounded-lg flex justify-center items-center`}
        style={{ background: color }}
      >
        <input
          type="color"
          id={props.id}
          onChange={(e: any) => setColor(e.target.value)}
          className={`-z-50`}
        ></input>
      </div>
      <span className={`z-50 font-bold text-2xl`}>{color}</span>
    </div>
  );
}

export default PickerColor;
