class student{
constructor(sid, sName){
    this.id = sid;
    this.name = sName;
    this.school = "Rayenda pilot high school"
  }
}
const student1 = new student(12, "Naiem");
const student2 = new student(22, "Emon");
console.log(student1, student2);