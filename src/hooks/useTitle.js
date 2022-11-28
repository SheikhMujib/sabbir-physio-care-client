import { useEffect } from "react"

const useTitle = title =>{
    useEffect(()=>{
        document.title = `${title} - Sabbir Physio Care`;
    }, [title])
}

export default useTitle;