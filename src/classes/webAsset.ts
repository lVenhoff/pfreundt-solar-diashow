import Asset from "./asset";

class WebAsset extends Asset {

  private _path: string;

  constructor(path) {
        super();
        this._path = path;
  }

  public get path() {
    return this._path;
  }
}

export default WebAsset;
