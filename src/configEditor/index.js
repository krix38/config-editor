import React from 'react';
import { isArray } from 'util';

const ConfigEditor = (props) => (
    <div> { Object.entries(props.config).map(
        entry => {
         if ( typeof entry[1] === "string" || typeof entry[1] === "number"){
             return (
                <div>
                    {entry[0]} : <input type="text" value={entry[1]} />
                </div>
            )
        }else{
            if( isArray(entry[1]) ){
                return (
                    <div>
                        {entry[0]} : {entry[1].map(element => (
                            <div>
                                <input type="text" value={element}/>
                            </div>
                            )
                        )}
                    </div>
                )  
            }else{
                return (
                    <div>
                        {entry[0]} : <ConfigEditor config={entry[1]}/>
                    </div>
                )
            }
        }
     }) } 
    </div>
);

export default ConfigEditor;