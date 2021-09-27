import React, { useEffect, useState } from 'react'

import { Col, Container, Row } from "reactstrap"
import api from "../api"
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

    // deletes a folder or file
    const onDelete = (id) => {
        api.deleteById(id).then(response => {
            setData(response)
        }).catch(error => console.log(error))
    }

    //render if data loads
    return hasLoaded && (
        <Container className="px-3">
            <Row>
                <Col xs="4" className="borderColor px-0 containerBg">
                    <h6 className="text-uppercase my-auto bg-secondary p-1 px-4">
                        {data.name}
                    </h6>
                </Col>
            </Row>
            <Row >
                <Col xs="4" className="borderColor containerBg border-top-0 pb-2">
                    {data.children.map((content, id) => {
                        return <File key={content.id}
                            name={content.name}
                            type={content.type}
                            childNodes={content.children}
                            id={content.id}
                            onDelete={onDelete} />
                    })}
                </Col>
            </Row>
        </Container>
    )
}

export default FileExpContainer