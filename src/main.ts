import {create_engine, create_scene} from './babylon';

const canvas = document.createElement('canvas');
canvas.classList.add('canvas');
document.body.appendChild(canvas);

const engine = create_engine(canvas);
const scene = create_scene(engine);
engine.runRenderLoop(() => scene.render());
window.addEventListener('resize', () => engine.resize());
