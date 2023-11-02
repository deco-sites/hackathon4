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
        <main className={`h-screen relative flex flex-col`}>
        <h1>My Palette</h1>
        <ListColors size={props.size}/>
        </main>
    )
}
export default Palette;