import * as Phaser from 'phaser';

export default class PlayScene extends Phaser.Scene {
    constructor()
    {
        super('Demo');
    };

    preload()
    {
        this.load.image('logo', 'assets/phaser3-logo.png');
    };

    create()
    {
        this.add.image(400, 300, 'logo');
    }
}