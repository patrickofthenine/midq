import React, {useRef} from 'react';
import Landscape from './Landscape';
import { useFrame } from 'react-three-fiber';

const Planet = props => {
	let mesh = useRef()
	let ground = (
		<mesh ref={mesh} position={[5,-250,-250]}>
			<planeGeometry attach="geometry" args={[500, 500, 50]}/>
			<meshStandardMaterial attach="material" color={'darkgreen'}/>
		</mesh>
	)

	useFrame( ()=>{ mesh.current.rotation.x = mesh.current.rotation.y += 0.01 })
	return (
		<group>
			{ground}
		</group>
	)
}

export default Planet;