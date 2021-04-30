class Parents {
    constructor (father){
        this.FathersName = 'bishwanath'
    }
}

class Child extends Parents{
    constructor(name){
        super();
        this.Name = name;
    }
    fullName(){
        return this.Name + ' ' + this.FathersName;
    }
};

const baby = new Child ('suvo');
const baby2 = new Child ('khalil');
console.log(baby.fullName());
console.log(baby2);