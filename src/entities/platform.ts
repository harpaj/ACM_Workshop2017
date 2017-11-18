import {GameState} from "../states/game";

export class Platform {
  sprite: Phaser.TileSprite;
  speed : number = 300;

  constructor (
    public game: Phaser.Game,
    public physicsGroup : Phaser.Group,
    public x: number,
    public y: number,
    public w: number,
    public h: number,
    public assetID: string,
  ) {
    // Load sprite
    this.sprite = this.game.add.tileSprite(x, y, w, h, assetID);
    this.physicsGroup.add(this.sprite);
    this.sprite.body.allowGravity = false;
    this.sprite.body.immovable = true;
    this.sprite.body.velocity.x = -(this.speed);
    //this.sprite.body.friction.x = 0;
    //this.sprite.body.friction.y = 0;

  }

  isDead() {
      return (this.sprite.body.x + this.w <= 0);
  }

  update () {
    if (this.isDead()) {
      this.sprite.destroy();
      return false;
    }
    return true;
  }
}
