import * as Phaser from "phaser";
import PlayScene from "./scenes/PlayScene";
import "./index.css"

const config = {
  type: Phaser.AUTO,
  backgroundColor: "#000",
  width: 800,
  height: 600,
  parent:"game-frame",
  scene: PlayScene,
}

const frame = document.createElement('div');
frame.id = "game-frame"
const btx = document.createElement('button');
btx.innerText = 'Try Me!'
btx.onclick = function()
{
  console.log('Hello World')
}
document.body.appendChild(frame)
new Phaser.Game(config)
frame.appendChild(btx)
