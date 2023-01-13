var obj1={value:10};
var obj2=obj1;
var obj3={value:10};
//instantiation
class Player {
    constructor(name,type)
    {   console.log(this);
        this.name=name;
        this.type=type;

    }
    introduce()
    {
        console.log(`Hi I am ${this.name},I'am a ${this.type}`);
    }
}
class Wizard extends Player{
    constructor(name,type)
    {
        super(name,type)
    }
    play()
    {
        console.log(`WEEEE I'am a ${this.type}`);
    }
}
const wizard1= new Wizard('deepam', 'healer');
const wizard2 =new Wizard('aibish','darkmagic');