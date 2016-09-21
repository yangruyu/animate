$(function () {
    function normal() {
    $('.out-circle').animate({
        width:'1.53rem',
        height:'1.53rem',
    },800).queue(function () {
        $(this).animate({
            width:'1.43rem',
            height:'1.43rem'
        },800).dequeue();
    })
    $('.inner-circle').css({
        border:'0.15rem solid #fff'
    }).delay(1600).animate({
        width:'0.78rem',
        height:'0.78rem',
    },1000).queue(function () {
        $(this).animate({
            width:'0.9rem',
            height:'0.9rem'
        },1000).dequeue();
    })
    }
    function speed() {
        $('.out-circle').animate({
            width:'1.53rem',
            height:'1.53rem',
        },400).queue(function () {
            $(this).animate({
                width:'1.43rem',
                height:'1.43rem'
            },400).dequeue();
        })
        $('.inner-circle').delay(800).css({
            border:'0.15rem solid red'
        }).animate({
            width:'0.78rem',
            height:'0.78rem',
        },600).queue(function () {
            $(this).animate({
                width:'0.9rem',
                height:'0.9rem'
            },600).dequeue();
        })
    }
    function second() {
        $('.out-circle').animate({
            width:'1.53rem',
            height:'1.53rem',
        },400).queue(function () {
            $(this).animate({
                width:'1.43rem',
                height:'1.43rem'
            },400).dequeue();
        })
        $('.inner-circle').delay(800).css({
            border:'0.15rem solid green'
        }).animate({
            width:'0.78rem',
            height:'0.78rem',
        },600).queue(function () {
            $(this).animate({
                width:'0.9rem',
                height:'0.9rem'
            },600).dequeue();
        })
    }
    function ciacle() {
        setTimeout(function () {
            $('.words span').text('HI!');
            normal();//2000
        },0);
        setTimeout(function () {
            $('.words span').text('我很生气');
            speed();//2000
        },3600);
        setTimeout(function () {
            $('.words span').text('我很高兴');
            second();//2000
        },5600);
    }
    ciacle();
    setInterval(ciacle,8600);
})