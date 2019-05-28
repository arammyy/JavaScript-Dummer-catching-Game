class Doo extends GameObject {
    constructor(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src,flag) {
        super(type, container, x, y, width, height, velX, velY, targetX, targetY, bg, src);

        this.flag=flag;
    }
}