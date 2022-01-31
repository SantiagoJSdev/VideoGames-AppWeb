import { useEffect, useState } from "react";

const initialPage = 1;

export const usePage = () => {
    // const [loading, setloading] = useState(false);
    const [page, setpage] = useState(initialPage);
    const maximo = (15);
    // useEffect(() => {
    //   if (page === initialPage) return
    // }, [page]);
    
    return {
        setpage,
        maximo, 
        page
    }
};
