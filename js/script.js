/*button up*/

var top_show = 150; 
var delay = 1000; 
$(document).ready(function () {
    $(window).scroll(function () {
       
        if ($(this).scrollTop() > top_show) $('#top').fadeIn();
        else $('#top').fadeOut();
    });
    $('#top').click(function () { 
        
        $('body, html').animate({
            scrollTop: 0
        }, delay);
    });/* end button up */
    

 var arr=$('.table_count p').map(function(i,x){
  return $(x).text().replace('%','')*1;
});
for(var i in arr){
    if(arr[i]<0){
        $('.table_count p').eq(i).css('color','#cc0000')
    }
}
   

var data = { 
    series: [
            { value: 60, name: 'Arsenal', className: 'my-custom-class-one' },
            { value: 20, name: 'MAnchester UTD', className: 'my-custom-class-two' }, 
            { value: 15, name: 'SToke city', className: 'my-custom-class-three' },
            { value: 5, name: 'Sheffield', className: 'my-custom-class-four' }
            ]}; 
var sum = function (a, b) {
     return a + b 
    }; 
var options = {
  width: '600px',
  height: '600px'
};    
new Chartist.Pie('.ct-chart', data, {
     labelInterpolationFnc: function (value, index) { return data.series[index].name; }
     });




/*rightBar*/
var per = 50;
    //$('.rightBarInner span').animateNumber({ number: per });
    $('.rightBarInner').css('height',per+'%');
    $('.rightBarInner span').html(per+'%');
/*end rightBar*/   

/*leftBar*/
var percentDown = -23;
if(percentDown<0){
    percentDown = Math.abs(percentDown);
        $('.leftBarInner').css('height',percentDown+'%');
        $('.leftBarInner span').html('-'+percentDown+'%');
        $('.topInner').css('display','none');
        $('.subLeftBar').removeClass('active');
    }else{
        $('.topInner').css('height',percentDown+'%');
        $('.topInner span').html(percentDown+'%');
        $('.leftBarInner').css('display','none');
        $('.subLeftBar').addClass('active');
        
    }
/*end leftBar*/

});
$('.chart').attr('data-percent', 76);
$(function() {
    $('.chart').easyPieChart({
        size:540,
        easing: 'easeOutElastic',
        delay: 5000,
        barColor: '#339dda',
        trackColor: '#ebf5fb',
        scaleLength: 0,
        lineWidth: 92,
        trackWidth: 92,
        lineCap: 'butt',
        onStep: function(from, to, percent) {
            this.el.children[0].innerHTML = Math.round(percent);
        }
    });
});


   
    










