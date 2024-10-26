export default function PlayerX() {


    return (
        <>
            <mesh position={[0, -0.3, 0]} rotation={[0, -Math.PI / 4, 0]}>
                <boxGeometry attach="geometry" args={[4, 0.8, 0.8]} />
                <meshBasicMaterial color="lightgreen" />
            </mesh>
            <mesh position={[0, -0.3, 0]} rotation={[0, -Math.PI / -4, 0]}>
                <boxGeometry attach="geometry" args={[4, 0.8, 0.8]} />
                <meshBasicMaterial color="lightgreen" />
            </mesh>

            
        </>
    );
}
