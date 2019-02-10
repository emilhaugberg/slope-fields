var degreesToRadians = (degrees) => (degrees * Math.PI) / 180;

var WIDTH = window.innerWidth;
var HEIGHT = window.innerHeight;

/* Initialize variables needed to render a scene. */
var renderer = new THREE.WebGLRenderer({antialias:true});
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera(30, WIDTH/HEIGHT);
var axesHelper = new THREE.AxesHelper( 10 );

/* Set up the scene and camera. */
camera.position.set(30, 30, 30);
camera.lookAt(scene.position);
scene.add(camera);
scene.add(axesHelper);

/* Set up the renderer. */
renderer.setSize(WIDTH, HEIGHT);
renderer.setClearColor(0xFFFFFF, 1);
document.body.appendChild(renderer.domElement);


function render() {
  requestAnimationFrame(render);
  renderer.render(scene, camera);
}

render();
