let score = [
  ['Bahasa Indonesia', 90],
  ['English', 89],
  ['Math', 80],
  ['Science', 69]
];

let totalScore = 0;
let scoreValidation = 0;

for (let i = 0; i < score.length; i++) {
  if (typeof score[i][1] === 'number') {
    totalScore += score[i][1];
    scoreValidation++;
  } else {
    scoreValidation = 0;
    console.log('Invalid or missing scores were detected');
  }
}

if (scoreValidation === score.length) {
  let avg = totalScore / score.length;

  let grade;
  if (avg >= 90 && avg <= 100) {
    grade = 'A';
  } else if (avg >= 80 && avg < 90) {
    grade = 'B';
  } else if (avg >= 70 && avg < 80) {
    grade = 'C';
  } else if (avg >= 60 && avg < 70) {
    grade = 'D';
  } else {
    grade = 'E';
  }

  console.log("Average score: " + avg);
  console.log(`Grade: ${grade}`);
}