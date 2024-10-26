import React from 'react';
import { useGLTF } from '@react-three/drei';
import { Mesh } from 'three';

export function Circle3D(props: JSX.IntrinsicAttributes & React.ComponentPropsWithoutRef<'mesh'>) {
    const { nodes } = useGLTF('circle.glb'); // ou .gltf
    
    // Acesse a geometria e material com os nomes corretos do seu modelo
    const geometryName = 'Circle'; // substitua pelo nome correto

    // Asserção de tipo para o nó
    const geometry = (nodes[geometryName] as Mesh).geometry;

    return (
        <mesh {...props} geometry={geometry} position={[0,0.1,0]} rotation={[-Math.PI / 1,0,0]}>
            <meshBasicMaterial color="#fcc9c9"/>
        </mesh>
    );
}

useGLTF.preload('circle.glb'); // Pré-carregamento do modelo
