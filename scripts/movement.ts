import { _decorator, Component, Node, Vec2 } from 'cc';
const { ccclass, property } = _decorator;

@ccclass('movement')
export class movement extends Component {
    private playerPosition: Vec2 = new Vec2();
    positionXY(event) {
        this.playerPosition.set(this.node.position.x, this.node.position.y);
        var mousePosition = event.getLocation();
        mousePosition = this.node.parent.convertToNodeSpaceAR(mousePosition);
        var angle
    }
    onLoad() {
        
        this.node.parent.on('mousemove',this.positionXY,this);
    }
    start() {

    }

    update(deltaTime: number) {
        
    }
}