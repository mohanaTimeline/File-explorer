import React, {useEffect, useState } from "react"
import ArrowRight from '../assets/icons/arrowRight';
import ArrowDown from '../assets/icons/arrowDown';
import { fileTypes } from "./constants";

const File = ({ name, type, id }) => {
    console.log(name, id, type)
    const [showExpandIcon, setShowExpandIcon] = useState(false);
    const [expanded, setExpanded] = useState(false)
    
    // console.log(children, "children");

    console.log('File component')

    useEffect(() => {
        if (type === "folder") {
            setShowExpandIcon(true);
        }
    }, [type])
 
    const toggle = (event) => {
        console.log(event.target)
        return setExpanded(!expanded)
    }

    return (
        <div key={id} onClick={toggle}>
            {showExpandIcon ? <span> {expanded ? <ArrowDown /> : <ArrowRight />} </span> : null}
            <span>{name}</span>
            {/* <span>{type === 'file' && React.createElement(fileTypes[name])} {name}</span>  */}
        </div>
    )
    // console.log(name, type);
    // return (
    //     <div key={key} onClick={toggle}>
    //         {showExpandIcon ? <span> {expanded ? <ArrowDown /> : <ArrowRight />} </span> : null}
    //         <span>{type === 'file' && React.createElement(fileTypes[name])} {name}</span> 
    //     </div>
    // )
}

export default File


