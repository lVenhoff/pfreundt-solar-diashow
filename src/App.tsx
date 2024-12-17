import { useEffect, useState } from "react";
import "./App.css";
import AssetView from "./components/assetView/assetView";
import AssetLoader from "./libs/assetLoader";
import Asset from "./classes/asset";

function App() {
  const [assets, setAssets] = useState<Asset[]>([]);

  useEffect(() => {
    loadAssets();
    setInterval(() => {
      loadAssets();
    }, 3600000)
  }, []);

  const loadAssets = async () => {
      const assets: Asset[] = await AssetLoader.loadAssets();

      setAssets(assets);
  };

  return <>{assets.length > 0 ? <AssetView assets={assets} /> : <h1>Loading Assets</h1>}</>;
}

export default App;
