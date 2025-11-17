import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <Button
            label='Test'
            primary={true}
            size='small'
            onClick={()=>console.log('hello')}
        />
        <div style={{margin: 20}}></div>
        <Button
            label='Secondary'
            primary={false}
            size='large'
            onClick={()=>console.log('hello')}
        />
    </>
);
