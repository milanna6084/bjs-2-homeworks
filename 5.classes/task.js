class PrintEditionItem {
    constructor (name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
    }

    set state(newState) {
        this._state = newState;
        if (newState < 0) this._state = 0;
        if (newState > 100) this._state = 100;  
    }

    get state() {
        return this._state;
    }

    fix() {
      this.state *= 1.5;
    }
    
}

class Magazine extends  PrintEditionItem {
    constructor (name, releaseDate, pageCount) {
        super (name, releaseDate, pageCount);
        this.type = 'magazine';
    }
}

class Book extends  PrintEditionItem {
    constructor (author, name, releaseDate, pageCount) {
        super (name, releaseDate, pageCount);
        this.author = author;
        this.type = 'book';
    }
}

class NovelBook extends  Book {
    constructor (author, name, releaseDate, pageCount) {
        super (author, name, releaseDate, pageCount);
        this.type = 'novel';
    }
}

class FantasticBook extends  Book {
    constructor (author, name, releaseDate, pageCount) {
        super (author, name, releaseDate, pageCount);
        this.type = 'fantastic';
    }
}

class DetectiveBook extends  Book {
    constructor (author, name, releaseDate, pageCount) {
        super (author, name, releaseDate, pageCount);
        this.type = 'detective';
    }
}

//----------------------------- TASK 2 ----------------------------

class Library {
    constructor(name) { 
       this.name = name;
       this.books = [];
    }

    addBook(book) {
        if (book.state > 30) {
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
         let book = this.books.find((item) => item[type] === value);
         return book ? book : null;  
    }

    giveBookByName(bookName) {
        let indexBook;
        let book = this.books.find((item, index) => {
            if (item.name === bookName) {
             indexBook = index;
             return item;  
            } 
        });
        if (book) {
            const givenBook = {... book};
            this.books.splice(indexBook, 1);
            return givenBook;
        }  
        return null;
    }      
}

// -----------------------------TASK 3 ---------------------------
 class Subject {
     constructor (title) {
         this.title = title;
         this.marks = [];
     }
 }

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        this.subjects = [];
    }
  
    setSubject (subjectName) { //Add check by unique title
        let subject = new Subject(subjectName);
        this.subjects.push(subject);
        return subject;
    }
  
    addMark (mark, subjectName) {
        if (mark < 0 || mark > 5) {
            console.log ("Ошибка, оценка должна быть числом от 1 до 5");
            return;
        }
        for (let item of this.subjects) {
            if (item.title === subjectName) {
                item.marks.push(mark);
                return;
            } 
        }                
        this.setSubject(subjectName).marks.push(mark);  
    }
          
    /* addMarks (...marks) {
        this.marks === undefined
           ? this.marks = marks
           : this.marks.concat(marks);
      }
    */
    getAverageBySubject (subjectName) {
        for (let item of this.subjects) {
            if (item.title === subjectName) {
                let average = item.marks.reduce((sum, mark) => sum + mark, 0) / item.marks.length;
                console.log(`Средний балл по предмету ${item.title} ${average}`);
                return average;
            }
        }
        console.log ('Несуществующий предмет');
    }

    getAverage_2 () {    
        let amountAverage = this.subjects.reduce((sum, item) => 
            sum += this.getAverageBySubject(item.title), 0) / this.subjects.length;
        console.log(`Средний балл  по всем предметам ${amountAverage}`);
        return amountAverage;
    }

    getAverage () {   
        
        let amountMarks = this.subjects.reduce((amountMarks, item) => { 
            amountMarks = amountMarks.concat(item.marks);
            return amountMarks;
            } , []);
        let amountAverage = amountMarks.reduce((sum, item) => sum + item, 0) / amountMarks.length ;

        console.log(`Средний балл  по всем предметам ${amountAverage}`);

        return amountAverage;
    }
  
    exclude (reason) {
        delete this.marks;
        delete this.subject;
        this.excluded = reason;
    }
}
