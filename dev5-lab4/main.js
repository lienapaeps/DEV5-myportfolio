import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import House from './classes/House.js'

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setClearColor( 0xEBE5CE, 1);
document.body.appendChild( renderer.domElement );

// load texture
const loader = new THREE.TextureLoader();

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// add directional light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( -5, 3, -5 );
scene.add( directionalLight );

// add directional light helper
const directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 2 );
// scene.add( directionalLightHelper );

// add house
const house = new House();
scene.add( house.group );

// add sand
const sandGeometry = new THREE.PlaneGeometry( 20, 20 );
const sandMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff } );
 // load sand texture
 const sandTexture = loader.load( '/assets/textures/sand_texture.jpg' );
 sandMaterial.map = sandTexture;

const sand = new THREE.Mesh( sandGeometry, sandMaterial );
sand.rotation.x = -Math.PI / 2;
sand.position.y = -0.1;
scene.add( sand );

camera.position.x = -4;
camera.position.z = 8;
camera.position.y = 2;

// add background
const skyTexture = loader.load('/assets/textures/sky.jpg');
const sphereGeometry = new THREE.SphereGeometry( 100, 32, 32 );
const sphereMaterial = new THREE.MeshLambertMaterial( {color: 0xffffff} );
sphereMaterial.map = skyTexture;
sphereMaterial.side = THREE.BackSide;
const sphere = new THREE.Mesh( sphereGeometry, sphereMaterial );
scene.add( sphere );

// import mcqueen gltf
let mcqueen;
let cone;
let mater;
let zeppelin;

const gltfLoader = new GLTFLoader();
gltfLoader.load('/assets/models/lighting_mcqueen/scene.gltf', (gltf) => {
    mcqueen = gltf.scene;
    mcqueen.position.set(-5, .5, 0);
    mcqueen.scale.set(0.5, 0.5, 0.5);
    mcqueen.rotation.x = Math.PI / 3;
    scene.add(gltf.scene);
});

gltfLoader.load('/assets/models/traffic_cone/scene.gltf', (gltf) => {
    cone = gltf.scene;
    cone.scale.set(0.03, 0.03, 0.03);
    cone.position.set(-4, 0, -1);
    scene.add(gltf.scene);
});

gltfLoader.load('/assets/models/mater/scene.gltf', (gltf) => {
    mater = gltf.scene;
    mater.scale.set(0.4, 0.4, 0.4);
    mater.position.set(-5, 0, -5);
    mater.rotation.y = Math.PI;
    scene.add(gltf.scene);
});

gltfLoader.load('/assets/models/zeppelin_aircraft/scene.gltf', (gltf) => {
    zeppelin = gltf.scene;
    zeppelin.scale.set(6, 6, 6);
    zeppelin.position.set(0, 6, 0);
    scene.add(gltf.scene);
});

let cactus;
let cactus2;

const addCactus = (x, z) => {
    gltfLoader.load('/assets/models/cactus/scene.gltf', (gltf) => {
        cactus = gltf.scene;
        cactus.scale.set(1.5, 1.5, 1.5);
        cactus.position.set(x, 0, z);
        scene.add(gltf.scene);
    });
}

const addCactus2 = (x, z) => {
    gltfLoader.load('/assets/models/cactus_2/scene.gltf', (gltf) => {
        cactus2 = gltf.scene;
        cactus2.position.set(x, 0, z);
        scene.add(gltf.scene);
    });
}

// add random cactussen
for(let i = 0; i < 15; i++) {
    // random sign
    let sign = Math.random() < 0.5 ? -1 : 1;
    let x = Math.random() * 10 * sign;
    sign = Math.random() < 0.5 ? -1 : 1;
    let y = Math.random() * 10 * sign;
    sign = Math.random() < 0.5 ? -1 : 1;
    let z = Math.random() * 10 * sign;
    sign = Math.random() < 0.5 ? -1 : 1;
  
    addCactus(x, z);
}

// add random cactussen
for(let i = 0; i < 15; i++) {
    // random sign
    let sign = Math.random() < 0.5 ? -1 : 1;
    let x = Math.random() * 10 * sign;
    sign = Math.random() < 0.5 ? -1 : 1;
    let y = Math.random() * 10 * sign;
    sign = Math.random() < 0.5 ? -1 : 1;
    let z = Math.random() * 10 * sign;
    sign = Math.random() < 0.5 ? -1 : 1;
  
    addCactus2(x, z);
}

function animate() {
    requestAnimationFrame( animate );

    // zeppelin.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
