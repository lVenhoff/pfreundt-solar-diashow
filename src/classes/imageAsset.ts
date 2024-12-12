import Asset from "./asset";

class ImageAsset extends Asset{
  protected path: string;

  private image: string;

  constructor(path:string, image: string) {
    super();
    this.path = path;
    this.image = image;
  }

  public get data() {
    return this.image;
  }

}

export default ImageAsset;
