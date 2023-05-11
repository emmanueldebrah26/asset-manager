import {Component} from 'react';
import Alert from 'react-bootstrap/Alert';
import Button from 'react-bootstrap/Button';
import eventBus from "../utils/EventBus";
import {Asset} from "../models/Asset";

export default class AlertDismissible extends Component {
    state = {
        show: false
    }

    componentDidMount() {
        eventBus.on("assetCreated", async (_: Asset) =>
            this.setState({show: true})
        );
    }

    render() {
        return <>
                <Alert show={this.state.show} variant="success">
                    <Alert.Heading>Successfully added new Assest</Alert.Heading>
                    <div className="d-flex justify-content-end">
                        <Button onClick={() => this.setState({show: false})} variant="outline-success">
                            Close me
                        </Button>
                    </div>
                </Alert>
            </>;
    }
}
