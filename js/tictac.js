$(document).ready(function(){
    
   var player = 1;
   var random = Math.floor(Math.random() * 9) + 1;
   var rand = Math.floor(Math.random() * 9) + 1;
   var tag = ".sq" + rand.toString();
   /*var testing = "sq0"*/
    $("#reload").hide();
    $("#win").hide();
    $("#hal").hide();
    
 
    $('.square').on('click', function(event){
        
        //alert('add symbol here');
       
        
        var squareSelected = $(this);
        
        if(squareSelected.hasClass('ex')||squareSelected.hasClass('oh')){
            alert('This square has been selected!');
        }else{//all of the logic
           
            if(player===1){
                squareSelected.addClass('ex').append('<i class="fa fa-times" aria-hidden="true"></i>');
                if(didIwin('ex')){
                    $("#gameBoard").hide();
                    /*alert('Congrats! Player ' + player + ' has won! Press ok to load a new game');*/
                     $("#reload").show();
                      $("#reload").click(function() {
                        location.reload();
                        });
                        $("#win").show();
                }else{
                   
                    console.log (tag);
                    player = 2;
                }
            
            }else{
                $(randomSquare(random)).addClass('oh').append('<i class="fa fa-circle-o" aria-hidden="true"></i>');
                if(didIwin('oh')){
                    $("#gameBoard").hide();
                   /* alert('Rats! HAL has won! Press ok to load a new game');*/
                     $("#reload").show();
                      $("#reload").click(function() {
                        location.reload();
                        });
                        $("#hal").show();
                }else{
                    console.log (tag);
                    player = 1;
                }
            }
            
           
            
        }
        
    });
    
    
   function didIwin(symbol) {//pass in "ex" || "oh"; returns True = win || false = did not win
            if($('.sq1').hasClass(symbol) && $('.sq2').hasClass(symbol) && $('.sq3').hasClass(symbol)){
                return true;
            }else if($('.sq4').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq6').hasClass(symbol)){
               return true;
            }else if($('.sq7').hasClass(symbol) && $('.sq8').hasClass(symbol) && $('.sq9').hasClass(symbol)){ 
               return true;
            }else if($('.sq1').hasClass(symbol) && $('.sq4').hasClass(symbol) && $('.sq7').hasClass(symbol)){ 
               return true;
            }else if($('.sq2').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq8').hasClass(symbol)){ 
               return true;
            }else if($('.sq3').hasClass(symbol) && $('.sq6').hasClass(symbol) && $('.sq9').hasClass(symbol)){ 
               return true;
            }else if($('.sq1').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq9').hasClass(symbol)){ 
               return true;
            }else if($('.sq7').hasClass(symbol) && $('.sq5').hasClass(symbol) && $('.sq3').hasClass(symbol)){ 
               return true;
            }else{
                return false;
            }
            
            
       
   }
   
   
   function randomSquare(rand){
     
     
       while ($(tag).hasClass('ex') || $(tag).hasClass('oh')){
            rand = Math.floor(Math.random() * 9) + 1;
            tag = ".sq" + rand.toString();
        }
           
            return tag;
        
   };
   
   
    
})