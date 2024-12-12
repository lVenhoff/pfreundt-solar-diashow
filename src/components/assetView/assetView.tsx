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
  const [imageSource, setImageSource] = useState<string | null>("https://picsum.photos/3440/1440");



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

      const current: ImageAsset = assetList[counter] as ImageAsset;

      setImageSource(`data:image/png;base64,${current.data}`);
      console.log(`Current Image: ${current.data}`);
      counter++;

      if (counter >= assetList.length) {
        counter = 0;
      }

    }, 1000);
  }


  return (
    <div className="asset-view">
      {imageSource !== null ? <img className="asset-view--image" src={imageSource}></img> : <></>}
    </div>
  );
}

export default AssetView;
