
$(document).ready(function(){
    var Instructions= document.getElementById("instructions");
    var Form1= document.getElementById("Form1");
    var Form2= document.getElementById("Form2");
    var Form3= document.getElementById("Form3");
    var Form4= document.getElementById("Form4");
    var Form5= document.getElementById("Form5");
    var Form6= document.getElementById("Form6");
    var Form7= document.getElementById("Form7");
    var Form8= document.getElementById("Form8");
    var Form9= document.getElementById("Form9");
    var Form10= document.getElementById("Form10");
    var Form11= document.getElementById("Form11");
    var Form12= document.getElementById("Form12");
    var Form13= document.getElementById("Form13");
    var Form14= document.getElementById("Form14");
    var Form15= document.getElementById("Form15");
    var Completed=  document.getElementById("finished");

    var Welcome= document.getElementById("welcome");
    var Next1= document.getElementById("Next1");
    var Next2= document.getElementById("Next2");
    var Next3= document.getElementById("Next3");
    var Next4= document.getElementById("Next4");
    var Next5= document.getElementById("Next5");
    var Next6= document.getElementById("Next6");
    var Next7= document.getElementById("Next7");
    var Next8= document.getElementById("Next8");
    var Next9= document.getElementById("Next9");
    var Next10= document.getElementById("Next10");
    var Next11= document.getElementById("Next11");
    var Next12= document.getElementById("Next12");
    var Next13= document.getElementById("Next13");
    var Next14= document.getElementById("Next14");
    var Next15= document.getElementById("Next15");
    var Submit1= document.getElementById("Submit1");
    var storedform=JSON.parse(localStorage.getItem("shuffledForms"))

        welcome.onclick=function(){
            Instructions.style.left = "-1500px";
            var nextformId = storedform[0];
            var nextform = document.getElementById(nextformId);
            nextform.style.left="0px";
            progress.style.width= "73.3px";
        };

    

        Next1.onclick =function(){
            Form1.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form1")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_30_1',$("input[type=radio][name=Bel_elicit_30_1]:checked").val()); 
        };

        Next2.onclick =function(){
            Form2.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form2")
             if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }           
            progress.style.width= "219.99px";
            localStorage.setItem('Bel_elicit_30_2',$("input[type=radio][name=Bel_elicit_30_2]:checked").val());

        };

        Next3.onclick =function(){
            Form3.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form3")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "293.32px";
            localStorage.setItem('Bel_elicit_30_3',$("input[type=radio][name=Bel_elicit_30_3]:checked").val());

        };

        Next4.onclick =function(){
            Form4.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form4")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "366.65px";
            localStorage.setItem('Bel_elicit_30_4',$("input[type=radio][name=Bel_elicit_30_4]:checked").val());

        };
        Next5.onclick =function(){
            Form5.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form5")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "439.98px";
            localStorage.setItem('Bel_elicit_30_5',$("input[type=radio][name=Bel_elicit_30_5]:checked").val());

        };
        Next6.onclick =function(){
            Form6.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form6")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "513.31px";
            localStorage.setItem('Bel_elicit_30_6',$("input[type=radio][name=Bel_elicit_30_6]:checked").val());

        };
        Next7.onclick =function(){
            Form7.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form7")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "586.64px";
            localStorage.setItem('Bel_elicit_30_7',$("input[type=radio][name=Bel_elicit_30_7]:checked").val());

        };
        Next8.onclick =function(){
            Form8.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form8")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "659.97px";
            localStorage.setItem('Bel_elicit_30_8',$("input[type=radio][name=Bel_elicit_30_8]:checked").val());
            

        };
        Next9.onclick =function(){
            Form9.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form9")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "733.30px";
            localStorage.setItem('Bel_elicit_30_9',$("input[type=radio][name=Bel_elicit_30_9]:checked").val());
            

        };
        Next10.onclick =function(){
            Form10.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form10")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "806.63px";
            localStorage.setItem('Bel_elicit_30_10',$("input[type=radio][name=Bel_elicit_30_10]:checked").val()); 
            

        };
        Next11.onclick =function(){
            Form11.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form11")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "879.96px";
            localStorage.setItem('Bel_elicit_30_11',$("input[type=radio][name=Bel_elicit_30_11]:checked").val());
            

        };
        
        Next12.onclick =function(){
            Form12.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form12")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "953.29px";
            localStorage.setItem('Bel_elicit_30_12',$("input[type=radio][name=Bel_elicit_30_12]:checked").val());
            

        };
        Next13.onclick =function(){
            Form13.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form13")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "1026.62px";
            localStorage.setItem('Bel_elicit_30_13',$("input[type=radio][name=Bel_elicit_30_13]:checked").val()); 

        };
        Next14.onclick =function(){
            Form14.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form14")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "1100px";
            localStorage.setItem('Bel_elicit_30_14',$("input[type=radio][name=Bel_elicit_30_14]:checked").val());

        };
        Next15.onclick =function(){
            Form15.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form15")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }   
            progress.style.width= "1100px";
            localStorage.setItem('Bel_elicit_30_14',$("input[type=radio][name=Bel_elicit_30_14]:checked").val());

        };
        Submit1.onclick =function(){
            progress.style.width= "1100px";
            localStorage.setItem('Bel_elicit_30_15',$("input[type=radio][name=Bel_elicit_30_15]:checked").val());
            $.post("java/process_form.php",{ 
            Bel_elicit_30_1: localStorage.getItem('Bel_elicit_30_1'),
            Bel_elicit_30_2: localStorage.getItem('Bel_elicit_30_2'),
            Bel_elicit_30_3: localStorage.getItem('Bel_elicit_30_3'),
            Bel_elicit_30_4: localStorage.getItem('Bel_elicit_30_4'),
            Bel_elicit_30_5: localStorage.getItem('Bel_elicit_30_5'),
            Bel_elicit_30_6: localStorage.getItem('Bel_elicit_30_6'),
            Bel_elicit_30_7: localStorage.getItem('Bel_elicit_30_7'),
            Bel_elicit_30_8: localStorage.getItem('Bel_elicit_30_8'),
            Bel_elicit_30_9: localStorage.getItem('Bel_elicit_30_9'),
            Bel_elicit_30_10: localStorage.getItem('Bel_elicit_30_10'),
            Bel_elicit_30_11: localStorage.getItem('Bel_elicit_30_11'),
            Bel_elicit_30_12: localStorage.getItem('Bel_elicit_30_12'),
            Bel_elicit_30_13: localStorage.getItem('Bel_elicit_30_13'),
            Bel_elicit_30_14: localStorage.getItem('Bel_elicit_30_14'),
            Bel_elicit_30_15: localStorage.getItem('Bel_elicit_30_15')});
        };


});






   
