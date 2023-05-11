import './style.css'
import {getAssets} from "../services/asset.service";
import {Component} from "react";
import {PaginatedData} from "../models/PaginateData";
import {Asset} from "../models/Asset";
import eventBus from "../utils/EventBus";

export default class AssetComponent extends Component{
    state = {
        assets: []
    }

    async componentDidMount() {
        eventBus.on("assetCreated", async (data: Asset) =>
            await this.getAssets()
        );
       await this.getAssets();
    }

    getAssets = async () => {
        try {
            const response_data: PaginatedData = await getAssets();
            this.setState({
                assets: response_data.results
            });
        } catch (e) {
            console.log(e);
        }
    }

    render() {
        return  <>
            <div className="masonry">
                {
                    this.state.assets.map((asset: Asset) => (
                        <div className="item">
                            {asset.title}
                            <img src={asset.image} />
                        </div>
                    ))
                }
            </div>
        </>;
    }
}
