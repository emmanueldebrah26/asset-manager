import React from 'react';
import './App.css';
import AssetComponent from "./components/Asset.component";
import CreateAssetComponent from "./components/CreateAsset.component";
import 'bootstrap/dist/css/bootstrap.min.css';
import AlertDismissible from "./components/Alert.component";


function App() {
  return (
    <div className="App">
        <h1>Scribe Asset Manager</h1>
        <p>Test Flight.</p>
        <AlertDismissible/>
        <CreateAssetComponent/>
        <AssetComponent/>
    </div>
  );
}

export default App;
