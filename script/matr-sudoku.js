//schemi

var livelli = [
     easy = [],
     medium = [],
     hard = [],
];

var test = [];
test[0] = ["1","6","7", "4","2","8", "5","9","3"];
test[1] = ["5","9","3", "1","7","6", "2","4","8"];
test[2] = ["8","2","4", "9","5","3", "7","1","6"];
test[3] = ["4","1","9", "7","6","2", "8","3","5"];
test[4] = ["3","8","6", "5","","9", "4","7","2"];
test[5] = ["7","5","2", "3","8","4", "1","6","9"];
test[6] = ["2","7","5", "6","9","1", "3","8","4"];
test[7] = ["6","3","8", "2","4","7", "9","5","1"];
test[8] = ["9","4","1", "8","3","5", "6","2","7"];

// var tempX = [];
// tempX[0] = ["","","", "","","", "","",""];
// tempX[1] = ["","","", "","","", "","",""];
// tempX[2] = ["","","", "","","", "","",""];
// tempX[3] = ["","","", "","","", "","",""];
// tempX[4] = ["","","", "","","", "","",""];
// tempX[5] = ["","","", "","","", "","",""];
// tempX[6] = ["","","", "","","", "","",""];
// tempX[7] = ["","","", "","","", "","",""];
// tempX[8] = ["","","", "","","", "","",""];
// temp.push(tempX);

// ############### Easy ###############

var easy1 = [];
easy1[0] = ["1","","7", "","","", "","","3"];
easy1[1] = ["","9","", "","6","", "2","","8"];
easy1[2] = ["8","","", "9","3","", "7","",""];
easy1[3] = ["","1","", "7","2","", "","","5"];
easy1[4] = ["3","","6", "","","1", "","",""];
easy1[5] = ["","","", "","","8", "1","6",""];
easy1[6] = ["","","5", "","","", "3","8",""];
easy1[7] = ["","3","", "2","","4", "","5",""];
easy1[8] = ["9","","1", "8","","", "","","7"];
easy.push(easy1);

var easy2 = [];
easy2[0] = ["","","", "6","1","", "","3",""];
easy2[1] = ["8","5","", "","7","", "","",""];
easy2[2] = ["1","","", "9","","", "2","","8"];
easy2[3] = ["7","","2", "","","6", "","",""];
easy2[4] = ["","","", "5","","", "9","2","4"];
easy2[5] = ["3","9","", "8","","2", "","",""];
easy2[6] = ["2","","4", "","6","1", "","5",""];
easy2[7] = ["","","7", "","","", "8","","6"];
easy2[8] = ["","6","", "","","5", "","7",""];
easy.push(easy2);

var easy3 = [];
easy3[0] = ["","4","2", "","","5", "","",""];
easy3[1] = ["6","","", "1","","", "9","2",""];
easy3[2] = ["","","5", "","9","", "","4",""];
easy3[3] = ["","9","", "3","","", "7","",""];
easy3[4] = ["3","5","", "","","", "","8","6"];
easy3[5] = ["","2","", "5","7","1", "","",""];
easy3[6] = ["7","","3", "","","", "8","","4"];
easy3[7] = ["","","", "","1","", "5","","3"];
easy3[8] = ["","1","9", "","8","3", "","",""];
easy.push(easy3);

var easy4 = [];
easy4[0] = ["","","", "","","8", "4","7",""];
easy4[1] = ["8","","3", "","7","2", "","","9"];
easy4[2] = ["","","7", "9","","6", "","","5"];
easy4[3] = ["","","", "5","","1", "9","","6"];
easy4[4] = ["","1","8", "","6","", "","",""];
easy4[5] = ["9","","", "7","","", "5","",""];
easy4[6] = ["","","", "","4","7", "","","3"];
easy4[7] = ["","3","", "","","", "7","1",""];
easy4[8] = ["7","4","", "6","","", "","5",""]
easy.push(easy4);

// ############### Medium ###############

var medium1 = [];
medium1[0] = ["","","8", "","5","", "4","",""];
medium1[1] = ["","5","", "","1","", "","6","2"];
medium1[2] = ["2","","", "6","","3", "1","",""];
medium1[3] = ["","7","", "1","","", "","","4"];
medium1[4] = ["","2","9", "","","", "","1",""];
medium1[5] = ["","","", "","9","2", "","5",""];
medium1[6] = ["9","","", "8","","1", "","",""];
medium1[7] = ["1","","", "","","", "3","","6"];
medium1[8] = ["","","2", "","7","6", "","4",""];
medium.push(medium1);

var medium2 = [];
medium2[0] = ["","","1", "","5","7", "","8",""];
medium2[1] = ["","6","", "8","","4", "","",""];
medium2[2] = ["","3","5", "","","", "","","7"];
medium2[3] = ["9","","", "","7","", "","1",""];
medium2[4] = ["5","","", "","","", "7","","3"];
medium2[5] = ["","7","", "5","","8", "","",""];
medium2[6] = ["6","","9", "4","","", "","",""];
medium2[7] = ["","8","", "7","","5", "","3",""];
medium2[8] = ["7","","", "1","","", "8","","2"];
medium.push(medium2);

var medium3 = [];
medium3[0] = ["","6","7", "","4","", "","",""];
medium3[1] = ["5","","", "","9","", "3","",""];
medium3[2] = ["9","","", "6","","2", "","7","8"];
medium3[3] = ["","","", "","1","", "2","8","5"];
medium3[4] = ["2","","", "7","","", "","",""];
medium3[5] = ["1","9","", "","8","", "","",""];
medium3[6] = ["","7","", "","","8", "","","2"];
medium3[7] = ["","","1", "9","","", "8","3",""];
medium3[8] = ["","","3", "5","","1", "","",""];
medium.push(medium3);

var medium4 = [];
medium4[0] = ["","3","7", "9","","", "","",""];
medium4[1] = ["1","9","", "","","", "","5",""];
medium4[2] = ["8","","", "5","","7", "9","",""];
medium4[3] = ["","","", "","","5", "1","9",""];
medium4[4] = ["9","6","", "8","","", "","",""];
medium4[5] = ["","","5", "","2","9", "","","8"];
medium4[6] = ["2","","4", "","9","", "","",""];
medium4[7] = ["","","", "","5","", "8","3","4"];
medium4[8] = ["","","3", "","1","", "2","",""];
medium.push(medium4);

// ############### hard ###############

var hard1 = [];
hard1[0] = ["","","", "","8","5", "","","6"];
hard1[1] = ["1","9","5", "","","", "","",""];
hard1[2] = ["","","", "4","","", "","5","2"];
hard1[3] = ["6","","", "8","","4", "","",""];
hard1[4] = ["","5","1", "","","", "","8",""];
hard1[5] = ["","","4", "","","", "9","6",""];
hard1[6] = ["3","","", "","7","", "6","","9"];
hard1[7] = ["","","6", "","","", "3","",""];
hard1[8] = ["5","7","", "9","","", "","",""];
hard.push(hard1);

var hard2 = [];
hard2[0] = ["","7","", "","","", "3","",""];
hard2[1] = ["","5","", "","6","1", "","",""];
hard2[2] = ["8","","", "","","", "6","1","7"];
hard2[3] = ["","","", "","2","5", "7","",""];
hard2[4] = ["","","2", "","","4", "","",""];
hard2[5] = ["","","", "6","","", "","2","8"];
hard2[6] = ["","4","", "8","","", "5","","9"];
hard2[7] = ["9","","", "","5","7", "","8",""];
hard2[8] = ["","","3", "","","", "","7",""];
hard.push(hard2);

var hard3 = [];
hard3[0] = ["","1","", "","","", "2","",""];
hard3[1] = ["","5","", "","","8", "","9","3"];
hard3[2] = ["","","", "","4","", "","",""];
hard3[3] = ["4","9","", "","","3", "","2",""];
hard3[4] = ["","","", "1","6","", "","",""];
hard3[5] = ["3","","", "","","", "","5","1"];
hard3[6] = ["","","2", "","3","", "1","",""];
hard3[7] = ["8","3","", "","","", "","",""];
hard3[8] = ["","","", "","","7", "8","","6"];
hard.push(hard3);

var hard4 = [];
hard4[0] = ["","","5", "","","7", "4","9",""];
hard4[1] = ["","2","", "8","","", "","1",""];
hard4[2] = ["","","", "","","2", "","",""];
hard4[3] = ["2","","", "6","","", "","","3"];
hard4[4] = ["6","","", "3","","", "9","",""];
hard4[5] = ["8","","", "9","","", "","",""];
hard4[6] = ["","","", "","","6", "","","9"];
hard4[7] = ["","7","", "","4","", "8","",""];
hard4[8] = ["","4","", "","8","", "6","",""];
hard.push(hard4);