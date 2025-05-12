import {useMemo} from "react";

export const useSearchProduct = (value, saladsAll) => {
    const searchedProduct = useMemo(() => {
            return saladsAll.filter(product => {
                // Если значение инпута есть, то выполним поиск
                // debugger;
                if(value){
                    if(product.structure){
                        return product.structure.toLowerCase().includes(value.toLowerCase())
                    }else {
                        return product.title.toLowerCase().includes(value.toLowerCase())
                    }
                }
            })
    },[value])
    // Если массив не пустой то вернем его, если пустой то вернем пустой массив
    if(searchedProduct.length > 0){
        return searchedProduct
    }else {
        return []
    }
}