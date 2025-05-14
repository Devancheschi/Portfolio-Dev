import React, { useState, useEffect } from 'react';

const TicTacToeGame: React.FC = () => {
  const [board, setBoard] = useState<(string | null)[]>(Array(9).fill(null));
  const [currentPlayer, setCurrentPlayer] = useState<'X' | 'O'>('X');
  const [gameMode, setGameMode] = useState<'player' | 'ai'>('player');
  const [gameDifficulty, setGameDifficulty] = useState<'easy' | 'medium' | 'hard'>('easy');
  const [gameStarted, setGameStarted] = useState<boolean>(false);
  const [playerSymbol, setPlayerSymbol] = useState<'X' | 'O'>('X');
  const [aiSymbol, setAiSymbol] = useState<'O' | 'X'>('O');
  const [winner, setWinner] = useState<string | null>(null);
  const [aiIntelligentMoveChance, setAiIntelligentMoveChance] = useState<number>(0.1);
  const [firstPlayer, setFirstPlayer] = useState<'player' | 'ai'>('player');

  // Reset the game
  const resetGame = () => {
    setBoard(Array(9).fill(null));
    setWinner(null);
    setCurrentPlayer(firstPlayer === 'player' ? playerSymbol : aiSymbol);
    setGameStarted(true);
  };

  // Start the game with selected options
  const startGame = () => {
    resetGame();
  };

  // Update AI intelligent move chance based on difficulty
  useEffect(() => {
    switch (gameDifficulty) {
      case 'easy':
        setAiIntelligentMoveChance(0.1); // 10% chance
        break;
      case 'medium':
        setAiIntelligentMoveChance(0.5); // 50% chance
        break;
      case 'hard':
        setAiIntelligentMoveChance(0.95); // 95% chance
        break;
    }
  }, [gameDifficulty]);

  // Effect for AI's turn
  useEffect(() => {
    if (gameStarted && gameMode === 'ai' && currentPlayer === aiSymbol && !winner) {
      const timer = setTimeout(() => {
        aiMove();
      }, 500);
      
      return () => clearTimeout(timer);
    }
  }, [currentPlayer, gameStarted, gameMode, aiSymbol, winner]);
  
  // Handle player's move
  const handleCellClick = (index: number) => {
    if (board[index] || !gameStarted || winner) return;
    
    const newBoard = [...board];
    newBoard[index] = currentPlayer;
    setBoard(newBoard);
    
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }
    
    if (newBoard.every(cell => cell !== null)) {
      setWinner('draw');
      return;
    }
    
    setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
  };
  
  // AI move logic
  const aiMove = () => {
    if (Math.random() < aiIntelligentMoveChance) {
      intelligentAiMove();
    } else {
      randomAiMove();
    }
  };
  
  // AI makes a random move
  const randomAiMove = () => {
    const emptyCells = board.map((cell, index) => cell === null ? index : null).filter(index => index !== null) as number[];
    if (emptyCells.length === 0) return;
    
    const move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const newBoard = [...board];
    newBoard[move] = aiSymbol;
    setBoard(newBoard);
    
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }
    
    if (newBoard.every(cell => cell !== null)) {
      setWinner('draw');
      return;
    }
    
    setCurrentPlayer(playerSymbol);
  };
  
  // AI makes an intelligent move
  const intelligentAiMove = () => {
    let move = findWinningMove(aiSymbol);
    if (move === -1) move = findWinningMove(playerSymbol);
    if (move === -1) {
      // If center is empty, take it
      if (board[4] === null) move = 4;
      else {
        // Take a random empty cell
        const emptyCells = board.map((cell, index) => cell === null ? index : null).filter(index => index !== null) as number[];
        move = emptyCells[Math.floor(Math.random() * emptyCells.length)];
      }
    }
    
    const newBoard = [...board];
    newBoard[move] = aiSymbol;
    setBoard(newBoard);
    
    const gameWinner = checkWinner(newBoard);
    if (gameWinner) {
      setWinner(gameWinner);
      return;
    }
    
    if (newBoard.every(cell => cell !== null)) {
      setWinner('draw');
      return;
    }
    
    setCurrentPlayer(playerSymbol);
  };
  
  // Find a winning move for the given symbol
  const findWinningMove = (symbol: string): number => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (let i = 0; i < 9; i++) {
      if (board[i] === null) {
        const newBoard = [...board];
        newBoard[i] = symbol;
        
        for (let pattern of winPatterns) {
          const [a, b, c] = pattern;
          if (newBoard[a] && newBoard[a] === newBoard[b] && newBoard[a] === newBoard[c]) {
            return i;
          }
        }
      }
    }
    
    return -1;
  };
  
  // Check if there's a winner
  const checkWinner = (currentBoard: (string | null)[]) => {
    const winPatterns = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];
    
    for (let pattern of winPatterns) {
      const [a, b, c] = pattern;
      if (currentBoard[a] && currentBoard[a] === currentBoard[b] && currentBoard[a] === currentBoard[c]) {
        return currentBoard[a];
      }
    }
    
    return null;
  };

  // Change symbol handler
  const handleSymbolChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    const newPlayerSymbol = e.target.value as 'X' | 'O';
    setPlayerSymbol(newPlayerSymbol);
    setAiSymbol(newPlayerSymbol === 'X' ? 'O' : 'X');
  };

  // Change first player handler
  const handleFirstPlayerChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setFirstPlayer(e.target.value as 'player' | 'ai');
  };

  return (
    <div className="w-full max-w-md mx-auto bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-lg p-6">
      <h2 className="text-2xl font-bold text-white mb-6 text-center">Jogo da Velha</h2>
      
      {/* Game settings */}
      <div className="mb-6 space-y-4">
        <div>
          <label htmlFor="symbol" className="block text-sm font-medium text-gray-400 mb-2">
            Escolha seu símbolo:
          </label>
          <select
            id="symbol"
            value={playerSymbol}
            onChange={handleSymbolChange}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="X">X</option>
            <option value="O">O</option>
          </select>
        </div>
        
        <div>
          <label htmlFor="mode" className="block text-sm font-medium text-gray-400 mb-2">
            Modo de Jogo:
          </label>
          <select
            id="mode"
            value={gameMode}
            onChange={(e) => setGameMode(e.target.value as 'player' | 'ai')}
            className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
          >
            <option value="player">Jogar contra outro jogador</option>
            <option value="ai">Jogar contra a máquina</option>
          </select>
        </div>
        
        {gameMode === 'ai' && (
          <>
            <div>
              <label htmlFor="first" className="block text-sm font-medium text-gray-400 mb-2">
                Quem começa:
              </label>
              <select
                id="first"
                value={firstPlayer}
                onChange={handleFirstPlayerChange}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="player">Você</option>
                <option value="ai">Máquina</option>
              </select>
            </div>
            
            <div>
              <label htmlFor="difficulty" className="block text-sm font-medium text-gray-400 mb-2">
                Dificuldade:
              </label>
              <select
                id="difficulty"
                value={gameDifficulty}
                onChange={(e) => setGameDifficulty(e.target.value as 'easy' | 'medium' | 'hard')}
                className="w-full px-3 py-2 bg-gray-800 border border-gray-700 rounded-lg text-white focus:outline-none focus:ring-2 focus:ring-purple-500"
              >
                <option value="easy">Fácil</option>
                <option value="medium">Médio</option>
                <option value="hard">Difícil</option>
              </select>
            </div>
          </>
        )}
        
        <button
          onClick={startGame}
          className="w-full px-4 py-2 bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          Iniciar Jogo
        </button>
      </div>
      
      {/* Game board */}
      <div className="grid grid-cols-3 gap-2 mb-4">
        {board.map((cell, index) => (
          <div
            key={index}
            onClick={() => handleCellClick(index)}
            className={`
              flex items-center justify-center h-20 bg-gray-800 border border-gray-700 rounded-lg text-2xl font-bold cursor-pointer
              ${cell ? 'cursor-not-allowed' : 'hover:bg-gray-700'}
              ${cell === 'X' ? 'text-blue-400' : cell === 'O' ? 'text-red-400' : 'text-transparent'}
            `}
          >
            {cell}
          </div>
        ))}
      </div>
      
      {/* Game status */}
      <div className="text-center">
        {winner ? (
          <div className="text-xl font-medium">
            {winner === 'draw' ? (
              <span className="text-yellow-400">Empate!</span>
            ) : (
              <span className={winner === playerSymbol ? 'text-green-400' : 'text-red-400'}>
                {winner === playerSymbol ? 'Você ganhou!' : 'Máquina ganhou!'}
              </span>
            )}
          </div>
        ) : gameStarted ? (
          <div className="text-gray-300">
            Vez de: <span className={currentPlayer === playerSymbol ? 'text-blue-400 font-medium' : 'text-red-400 font-medium'}>
              {currentPlayer === playerSymbol ? 'Você' : 'Máquina'}
            </span>
          </div>
        ) : (
          <div className="text-gray-400">Selecione as opções e inicie o jogo</div>
        )}
      </div>
    </div>
  );
};

export default TicTacToeGame;