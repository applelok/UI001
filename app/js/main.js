
// $("#dish-icon").mouseover(function() {
//   var a = $(".cover");
//   console.log(a);
//     $(a).animate({left: '250px'});
//  });
// $('#dish-icon').toggle(function(){
//    //alert('hi');  //working
//     $('#cover').animate({'height':'200px'},300); 
//     $('#cover').animate({'height':'200px'},300); 
// });

// $('#dish-icon').mouseout(function(){
//    //alert('hi');  //working
//     $('#cover').animate({'height':'300px'},300); 
// });

var toggled = false;
$('#dish-more').click(function() {
  console.log(123);
  if(!toggled){
    $('.img-right').animate({'right' : '-200px'}, 'fast');
    $('.img-left').animate({'left' : '-200px'}, 'fast');
    $('#dish-icon').addClass('img-animation');
    $(".dishes-bar").animate({ 'min-height': "150px" }, 'fast');
    
    $(".cover").animate({ 'min-height': "80px" }, 'fast');
    $("#dish-brief").removeClass('dish-brief-appear');
    $("#dish-brief").addClass('dish-brief-disappear');
    $('.dish-info').animate({'height': '475px'}, 'fast');
    $('#general-title').animate({'margin-top': '-45px'}, 'fast');
    // $('#detail-title').removeClass('hidden-title');
    // $("#dish-brief").hide();
    // $("#dish-brief").animate({ 'display': "none" }, 'fast');    
    // $("#dish-brief").animate({ 'min-height': "0px" }, 'fast');
    // $('#cover').animate({'height':'200px'},300);
    // $('.dishes-bar').animate({'height':'240px'},300);
    // $('.dishes-bar').css({'transform':'scale(0.5)'},300);
    toggled = true;
  }
 //  $('#dish-more').toggle(function() {
    
 //   },
 //   function() {
 //    $('#cover').animate({'height':'300px'},300); 
 // });
});
$('#dish-details-less').click(function(){
 $('.img-right').animate({'right' : '-50px'}, 'fast');
     $('.img-left').animate({'left' : '-70px'}, 'fast');
 $(".dishes-bar").animate({ 'min-height': "240px" }, 'fast');
    $('#dish-icon').removeClass('img-animation');
    
    $(".cover").animate({ 'min-height': "200px" }, 'fast');
    $("#dish-brief").removeClass('dish-brief-disappear');
    $("#dish-brief").addClass('dish-brief-appear');
    $('.dish-info').animate({'height': '365px'}, 'fast');
    $('#general-title').animate({'margin-top': '0px'}, 'fast');
    // $('#general-title').addClass('hidden-title');
    // $("#dish-brief").animate({ 'display': "block" }, 'fast'); 
    // $("#dish-brief").animate({ 'min-height': "280px" }, 'fast');
    // $('#cover').animate({'height':'300px'},300);
    // $('.dishes-bar').animate({'height':'340px'},300);
    toggled= false;
});