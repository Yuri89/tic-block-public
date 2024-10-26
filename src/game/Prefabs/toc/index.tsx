import { useState } from "react";
import PlayerX from "../Players/X";
import PlayerO from "../Players/O";

export default function Toc() {
    const [vez, setVez] = useState<'x' | 'o'>('x'); // Controla de quem é a vez
    const [posicao, setPosicao] = useState<(null | 'x' | 'o')[][]>([
        [null, null, null],
        [null, null, null],
        [null, null, null],
    ]); // Matriz de posições inicialmente vazia

    // Função para alternar o jogador atual
    const trocarJogador = (linhaIdx: number, colunaIdx: number) => {
        if (posicao[linhaIdx][colunaIdx] === null) { // Só permite alterar se a posição estiver vazia
            const novaPosicao = [...posicao];
            novaPosicao[linhaIdx][colunaIdx] = vez; // Marca a posição com o jogador atual
            setPosicao(novaPosicao); // Atualiza a matriz de posições
            setVez(vez === 'x' ? 'o' : 'x'); // Alterna a vez entre 'x' e 'o'
        }
    };

    // Função para renderizar o jogador X ou O
    const renderPlayer = (jogador: null | 'x' | 'o') => {
        if (jogador === 'x') return <PlayerX />;
        if (jogador === 'o') return <PlayerO />;
            return(                 
            <mesh>
            <boxGeometry args={[4,0,4]}/>
            <meshBasicMaterial color="#17f0de" transparent={true} opacity={0} />            </mesh>); 
    };

    return (
        <>
            {/* Mapeando cada célula do tabuleiro para as posições corretas */}
            <group position={[-5, 0, 0]} onClick={() => {trocarJogador(0, 0) ,console.log('clicked')}}>
                {renderPlayer(posicao[0][0])}
            </group>

            <group position={[-5, 0, 5]} onClick={() => trocarJogador(0, 1)}>
                {renderPlayer(posicao[0][1])}
            </group>

            <group position={[-5, 0, -5]} onClick={() => trocarJogador(0, 2)}>
                {renderPlayer(posicao[0][2])}
            </group>

            <group position={[0, 0, 0]} onClick={() => trocarJogador(1, 0)}>
                {renderPlayer(posicao[1][0])}
            </group>

            <group position={[0, 0, 5]} onClick={() => trocarJogador(1, 1)}>
                {renderPlayer(posicao[1][1])}
            </group>

            <group position={[0, 0, -5]} onClick={() => trocarJogador(1, 2)}>
                {renderPlayer(posicao[1][2])}
            </group>

            <group position={[5, 0, 0]} onClick={() => trocarJogador(2, 0)}>
                {renderPlayer(posicao[2][0])}
            </group>

            <group position={[5, 0, 5]} onClick={() => trocarJogador(2, 1)}>
                {renderPlayer(posicao[2][1])}
            </group>

            <group position={[5, 0, -5]} onClick={() => trocarJogador(2, 2)}>
                {renderPlayer(posicao[2][2])}
            </group>
        </>
    );
}
