import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import vertexShader from './shaders/vertex.glsl?raw';
import fragmentShader from './shaders/fragment.glsl?raw';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


const renderer = new THREE.WebGLRenderer();

renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );
document.body.appendChild( renderer.domElement );

const controls = new OrbitControls(camera,renderer.domElement);



//mesh

const geometry = new THREE.IcosahedronGeometry(1,5);
const material = new THREE.ShaderMaterial({
    vertexShader: vertexShader,
    fragmentShader: fragmentShader,
});

const ico = new THREE.Mesh( geometry, material );


scene.add( ico );






camera.position.z = 5;

function animate() {

  ico.rotation.x += 0.01;
  ico.rotation.y += 0.01;

  controls.update();

  renderer.render( scene, camera );

}
