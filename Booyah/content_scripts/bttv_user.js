
setTimeout(() => {

    var channel =  document.querySelector('h2').innerHTML.replace('BetterTTV','').replace("'s",'').replace('Emotes','').replace('-','').trim().toLocaleLowerCase()

    console.log(channel)

    fetch('https://bapi.zzls.xyz/api/emotes/'+channel)
        .then(response => response.json())
        .then(data => {
            

            data.emotes.forEach(emote => {

                if(emote.source == 'bttv'){

                    document.querySelector("div[class*='EmoteCards_emoteCards']").insertAdjacentHTML( 'beforeend',   
                    `<a style="background-color:#575543!important" class="EmoteCards_emoteCard__3kWFf" href="/emotes/${emote.id}"><img
                        class="EmoteCards_emoteCardImage__ibOi+" src="https://cdn.betterttv.net/emote/${emote.id}/3x"
                        alt="">
                    <div class="EmoteCards_emoteCardCode__BP2dI">${emote.name}</div>
                    </a>`);
                }
            });

        });


    /*<a class="EmoteCards_emoteCard__3kWFf" href="/emotes/5ae0347b0af0ce6122a11663"><img class="EmoteCards_emoteCardImage__ibOi+" src="https://cdn.betterttv.net/emote/5ae0347b0af0ce6122a11663/3x" alt=""><div class="EmoteCards_emoteCardCode__BP2dI">Monouwu</div></a>

    document.querySelector("div[class*='EmoteCards_emoteCards']")*/
}, 3000);