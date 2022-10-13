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

// add orbit controls
const controls = new OrbitControls(camera, renderer.domElement);

// add directional light
const directionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
directionalLight.position.set( -5, 3, -5 );
scene.add( directionalLight );

// add directional light helper
const directionalLightHelper = new THREE.DirectionalLightHelper( directionalLight, 2 );
scene.add( directionalLightHelper );

// add house
const house = new House();
scene.add( house.group );

// add grass
const grassGeometry = new THREE.PlaneGeometry( 20, 20 );
const grassMaterial = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const grass = new THREE.Mesh( grassGeometry, grassMaterial );
grass.rotation.x = -Math.PI / 2;
grass.position.y = -0.1;
scene.add( grass );

camera.position.x = -4;
camera.position.z = 8;
camera.position.y = 2;

function animate() {
    requestAnimationFrame( animate );

    // house.rotation.x += 0.01;
    // house.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
