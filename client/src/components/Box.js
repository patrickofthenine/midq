import React from 'react'

const Box = props => {
	let box = (
		<mesh position={[5,5,-10]}>
			<boxBufferGeometry attach="geometry" args={[1,1,1]}/>
			<meshStandardMaterial attach="material" color={"red"}/>
		</mesh>
	)

	return box
}

export default Box