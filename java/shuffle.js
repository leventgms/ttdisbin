const formId_riub=["Form181", "Form182", "Form183", "Form184", "Form185", "Form186",
              "Form187", "Form188", "Form189", "Form190", "Form191", "Form192", "Form193", "Form194", "Form195", "Form196", "Form197", "Form198", "Form199",
              "Form200", "Form201", "Form202", "Form203", "Form204", "Form205", "Form206", "Form207", "Form208", "Form209", "Form210", "Form211", "Form212",
              "Form213", "Form214", "Form215", "Form216", "Form217", "Form218", "Form219", "Form220", "Form221", "Form222", "Form223", "Form224", "Form225",
              "Form226", "Form227", "Form228", "Form229", "Form230", "Form231", "Form232", "Form233", "Form234", "Form235", "Form236", "Form237", "Form238",
              "Form239", "Form240", "Form241", "Form242", "Form243", "Form244", "Form245", "Form246", "Form247", "Form248", "Form249", "Form250", "Form251",
              "Form252", "Form253", "Form254", "Form255", "Form256", "Form257", "Form258", "Form259", "Form260", "Form261", "Form262", "Form263", "Form264",
              "Form265", "Form266", "Form267", "Form268", "Form269", "Form270", "Form271", "Form272", "Form273", "Form274", "Form275", "Form276", "Form277",
              "Form278", "Form279", "Form280", "Form296", "Form297", "Form298", "Form299", "Form300", "Form301", "Form302", "Form303",
              "Form304", "Form305", "Form306", "Form307", "Form308", "Form309", "Form310", "Form311", "Form312", "Form313", "Form314", "Form315", "Form316",
              "Form317", "Form318", "Form319", "Form320", "Form321", "Form322", "Form323", "Form324", "Form325", "Form326", "Form327", "Form328", "Form329",
              "Form330", "Form331", "Form332", "Form333", "Form334", "Form335", "Form336", "Form337", "Form338", "Form339", "Form340"];
const formId_trust= ["Form281", "Form282", "Form283", "Form284", "Form285", "Form286", "Form287", "Form288", "Form289", "Form290",
"Form291", "Form292", "Form293", "Form294", "Form295"];

const formId_belief= ["Form1","Form2","Form3","Form4","Form5","Form6","Form7","Form8","Form9","Form10","Form11","Form12","Form13","Form14","Form15", "Form16","Form17",
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

const formId_strategy=["Form341"]

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

const shuffledForms_riub = shuffle(formId_riub);
const shuffledForms_trust= shuffle(formId_trust);
const shuffledForms_belief= shuffle(formId_belief);
const shuffledForms=[];

const shuffledForms= shuffledForms.push(...shuffledForms_trust);
const shuffledForms= shuffledForms.push(...shuffledForms_belief);
const shuffledForms= shuffledForms.push(...shuffledForms_riub);

localStorage.setItem("shuffledForms",JSON.stringify(shuffledForms));
