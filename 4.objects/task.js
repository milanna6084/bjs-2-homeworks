function Student(name, gender, age) {
  this.name = name;
  this.gender = gender;
  this.age = age;
}

Student.prototype.setSubject = function (subjectName) {
  this.subject = subjectName;
}

Student.prototype.addMark = function (mark) {
  if (this.marks === undefined) { 
    this.marks = [mark];
  }
  else {
      this.marks.push(mark);
  }

}

Student.prototype.addMarks = function (...marks) {  
  if (this.marks === undefined) { 
    this.marks = marks;
  } 
  else {
      this.marks.contact(marks);
  }

}

Student.prototype.getAverage = function () {
   return this.marks.reduce((sum, mark) => sum + mark) / this.marks.length;
}

Student.prototype.exclude = function (reason) {
  delete this.marks;
  delete this.subject;
  this.excluded = reason;
}