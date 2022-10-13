import * as THREE from 'three'

export default class House {
    constructor() {
        this.group = new THREE.Group();
        this.createHouse();
    }

    createHouse() {
        // add house
        const floorGeometry = new THREE.BoxGeometry( 3, 0.1, 5);
        const floorMaterial = new THREE.MeshLambertMaterial( { color: 0xff00ff } );
        const floor = new THREE.Mesh( floorGeometry, floorMaterial );
        this.group.add( floor );

        const wallSmallGeometry = new THREE.BoxGeometry( 3, 2, 0.1);
        const wallMaterial = new THREE.MeshLambertMaterial( { color: 0xff0000 } );

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

        // add roof
        const roofGeometry = new THREE.BoxGeometry( 0.1, 2.92, 5.5 );
        const roofMaterial = new THREE.MeshLambertMaterial( { color: 0x0000ff } );
        const roof1 = new THREE.Mesh( roofGeometry, roofMaterial );
        roof1.position.set(1, 2.5, 0);
        roof1.rotation.z = Math.PI / 4;
        this.group.add( roof1 );

        const roof2 = new THREE.Mesh( roofGeometry, roofMaterial );
        roof2.position.set(-1, 2.5, 0);
        roof2.rotation.z = -Math.PI / 4;
        this.group.add( roof2 );

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
        this.group.add( triangle1 );

        const triangle2 = new THREE.Mesh( triangleGeometry, triangleMaterial );
        triangle2.position.set(0, 3.5, -2.5);
        triangle2.rotation.y = Math.PI;
        this.group.add( triangle2 );
    }
}
