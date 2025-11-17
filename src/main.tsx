import React from "react";
import ReactDOM from "react-dom/client";
import { Button } from "./components";

ReactDOM.createRoot(document.getElementById("root")!).render(
    <>
        <Button
            label='Test'
            primaryType='primary'
            size='small'
            onClick={()=>console.log('hello')}
            corners='round'
        />
        <div style={{margin: 20}}></div>
        <Button
            label='s'
            primaryType='secondary'
            size='medium'
            onClick={()=>console.log('hello')}
            corners='square'
        />
        <div style={{margin: 20}}></div>
        <Button
            label='Secondary Big Button'
            primaryType='transparent'
            size='large'
            onClick={()=>console.log('hello')}
        />
    </>
);
