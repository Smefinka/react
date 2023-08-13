
function Student(name, lastName, year, pointsArr) {
  this.name = name;
  this.lastName = lastName;
  this.year = year;

  this.points = () => {
    if (pointsArr.length > 26) {
      return points.slice(0, 25)
    }
    return pointsArr;
  };
  this.presents = new Array(25);
}
Student.prototype.present = function (status) {
  addStatus(status, this.presents);
}
Student.prototype.absent = function (status) {
  addStatus(status, this.presents);
}

Student.prototype.summary = function () {
  const pointsArr = this.points();
  const sumPoints = pointsArr.reduce((accumulator, currentValue) => accumulator + currentValue);
  const middlePoint = sumPoints / pointsArr.length;
  let countLesson = this.presents.filter((e) => e !== undefined)
  let lessonPresent = this.presents.filter((e) => e === true);
  const middlePresents = lessonPresent.length / countLesson.length;
  if (!middlePresents) return console.log(`${this.name} Редиска!`);
  if (middlePresents > 0.9 && middlePoint > 90) {
    return console.log(`${this.name} Молодець!`);
  } else if (middlePresents > 0.9 || middlePoint > 90) {
    return console.log(`${this.name} Добре, але можна краще`);
  } else {
    return console.log(`${this.name} Редиска!`);
  }
}

function addStatus(status, presents) {
  let i = presents.findIndex(e => e === undefined);
  if (i === -1) return console.log('we have only 25 lessons');
  presents[i] = status;
}
let studenP = new Student('Peter', 'Prop', 1992, [90, 90, 100]);
let studenV = new Student('Vito', 'Pop', 2011, [90, 90, 100, 80, 70, 100, 100, 100]);
let studenK = new Student('Katerin', 'Mro', 1990, [5, 20, 11, 40, 80]);
studenP.absent(false);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.present(true);
studenP.summary();
studenV.present(true);
studenV.present(true);
studenV.present(true);
studenV.present(true);
studenV.absent(false);
studenV.summary();
studenK.absent(false);
studenK.absent(false);
studenK.present(true);
studenK.summary();