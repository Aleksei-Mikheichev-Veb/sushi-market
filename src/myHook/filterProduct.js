import {useMemo} from "react";


export const useFilterProduct = (currentCategoria, rolls) => {
    const filteredRolls = useMemo(() => {
        if(currentCategoria){
            // Сравнение такое потому что в BD значения в виде строк
            return [...rolls.filter(elem => elem.categoria == currentCategoria)]
        }else{
            return rolls
        }
    }, [currentCategoria, rolls])

    return filteredRolls;
}
