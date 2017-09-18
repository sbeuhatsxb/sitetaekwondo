$(document).ready(function() {




  $('td').each(function() {

    if($(this).html() == "Compétition") {
        $(this).css('background-color', '#f05f40');
      }


             else if($(this).html() == "Confirmés - Débutants") {
                $(this).css('background-color', '#FFC300');
                $(this).css('color', 'black');
              }

              else if($(this).html() == "Confirmés") {
                 $(this).css('background-color', '#48A939');
                 $(this).css('color', 'black');
               }

               else if($(this).html() == "Cours pour tous") {
                  $(this).css('background-color', '#E8E9E8');
                  $(this).css('color', 'black');
                }


  })




});
