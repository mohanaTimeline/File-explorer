import React, { useEffect, useState } from 'react'

import { Col, Container, Row } from "reactstrap"

import FileExpFolders from "./FileExpFolders"
import api from "../api"
import FileExpFiles from './FileExpFilesMain/FileExpFiles'
import File from './File'


const FileExpContainer = () => {

    const [data, setData] = useState()

    //data loading
    const [hasLoaded, setHasLoaded] = useState(false);
    useEffect(() => {
        api.getDirectoryTree().then(response => {
            setData(response)
            setHasLoaded(true)
        }).catch(error => console.log(error))
    }, [])

    // console.log(data, "data");
    return hasLoaded && (
        <Container>
            <Row>
                <Col xs="4" className="borderColor px-0 containerBg">
                    <h6 className="text-uppercase my-auto bg-secondary p-1 px-2">
                        {data.name}
                    </h6>
                </Col>
            </Row>
            <Row>
                <Col xs="4" className="borderColor containerBg border-top-0">
                    {data.children.map((content, id) => {
                        // if (content.type === "folder") {
                            // return
                            //  <FileExpFolders key={content.id} folderName={content.name} />
                            return <File key={content.id} name={content.name} type={content.type} />
                        // }
                        // else {
                        //     return <FileExpFiles key={fileType.id} fileName={fileType.name} />
                        // }
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default FileExpContainer