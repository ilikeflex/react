import React from "react"
import { useParams } from "react-router-dom";


export const Invoice:React.FC<unknown> =  (props:unknown) => {
    let params = useParams();
    return (
        <main style={{ padding: "1rem 0" }}>
            <h2>Invoice Component: {params.invoiceId}</h2>;
        </main>
    )
}