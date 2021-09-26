import { render } from '@testing-library/react'
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


    /**
     * {
     * 
     * childrne: [
        * {
        *  name: "file1",
        *  type: file
        * },
        * {
        *  name: "fodler",
        *  type: folder,
        *  chidlren: [
        *   
        *  ]
        * },
     * ]
     * 
     * }
     * {
     *  
     * }
     * 
     * 
     * 
     * } data 
     * @returns 
     */

    // []
    // []

    const renderStructure = (data) => {
        console.log('data', data);
        if (data && data.children) {
            // folder
            for (let i = 0; i < data.children.length; i++) {
                renderStructure(data.children[i])
            }
            
        } else {
            console.log("rendering component");
            console.log("rendering component data", data);
            return <File id={data.id}
                name={data.name}
                type={data.type} />
        }
    }

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
                    {
                        renderStructure(data)
                    }
                </Col>
            </Row>
        </Container>
    )
}

export default FileExpContainer