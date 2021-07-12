var data, pageClass,  questOneVal, questThreeVal, questFourVal, questFiveVal, questSixVal, questSevenVal, questTotal; 
var pageNumber =0;
var topValue =0;
var totalScore=0;
var score=0;
var slideOne=0; 
var slideTwo=0; 
var slideThree=0;
var slideCcore=0;
var questTwoScore=0;
var questThreeScore =0;
var questSixScore =0;
var questSevenScore =0;



function loadDataset() {
        // THE JSON ARRAY.
        $.getJSON("https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-born-test-v15.json", function(json) {
        //$.getJSON("https://www-author.cisco.com/c/dam/m/en_us/customer-experience/j/form.json", function(json) {
        //$.getJSON("/c/dam/m/en_us/customer-experience/j/form-staging.json", function(json) {

			console.log('json'+json); // this will show the info it in firebug console
			data = json;
			
            displayResult(data, pageNumber);
   
            changeStatusBar(data, pageNumber);

		}); 
		
		var newWidth = window.innerWidth;
		var newHeight = window.innerHeight; 
		var quizContainWidth = $( ".cx-blade-bgcolor-F5F6F9" ).width();
		var widthQuizCont = quizContainWidth*5;
		var heightQuizCont = newHeight*0.6;
		$(".quiz-container-slider").css("width", widthQuizCont);
		/* if(newHeight<560){
		$(".quiz-container-slider").css("margin-top", '-140px');
		} else {
			$(".quiz-container-slider").css("margin-top", '0');
		} */
       
}

$(function() {
 	loadDataset();

     
});

var bigBall = document.querySelector('.cursor__ball--big');
var smallBall = document.querySelector('.cursor__ball--small');
const $hoverables = document.querySelectorAll('.option');

// Listeners
document.body.addEventListener('mousemove', onMouseMove);
// for (let i = 0; i < $hoverables.length; i++) {
//   $hoverables[i].addEventListener('mouseenter', onMouseHover);
//   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut);
// }

// Move the cursor
function onMouseMove(e) {
  gsap.to(bigBall, .3, {
    x: e.pageX - 15,
    y: e.pageY - 15
  })
  gsap.to(smallBall, .1, {
    x: e.pageX - 5,
    y: e.pageY - 7
  })
}

// Hover an element
// function onMouseHover() {
//   gsap.to($bigBall, .3, {
//     scale: 4
//   })
// }
// function onMouseHoverOut() {
//   gsap.to($bigBall, .3, {
//     scale: 1
//   })
// }

  /*
  $('.next').on("mouseleave", function(){
    $('#cursor').css({'transform': 'scale(1)','background': 'white','opacity':'1'});
  });
  */


// $( ".option" ).mouseover(function() {
//     console.log('sddsgsadf');
//   });

  /*
  $('.next').on("mouseleave", function(){
    $('#cursor').css({'transform': 'scale(1)','background': 'white','opacity':'1'});
  });
  */

var introAnimation = bodymovin.loadAnimation({
    container: document.getElementById('lottieIntro'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-pattern_00_intro.json',
    autoplay: true,
    loop: true
  })

var animation = bodymovin.loadAnimation({
    container: document.getElementById('lottie'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-base-layer-2.json',
    autoplay: true,
    loop: true
  })
  
  var animation1 = bodymovin.loadAnimation({
    container: document.getElementById('lottie1'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-1-a.json',
    loop: false,
    autoplay: false
  })
  
  var animation2 = bodymovin.loadAnimation({
    container: document.getElementById('lottie2'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-1-b.json',
    loop: false,
    autoplay: false
  })
  
  var animation3 = bodymovin.loadAnimation({
    container: document.getElementById('lottie3'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-1-c.json',
    loop: false,
    autoplay: false
  })

  var animation4 = bodymovin.loadAnimation({
    container: document.getElementById('lottie4'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-1-d.json',
    loop: false,
    autoplay: false
  })

  var animation5 = bodymovin.loadAnimation({
    container: document.getElementById('lottie5'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-2.json',
    loop: false,
    autoplay: false
  })

  var animation6 = bodymovin.loadAnimation({
    container: document.getElementById('lottie6'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-3.json',
    loop: false,
    autoplay: false
  })

  var animation7 = bodymovin.loadAnimation({
    container: document.getElementById('lottie7'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-4.json',
    loop: false,
    autoplay: false
  })

  var animation8 = bodymovin.loadAnimation({
    container: document.getElementById('lottie8'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-a.json',
    loop: false,
    autoplay: false
  })

  var animation9 = bodymovin.loadAnimation({
    container: document.getElementById('lottie9'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-b.json',
    loop: false,
    autoplay: false
  })

  var animation10 = bodymovin.loadAnimation({
    container: document.getElementById('lottie10'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-c.json',
    loop: false,
    autoplay: false
  })

  var animation11 = bodymovin.loadAnimation({
    container: document.getElementById('lottie11'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-d.json',
    loop: false,
    autoplay: false
  })

  var animation12 = bodymovin.loadAnimation({
    container: document.getElementById('lottie12'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-5-e.json',
    loop: false,
    autoplay: false
  })

  var animation13 = bodymovin.loadAnimation({
    container: document.getElementById('lottie13'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-6.json',
    loop: false,
    autoplay: false
  })

  var animation14 = bodymovin.loadAnimation({
    container: document.getElementById('lottie14'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-question-7.json',
    loop: false,
    autoplay: false
  })

  var animation15 = bodymovin.loadAnimation({
    container: document.getElementById('lottie15'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-grid-lines.json',
    loop: false,
    autoplay: false
  })

  var animation16 = bodymovin.loadAnimation({
    container: document.getElementById('lottie16'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-pattern-outro-01.json',
    loop: false,
    autoplay: false
  })

  var animation17 = bodymovin.loadAnimation({
    container: document.getElementById('lottie17'),
    path: 'https://lp.cloudplatformonline.com/rs/808-GJW-314/images/dn0621zay-launch-explore-trail.json',
    loop: false,
    autoplay: false
  })

/* --------------------remove-----*/
$( "a.back" ).on( "click", function() {
	console.log('back');
    // Display Results
    pageNumber = pageNumber-1;

	displayResult(data, pageNumber);

    animationFlow(data, pageNumber);

    // Change the status bar
	changeStatusBar(data, pageNumber);

    //totalScore= score + slideCcore;

    //console.log('Score '+ totalScore);

});
/* --------------------remove-----*/

$( "a.next" ).on( "click", function() {
	console.log('next');
    // Display Results
    pageNumber = pageNumber+1;

	displayResult(data, pageNumber);

    animationFlow(data, pageNumber);

    // Change the status bar
	changeStatusBar(data, pageNumber);

    totalScore= score + slideCcore;

    console.log('Score '+ totalScore);

});



$("#button-container").on("click",'.option', function() {
    console.log('question box');

    var slectedBtn = $(this).attr('value');

    boxQuestionChange(data, pageNumber, slectedBtn);

});

function displayResult(data, pageNumber) {

        var dataLength = data.length;

        if (pageNumber < dataLength){

            var pageType = data[pageNumber].Pagetype;

            $('.master-container').removeClass(pageClass);
            pageClass = data[pageNumber].Page;

            $('.master-container').addClass(pageClass);

            $('.animation-container').removeClass('hidden');

            if (pageType=="text"){
                displayText(data, pageNumber);
            } else if(pageType=="question"){
                displayQuestion(data, pageNumber);
            } else if(pageType=="result"){
                displayFinal(data, pageNumber);
            }

        }
    
}

function displayText(data, pageNumber) {
    console.log('disply text');

    var textDisplay = data[pageNumber].Pagetyeptext[0].Text;

    

    $('#questionContainer').addClass('hidden');

    $('#textContainer').removeClass('hidden');
    $( "#textContainer" ).html(textDisplay);

    if (data[pageNumber].Pagetyeptext[0].Animation[0].AnimationX.length>0){
        console.log('text animations');
    
        var xPos = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationX;
        var yPos = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationY;
        var Scale = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationScale;
        var duration = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationDuration;
        var transition = data[pageNumber].Pagetyeptext[0].Animation[0].AnimationTransition;
        
        gsap.set(".text-container", { autoAlpha:0.1});
        gsap.to(".text-container", { x: xPos, y: yPos, autoAlpha: 1, scale: Scale, duration: duration, ease: "power3.out"});
    }

    if (data[pageNumber].Page=='one'){
        // animation step 1
        gsap.from(".header-container", {   scale: 1, opacity:1, duration: 1, ease: "power3.out"});

        if (window.matchMedia('(max-width: 767px)').matches) {
            gsap.set(".animation-container .lottie-env", { y:'100%',opacity:1,}); 
        } else {  
            gsap.set(".animation-container .lottie-env", { y:'85%',opacity:1,}); 
        }

        // animation step 2
        gsap.from(".header-container", {  y:180, scale: 1, duration: 1.5, delay: 1, ease: "sine.out"});

        if (window.matchMedia('(max-width: 767px)').matches) {
            gsap.to(".animation-container .lottie-env", { x:'47%', y: '120%', opacity:1, duration: 1.5, scale:0.6, delay:1, ease: "sine.out"});
        } else {  
            gsap.to(".animation-container .lottie-env", { y: '112%', opacity:1, duration: 1.5, delay:1, ease: "sine.out"});
        }


        
        // animation step 3
        gsap.set(".text-container h1", {  y:170, scale: 1, opacity:0 });
        gsap.set(".text-container h1", {  y:170, scale: 1, opacity:1,  delay:0.4 });
        gsap.set(".text-container h1 .one", {  opacity:0.2,  delay:0.4 });

        if (window.matchMedia('(max-width: 767px)').matches) {
            gsap.set(".text-container h1 .two", { x:4, opacity:0,  delay:0.4 });

        } else {  
            gsap.set(".text-container h1 .two", { x:15, opacity:0,  delay:0.4 });
        }

        gsap.set(".text-container h1 .two", {  opacity:0.2,  delay:0.7 });
        gsap.to(".text-container h1 .one", {  y:50, scale: 1, duration: 0.5, delay:0.4, ease: "sine.out"});
        gsap.to(".text-container h1 .two", {  y:100, scale: 1, duration: 0.5, delay:0.7, ease: "sine.out"});
        gsap.to(".text-container h1", {  y:0, scale: 1, duration: 0.9, delay:1, ease: "sine.out"});
        gsap.to(".text-container h1 .one", {  y:0, scale: 1, opacity:1, duration: 1.5 , delay:0.8, ease: "sine.out"});
        gsap.to(".text-container h1 .two", {   y:0, scale: 1, opacity:1, duration: 1.5, delay:1.2, ease: "sine.out"});

        //gsap.from(".text-container h1", {  y:-119, scale: 1.2, opacity:0.2, duration: 1.5, delay:2, ease: "power3.out"});
        gsap.from(".text-container h2", {  y:119, scale: 1, opacity:0, duration: 1.5, delay:2, ease: "power3.out"});
        gsap.from(".text-container .start-btn", {  scale: 1, opacity:0, duration: 1.5, delay:2.5,  ease: "power3.out"});
        //gsap.to(".animation-container .lottie-env", { y: '90%', opacity:1, duration: 1.5, delay:0.2, ease: "power3.out"});

        

    } else if (data[pageNumber].Page=='two'){

        gsap.from(".text-container", { opacity: 0, duration: 1.5, delay: 0.5, ease: "power3.out"});       
        
    } else if (data[pageNumber].Page=='Sixteen'){
        // Update the Continue button on insight 7 to say 'See my results'
        
        if (window.matchMedia('(max-width: 767px)').matches) {
          
            $('.text-container .next').text('See my results');   

        } else {  
            
            $('.progress-container .next').text('See my results');   

        }
         
     }

}

$( "#textContainer" ).on( "click","a.next", function() {
	console.log('next');
    // Display Results
    pageNumber = pageNumber+1;


	displayResult(data, pageNumber);

    animationFlow(data, pageNumber);

    // Change the status bar
	changeStatusBar(data, pageNumber);

});

function displayQuestion(data, pageNumber) {
    console.log('display question');

    var questDisplay = data[pageNumber].QuestionTypetext[0].PrimaryQuest;
    
    $('#textContainer').addClass('hidden');
    $('#questionContainer').removeClass('hidden');
    $('#button-container').removeClass('box');
    $('#button-container').removeClass('stack');
    $('#button-container').removeClass('slider');

    $( "#questionContainer .quest-text-container" ).html(questDisplay);

    var ele = document.getElementById('button-container');
    var eleStack = document.getElementById('columns');
    var eleSlide = document.getElementById('slider-container');

	ele.innerHTML ='';
    eleStack.innerHTML ='';
    eleSlide.innerHTML ='';

    for (var i = 0; i < data[pageNumber].QuestionTypetext[0].Questions.length; i++) {
        // POPULATE SELECT ELEMENT WITH JSON.
        
        var questionType = data[pageNumber].QuestionTypetext[0].QuestionType;

            
        if (data[pageNumber].QuestionTypetext[0].Questions[0].Question[i]!=undefined){

            if( questionType =='box'){ 

                $('#button-container').addClass('box');

                ele.innerHTML = ele.innerHTML +
                '<a id="btn-01" href="#" class="option" value="' + (i+1) + '" >' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</a>';

            } else if ( questionType =='stack'){

                $('#button-container').addClass('stack');

                eleStack.innerHTML = eleStack.innerHTML +
                '<li class="column" draggable="true" value="' + (i+1) + '" ><header>' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</header></li>';

                draggable();

            } else if ( questionType =='slider'){

                //$('#button-container').addClass('slider-container');

                var noQuestions = i + 1;

                eleSlide.innerHTML = eleSlide.innerHTML +
                //'<a id="btn-01" href="#" class="option" value="' + (i+1) + '" >' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</a>';
                '<span class="slider-heading">' + data[pageNumber].QuestionTypetext[0].Questions[i].Question + '</span><div id="slide-'+i+'" class="slider" data-min="1" data-max="5" data-value="' + noQuestions + '" data-step="1"></div>';
                
                if (data[pageNumber].QuestionTypetext[0].Questions.length==noQuestions){
                    slidable();
                }

            }

        }	
           			
    } 
    
    if (data[pageNumber].QuestionTypetext[0].Animation[0].AnimationX.length>0){
        console.log('text animations');
    
        var xPos = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationX;
        var yPos = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationY;
        var Scale = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationScale;
        var duration = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationDuration;
        var transition = data[pageNumber].QuestionTypetext[0].Animation[0].AnimationTransition;
        gsap.set(".quest-text-container p", { autoAlpha:0});
        gsap.from(".quest-text-container", { x: xPos, y: yPos, scale: Scale, duration: duration, ease: "power3.out"});
        gsap.from(".box", { x: -xPos, y: -yPos, scale: Scale, duration: duration, ease: "power3.out"});
        gsap.from(".stack-container", { x: -xPos, y: -yPos, scale: Scale, duration: duration, ease: "power3.out"});
        gsap.from(".range-slider-wrapper", { x: -xPos, y: -yPos, scale: Scale, duration: duration, ease: "power3.out"});
        
        var newDuration = duration + 1;
        gsap.to(".quest-text-container p", { autoAlpha:1, duration: newDuration, delay: duration, ease: "none"});
    }

    if(data[pageNumber].Page=='two'){

    } else if(data[pageNumber].Page=='three'){
        gsap.from(".header-container", { opacity:0, duration: 1.5, delay: 0.7, ease: "power3.out"});
        gsap.from(".progress-container", {  y:'150px', scale: 1.2, opacity:0.2, duration: 1.5, delay: 0.9, ease: "power3.out"});
    } else if(data[pageNumber].Page=='five'){
        animation15.playSegments([0, 20], true);
    } else if(data[pageNumber].Page=='seven'){
        // add in the classes for slider animation
        $('.animation-container').addClass('s1-one');     
        $('.animation-container').addClass('st-three');  
        animation8.playSegments([30, 30], true);
        animation9.playSegments([30, 30], true);
        animation10.playSegments([30, 30], true);
        animation11.playSegments([30, 30], true);
        animation12.playSegments([30, 30], true);
        

        animation15.playSegments([35, 50], true);
    } else if(data[pageNumber].Page=='nine'){
        gsap.set(".stack-container p", { autoAlpha:0});
        var newDuration = duration + 1;
        gsap.to(".stack-container p", { autoAlpha:1, duration: newDuration, delay: duration, ease: "none"});
    } else if(data[pageNumber].Page=='eleven'){
        animation15.playSegments([65, 80], true);
    } else if(data[pageNumber].Page=='thirteen'){
        animation15.playSegments([95, 110], true);
    }
      
    if (window.matchMedia('(min-width: 768px)').matches) {
        $( ".option" ).mouseover(function() {
            gsap.to(bigBall, { scale: 1.75, duration: 0.3, ease: "none"} );
            $('.cursor').addClass('active');
        })
    
        $( ".column" ).mouseover(function() {
            gsap.to(bigBall, { scale: 1.75, duration: 0.3, ease: "none"} );
            $('.cursor').addClass('active');
        })
    
        $( ".option" ).mouseleave(function() {
            gsap.to(bigBall, { scale: 1, duration: 0.3, ease: "none"} );
            $('.cursor').removeClass('active');
        })
    
        $( ".column" ).mouseleave(function() {
            gsap.to(bigBall, { scale: 1, duration: 0.3, ease: "none"} );
            $('.cursor').removeClass('active');
        })

    } 

    

}

//This is the drag event function - start

//$(draggabke);
function draggable() {
    var oldIndex=0;
    $( ".droppable-area1" ).sortable({
        stack: '.connected-sortable ul',
        update: function( event, ui ) {}
      });

      $( ".droppable-area1" ).on( "sortupdate", function( event, ui ) {
        
        oldIndex = oldIndex + 1;

        if(topValue>0){
            score = score - topValue;
        }

        topValue = $(this).children().first().val();
        console.log(topValue);

        var startPlay = oldIndex*30 - 30;
        var endPlay = oldIndex*30;
        if (oldIndex > 6){
            oldIndex=0;
        }

        animation7.playSegments([startPlay, endPlay], true);
        
        score = score + topValue;

      } );
      
  }

//This is the drag event function - end
//This is the slider event function - start

//$('body').on('click', '.toggle-filters', function() {
function slidable() {
    var $this = $(this),
        rangeWrapper = $('.range-slider-wrapper'),
        advancedFilters = $('.advanced-filters');
  
    if(!rangeWrapper.hasClass('filters-expanded')) {
      
      $this.html('Hide advanced filters');
      rangeWrapper.addClass('filters-expanded');
      advancedFilters.slideDown();
      
      $('.slider').each(function() {
        var minValue = Number($(this).find('.min-value').attr('data-selected-value')),
            maxValue = Number($(this).attr('data-max')),
            value = Number($(this).attr('data-value')),
            step = Number($(this).attr('data-step')),
            $this = $(this);
        
        $this.slider({
          range: true,
          values: [minValue, maxValue],
          slide: function(event, ui) {
            var selectedMin = ui.values[0],
                selectedMax = ui.values[1],
                currentValueMin = selectedMin,
                currentValueMax = selectedMax;
            if(selectedMin > 999) {
              currentValueMin = selectedMin / 1000 + 'k';
              currentValueMax = selectedMax / 1000 + 'k';
            }
            
            $this.find('.min-value').html(currentValueMin).attr('data-selected-value', selectedMin);
            $this.find('.max-value').html(currentValueMax).attr('data-selected-value', selectedMax);
          }
          
        });
        
        var currentValueMin = minValue,
            currentValueMax = maxValue;
        if(currentValueMin > 999) {
          currentValueMin = currentValueMin / 1000 + 'k';
          currentValueMax = currentValueMax / 1000 + 'k';
        }
        
        $this.find('span[tabindex]:first-of-type .value').html(currentValueMin).attr('data-selected-value', minValue);
        $this.find('span[tabindex]:last-of-type').append('<span class="value max-value" data-selected-value></span>').find('.value').html(currentValueMax).attr('data-selected-value', maxValue);
      });
      
    } else {
      
      $this.html('Show advanced filters');
      rangeWrapper.removeClass('filters-expanded');
      advancedFilters.slideUp();
      
      $('.slider').each(function() {
        var value = Number($(this).attr('data-value')),
            $this = $(this);
        
        $this.slider({
          value: value,
          range: 'min',
          slide: function(event, ui) {
        var currentValue = ui.value;
        if(currentValue > 999) {
          currentValue = currentValue / 1000 + 'k';
        }
        $(this).find('.value').html(currentValue).attr('data-selected-value', ui.value);
      }
        });
      
    });
    }
    sliderEach();
  };
  
  function sliderEach(){

    $('.slider').each(function() {
        var minValue = Number($(this).attr('data-min')),
            maxValue = Number($(this).attr('data-max')),
            value = Number($(this).attr('data-value')),
            step = Number($(this).attr('data-step')),
            $this = $(this);
        
        $this.slider({
          range: 'min',
          value: value,
          min: minValue,
          max: maxValue,
          step: step,
          slide: function(event, ui) {
            var currentValue = ui.value;
            var carrentSlide = event.target.id;
            if (carrentSlide == 'slide-0'){
                slideOne = currentValue;
            } else if (carrentSlide == 'slide-1'){
                slideTwo = currentValue;
            } else if (carrentSlide == 'slide-2') {
                slideThree = currentValue;
            }


            if(currentValue > 999) {
              currentValue = currentValue / 1000 + 'k';
            }
            $(this).find('.value').html(currentValue).attr('data-selected-value', ui.value);

            console.log('slideOne '+ slideOne + ' slideTwo '+ slideTwo + ' slidethree '+ slideThree );

            slideCcore = slideOne + slideTwo + slideThree;


            if (carrentSlide == 'slide-0'){
                if (slideOne==1){

                    $('.animation-container').addClass('s1-one'); 
                    $('.animation-container').removeClass('s1-two');
                    $('.animation-container').removeClass('s1-three');  
                    $('.animation-container').removeClass('s1-four');   
                    $('.animation-container').removeClass('s1-five');         
                    
                } else if (slideOne==2){
                    
                    $('.animation-container').removeClass('s1-one'); 
                    $('.animation-container').addClass('s1-two');
                    $('.animation-container').removeClass('s1-three');  
                    $('.animation-container').removeClass('s1-four');   
                    $('.animation-container').removeClass('s1-five');       

                } else if (slideOne==3){

                    $('.animation-container').removeClass('s1-one'); 
                    $('.animation-container').removeClass('s1-two');
                    $('.animation-container').addClass('s1-three');  
                    $('.animation-container').removeClass('s1-four');   
                    $('.animation-container').removeClass('s1-five');         

                } else if (slideOne==4){

                    $('.animation-container').removeClass('s1-one'); 
                    $('.animation-container').removeClass('s1-two');
                    $('.animation-container').removeClass('s1-three');  
                    $('.animation-container').addClass('s1-four');   
                    $('.animation-container').removeClass('s1-five');       

                } else if (slideOne==5){

                    $('.animation-container').removeClass('s1-one'); 
                    $('.animation-container').removeClass('s1-two');
                    $('.animation-container').removeClass('s1-three');  
                    $('.animation-container').removeClass('s1-four');   
                    $('.animation-container').addClass('s1-five');       

                }
            } else if (carrentSlide == 'slide-1'){

                if (slideTwo==1){

                    animation8.playSegments([30, 36], true);
                    animation9.playSegments([30, 36], true);
                    animation10.playSegments([30, 36], true);
                    animation11.playSegments([30, 36], true);
                    animation12.playSegments([30, 36], true);

                } else if (slideTwo==2){

                    animation8.playSegments([37, 41], true);
                    animation9.playSegments([37, 41], true);
                    animation10.playSegments([37, 41], true);
                    animation11.playSegments([37, 41], true);
                    animation12.playSegments([37, 41], true);

                } else if (slideTwo==3){

                    animation8.playSegments([42, 47], true);
                    animation9.playSegments([42, 47], true);
                    animation10.playSegments([42, 47], true);
                    animation11.playSegments([42, 47], true);
                    animation12.playSegments([42, 47], true);

                } else if (slideTwo==4){
                    
                    animation8.playSegments([48, 54], true);
                    animation9.playSegments([48, 54], true);
                    animation10.playSegments([48, 54], true);
                    animation11.playSegments([48, 54], true);
                    animation12.playSegments([48, 54], true);

                } else if (slideTwo==5){
                    animation8.playSegments([55, 60], true);
                    animation9.playSegments([55, 60], true);
                    animation10.playSegments([55, 60], true);
                    animation11.playSegments([55, 60], true);
                    animation12.playSegments([55, 60], true);
                }

            } else if (carrentSlide == 'slide-2'){

                if (slideThree==1){
                    $('.animation-container').addClass('st-one');
                    $('.animation-container').removeClass('st-two');
                    $('.animation-container').removeClass('st-three');
                    $('.animation-container').removeClass('st-four');
                    $('.animation-container').removeClass('st-five');
                } else if (slideThree==2){
                    $('.animation-container').removeClass('st-one');
                    $('.animation-container').addClass('st-two');
                    $('.animation-container').removeClass('st-three');
                    $('.animation-container').removeClass('st-four');
                    $('.animation-container').removeClass('st-five');
                } else if (slideThree==3){
                    $('.animation-container').removeClass('st-one');
                    $('.animation-container').removeClass('st-two');
                    $('.animation-container').addClass('st-three');
                    $('.animation-container').removeClass('st-four');
                    $('.animation-container').removeClass('st-five');
                } else if (slideThree==4){
                    $('.animation-container').removeClass('st-one');
                    $('.animation-container').removeClass('st-two');
                    $('.animation-container').removeClass('st-three');
                    $('.animation-container').addClass('st-four');
                    $('.animation-container').removeClass('st-five');
                } else if (slideThree==5){
                    $('.animation-container').removeClass('st-one');
                    $('.animation-container').removeClass('st-two');
                    $('.animation-container').removeClass('st-three');
                    $('.animation-container').removeClass('st-four');
                    $('.animation-container').addClass('st-five');
                }
            }


          }
        });
        
        
        var sliderHandle = $this.find('.ui-slider-handle'),
            currentValue = sliderHandle.parent().attr('data-value');
        sliderHandle.append('<span class="value min-value" data-selected-value="'+ currentValue +'"></span>');
        
        if(minValue > 999) {
          value = value / 1000 + 'k';
        }
        $this.find('.value').html(value);
    });
    
  }


//This is the slider event function - end

function changeStatusBar(data, pageNumber ) {
	
	console.log('changeStatusBar')

    var dataLength = data.length;

    var  totalQuestNumber = 7;
	
    if (pageNumber < dataLength){
	
        var elem = document.getElementById("myBar");
        var width = 1;
        if(data[pageNumber].QuestionTypetext[0].QuestionNumber){

            var questNumber = data[pageNumber].QuestionTypetext[0].QuestionNumber;

            $( ".progress-container .current-quest-no" ).text(questNumber);
            $( ".progress-container .total-quest-no" ).text(totalQuestNumber);
        }
        
        var progressLength = (questNumber/totalQuestNumber)*100;

        elem.style.width = progressLength+'%';

        gsap.fromTo(".progress-container .next", {y: 110}, {y: 0, duration: 0.5, delay:0.2,});

    }
}

function boxQuestionChange(data, pageNumber, slectedBtn){

    var numberElements = data[pageNumber].QuestionTypetext[0].Questions.length; 


        if (data[pageNumber].QuestionTypetext[0].QuestionNumber==1){

            var hasActiveState='';

            for (var j = 0; j < numberElements; j++) {
                
                if($("#button-container .option").eq(j).hasClass('active')){
                    if (j==0){
                        hasActiveState = false;
                        animation1.playSegments([30, 60], true);
                        $("#button-container .option").eq(j).removeClass('active');
                    } else if (j==1){
                        hasActiveState = false;
                        animation2.playSegments([30, 60], true);
                        $("#button-container .option").eq(j).removeClass('active');
                    } else if (j==2){
                        hasActiveState = false;
                        animation3.playSegments([30, 60], true);
                        $("#button-container .option").eq(j).removeClass('active');
                    } else if (j==3){
                        hasActiveState = false;
                        animation4.playSegments([30, 60], true);
                        $("#button-container .option").eq(j).removeClass('active');
                    }
                } 
                        
            } 
            
            if (!hasActiveState){
                $("#button-container .option").eq(slectedBtn-1).addClass('active');
                
                hasActiveState = true;
                //$(this).addClass('active');

                if (slectedBtn==1){
                    animation1.playSegments([0, 30], true);              
                } else if (slectedBtn==2){
                    animation2.playSegments([0, 30], true);
                } else if (slectedBtn==3){
                    animation3.playSegments([0, 30], true);
                } else if (slectedBtn==4){
                    animation4.playSegments([0, 30], true);
                }
            }

            if(hasActiveState==true){
                $('.progress-container').addClass('active');
                $('.questions-container').addClass('active');
            }

        } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber==2){

            $('.progress-container').removeClass('active');
                
            var hasActiveState=null;
            
            if($("#button-container .option").eq(slectedBtn-1).hasClass('active')){
                if (slectedBtn==1){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = false;
                    score = score - 1;
                    questTwoScore = questTwoScore - 1;
                } else if (slectedBtn==2){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = false;
                    score = score - 1;
                    questTwoScore = questTwoScore - 1;
                } else if (slectedBtn==3){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = false;
                    score = score - 1;
                    questTwoScore = questTwoScore - 1;
                } else if (slectedBtn==4){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = false;
                    score = score - 1;
                    questTwoScore = questTwoScore - 1;
                }
            } 

            if (hasActiveState==null){
                $("#button-container .option").eq(slectedBtn-1).addClass('active');

                hasActiveState = true;

                if (slectedBtn==1){
                    score = score + 1;
                    questTwoScore = questTwoScore + 1;
                } else if (slectedBtn==2){
                    score = score + 1;
                    questTwoScore = questTwoScore + 1;
                } else if (slectedBtn==3){
                    score = score + 1;
                    questTwoScore = questTwoScore + 1;
                } else if (slectedBtn==4){
                    score = score + 1;
                    questTwoScore = questTwoScore + 1;
                }
            }               

            if(questTwoScore == 0){
                if (hasActiveState==false){
                    animation5.playSegments([30, 0], true);
                }
                
            } else if (questTwoScore == 1){
                if (hasActiveState==false){
                    animation5.playSegments([60, 30], true);
                } else {
                    animation5.playSegments([0, 30], true);
                }
            } else if (questTwoScore == 2){
                if (hasActiveState==false){
                    animation5.playSegments([90, 60], true);
                } else {
                    animation5.playSegments([30, 60], true);
                }
            } else if (questTwoScore == 3){
                if (hasActiveState==false){
                    animation5.playSegments([120, 90], true);
                } else {
                    animation5.playSegments([60, 90], true);
                }
            } else if (questTwoScore == 4){
                if (hasActiveState==false){
                    animation5.playSegments([150, 120], true);
                } else {
                    animation5.playSegments([90, 120], true);
                }
            }

            if(questTwoScore>=1){
                $('.progress-container').addClass('active');
            }

        } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber==3){

            var hasActiveState='';
            
            if($("#button-container .option").eq(slectedBtn-1).hasClass('active')){
                if (slectedBtn==1){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questThreeScore = questThreeScore - 1;
                } else if (slectedBtn==2){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questThreeScore = questThreeScore - 1;
                } else if (slectedBtn==3){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questThreeScore = questThreeScore - 1;
                } else if (slectedBtn==4){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questThreeScore = questThreeScore - 1;
                }
            } 

            if (!hasActiveState){
                $("#button-container .option").eq(slectedBtn-1).addClass('active');

                if (slectedBtn==1){
                    score = score + 1;
                    questThreeScore = questThreeScore + 1;
                } else if (slectedBtn==2){
                    score = score + 1;
                    questThreeScore = questThreeScore + 1;
                } else if (slectedBtn==3){
                    score = score + 1;
                    questThreeScore = questThreeScore + 1;
                } else if (slectedBtn==4){
                    score = score + 1;
                    questThreeScore = questThreeScore + 1;
                }
            }               

            if(questThreeScore == 0){
                if (hasActiveState==true){
                    animation6.playSegments([30, 0], true);
                }
                
            } else if (questThreeScore == 1){
                if (hasActiveState==true){
                    animation6.playSegments([60, 30], true);
                } else {
                    animation6.playSegments([0, 30], true);
                }
            } else if (questThreeScore == 2){
                if (hasActiveState==true){
                    animation6.playSegments([91, 60], true);
                } else {
                    animation6.playSegments([30, 60], true);
                }
            } else if (questThreeScore == 3){
                if (hasActiveState==true){
                    animation6.playSegments([120, 91], true);
                } else {
                    animation6.playSegments([60, 91], true);
                }
            }           
            
        } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber==6){

            var hasActiveState='';
            
            if($("#button-container .option").eq(slectedBtn-1).hasClass('active')){
                if (slectedBtn==1){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questSixScore = questSixScore - 1;
                } else if (slectedBtn==2){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questSixScore = questSixScore - 1;
                } else if (slectedBtn==3){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questSixScore = questSixScore - 1;
                } else if (slectedBtn==4){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = true;
                    score = score - 1;
                    questSixScore = questSixScore - 1;
                }
            } 

            if (!hasActiveState){
                $("#button-container .option").eq(slectedBtn-1).addClass('active');

                if (slectedBtn==1){
                    score = score + 1;
                    questSixScore = questSixScore + 1;
                } else if (slectedBtn==2){
                    score = score + 1;
                    questSixScore = questSixScore + 1;
                } else if (slectedBtn==3){
                    score = score + 1;
                    questSixScore = questSixScore + 1;
                } else if (slectedBtn==4){
                    score = score + 1;
                    questSixScore = questSixScore + 1;
                }
            }               

            if(questSixScore == 0){
                if (hasActiveState==true){
                    animation13.playSegments([30, 0], true);
                }
                
            } else if (questSixScore == 1){
                if (hasActiveState==true){
                    animation13.playSegments([60, 30], true);
                } else {
                    animation13.playSegments([0, 30], true);
                }
            } else if (questSixScore == 2){
                if (hasActiveState==true){
                    animation13.playSegments([90, 60], true);
                } else {
                    animation13.playSegments([30, 60], true);
                }
            } else if (questSixScore == 3){
                if (hasActiveState==true){
                    animation13.playSegments([120, 90], true);
                } else {
                    animation13.playSegments([60, 90], true);
                }
            }

        } else if (data[pageNumber].QuestionTypetext[0].QuestionNumber==7){

            $('.progress-container').removeClass('active');
                
            var hasActiveState=null;
            
            if($("#button-container .option").eq(slectedBtn-1).hasClass('active')){
                if (slectedBtn==1){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = false;
                    score = score - 1;
                    questSevenScore = questSevenScore - 1;
                } else if (slectedBtn==2){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = false;
                    score = score - 1;
                    questSevenScore = questSevenScore - 1;
                } else if (slectedBtn==3){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = false;
                    score = score - 1;
                    questSevenScore = questSevenScore - 1;
                } else if (slectedBtn==4){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = false;
                    score = score - 1;
                    questSevenScore = questSevenScore - 1;
                } else if (slectedBtn==5){
                    $("#button-container .option").eq(slectedBtn-1).removeClass('active');
                    hasActiveState = false;
                    score = score - 1;
                    questSevenScore = questSevenScore - 1;
                }
            } 

            if (hasActiveState==null){
                $("#button-container .option").eq(slectedBtn-1).addClass('active');

                hasActiveState = true;

                if (slectedBtn==1){
                    score = score + 1;
                    questSevenScore = questSevenScore + 1;
                } else if (slectedBtn==2){
                    score = score + 1;
                    questSevenScore = questSevenScore + 1;
                } else if (slectedBtn==3){
                    score = score + 1;
                    questSevenScore = questSevenScore + 1;
                } else if (slectedBtn==4){
                    score = score + 1;
                    questSevenScore = questSevenScore + 1;
                } else if (slectedBtn==5){
                    score = score + 1;
                    questSevenScore = questSevenScore + 1;
                }
            }               

            if(questSevenScore == 0){
                if (hasActiveState==false){
                    animation14.playSegments([30, 0], true);
                }
                
            } else if (questSevenScore == 1){
                if (hasActiveState==false){
                    animation14.playSegments([60, 30], true);
                } else {
                    animation14.playSegments([0, 30], true);
                }
            } else if (questSevenScore == 2){
                if (hasActiveState==false){
                    animation14.playSegments([90, 60], true);
                } else {
                    animation14.playSegments([30, 60], true);
                }
            } else if (questSevenScore == 3){
                if (hasActiveState==false){
                    animation14.playSegments([120, 90], true);
                } else {
                    animation14.playSegments([60, 90], true);
                }
            } else if (questSevenScore == 4){
                if (hasActiveState==false){
                    animation14.playSegments([150, 120], true);
                } else {
                    animation14.playSegments([90, 120], true);
                }
            } else if (questSevenScore == 5){
                if (hasActiveState==false){
                    animation14.playSegments([170, 150], true);
                } else {
                    animation14.playSegments([120, 150], true);
                }
            }

            if(questSevenScore>=1){
                $('.progress-container').addClass('active');
            }
        }
      
}

function displayFinal(data, pageNumber) {
    console.log('disply Final');

    var textDisplay = data[pageNumber].Pagetyeptext[0].Text;

    var solutionDisplay1 = data[pageNumber].SolutionTypetext[0].Solpath1;
    var solutionDisplay2 = data[pageNumber].SolutionTypetext[0].Solpath2;
    var solutionDisplay3 = data[pageNumber].SolutionTypetext[0].Solpath3;


    $('#questionContainer').addClass('hidden');
    $('#textContainer').removeClass('hidden');

    $( "#textContainer" ).html(textDisplay);

    $('.solution-container ').removeClass('hidden');

    if (totalScore>22){
        $( ".solution-container" ).html(solutionDisplay1);
    } else if (totalScore>13){
        $( ".solution-container" ).html(solutionDisplay2);
    } else if (totalScore=>0){
        $('.master-container').addClass('big-content');
        $( ".solution-container" ).html(solutionDisplay3);
    }
    
     // animation step 1 - text container h2 - fades in 
     gsap.set(".text-container h2", { autoAlpha:0 });
     gsap.to(".text-container h2", { autoAlpha:1, duration: 1, ease: "power3.out"});
     // animation step 2 - text container h3 - animates up / fades in
     gsap.set(".text-container h3", { autoAlpha:0, y:'65%' });
     gsap.to(".text-container h3", { y: '0', autoAlpha:1, duration: 1, delay:1, ease: "sine.out"});
     // animation step 3 - animation moves in from left and then down

     gsap.set(".animation-container .lottie-env", { x: '-23%', y: '33%', scale:1.2 });

     if (window.matchMedia('(max-width: 767px)').matches) {
        // var tl = gsap.timeline();
        // tl.to(".animation-container .lottie-env", {duration: 1, x: '-23%', y: '33%', scale:1, autoAlpha:1}) 
        //   .to(".animation-container .lottie-env", {duration: 0.5, x: 0, y: '60%'})
        //   .to(".animation-container .lottie-env", {duration: 1.5, x: 0, y: '130%'});
        gsap.to(".animation-container .lottie-env", {duration: 1.5, x: '-32%', y: '120%', scale:0.6, ease: "sine.out"});
    } else {  
        // var tl = gsap.timeline();
        // tl.to(".animation-container .lottie-env", {duration: 1, x: '-23%', y: '33%', scale:1, autoAlpha:1}) 
        //   .to(".animation-container .lottie-env", {duration: 0.5, x: 0, y: '60%'})
        //   .to(".animation-container .lottie-env", {duration: 1.5, x: 0, y: '112%'});
        gsap.to(".animation-container .lottie-env", {duration: 1.5, x: 0, y: '115%', scale:1, ease: "sine.out"});
    }

     // animation step 4 - text fades in 
     gsap.set(".solution-container", { autoAlpha:0 });
     gsap.to(".solution-container", { autoAlpha:1, duration: 1.5, delay:2, ease: "sine.out"});
     // animation step 5 - button fades in 
     gsap.set(".findOut", { autoAlpha:0 });
     gsap.to(".findOut", { autoAlpha:1, duration: 1, delay:2.5, ease: "sine.out"});


     $( "a.findOut" ).on( "click", function() {
        console.log('last');
        // Display Results
        displayOutro(data, pageNumber);
    
    });

}

function animationFlow(data, pageNumber){

    console.log('animations');
    if (window.matchMedia('(max-width: 767px)').matches) {
        var xPos = data[pageNumber].Animation[1].AnimationX;
        var yPos = data[pageNumber].Animation[1].AnimationY;
        var Scale = data[pageNumber].Animation[1].AnimationScale;
        var duration = data[pageNumber].Animation[1].AnimationDuration;
        var transition = data[pageNumber].Animation[1].AnimationTransition;
    } else {  
        var xPos = data[pageNumber].Animation[0].AnimationX;
        var yPos = data[pageNumber].Animation[0].AnimationY;
        var Scale = data[pageNumber].Animation[0].AnimationScale;
        var duration = data[pageNumber].Animation[0].AnimationDuration;
        var transition = data[pageNumber].Animation[0].AnimationTransition;
    }
    
    if (data[pageNumber].Page!='Seventeen'){

        gsap.to(".animation-container .lottie-env", { x: xPos, y: yPos, scale: Scale, duration: duration, ease: "power3.out"});

        // animation transition question Lottie
        if (data[pageNumber].Page=='five'){
            
            gsap.set("#lottie5", { opacity:0});
            gsap.to("#lottie5", {  opacity:1, duration: 1, ease: "sine.out"});

        } else if (data[pageNumber].Page=='seven'){
            $("#lottie5").removeAttr('style');
            gsap.set("#lottie6", { opacity:0});
            gsap.to("#lottie6", {  opacity:1, duration: 1, ease: "sine.out"});

        } else if (data[pageNumber].Page=='nine'){
            $("#lottie6").removeAttr('style');
            gsap.set("#lottie7", { opacity:0});
            gsap.to("#lottie7", {  opacity:1, duration: 1, ease: "sine.out"});


        } else if (data[pageNumber].Page=='eleven'){
            $("#lottie7").removeAttr('style');
            gsap.set("#lottie8", { opacity:0});
            gsap.to("#lottie8", {  opacity:1, duration: 1, ease: "sine.out"});
        } else if (data[pageNumber].Page=='thirteen'){
            $("#lottie8").removeAttr('style');
            gsap.set("#lottie13", { opacity:0});
            gsap.to("#lottie13", {  opacity:1, duration: 1, ease: "sine.out"});
        } else if (data[pageNumber].Page=='fifteen'){
            $("#lottie13").removeAttr('style');
            gsap.set("#lottie14", { opacity:0});
            gsap.to("#lottie14", {  opacity:1, duration: 1, ease: "sine.out"});

        }
         
    }
   
}

function displayOutro(data, pageNumber){

    if (window.matchMedia('(max-width: 767px)').matches) {
        $('.animation-container').addClass('hidden');
        displayCasestudyLinks();

    } else {  
       
        // animation step 1 - text container h2 - fades in 
        gsap.to(".text-container", { y: '4%', autoAlpha:0, duration: 1, ease: "power3.out"});
        
        // animation step 4 - text fades in 
        gsap.to(".solution-container", { y:'-10%',autoAlpha:0, duration: 1, ease: "sine.out"});
        // animation step 5 - button fades in 
        //gsap.to(".header-container", { autoAlpha:0, duration: 1, ease: "sine.out"});

        var tl = gsap.timeline();
        tl.to(".animation-container .lottie-env", {duration: 0.8, x: '57%', y: '82%', scale:1, ease: "none"}) 
        .to(".animation-container .lottie-env", {duration: 0.5, x: '71%', y: '100%', scale:1.3, ease: "none"})
        .to(".animation-container .lottie-env", {duration: 0.4, x: '59%', y: '67%', scale:1.5, ease: "none", onComplete: startFinalAnim})
        // .to(".animation-container .lottie-env", {duration: 0.5, x: '43%', y: '55%', ease: "none"})
        .to(".animation-container .lottie-env", {duration: 5, x: '-127%', y: '55%', ease: "sine.in", onComplete: startFinalDot})
        .to(".animation-container .lottie-env", {duration: 0, x: '-17%', y: '39%', ease: "sine.in"})
        .to(".animation-container .lottie-env", {duration: 5, x: '-9%', y: '-51%', scale:2, ease: "none", onComplete: displayCasestudyLinks});

        gsap.to("#lottie", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie1", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie2", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie3", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie4", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie5", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie6", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie7", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie8", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie9", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie10", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"});
        gsap.to("#lottie11", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie12", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie13", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie14", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"}); 
        gsap.to("#lottie15", { autoAlpha:0, duration: 1, delay:0.3, ease: "sine.out"});  
        gsap.to("#lottie16", { autoAlpha:1, duration: 1, delay:0.3, ease: "sine.out"});  
        gsap.to("#lottie16", { autoAlpha:0, duration: 0.1, delay:6.5, ease: "sine.out"});
        gsap.to("#lottie17", { autoAlpha:1, duration: 0.1, delay:6.5, ease: "sine.out"});  
    
       
    }

}

function startFinalAnim(){
    console.log('callback');
    animation16.playSegments([0, 450], true);

   
};

function startFinalDot(){
    console.log('callback');
    animation17.playSegments([0, 300], true);
    $(".casestudy-link-container").removeClass('hidden');
    $(".casestudy-text-container").removeClass('hidden');
    $('.master-container').removeClass('big-content');

    gsap.set(".casestudy-text-container h2", {autoAlpha:0});
    gsap.to(".casestudy-text-container h2", { autoAlpha:1, duration: 1, delay:2, ease: "power2.out"});

    gsap.set(".download-container", {y:"100%", autoAlpha:0});
    gsap.to(".download-container", { y:0, autoAlpha:1, duration: 1, delay:2.5, ease: "power2.out"});

    gsap.set(".download-container img", {y:"100%", autoAlpha:0});
    gsap.to(".download-container img", { y:0, autoAlpha:1, duration: 1, delay:2.8, ease: "power2.out"});

    gsap.set(".retake", {autoAlpha:0});
    gsap.to(".retake", { autoAlpha:1, duration: 1, delay:3, ease: "power2.out"});

     // Move the casestudy dots
     gsap.set("#arab", {top: '102%', autoAlpha:0});
     gsap.to("#arab", { top:'19%', autoAlpha:1, duration: 1, delay:3, ease: "power2.out"});
     gsap.set("#spotify", {top: '92%', autoAlpha:0});
     gsap.to("#spotify", {top: '22%', autoAlpha:1, duration: 1, delay:3,  ease: "power2.out"});
     gsap.set("#justeat", {top: '82%', autoAlpha:0});
     gsap.to("#justeat", {top: '51%', autoAlpha:1, duration: 1, delay:3,ease: "power2.out"});
     gsap.set("#zulily", {top: '102%', autoAlpha:0});
     gsap.to("#zulily", {top: '56%', autoAlpha:1, duration: 1, delay:3,ease: "power2.out"});
     gsap.set("#paypal", {top: '92%', autoAlpha:0});
     gsap.to("#paypal", {top: '68%', autoAlpha:1, duration: 1, delay:3, ease: "power2.out"});
     gsap.set("#brandfolder", {top: '102%', autoAlpha:0});
     gsap.to("#brandfolder", {top: '80%', autoAlpha:1, duration: 1, delay:3,ease: "power2.out"});
     gsap.set("#ticket", {top: '92%', autoAlpha:0});
     gsap.to("#ticket", {top: '86%', autoAlpha:1, duration: 1, delay:3, ease: "power2.out"});

     // Move the casestudy dots
     gsap.set(".casestudy-link-container .one", {top: '92%', autoAlpha:0});
     gsap.to(".casestudy-link-container .one", { top:'16%', autoAlpha:1, duration: 1.5, delay:2.5, ease: "power2.out"});
     gsap.set(".casestudy-link-container .two", {top: '82%', autoAlpha:0});
     gsap.to(".casestudy-link-container .two", {top: '16%', autoAlpha:1, duration: 1.5, delay:2.5,  ease: "power2.out"});
     gsap.set(".casestudy-link-container .three", {top: '72%', autoAlpha:0});
     gsap.to(".casestudy-link-container .three", {top: '51%', autoAlpha:1, duration: 1.5, delay:2.5,ease: "power2.out"});
     gsap.set(".casestudy-link-container .four", {top: '92%', autoAlpha:0});
     gsap.to(".casestudy-link-container .four", {top: '42%', autoAlpha:1, duration: 1.5, delay:2.5,ease: "power2.out"});
     gsap.set(".casestudy-link-container .five", {top: '82%', autoAlpha:0});
     gsap.to(".casestudy-link-container .five", {top: '73%', autoAlpha:1, duration: 1.5, delay:2.5, ease: "power2.out"});
     gsap.set(".casestudy-link-container .six", {top: '92%', autoAlpha:0});
     gsap.to(".casestudy-link-container .six", {top: '70%', autoAlpha:1, duration: 1.5, delay:2.5,ease: "power2.out"});
     gsap.set(".casestudy-link-container .seven", {top: '82%', autoAlpha:0});
     gsap.to(".casestudy-link-container .seven", {top: '86%', autoAlpha:1, duration: 1.5, delay:2.5, ease: "power2.out"});
};

function displayCasestudyLinks(){

    gsap.to("#lottie17", { autoAlpha:0, duration: 0.5, ease: "sine.out"});

    $('.master-container').addClass('case-pop');

    if (window.matchMedia('(max-width: 767px)').matches) {
        $(".casestudy-link-container").removeClass('hidden');
        $(".casestudy-text-container").removeClass('hidden');

        gsap.set(".casestudy-text-container h2", {autoAlpha:0});
        gsap.to(".casestudy-text-container h2", { autoAlpha:1, duration: 1, delay:2, ease: "power2.out"});

        gsap.set(".download-container", {y:"100%", autoAlpha:0});
        gsap.to(".download-container", { y:0, autoAlpha:1, duration: 1, delay:2.5, ease: "power2.out"});

        gsap.set(".retake", {autoAlpha:0});
        gsap.to(".retake", { autoAlpha:1, duration: 1, delay:3, ease: "power2.out"});

        // Move the casestudy dots in MOBILE
        gsap.set("#arab", {top: '102%', autoAlpha:0});
        gsap.to("#arab", { top:'36%', autoAlpha:1, duration: 1, delay:1, ease: "power2.out"});
        gsap.set("#spotify", {top: '92%', autoAlpha:0});
        gsap.to("#spotify", {top: '34%', autoAlpha:1, duration: 1, delay:1,  ease: "power2.out"});
        gsap.set("#justeat", {top: '82%', autoAlpha:0});
        gsap.to("#justeat", {top: '44%', autoAlpha:1, duration: 1, delay:1,ease: "power2.out"});
        gsap.set("#zulily", {top: '102%', autoAlpha:0});
        gsap.to("#zulily", {top: '50%', autoAlpha:1, duration: 1, delay:1,ease: "power2.out"});
        gsap.set("#paypal", {top: '92%', autoAlpha:0});
        gsap.to("#paypal", {top: '55%', autoAlpha:1, duration: 1, delay:1, ease: "power2.out"});
        gsap.set("#brandfolder", {top: '102%', autoAlpha:0});
        gsap.to("#brandfolder", {top: '61%', autoAlpha:1, duration: 1, delay:1,ease: "power2.out"});
        gsap.set("#ticket", {top: '92%', autoAlpha:0});
        gsap.to("#ticket", {top: '64%', autoAlpha:1, duration: 1, delay:1, ease: "power2.out"});

        // Move the casestudy dots in MOBILE
        gsap.set(".casestudy-link-container .one", {top: '92%', autoAlpha:0});
        gsap.to(".casestudy-link-container .one", { top:'9%', autoAlpha:1, duration: 1, delay:1, ease: "power2.out"});
        gsap.set(".casestudy-link-container .two", {top: '82%', autoAlpha:0});
        gsap.to(".casestudy-link-container .two", {top: '16%', autoAlpha:1, duration: 1, delay:1,  ease: "power2.out"});
        gsap.set(".casestudy-link-container .three", {top: '72%', autoAlpha:0});
        gsap.to(".casestudy-link-container .three", {top: '39%', autoAlpha:1, duration: 1, delay:1,ease: "power2.out"});
        gsap.set(".casestudy-link-container .four", {top: '92%', autoAlpha:0});
        gsap.to(".casestudy-link-container .four", {top: '44%', autoAlpha:1, duration: 1, delay:1,ease: "power2.out"});
        gsap.set(".casestudy-link-container .five", {top: '82%', autoAlpha:0});
        gsap.to(".casestudy-link-container .five", {top: '60%', autoAlpha:1, duration: 1, delay:1, ease: "power2.out"});
        gsap.set(".casestudy-link-container .six", {top: '92%', autoAlpha:0});
        gsap.to(".casestudy-link-container .six", {top: '70%', autoAlpha:1, duration: 1, delay:1,ease: "power2.out"});
        gsap.set(".casestudy-link-container .seven", {top: '82%', autoAlpha:0});
        gsap.to(".casestudy-link-container .seven", {top: '69%', autoAlpha:1, duration: 1, delay:1, ease: "power2.out"});
    }
    

    $(".text-container").addClass('hidden');
    $(".solution-container").addClass('hidden');

    gsap.set(".cursor__ball--big", { x: '47vw', y: '20vh', scale:1.9}); 
    gsap.set(".cursor__ball--small", { x: '47.5vw', y: '20.5vh', scale:2});
    $('.cursor').addClass('active');

    // setTimeout( 
    //     function(){ 
    //         $('.cursor').removeClass('active');
    //         gsap.set(".cursor__ball--big", { scale:1}); 
    //         gsap.set(".cursor__ball--small", { scale:1});
    //     }, 2000 );

    // $( ".option" ).mouseover(function() {
    //     gsap.to(bigBall, { scale: 1.75, duration: 0.3, ease: "none"} );
    //     $('.cursor').addClass('active');
    // })


    // $( ".option" ).mouseleave(function() {
    //     gsap.to(bigBall, { scale: 1, duration: 0.3, ease: "none"} );
    //     $('.cursor').removeClass('active');
    // })

   
};

// $( ".case a" ).on( "click", function() {

//     var numberShow = 7;

//     for (var i = 0; i < numberShow; i++) {
//         $('.casestudy-link-container .case').eq(i).addClass('hidden');
//     }
    
//     var imageMove = $(this).parent();
//     $(imageMove).removeClass('hidden');
//     $(this).addClass('hidden');
//    // displayCasestudyText(data, pageNumber, caseStudy);
//    gsap.to(imageMove, { top:'0%', left: '-9%', backgroundSize: '100%',rotation: 45, scale: 3, duration: 1.5, ease: "power3.out"});
//    //gsap.to(".casestudy-link-container", { autoAlpha:0, duration: 1, ease: "power3.out"});

//    var customer = data[pageNumber].SolutionTypetext[0].Casestudy[0].Customer;
//    var Headline = data[pageNumber].SolutionTypetext[0].Casestudy[0].Headline;
//    var Body = data[pageNumber].SolutionTypetext[0].Casestudy[0].Body;
//    var KeyStats = data[pageNumber].SolutionTypetext[0].Casestudy[0].KeyStats;
//    var Quote = data[pageNumber].SolutionTypetext[0].Casestudy[0].Customer;
//    $( ".casestudy-text-popup-container" ).removeClass('hidden');
//    $( ".casestudy-text-popup-container" ).html(Headline+"<div class='body-container'>"+Body+"</div>"+KeyStats+Quote);
//    $( ".casestudy-text-container h2" ).addClass('hidden');

// });

$( "a.retake" ).on( "click", function() {
    
    location.reload()

});




function displayCasestudyText(data, pageNumber, caseStudy){

    gsap.to(".case img", { x:0, y: 0, rotation: 1, scale: 3, duration: 1.5, ease: "power3.out"});

};

window.addEventListener("resize", windowResizeFunction);


function windowResizeFunction() {
	console.log('windowResizeFunction');
	


	var newWidth = window.innerWidth;
	var quizContainWidth = $( ".cx-blade-bgcolor-F5F6F9" ).width();
	var widthQuizCont = quizContainWidth*5;
	
	$(".quiz-container-slider").css("width", widthQuizCont);
	
}