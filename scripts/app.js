(function() {
    "use strict";
    // function for die 1
    function die1() {
       var number = Math.floor((Math.random() * 6) + 1);
       if(number == 1){
         $('#die1').attr('src','images/die-1.svg');
         var displayNum = number;
         console.log (displayNum);
         document.getElementById("num1").innerHTML = number;
       }
       if(number == 2){
         $('#die1').attr('src','images/die-2.svg');
         var displayNum = number;
         console.log (displayNum);
         document.getElementById("num1").innerHTML = number;
       }
       if(number == 3){
         $('#die1').attr('src','images/die-3.svg');
         var displayNum = number;
         console.log (displayNum);
         document.getElementById("num1").innerHTML = number;
       }
       if(number == 4){
         $('#die1').attr('src','images/die-4.svg');
         var displayNum = number;
         console.log (displayNum);
         document.getElementById("num1").innerHTML = number;
       }
       if(number == 5){
         $('#die1').attr('src','images/die-5.svg');
         var displayNum = number;
         console.log (displayNum);
         document.getElementById("num1").innerHTML = number;
       }
       if(number == 6){
         $('#die1').attr('src','images/die-6.svg');
         var displayNum = number;
         console.log (displayNum);
         document.getElementById("num1").innerHTML = number;
       }
     }
    //  fucntion for die 2
      function die2() {
        var number = Math.floor((Math.random() * 6) + 1);
        if(number == 1){
          $('#die2').attr('src','images/die-1.svg');
          var displayNum = number;
          console.log (displayNum);
          document.getElementById("num1").innerHTML = number;
        }
        if(number == 2){
          $('#die2').attr('src','images/die-2.svg');
          var displayNum = number;
          console.log (displayNum);
          document.getElementById("num2").innerHTML = number;
        }
        if(number == 3){
          $('#die2').attr('src','images/die-3.svg');
          var displayNum = number;
          console.log (displayNum);
          document.getElementById("num2").innerHTML = number;
        }
        if(number == 4){
          $('#die2').attr('src','images/die-4.svg');
          var displayNum = number;
          console.log (displayNum);
          document.getElementById("num2").innerHTML = number;
        }
        if(number == 5){
          $('#die2').attr('src','images/die-5.svg');
          var displayNum = number;
          console.log (displayNum);
          document.getElementById("num2").innerHTML = number;
        }
        if(number == 6){
          $('#die2').attr('src','images/die-6.svg');
          var displayNum = number;
          console.log (displayNum);
          document.getElementById("num2").innerHTML = number;
        }
      }

    $('#role').click(function() {
      die1();
      die2();

    });

})();
