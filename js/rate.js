$(document).ready(function() {
    $('.card_inner').each(function() {
      const rateElement = $(this).find('.rate');
      const rate = parseInt(rateElement.attr('data-rate')); 
      const barWidth = rate + '%';
      if (rate === 0) {
        rateElement.addClass('none'); 
        rateElement.text('-'); 
      } else {
        rateElement.removeClass('none'); 
        $(this).find('.bar').css('width', barWidth); 
        rateElement.text(rate + '%'); 
      }
     
    });
  });
  