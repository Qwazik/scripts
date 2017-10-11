function navGit(params){
    var navigationContainer = $('<ul class="navigation-git"></ul>');
    navigationContainer.css({
        position: 'fixed',
        bottom: 0,
        left: 0,
        right: 0,
        background: 'rgba(0,0,0,.8)',
        margin: 0,
        padding: 20,

        'z-index': 99999999999
    });
    var navigationButton = $('<button>Скрыть</button>');
    navigationButton.css({
        position: 'absolute',
        left:'50%',
        bottom: '100%',
        background: 'rgba(0,0,0,.8)',
        color: 'white',
        height: 40,
        width: 90,
        'text-align':'center',
        border:'none',
        transform: 'translate(-50%, 0)',
        'border-top-left-radius': '50%',
        'border-top-right-radius': '50%',
    }).click(function(){
        if(navigationContainer.is('.not-show')){
            navigationContainer.removeClass('not-show');
            navigationContainer.stop(true, true).animate({
                bottom: 0
            }, 500, function(){
                navigationButton.css({
                    opacity: 1
                }).text('Скрыть');
            });
        }else{
            navigationContainer.addClass('not-show');
            navigationContainer.stop(true, true).animate({
                bottom: -$(navigationContainer).outerHeight()
            }, 500, function(){
                navigationButton.css({
                    opacity: .3
                }).text('Показать');
            });
        }
    });
    for(i in params){
        var navigationItem = $('<li style="display: inline-block; margin-right: 20px;"><a style="color: white;" href="'+params[i]+'">'+i+'</a></li>');
        $(navigationContainer).append(navigationItem);
        
    }
    navigationContainer.append(navigationButton);
    $('body').append(navigationContainer);
}

