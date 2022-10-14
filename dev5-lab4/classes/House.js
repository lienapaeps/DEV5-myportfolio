import * as THREE from 'three'

export default class House {
    constructor() {
        this.group = new THREE.Group();
        this.createHouse();
    }

    createHouse() {
        // load texture
        const loader = new THREE.TextureLoader();

        // floor
        const floorGeometry = new THREE.BoxGeometry( 3, 0.1, 5);
        const floorMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        // load floor texture
        const floorTexture = loader.load( '/assets/textures/floor_texture.jpg' );
        floorMaterial.map = floorTexture;
        
        const floor = new THREE.Mesh( floorGeometry, floorMaterial );
        this.group.add( floor );

        // load brick texture
        const brickTexture = loader.load( '/assets/textures/brick_texture.jpg' );

        // walls
        const wallSmallGeometry = new THREE.BoxGeometry( 3, 2, 0.1);
        const wallMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff } );

        wallMaterial.map = brickTexture;

        const wallBigGeometry = new THREE.BoxGeometry( 5, 2, 0.1);

        const wall1 = new THREE.Mesh( wallSmallGeometry, wallMaterial );
        wall1.position.set(0, 1, 2.45);
        this.group.add( wall1 );

        const wall2 = new THREE.Mesh( wallSmallGeometry, wallMaterial );
        wall2.position.set(0, 1, -2.45);
        this.group.add( wall2 );

        const wall3 = new THREE.Mesh( wallBigGeometry, wallMaterial );
        wall3.position.set(1.45, 1, 0);
        wall3.rotation.y = Math.PI / 2;
        this.group.add( wall3 );

        const wall4 = new THREE.Mesh( wallBigGeometry, wallMaterial );
        wall4.position.set(-1.45, 1, 0);
        wall4.rotation.y = Math.PI / 2;
        this.group.add( wall4 );

        // roof
        const roofGeometry = new THREE.BoxGeometry( 0.1, 2.92, 5.5 );
        const roofMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        // load roof texture
        const roofTexture = loader.load( '/assets/textures/roof_texture.jpg' );
        roofMaterial.map = roofTexture;

        const roof1 = new THREE.Mesh( roofGeometry, roofMaterial );
        roof1.position.set(1, 2.5, 0);
        roof1.rotation.z = Math.PI / 4;
        this.group.add( roof1 );

        const roof2 = new THREE.Mesh( roofGeometry, roofMaterial );
        roof2.position.set(-1, 2.5, 0);
        roof2.rotation.z = -Math.PI / 4;
        this.group.add( roof2 );

        // triangle roof
        const x = 0;
        const y = 0;
        const shape = new THREE.Shape();
        shape.moveTo(x - 1.52, y - 1.6);
        shape.lineTo(x + 1.52, y - 1.6);
        shape.lineTo(x, y);
        const triangleGeometry = new THREE.ShapeGeometry(shape);
        const triangleMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        triangleMaterial.map = brickTexture;

        const triangle1 = new THREE.Mesh( triangleGeometry, triangleMaterial );
        triangle1.position.set(0, 3.5, 2.5);
        this.group.add( triangle1 );

        const triangle2 = new THREE.Mesh( triangleGeometry, triangleMaterial );
        triangle2.position.set(0, 3.5, -2.5);
        triangle2.rotation.y = Math.PI;
        this.group.add( triangle2 );

        // door
        const doorGeometry = new THREE.BoxGeometry( 0.8, 1.5, 0.1);
        const doorMaterial = new THREE.MeshLambertMaterial( { color: 0xffffff } );
        // load door texture
        const doorTexture = loader.load( '/assets/textures/door_texture.jfif' );
        doorMaterial.map = doorTexture;

        const door = new THREE.Mesh( doorGeometry, doorMaterial );
        door.position.set(0, .7, -2.46);
        // load door texture
        this.group.add( door );
    }
}
