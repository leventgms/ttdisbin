const formId=["Form1","Form2","Form3","Form4","Form5","Form6","Form7","Form8","Form9","Form10","Form11","Form12","Form13","Form14","Form15"];

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
