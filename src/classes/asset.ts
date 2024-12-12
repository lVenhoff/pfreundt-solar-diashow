abstract class Asset{

  protected abstract path: string;

  public get assetPath() {
    return this.path;
  }

}

export default Asset;
