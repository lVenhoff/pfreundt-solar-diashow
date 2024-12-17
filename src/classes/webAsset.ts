import Asset from "./asset";

class WebAsset extends Asset {

  protected path: string;

  constructor(path: string) {
        super();
        this.path = path;
  }

}

export default WebAsset;
