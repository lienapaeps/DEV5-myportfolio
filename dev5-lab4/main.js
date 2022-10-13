import './style.css'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'

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
const floorGeometry = new THREE.BoxGeometry( 3, 0.1, 5);
const floorMaterial = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
const floor = new THREE.Mesh( floorGeometry, floorMaterial );
scene.add( floor );

const wallSmallGeometry = new THREE.BoxGeometry( 3, 2, 0.1);
const wallMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } );

const wallBigGeometry = new THREE.BoxGeometry( 5, 2, 0.1);

const wall1 = new THREE.Mesh( wallSmallGeometry, wallMaterial );
wall1.position.set(0, 1, 2.45);
scene.add( wall1 );

const wall2 = new THREE.Mesh( wallSmallGeometry, wallMaterial );
wall2.position.set(0, 1, -2.45);
scene.add( wall2 );

const wall3 = new THREE.Mesh( wallBigGeometry, wallMaterial );
wall3.position.set(1.45, 1, 0);
wall3.rotation.y = Math.PI / 2;
scene.add( wall3 );

const wall4 = new THREE.Mesh( wallBigGeometry, wallMaterial );
wall4.position.set(-1.45, 1, 0);
wall4.rotation.y = Math.PI / 2;
scene.add( wall4 );

// add roof
const roofGeometry = new THREE.BoxGeometry( 0.1, 2.92, 5.5 );
const roofMaterial = new THREE.MeshLambertMaterial( { color: 0x00ff00 } );
const roof1 = new THREE.Mesh( roofGeometry, roofMaterial );
roof1.position.set(1, 2.5, 0);
roof1.rotation.z = Math.PI / 4;
scene.add( roof1 );

const roof2 = new THREE.Mesh( roofGeometry, roofMaterial );
roof2.position.set(-1, 2.5, 0);
roof2.rotation.z = -Math.PI / 4;
scene.add( roof2 );

const x = 0;
const y = 0;
const shape = new THREE.Shape();
shape.moveTo(x - 1.52, y - 1.6);
shape.lineTo(x + 1.52, y - 1.6);
shape.lineTo(x, y);
const triangleGeometry = new THREE.ShapeGeometry(shape);
const triangleMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } );
const triangle1 = new THREE.Mesh( triangleGeometry, triangleMaterial );
triangle1.position.set(0, 3.5, 2.5);
scene.add( triangle1 );

const triangle2 = new THREE.Mesh( triangleGeometry, triangleMaterial );
triangle2.position.set(0, 3.5, -2.5);
triangle2.rotation.y = Math.PI;
scene.add( triangle2 );

camera.position.z = 5;

function animate() {
    requestAnimationFrame( animate );

    // house.rotation.x += 0.01;
    // house.rotation.y += 0.01;

    renderer.render( scene, camera );
};

animate();
