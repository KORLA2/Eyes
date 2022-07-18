let can = document.getElementById('can');
let ctx = can.getContext('2d');
can.height = window.innerHeight;
can.width = window.innerWidth;
let x = 0,
    y = 0;
window.addEventListener('mousemove', (e) => {
    x = e.x;
    y = e.y;
    update()

})

class round {

    constructor() {
        this.x = Math.random() * can.width;
        this.y = Math.random() * can.height
        this.size = Math.floor(Math.random() * 100)+5;;

        this.irisx = this.x;
        this.irisy = this.y;
    }
    draw() {
        ctx.beginPath();

        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = "black"
        ctx.fill();
        ctx.stroke()

        // ctx.closePath()
        ctx.beginPath();
        let irisx = x - this.x
        let irisy = y - this.y;
        let thet = Math.atan2(irisy, irisx);

        irisx = this.x + Math.cos(thet) * this.size / 2.5;
        irisy = this.y + Math.sin(thet) * this.size / 2.5;

        ctx.arc(irisx, irisy, this.size / 2, 0, Math.PI * 2);
        ctx.fillStyle = "yellow";
        ctx.fill()
            // ctx.closePath()

    }


}

let eye = []

function fun() {
    ctx.clearRect(0, 0, can.width, can.height);
    for (let i = 0; i < 200; ++i) {
        eye.push(new round());
    }
    for (let i = 0; i < 200; ++i) {
        for (let j = 0; j < i; ++j) {
            let dist = Math.sqrt((eye[i].x - eye[j].x) * (eye[i].x - eye[j].x) + (eye[i].y - eye[j].y) * (eye[i].y - eye[j].y));

            if (dist < eye[i].size + eye[j].size) {
                eye[i].x = Math.random() * can.width;
                eye[i].y = Math.random() * can.height
                j = -1;
                eye[i].size = Math.floor(Math.random() * 100) + 5;

            } 

        }
        eye[i].draw();


    }
}

function update() {
    ctx.clearRect(0, 0, can.width, can.height);
    for (let i = 0; i < eye.length; ++i) {


        eye[i].draw();
    }
    requestAnimationFrame(update)

}



fun();