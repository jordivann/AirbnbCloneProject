'use client';
import { useEffect, useState } from "react";

interface ClientOnlyProps {
    children:React.ReactNode;
}
// Definirlo asi hace que se eviten problemas de compatibilidad con el servidor, haciendo que se rendericen solamente del lado del cliente

const ClientOnly: React.FC<ClientOnlyProps> = ({
    children
}) => {
    const [hasMounted, setHasMounted] = useState(false);

    useEffect(()=>{
        setHasMounted(true)
    },[]);

    if(!hasMounted){
        return null;
    }

    return (
        <>
            {children}
        </>
    )
}

export default ClientOnly