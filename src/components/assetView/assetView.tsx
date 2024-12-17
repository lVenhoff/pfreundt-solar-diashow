import React, { useEffect, useRef, useState } from "react";
import "./assetViewStyle.css";
import Asset from "../../classes/asset";
import ImageAsset from "../../classes/imageAsset";


type AssetViewProps = {
  assets: Asset[],
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AssetView: React.FC<AssetViewProps> = ({assets}) => {

  const [assetList, setAssetList] = useState<Asset[]>([]);
  const [displayElement, setDisplayElement] = useState<JSX.Element | null>(null);
  const interval = useRef(null);


  useEffect(() => {
    console.log(assets);
    setAssetList(assets);
  }, [assets]);

  useEffect(() => {
    clearInterval(interval.current);
    startDiashow();
  },[assetList]);

  const startDiashow = () => {

    let counter: number = 0;
    interval.current = setInterval(() => {
      if (assetList[counter] instanceof ImageAsset) {
        const current: ImageAsset = assetList[counter] as ImageAsset;
        setDisplayElement(renderDisplay(false, `data:image/png;base64,${current.data}`));
      }
      else {
        setDisplayElement(renderDisplay(true, assetList[counter].assetPath));
      }

      counter++;

      if (counter >= assetList.length) {
        counter = 0;
      }

    },5000);
  }

  const renderDisplay = (showWeb: boolean, source: string):JSX.Element => {
    if (showWeb) {
      return <webview className="asset-view--web" src={source} style={{ width: "100vw", height: "100vh", border: "none" }}></webview>;
    }
    else {
      return <img className="asset-view--image" src={source}></img>
    }
  }


  return (
    <div className="asset-view">
      {displayElement}
    </div>
  );
}

export default AssetView;
