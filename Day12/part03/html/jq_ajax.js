$(document).ready(()=>{
    $('nav a').on('click', function(e) {                 // User clicks nav link
           e.preventDefault();                                // Stop loading new link
           var url = this.href;                               // Get value of href
         
           $('nav a.current').removeClass('current');         // Clear current indicator
           $(this).addClass('current');                       // New current indicator
         
           $('#container').remove();                          // Remove old content
           
           $.ajax({
               type:'GET',
               url: url ,
               timeout:2000,
               beforeSend:function(){
                   $('#content').append('<div id="load">로딩중</div>');
               },
               complete:function(){     $('#load').remove()  },
               success:function(data){ $('#content').html($(data).find('#container'))},
               error:function(){$('#content').html('<div class="container">다시 시도해주세요</div>')}
           });


         });
  
});