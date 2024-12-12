
// eslint-disable-next-line @typescript-eslint/no-var-requires
import fs from "fs/promises";
import ImageAsset from "../classes/imageAsset";
import Asset from "../classes/asset";


class AssetLoader{

  public static async loadAssets() {


    const files:string[] = await fs.readdir("/opt/diashow");


    const assets:Promise<Asset>[] = files.map(async (element: string) => {
      const file: Buffer = await fs.readFile(`/opt/diashow/${element}`);
      console.log(file.toString("base64"));
      return new ImageAsset(element, file.toString("base64"));
    });

    const data: Asset[] = await Promise.all(assets);

    return data;

  }

}

export default AssetLoader;
