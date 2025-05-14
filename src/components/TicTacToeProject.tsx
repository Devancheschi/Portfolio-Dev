import React, { useState } from 'react';
import TicTacToeGame from './TicTacToeGame';
import { Code, FileCode, PlayCircle, X } from 'lucide-react';

const TicTacToeProject: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'game' | 'about' | 'code'>('game');
  const [modalOpen, setModalOpen] = useState(false);

  // Project information
  const projectInfo = {
    title: 'Jogo da Velha',
    description: 'Um jogo da velha interativo desenvolvido com HTML, CSS e JavaScript, permitindo jogar contra outro jogador ou contra a máquina em diferentes níveis de dificuldade.',
    features: [
      'Modo para dois jogadores',
      'Modo contra a máquina com três níveis de dificuldade',
      'Escolha de símbolo (X ou O)',
      'Seleção de quem começa o jogo',
      'Interface responsiva e amigável'
    ],
    technologies: [
      { name: 'HTML', description: 'Estruturação do tabuleiro e elementos da interface' },
      { name: 'CSS', description: 'Estilização e layout visual do jogo' },
      { name: 'JavaScript', description: 'Lógica do jogo, incluindo verificação de vitória e IA da máquina' },
      { name: 'React', description: 'Versão atual reimplementada em React com TypeScript' }
    ]
  };

  return (
    <>
      <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg overflow-hidden">
        <div className="flex border-b border-gray-800">
          <button
            className={`flex items-center px-4 py-3 ${
              activeTab === 'game' 
                ? 'bg-purple-600/20 text-purple-400 border-b-2 border-purple-500' 
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('game')}
          >
            <PlayCircle size={18} className="mr-2" />
            Jogo
          </button>
          <button
            className={`flex items-center px-4 py-3 ${
              activeTab === 'about' 
                ? 'bg-purple-600/20 text-purple-400 border-b-2 border-purple-500' 
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('about')}
          >
            <FileCode size={18} className="mr-2" />
            Sobre
          </button>
          <button
            className={`flex items-center px-4 py-3 ${
              activeTab === 'code' 
                ? 'bg-purple-600/20 text-purple-400 border-b-2 border-purple-500' 
                : 'text-gray-400 hover:bg-gray-800/50 hover:text-gray-300'
            }`}
            onClick={() => setActiveTab('code')}
          >
            <Code size={18} className="mr-2" />
            Código
          </button>
        </div>

        <div className="p-6">
          {activeTab === 'game' && (
            <div className="flex flex-col items-center">
              <TicTacToeGame />
            </div>
          )}

          {activeTab === 'about' && (
            <div className="text-gray-300">
              <h3 className="text-xl font-semibold text-white mb-4">{projectInfo.title}</h3>
              <p className="mb-6">{projectInfo.description}</p>
              
              <h4 className="text-lg font-medium text-white mb-2">Funcionalidades:</h4>
              <ul className="list-disc pl-5 mb-6 space-y-1">
                {projectInfo.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
              
              <h4 className="text-lg font-medium text-white mb-2">Tecnologias Utilizadas:</h4>
              <div className="space-y-3">
                {projectInfo.technologies.map((tech, index) => (
                  <div key={index} className="bg-gray-800/50 p-3 rounded-lg">
                    <h5 className="font-medium text-white">{tech.name}</h5>
                    <p className="text-gray-400 text-sm">{tech.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'code' && (
            <div className="text-gray-300">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-xl font-semibold text-white">Código-fonte</h3>
                <button 
                  onClick={() => setModalOpen(true)}
                  className="px-4 py-2 bg-purple-600/20 text-purple-400 rounded-md hover:bg-purple-600/30 transition-colors"
                >
                  Ver código completo
                </button>
              </div>
              
              <div className="bg-gray-800 rounded-lg p-4 overflow-x-auto">
                <pre className="text-gray-300 text-sm">
                  <code>
{`// Exemplo simplificado do código do Jogo da Velha
function checkWinner(board) {
  const winPatterns = [
    [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
    [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
    [0, 4, 8], [2, 4, 6] // diagonais
  ];
  
  for (let pattern of winPatterns) {
    const [a, b, c] = pattern;
    if (board[a] && board[a] === board[b] && board[a] === board[c]) {
      return board[a];
    }
  }
  
  return null;
}

function aiMove(board, aiSymbol, playerSymbol) {
  // Verificar se há jogada vencedora para a IA
  let move = findWinningMove(board, aiSymbol);
  
  // Se não houver, bloquear jogada vencedora do jogador
  if (move === -1) move = findWinningMove(board, playerSymbol);
  
  // Se não houver jogada estratégica, escolher aleatório
  if (move === -1) {
    const emptyCells = board
      .map((cell, index) => cell === null ? index : null)
      .filter(index => index !== null);
    
    move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
  }
  
  return move;
}`}
                  </code>
                </pre>
              </div>
              
              <p className="mt-4 text-gray-400">
                Este é apenas um trecho do código. O jogo completo inclui lógica para diferentes níveis de dificuldade da IA, 
                sistema de turnos, e gerenciamento do estado do jogo.
              </p>
            </div>
          )}
        </div>
      </div>

      {/* Full Code Modal */}
      {modalOpen && (
        <div className="fixed inset-0 bg-black/80 backdrop-blur-sm flex items-center justify-center z-50 p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-lg w-full max-w-4xl max-h-[80vh] overflow-hidden">
            <div className="flex justify-between items-center border-b border-gray-800 p-4">
              <h3 className="text-xl font-semibold text-white">Código-fonte do Jogo da Velha</h3>
              <button 
                onClick={() => setModalOpen(false)}
                className="text-gray-400 hover:text-white"
              >
                <X size={24} />
              </button>
            </div>
            
            <div className="p-4 overflow-y-auto max-h-[calc(80vh-4rem)]">
              <pre className="text-gray-300 text-sm whitespace-pre-wrap">
                <code>
{`<!DOCTYPE html>
<html lang="pt-br">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Jogo da Velha</title>
    <style>
        body {
            font-family: Arial, sans-serif;
            display: flex;
            justify-content: center;
            align-items: center;
            height: 100vh;
            margin: 0;
            background-color: #f4f4f4;
        }
        .container {
            text-align: center;
        }
        .board {
            display: grid;
            grid-template-columns: repeat(3, 100px);
            grid-gap: 5px;
            justify-content: center;
            margin-bottom: 20px;
        }
        .cell {
            width: 100px;
            height: 100px;
            background-color: #fff;
            border: 2px solid #000;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 2em;
            cursor: pointer;
        }
        .button {
            margin-top: 10px;
            padding: 10px 20px;
            font-size: 1.1em;
            cursor: pointer;
            border: 1px solid #000;
            background-color: #28a745;
            color: white;
            border-radius: 5px;
        }
        .button:hover {
            background-color: #218838;
        }
        .message {
            font-size: 1.5em;
            margin-top: 20px;
        }
        .form {
            margin-top: 20px;
        }
        select, input {
            padding: 5px;
            margin: 5px;
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>Jogo da Velha</h1>
        
        <!-- Menu para escolher as configurações -->
        <div class="form">
            <label for="symbol">Escolha seu símbolo: </label>
            <select id="symbol">
                <option value="X">X</option>
                <option value="O">O</option>
            </select><br>

            <label for="mode">Modo de Jogo: </label>
            <select id="mode">
                <option value="player">Jogar contra outro jogador</option>
                <option value="ai">Jogar contra a máquina</option>
            </select><br>

            <label for="first">Quem começa: </label>
            <select id="first">
                <option value="player">Você</option>
                <option value="ai">Máquina</option>
            </select><br>

            <label for="difficulty">Dificuldade: </label>
            <select id="difficulty">
                <option value="easy">Fácil</option>
                <option value="medium">Médio</option>
                <option value="hard">Difícil</option>
            </select><br>
            <button class="button" onclick="startGame()">Iniciar Jogo</button>
        </div>

        <!-- Tabuleiro do jogo -->
        <div class="board" id="board"></div>
        
        <!-- Mensagem de vitória ou empate -->
        <div class="message" id="message"></div>
    </div>

    <script>
        let board = Array(9).fill(null);
        let currentPlayer = 'X';
        let gameMode = 'player';
        let gameDifficulty = 'easy';
        let gameStarted = false;
        let playerSymbol = 'X';
        let aiSymbol = 'O';
        let aiIntelligentMoveChance = 0.1;  // 10% chance por padrão

        const boardElement = document.getElementById('board');
        const messageElement = document.getElementById('message');

        // Função para inicializar o jogo
        function startGame() {
            playerSymbol = document.getElementById('symbol').value;
            aiSymbol = (playerSymbol === 'X') ? 'O' : 'X';
            gameMode = document.getElementById('mode').value;
            const firstPlayer = document.getElementById('first').value;
            gameDifficulty = document.getElementById('difficulty').value;
            aiIntelligentMoveChance = getAiIntelligentMoveChance(gameDifficulty);
            gameStarted = true;

            board = Array(9).fill(null);
            currentPlayer = (firstPlayer === 'player') ? playerSymbol : aiSymbol;
            messageElement.textContent = '';
            renderBoard();
        }

        // Função para definir a chance da IA jogar de forma inteligente
        function getAiIntelligentMoveChance(difficulty) {
            if (difficulty === 'easy') return 0.1;  // 10% de chance de ser inteligente
            if (difficulty === 'medium') return 0.5;  // 50% de chance de ser inteligente
            return 0.95;  // 95% de chance de ser inteligente
        }

        // Função para renderizar o tabuleiro
        function renderBoard() {
            boardElement.innerHTML = '';
            board.forEach((cell, index) => {
                const cellElement = document.createElement('div');
                cellElement.classList.add('cell');
                cellElement.textContent = cell;
                cellElement.addEventListener('click', () => handleCellClick(index));
                boardElement.appendChild(cellElement);
            });
        }

        // Função para lidar com a ação de clicar nas células
        function handleCellClick(index) {
            if (board[index] || !gameStarted) return;
            board[index] = currentPlayer;
            renderBoard();
            if (checkWinner()) {
                messageElement.textContent = \`\${currentPlayer} ganhou!\`;
                gameStarted = false;
                return;
            }
            if (board.every(cell => cell)) {
                messageElement.textContent = 'Empate!';
                gameStarted = false;
                return;
            }
            currentPlayer = (currentPlayer === 'X') ? 'O' : 'X';
            if (gameMode === 'ai' && currentPlayer === aiSymbol) {
                aiMove();
            }
        }

        // Função para a máquina jogar
        function aiMove() {
            // Chance de a IA fazer uma jogada inteligente
            if (Math.random() < aiIntelligentMoveChance) {
                intelligentAiMove();
            } else {
                randomAiMove();
            }
        }

        // IA com jogada inteligente (tentando bloquear ou vencer)
        function intelligentAiMove() {
            let move = findWinningMove(aiSymbol);
            if (move === -1) move = findWinningMove(playerSymbol);
            if (move === -1) move = mediumAI(); // Se não encontrar, tenta jogar médio
            board[move] = aiSymbol;
            renderBoard();
            if (checkWinner()) {
                messageElement.textContent = \`Máquina (\${aiSymbol}) ganhou!\`;
                gameStarted = false;
                return;
            }
            currentPlayer = playerSymbol;
        }

        // IA jogando aleatoriamente
        function randomAiMove() {
            const emptyCells = board.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
            const move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
            board[move] = aiSymbol;
            renderBoard();
            if (checkWinner()) {
                messageElement.textContent = \`Máquina (\${aiSymbol}) ganhou!\`;
                gameStarted = false;
                return;
            }
            currentPlayer = playerSymbol;
        }

        // IA média: tenta vencer ou bloquear o jogador
        function mediumAI() {
            let move = findWinningMove(aiSymbol);
            if (move === -1) move = findWinningMove(playerSymbol);
            if (move === -1) move = randomAiMove();  // Se não conseguir vencer ou bloquear
            return move;
        }

        // Verifica se há um vencedor
        function checkWinner() {
            const winPatterns = [
                [0, 1, 2], [3, 4, 5], [6, 7, 8], // linhas
                [0, 3, 6], [1, 4, 7], [2, 5, 8], // colunas
                [0, 4, 8], [2, 4, 6] // diagonais
            ];
            for (let pattern of winPatterns) {
                const [a, b, c] = pattern;
                if (board[a] && board[a] === board[b] && board[a] === board[c]) {
                    return true;
                }
            }
            return false;
        }

        // Função para encontrar um movimento vencedor
        function findWinningMove(symbol) {
            const availableCells = board.map((cell, index) => cell === null ? index : null).filter(index => index !== null);
            for (let i = 0; i < availableCells.length; i++) {
                const index = availableCells[i];
                board[index] = symbol;
                if (checkWinner()) {
                    board[index] = null;
                    return index;
                }
                board[index] = null;
            }
            return -1;
        }
    </script>
</body>
</html>`}
                </code>
              </pre>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TicTacToeProject;