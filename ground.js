import * as THREE from 'https://cdn.skypack.dev/three'

export function createGround() {
	const geometry = new THREE.PlaneGeometry( 100, 100 );
	const material = new THREE.MeshBasicMaterial( {color: 0xffff00, side: THREE.DoubleSide} );
	const plane = new THREE.Mesh( geometry, material );
	plane.rotation.x = -Math.PI / 3;
	plane.s
	return plane;
}