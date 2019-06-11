import {create_engine, create_scene} from './babylon';

console.log('hello world!');

const canvas = document.getElementById('canvas') as HTMLCanvasElement;

const engine = create_engine(canvas);
const scene = create_scene(engine);
engine.runRenderLoop(() => scene.render());
window.addEventListener('resize', () => engine.resize());

import shape_test from './shape-test';

shape_test();
