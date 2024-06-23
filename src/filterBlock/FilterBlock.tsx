import {FilterType} from "../App.tsx";

interface Props{
    setFilterState: (filterState: FilterType)=>void
}

export const FilterBlock=({setFilterState}:Props)=>{

    return <>
        <button onClick={() => setFilterState("All")}>Все</button>
        <button onClick={() => setFilterState("Off")}>Завершенные</button>
        <button onClick={() => setFilterState("On")}>Незавершенные</button>
    </>
}