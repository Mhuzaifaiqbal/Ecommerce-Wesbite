declare module 'three/examples/jsm/loaders/MTLLoader' {
  import { Loader, LoadingManager, Material } from 'three';

  export class MaterialCreator {
    materials: { [key: string]: Material };
    preload(): void;
  }

  export default class MTLLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (materials: MaterialCreator) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    setCrossOrigin(value: string): this;
    setMaterialOptions(value: { ignoreZeroRGBs?: boolean }): this;
  }
}


declare module 'three/examples/jsm/loaders/OBJLoader' {
  import { Loader, LoadingManager, Group } from 'three';

  export default class OBJLoader extends Loader {
    constructor(manager?: LoadingManager);
    load(
      url: string,
      onLoad: (object: Group) => void,
      onProgress?: (event: ProgressEvent<EventTarget>) => void,
      onError?: (event: ErrorEvent) => void
    ): void;
    parse(text: string): Group;
  }
}
