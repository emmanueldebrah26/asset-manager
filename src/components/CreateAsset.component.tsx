import {Component} from "react";
import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Form from 'react-bootstrap/Form';
import {createAssets} from "../services/asset.service";
import eventBus from "../utils/EventBus";
import {Asset} from "../models/Asset";


export default class CreateAssetComponent extends Component{
    state = {
        viewCompleted: false,
        show: false,
        responseMessage: null,
        image: null,
        title: "",
        description: "null"
    };

     handSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        const formData = new FormData();

        formData.append('title', this.state.title);
        formData.append('description', this.state.description);
        formData.append('image', this.state.image ?? "");
        const asset: Asset = await createAssets(formData);
        this.setState({show: false})

         eventBus.dispatch("assetCreated", { message: asset });
    }

    handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { files } = event.target;
        const selectedFiles = files as FileList;
        this.setState({image: selectedFiles[0]})
    }

    render() {
        return <>
            <Button variant="primary" onClick={() => this.setState({show: true})}>
                Create Asset
            </Button>

            <Modal show={this.state.show} onHide={() => this.setState({show: false})}>
                <Modal.Header closeButton>
                    <Modal.Title>Create Assets</Modal.Title>
                </Modal.Header>
                <Modal.Footer>
                    <Form onSubmit={this.handSubmit}>
                        <Form.Group className="mb3">
                            <Form.Label>Title</Form.Label>
                            <Form.Control
                                type="text"
                                placeholder="Enter title"
                                onChange={(e) => this.setState({title: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3" >
                            <Form.Label>Example textarea</Form.Label>
                            <Form.Control
                                as="textarea"
                                placeholder="Description"
                                rows={3}
                                onChange={(e) => this.setState({description: e.target.value})}
                            />
                        </Form.Group>
                        <Form.Group className="mb-3">
                            <Form.Label>Image</Form.Label>
                            <Form.Control
                                type="file"
                                placeholder="Image"
                                onChange={this.handleFileChange}
                            />
                        </Form.Group>
                        <Button variant="primary" className="mr-4" type="submit">
                            Submit
                        </Button>
                        <Button variant="secondary" onClick={() => this.setState({show: false})}>
                            Close
                        </Button>
                    </Form>

                </Modal.Footer>
            </Modal>

        </>;
    };
}