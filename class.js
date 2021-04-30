class Students {
    constructor (sId, sName){
        this.ID = sId;
        this.Name = sName;
        this.School = 'lohagara school';
    }
};

const student1 = new Students(20, 'swarnali');
const student2 = new Students(21, 'ashish');
console.log(student1.ID, student2.Name);