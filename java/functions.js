
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
    var Form16= document.getElementById("Form16");
    var Form17= document.getElementById("Form17");
    var Form18= document.getElementById("Form18");
    var Form19= document.getElementById("Form19");
    var Form20= document.getElementById("Form20");
    var Form21= document.getElementById("Form21");
    var Form22= document.getElementById("Form22");
    var Form23= document.getElementById("Form23");
    var Form24= document.getElementById("Form24");
    var Form25= document.getElementById("Form25");
    var Form26= document.getElementById("Form26");
    var Form27= document.getElementById("Form27");
    var Form28= document.getElementById("Form28");
    var Form29= document.getElementById("Form29");
    var Form30= document.getElementById("Form30");
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
    var Next16= document.getElementById("Next16");
    var Next17= document.getElementById("Next17");
    var Next18= document.getElementById("Next18");
    var Next19= document.getElementById("Next19");
    var Next20= document.getElementById("Next20");
    var Next21= document.getElementById("Next21");
    var Next22= document.getElementById("Next22");
    var Next23= document.getElementById("Next23");
    var Next24= document.getElementById("Next24");
    var Next25= document.getElementById("Next25");
    var Next26= document.getElementById("Next26");
    var Next27= document.getElementById("Next27");
    var Next28= document.getElementById("Next28");
    var Next29= document.getElementById("Next29");
    var Next30= document.getElementById("Next30");
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
    
        Next16.onclick =function(){
            Form16.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form16")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_1',$("input[type=radio][name=Bel_elicit_32l_1]:checked").val()); 
        };
    
      Next17.onclick =function(){
            Form17.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form17")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_2',$("input[type=radio][name=Bel_elicit_32l_2]:checked").val()); 
        };
    
          Next18.onclick =function(){
            Form18.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form18")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_3',$("input[type=radio][name=Bel_elicit_32l_3]:checked").val()); 
        };

        Next19.onclick =function(){
            Form19.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form19")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_4',$("input[type=radio][name=Bel_elicit_32l_4]:checked").val()); 
        };

       Next20.onclick =function(){
            Form20.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form20")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_5',$("input[type=radio][name=Bel_elicit_32l_5]:checked").val()); 
        };

       Next21.onclick =function(){
            Form21.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form21")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_6',$("input[type=radio][name=Bel_elicit_32l_6]:checked").val()); 
        };

        Next22.onclick =function(){
            Form22.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form22")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_7',$("input[type=radio][name=Bel_elicit_32l_7]:checked").val()); 
        };

      Next23.onclick =function(){
            Form23.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form23")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_8',$("input[type=radio][name=Bel_elicit_32l_8]:checked").val()); 
        };

     Next24.onclick =function(){
            Form24.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form24")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_9',$("input[type=radio][name=Bel_elicit_32l_9]:checked").val()); 
        };

    Next25.onclick =function(){
            Form25.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form25")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_10',$("input[type=radio][name=Bel_elicit_32l_10]:checked").val()); 
        };

    Next26.onclick =function(){
            Form26.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form26")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_11',$("input[type=radio][name=Bel_elicit_32l_11]:checked").val()); 
        };

    Next27.onclick =function(){
            Form27.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form27")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_12',$("input[type=radio][name=Bel_elicit_32l_12]:checked").val()); 
        };

    Next28.onclick =function(){
            Form28.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form28")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_13',$("input[type=radio][name=Bel_elicit_32l_13]:checked").val()); 
        };

    Next29.onclick =function(){
            Form29.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form29")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_14',$("input[type=radio][name=Bel_elicit_32l_14]:checked").val()); 
        };

    Next30.onclick =function(){
            Form30.style.left = "-1500px";
            var currentFormIndex=storedform.indexOf("Form30")
            if (currentFormIndex==14){
                Completed.style.left="0px";
                progress.style.width= "146.66px";
            }else{
            var nextformId = storedform[currentFormIndex +1];
            var nextform= document.getElementById(nextformId);
            nextform.style.left = "0px";
            }            
            progress.style.width= "146.66px";
            localStorage.setItem('Bel_elicit_32l_15',$("input[type=radio][name=Bel_elicit_32l_15]:checked").val()); 
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
            Bel_elicit_30_15: localStorage.getItem('Bel_elicit_30_15'),
            Bel_elicit_32l_1: localStorage.getItem('Bel_elicit_32l_1'),
            Bel_elicit_32l_2: localStorage.getItem('Bel_elicit_32l_2'),
            Bel_elicit_32l_3: localStorage.getItem('Bel_elicit_32l_3'),
            Bel_elicit_32l_4: localStorage.getItem('Bel_elicit_32l_4'),
            Bel_elicit_32l_5: localStorage.getItem('Bel_elicit_32l_5'),
            Bel_elicit_32l_6: localStorage.getItem('Bel_elicit_32l_6'),
            Bel_elicit_32l_7: localStorage.getItem('Bel_elicit_32l_7'),
            Bel_elicit_32l_8: localStorage.getItem('Bel_elicit_32l_8'),
            Bel_elicit_32l_9: localStorage.getItem('Bel_elicit_32l_9'),
            Bel_elicit_32l_10: localStorage.getItem('Bel_elicit_32l_10'),
            Bel_elicit_32l_11: localStorage.getItem('Bel_elicit_32l_11'),
            Bel_elicit_32l_12: localStorage.getItem('Bel_elicit_32l_12'),
            Bel_elicit_32l_13: localStorage.getItem('Bel_elicit_32l_13'),
            Bel_elicit_32l_14: localStorage.getItem('Bel_elicit_32l_14'),
            Bel_elicit_32l_15: localStorage.getItem('Bel_elicit_32l_15')});
        };


});






   
