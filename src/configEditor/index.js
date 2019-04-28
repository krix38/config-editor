import React from 'react';
import { isArray } from 'util';

const ConfigEditor = (props) => (
    <div> { Object.entries(props.config).map(
        entry => {
            const key = entry[0];
            const value = entry[1];
         if ( typeof value === "string" || typeof value === "number" ){
             return createTextInput(key, value);
        }
        if( typeof value === "boolean" ){
            return createBooleanInput(value, key);
        }
        if( isArray(value) ){
            return createArrayInput(key, value)  
        }
        return createObjectInput(entry)    
     }) } 
    </div>
);

export default ConfigEditor;

const createTextInput = (key, value) => (
    <div>
        {key}: <input type="text" value={value} />
    </div>
);
const createObjectInput = (entry) => (
    <div>
        {entry[0]}: <ConfigEditor config={entry[1]} />
    </div>
);

const createArrayInput = (key, value) => (
    <div>
        {key}: {value.map(element => (
        <div>
            <input type="text" value={element} />
        </div>
        ))}
    </div>
);


const createBooleanInput = (value, key) => (
    <div>
        { value
            ? (<>{key}: <input type="checkbox" value={value} checked /></>)
            : (<>{key}: <input type="checkbox" value={value} /></>)}
    </div>
);

