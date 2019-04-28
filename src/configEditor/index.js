import React from 'react';
import { isArray } from 'util';

const ConfigEditor = (props) => (
    <div> { Object.entries(props.config).map(
        entry => {
            const key = entry[0];
            const value = entry[1];
         if ( typeof value === "string" || typeof value === "number" ){
             return (
                <div>
                    {key} : <input type="text" value={value} />
                </div>
            )
        }
        if( typeof value === "boolean" ){
            return (
                <div>
                    { value
                    ? (<>{key} : <input type="checkbox" value={value} checked/></>)
                    : (<>{key} : <input type="checkbox" value={value}/></>)
                    }
                </div>
            )
        }
        if( isArray(value) ){
            return (
                <div>
                    {key} : {value.map(element => (
                        <div>
                            <input type="text" value={element}/>
                        </div>
                        )
                    )}
                </div>
            )  
        }
        return (
            <div>
                {entry[0]} : <ConfigEditor config={entry[1]}/>
            </div>
        )    
     }) } 
    </div>
);

export default ConfigEditor;