import React, { useEffect, useState } from "react"
import ArrowRight from '../assets/icons/arrowRight';
import ArrowDown from '../assets/icons/arrowDown';
import DefaultFile from '../assets/icons/defaultFile'
import DeleteFile from '../assets/icons/x'
import { fileTypeIcons } from "./constants";
import { Container } from "reactstrap";

const File = ({ name, type, id, childNodes, onDelete }) => {
    const [showExpandIcon, setShowExpandIcon] = useState(false);
    const [expanded, setExpanded] = useState(false)

    // display folder icon
    useEffect(() => {
        if (type === "folder") {
            setShowExpandIcon(true);
        }
    }, [type])

    // toggle folder icons(collapsed/expanded)
    const toggle = (event) => {
        event.stopPropagation();
        setExpanded(!expanded)
    }

    //callback of onDelete
    const deleteContent = (event) => {
        event.stopPropagation();
        onDelete(id)
    }

    return (
        <div className="px-2 iconContainer" key={id} onClick={toggle}>
            {showExpandIcon ? <span> {expanded ? <ArrowDown /> : <ArrowRight />} </span> : null}
            <span className="">{type === 'file' && (fileTypeIcons[name] ? React.createElement(fileTypeIcons[name]) : <DefaultFile />)} {name}
                <span className="showOnHover float-end" id={id} onClick={deleteContent}><DeleteFile /></span>
            </span>
            {expanded && childNodes && childNodes.length
                ? childNodes.map((data) => (
                    <File
                        name={data.name}
                        type={data.type}
                        id={data.id}
                        key={data.id}
                        childNodes={data.children}
                        onDelete={onDelete}
                    />
                ))
                : null}
        </div>
    )
}

export default File


