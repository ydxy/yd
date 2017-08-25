/**
 * Created by jinxue on 2017/8/23.
 */
export class PraiseButton {
    constructor(o) {
        this.count = 0;
        this.o = o;
        this.ss = [];
    }
    add() {
        console.log('add')
        ++this.count;
        this.anim()
    }
    anim() {
        console.log('anim')
        let s = document.createElement('span');
        s.innerText = `+${this.count}`;
        s.className = 'praise';
        this.ss.push(s)
        setTimeout(() => this.rm(), 1000);
        this.o.append(s)
    }
    rm() {
        let r = this.ss.splice(0,1);
        r && r[0] && r[0].remove();
    }
}


export class Thumb extends PraiseButton {
    constructor(o) {
        super(o);
    }
    creat(){
        let el = document.createElement('div');
        el.className = 'thumb';
        this.o.append(el)
        this.o.click(() => {
            this.count >= 10?
            this.o.find('.thumb').addClass('ban'):
            this.add()
        })
    }
}