const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(75, window.innerWidth/window.innerHeight, 0.1, 1000);
const renderer = new THREE.WebGLRenderer({ antialias: true });

renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const light = new THREE.HemisphereLight(0xffffff, 0x444444);
scene.add(light);

const loader = new THREE.GLTFLoader();
loader.load('models/RobotExpressive.glb', function (gltf) {
  const model = gltf.scene;
  model.scale.set(1.5, 1.5, 1.5);
  scene.add(model);
  model.position.y = -1;

  animate();
}, undefined, function (error) {
  console.error(error);
});

camera.position.z = 5;

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}
