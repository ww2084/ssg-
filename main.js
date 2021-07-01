$(function(){
  
    var titleData = [
      {
        imgUrl: 'images/14.png',
        bgUrl: 'images/ssg_wordmark1.png'
      },
      {
        imgUrl: 'images/0.png',
        bgUrl: 'images/ssg_wordmark3.png'
      },
      {
        imgUrl: 'images/35.png',
        bgUrl: 'images/ssg_wordmark2.png'
      },
    ];
  
    
    $('.pager > ul > li').eq(0).click(function(){
      
      $('figure img')
        .attr('src',  titleData[0].imgUrl);
      
      $('#title figure').css('background-image', `url(${titleData[0].bgUrl})`);
      console.log(titleData[0].bgUrl)
    });
  
    $('.pager > ul > li').eq(1).click(function(){
      $('figure img')
        .attr('src',  titleData[1].imgUrl);
      $('#title figure').css('background-image', `url(${titleData[1].bgUrl})`);  
      console.log(titleData[0].bgUrl)
    });
  
    $('.pager > ul > li').eq(2).click(function(){
      $('figure img')
        .attr('src',  titleData[2].imgUrl);
        $('#title figure').css('background-image', `url(${titleData[2].bgUrl})`);    
    });
  
  
  })