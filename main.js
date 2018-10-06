
$(document).ready(function(){
    $('a').click(function(event){
        var target = $(this.hash).offset();
        event.preventDefault();
        window.scrollTo({top: target.top-60, 
                    left: 0, 
                    behavior: 'smooth' 
        });
    });

    $(window).scroll(function(){
        
        let nav_items = document.querySelectorAll('.nav_container>*');
        for (let i = 0; i<nav_items.length; i++){
            nav_items[i].classList.remove('active');

            let item = document.querySelector(nav_items[i].hash);
            if (item){
                if (item.getBoundingClientRect().top-100 <= 0 && item.getBoundingClientRect().bottom-100 > 0){
                    nav_items[i].classList.add('active');
                }
            };
        };

    });

    $('.drop-btn').click(function(){
        $('.drop').slideToggle(300)
    });
    
    $('.drop li').click(function(){
        $('.drop').slideUp(300)
    });
});