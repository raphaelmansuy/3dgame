import * as THREE from 'https://cdn.skypack.dev/three'

export function createCube() {
	const geometry = new THREE.BoxGeometry();
	const material = new THREE.MeshBasicMaterial( { color: 0xff0000 } );
	const cube = new THREE.Mesh( geometry, material );
	return cube;
}