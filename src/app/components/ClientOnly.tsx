'use client';
// tutorial used this but I don't rcive hydration error so not imported
import { Children, useEffect, useState } from "react";
interface ClientOnlyProps{
    children:React.ReactNode;
}
const ClientOnly: React.FC<ClientOnlyProps> = ( {
    children
}) => {
    const [hasMounted, setHasMounted ] = useState(false);
    useEffect(()=>{
        setHasMounted(true);

    },[]);
    if(!hasMounted){
       return null; 
    }
    
    return ( <>
        {Children}
    </> );
}
 
export default ClientOnly;