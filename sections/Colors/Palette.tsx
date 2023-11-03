import ListColors from "$store/islands/ListColors.tsx"

export interface Props {
    /**
     * @title Numero de Cores
     * @format hex
     */
    size?: number;
}

function Palette(props:Props) {
    return(
        <main className={`relative flex flex-col`}>
        <ListColors size={props.size}/>
        </main>
    )
}
export default Palette;