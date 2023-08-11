const formId=["Form1","Form2","Form3","Form4","Form5","Form6","Form7","Form8","Form9","Form10","Form11","Form12","Form13","Form14","Form15", "Form16","Form17",
              "Form18","Form19","Form20","Form21","Form22","Form23","Form24","Form25","Form26","Form27","Form28","Form29","Form30", "Form31","Form32",
              "Form33","Form34","Form35","Form36","Form37","Form38","Form39","Form40","Form41","Form42","Form43","Form44","Form45"];

function shuffle(array){
    var currentIndex= array.length;
    var temporaryValue,randomIndex;
    while (currentIndex !==0){
        randomIndex = Math.floor(Math.random()*currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] =temporaryValue;
        }
    return array;
}

const shuffledForms = shuffle(formId);

localStorage.setItem("shuffledForms",JSON.stringify(shuffledForms));
