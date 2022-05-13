import React, { useState } from 'react'
import { AiFillCheckCircle } from "react-icons/ai";
import {
    Container, ListGroup, Row,
    Col, Button, Modal,
    Alert,
} from 'react-bootstrap'

function ClientList(props) {

    const clients = props.list || []
    const [client, setClient] = useState({})

    const [show, setShow] = useState(false);
    const [successDelete, setSuccessDelete] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);




    const renderClients = () => {
        return clients.map((user) => {
            return (
                <>
                    <ListGroup.Item key={user.id}>
                        <Row className="itemTask">
                            <Col xs={6} md={8}>
                                {user.name} - {user.age} - {user.tel}
                            </Col>
                            <Col>

                                <Button variant="success" onClick={() => {
                                    props.editDescription(client)

                                }
                                }>
                                    Editar
                                </Button>

                                <Button className="mx-3" variant="danger"
                                    onClick={() => {
                                        setClient(user)
                                        handleShow()
                                    }}>
                                    Deletar
                                </Button>

                            </Col>
                        </Row>
                    </ListGroup.Item>
                </>

            )
        })
    }

    return (
        <>
            <Container>
                {
                    successDelete
                        ?
                        <Alert key='success' variant='success'>
                            <AiFillCheckCircle size="30" /> Cliente deletado com suceso
                        </Alert>
                        :
                        ''
                }

                <h2 className="text-center ">
                    Lista de Clientes
                </h2>

                <Row>
                    <Col>
                        <ListGroup variant="flush">
                            {renderClients()}
                        </ListGroup>
                    </Col>
                </Row>



                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                        <Modal.Title>Deletar Cliente</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>Deseja deletar esse Cliente : <strong>{client.description}</strong></Modal.Body>
                    <Modal.Footer>
                        <Button variant="secondary" onClick={handleClose}>
                            Close
                        </Button>
                        <Button variant="danger" onClick={() => {
                            props.delete(client.id)
                            handleClose()
                            setSuccessDelete(true)
                            setTimeout(
                                () => {
                                    setSuccessDelete(false)
                                }, 3000)
                        }}>
                            Deletar
                        </Button>
                    </Modal.Footer>
                </Modal>
            </Container>
        </>
    )
}
export default ClientList