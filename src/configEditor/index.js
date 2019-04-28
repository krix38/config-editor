import React from 'react';
import { isArray } from 'util';

const ConfigEditorContainer = (props) => (
    <div className="container">
        <ConfigEditor {...props} />
    </div>
)

const ConfigEditor = (props) => (
    <> { Object.entries(props.config).map(
        entry => {
            const key = entry[0];
            const value = entry[1];
            const cols = props.emptyCols ? props.emptyCols : 0
         if ( typeof value === "string" || typeof value === "number" ){
             return createTextInput(key, value, cols);
        }
        if( typeof value === "boolean" ){
            return createBooleanInput(value, key, cols);
        }
        if( isArray(value) ){
            return createArrayInput(key, value, cols)  
        }
        return createObjectInput(entry, cols)    
     }) } 
    </>
);

const insertEmptyCols = (colNumber) => (
    <>
        {colNumber > 0 && 
            [...Array(colNumber)].map((e, i) => 
            <div style={{marginRight: "20px"}} key={i}/>)}
    </>
)

const createTextInput = (key, value, emptyCols) => (
    <div className="row">
        { insertEmptyCols(emptyCols) }
        <div className="col-lg-1">
            {key}:
        </div>
        <div className="col-lg-1">
            <input type="text" value={value} />
        </div>
    </div>
);
const createObjectInput = (entry, emptyCols) => (
    <>
    <div className="row">
        { insertEmptyCols(emptyCols) }
        <div className="col-lg-1">
            {entry[0]}:
        </div>
    </div>
        <ConfigEditor config={entry[1]} emptyCols={emptyCols + 1} />
    </>
);

const createArrayInput = (key, value, emptyCols) => (
    <div className="row">
        { insertEmptyCols(emptyCols) }
        <div className="col-lg-1">
            {key}:
        </div>
        <div className="col-lg-1">
            {value.map(element => (
            <div>
                <input type="text" value={element} />
            </div>
            ))}
        </div>
    </div>
);


const createBooleanInput = (value, key, emptyCols) => (
    <div className="row">
        { insertEmptyCols(emptyCols) }
        <div className="col-lg-1">
            {key}:
        </div>
        <div className="col-lg-1">
            { value
                ? (<input type="checkbox" value={value} checked />)
                : (<input type="checkbox" value={value} />)}
        </div>
    </div>
);

export default ConfigEditorContainer;