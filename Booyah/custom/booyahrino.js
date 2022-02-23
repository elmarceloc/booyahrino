setInterval(() => {
    if (window.location.toString().includes('chat')){
        document.querySelector('.player-container').remove()    

        var path = chrome.extension.getURL('custom/chat.css');
        $('head').append($('<link>')
            .attr("rel","stylesheet")
            .attr("type","text/css")
            .attr("href", path));
            console.log(path)
    }else{
        document.querySelector('.components-side-nav-right').remove()    
        var path = chrome.extension.getURL('custom/player.css');
        $('head').append($('<link>')
            .attr("rel","stylesheet")
            .attr("type","text/css")
            .attr("href", path));
            console.log(path)
    }

}, 500);

