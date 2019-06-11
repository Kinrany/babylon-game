import Babylon from 'babylonjs';
const { FreeCamera, Vector3, HemisphericLight, Mesh} = Babylon;

export function create_engine(canvas: HTMLCanvasElement): Babylon.Engine {
  return new Babylon.Engine(canvas, true);
}

export function create_scene(engine: Babylon.Engine): Babylon.Scene {
  const canvas = engine.getRenderingCanvas();
  if (!canvas) {
    throw new Error('Engine should have an associated canvas');
  }

  const scene = new Babylon.Scene(engine);
  const camera = new FreeCamera('camera1', new Vector3(0, 5, -10), scene);
  camera.setTarget(Vector3.Zero());
  camera.attachControl(canvas, false);
  const _light = new HemisphericLight('light1', new Vector3(0, 1, 0), scene);
  const sphere = Mesh.CreateSphere('sphere1', 16, 2, scene, false, Mesh.FRONTSIDE);
  sphere.position.y = 1;
  const _ground = Mesh.CreateGround('ground1', 6, 6, 2, scene, false);
  return scene;
}
