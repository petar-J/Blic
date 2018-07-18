
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
                    let cond = $(document).scrollTop() > $('.container').offset().top;
                    if (cond){
                        $('.active').text('Top');
                        $('.active').click(function(event){
                            if (cond){
                                event.preventDefault();
                                window.scrollTo({top: 0, 
                                            left: 0, 
                                            behavior: 'smooth' 
                                            });
                            };
                        });
                    }else{
                        $('.active').text('Naslovna');
                    }
                });

                $('.drop-btn').click(function(){
                    $('.drop').slideToggle(300)
                });
                
                $('.drop li').click(function(){
                    $('.drop').slideUp(300)
                });
            });