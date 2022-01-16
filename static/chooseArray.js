onepointone = ["1.1.1","1.1.2","1.1.3"]
onepointtwo = ["1.2.1","1.2.2","1.3.3"]
onepointhree= ["1.3.1","1.3.2","1.3.3"]


function population(s1,s2){
    var s1 = document.getElementById(s1);
    var s2 = document.getElementById(s2);

    s2.innerHTML = "";
    if(s1.value=="1"){
      
      var optionArray = ["1.1|1.1","1.2|1.2","1.3|1.3"];

    } else if (s1.value=="2"){
      var optionArray = ["2.1|2.1","2.2|2.2","2.3|2.3"];
    } else if (s1.value == "3"){
      var optionArray = ["3.1|3.1","3.2|3.2","3.3|3.3"];

    }

    for(var option in optionArray){
      var pair = optionArray[option].split("|");
      var newOption = document.createElement("option");
      newOption.value = pair[0];
      newOption.id = pair[0];
      newOption.innerHTML = pair[1];
      s2.options.add(newOption);


    }
    /* if (s2.value == "1.1"){
      for(var op in onepointone){
        thepair = onepointone[op];
        var newCreate = document.createAttribute("p");
        newCreate.innerHTML=thepair;

      }

      

      

    } */


  }
/*   function content(s2){
    var s2 = document.getElementById(s2);
    if (s2.value == "1.1"){
      for(var op in onepointone){
        var theValue = onepointone[op];
        newValue = document.createAttribute("p");
        newValue.innerHTML=theValue;
        document.getElementById("bottom").appendChild(newValue);



      }

    }


  } */
