import { useLocation } from "react-router-dom";
import { useMemo } from "react";

export function useQuery() {
    const {search} = useLocation()

    //vai buscar o parametro da busca e nos entregar, caso [search] seja alterado
    return useMemo(() => new URLSearchParams(search), [search]) 
}