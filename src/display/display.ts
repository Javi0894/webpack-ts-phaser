import * as Phaser from "phaser";

interface GameConfig {
    scene: Phaser.Scene[];
    background: string;
    parent: string;
    height: number;
    width: number;
    type: number;
}

class Engine {

    static buildButton() : void {
        const btn = document.createElement('button')
    }

    static buildParentFrame( config: GameConfig ) : void
    {
        const frame = document.createElement('div');
        frame.id = config.parent;
    }

    static startGame( config: GameConfig ) : void
    {

    }
}