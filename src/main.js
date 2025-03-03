import './style.css'
import { io } from 'socket.io-client';
const socket = io( 'http://localhost:3000');





export class Game {
  constructor(socket) {
    this.socket = socket;
    this.joinButton = document.querySelector('#joinButton');
    this.playerNameInput = document.querySelector('#playerNameInput');
    this.messageContainer = document.getElementById('messageContainer');

    // Initialisation des événements
    this.initialize();
  }

  // Initialiser les événements
  initialize() {
    this.joinButton.addEventListener('click', this.handleJoinGame.bind(this));
    this.socket.on('joinGameStatus', this.handleJoinGameStatus.bind(this));
  }

  // Méthode pour gérer le clic du bouton "Rejoindre le jeu"
  handleJoinGame() {
    const playerName = this.playerNameInput.value;
    console.log('Player Name:', playerName);

    // Changer la couleur de fond du bouton avec la classe 'button-3'
    document.querySelector('.button-3').style.backgroundColor = 'green';

    // Émettre l'événement pour rejoindre la partie
    this.socket.emit('joinGame', playerName);
  }

  // Méthode pour gérer la réponse du serveur concernant le statut du jeu
  handleJoinGameStatus(message) {
    console.log(message);
    if (message && message.name) {
      this.messageContainer.textContent = 'Welcome, ' + message.name + '!'; // Affiche le nom
    } else {
      this.messageContainer.textContent = 'Message: ' + JSON.stringify(message); // Affiche l'objet entier
    }
  }
}

// Initialisation du jeu avec le socket (vous devez définir le socket au préalable)
const game = new Game(socket);










// socket.emit( "joinGame", playerName);

// socket.emit( "playerReady");


const playButton = document.querySelector('.playmusic');
const music = document.getElementById('music');

playButton.addEventListener('click', () => {
    if (music.paused) {
        music.play(); // Si la musique est en pause, on la joue
        playButton.textContent = 'Stop Music'; // Change le texte du bouton
    } else {
        music.pause(); // Si la musique joue, on la met en pause
        music.currentTime = 0; // Remise à zéro de la musique
        playButton.textContent = 'Play Music'; // Change le texte du bouton
    }
});






// socket. emit("playCard", { card });
// socket. emit( "drawCard" );