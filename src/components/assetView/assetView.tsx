import React, { useEffect, useState } from "react";
import "./assetViewStyle.css";
import Asset from "../../classes/asset";
import ImageAsset from "../../classes/imageAsset";


type AssetViewProps = {
  assets: Asset[],
}

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const AssetView: React.FC<AssetViewProps> = ({assets}) => {

  const [assetList, setAssetList] = useState<Asset[]>([]);
  const [assetSource, setAssetSource] = useState<string | null>("https://picsum.photos/3440/1440");
  const [showWeb, setShowWeb] = useState<boolean>(false);
  const [displayElement, setDisplayElement] = useState<JSX.Element | null>(null);


  useEffect(() => {
    console.log(assets);
    setAssetList(assets);
  }, [assets]);

  useEffect(() => {
    startDiashow();
  },[assetList]);

  const startDiashow = () => {

    let counter: number = 0;
    setInterval(() => {

      //window.alert(assetList[counter].assetPath);

      if (assetList[counter] instanceof ImageAsset) {
        setShowWeb(false);
        const current: ImageAsset = assetList[counter] as ImageAsset;
        //setAssetSource(`data:image/png;base64,${current.data}`);
        setDisplayElement(renderDisplay(false, `data:image/png;base64,${current.data}`));
      }
      else {
        setShowWeb(true);
        //Show web here!
        setAssetSource(assetList[counter].assetPath);
        setDisplayElement(renderDisplay(true, assetList[counter].assetPath));
        //clearInterval(testinterval);
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
      {assetSource !== null ? displayElement : <></>}
    </div>
  );
}

export default AssetView;
