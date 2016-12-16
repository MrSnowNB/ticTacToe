$(document).ready(function(){
    
   var player = 1;
   
    $('.square').on('click', function(event){
        
        //alert('add symbol here');
        
        var squareSelected = $(this);
        
        if(squareSelected.hasClass('ex')||squareSelected.hasClass('oh')){
            alert('This square has been selected!');
        }else{//all of the logic
           
            if(player===1){
                squareSelected.addClass('ex').append('<i class="fa fa-times" aria-hidden="true"></i>');
                if(didIwin('ex')){
                    alert('Congrats! Player ' + player + ' has won!');
                    location.reload();
                }else{
                    player = 2;
                }
            
            }else{
                squareSelected.addClass('oh').append('<i class="fa fa-circle-o" aria-hidden="true"></i>');
                if(didIwin('oh')){
                    alert('Congrats! Player ' + player + ' has won!');
                    location.reload();
                }else{
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
    
})