const formId=["Form1","Form2","Form3","Form4","Form5","Form6","Form7","Form8","Form9","Form10","Form11","Form12","Form13","Form14","Form15", "Form16","Form17",
              "Form18","Form19","Form20","Form21","Form22","Form23","Form24","Form25","Form26","Form27","Form28","Form29","Form30", "Form31","Form32",
              "Form33","Form34","Form35","Form36","Form37","Form38","Form39","Form40","Form41","Form42","Form43","Form44","Form45", "Form46","Form47",
              "Form48","Form49","Form50","Form51","Form52","Form53","Form54","Form55","Form56","Form57","Form58","Form59","Form60", "Form61","Form62",
              "Form63","Form64","Form65","Form66","Form67","Form68","Form69","Form70","Form71","Form72","Form73","Form74","Form75", "Form76","Form77",
              "Form78","Form79","Form80","Form81","Form82","Form83","Form84","Form85","Form86","Form87","Form88","Form89","Form90", "Form91", "Form92",
              "Form93","Form94","Form95","Form96","Form97","Form98","Form99","Form100","Form101","Form102","Form103","Form104","Form105", "Form106","Form107",
              "Form108","Form109","Form110", "Form111", "Form112", "Form113", "Form114", "Form115", "Form116", "Form117", "Form118","Form119","Form120", "Form121", 
              "Form122", "Form123", "Form124", "Form125", "Form126", "Form127", "Form128", "Form129", "Form130", "Form131", "Form132", "Form133", "Form134", 
              "Form135", "Form136", "Form137", "Form138", "Form139", "Form140", "Form141", "Form142", "Form143", "Form144", "Form145", "Form146", "Form147",
              "Form148", "Form149", "Form150", "Form151", "Form152", "Form153", "Form154", "Form155", "Form156", "Form157", "Form158", "Form159", "Form160", 
              "Form161", "Form162", "Form163", "Form164", "Form165", "Form166", "Form167", "Form168", "Form169", "Form170", "Form171", "Form172", "Form173",
              "Form174", "Form175", "Form176", "Form177", "Form178", "Form179", "Form180"];

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
