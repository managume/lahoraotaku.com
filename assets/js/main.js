function audioteca(){
    
    
}

$(document).ready(function(){
    const obj = {
        feed: null,
        last: {
            title: null,
            link: null,
            thumbnail: null
        }
    }
    const feedUrl = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FLaHoraOtaku&api_key=zdmc8xydnlkm6wnnfdgglxd0ivztehhaiahykdmn&order_by=pubDate&order_dir=desc&count=200";
    fetch(feedUrl)
    .then(response => response.json())
    .then(data => {
        var audio  = data.items[0];
        $('#audio-title').html('<i class="fas fa-podcast"></i> '+audio.title);
        $('#audio-player').attr('src',audio.enclosure.link);
        console.log(audio);
        $('#audio-description').html(audio.description);
        $('#player .load-message').fadeToggle();
        $('#audio-title').fadeToggle();
        $('#audio-player').fadeToggle();

        var html="";
        data.items.forEach(item => {
            html += `
            <li class="audioteca-item" id="`+item.guid+`">
                <i class="fas fa-podcast"></i> 
                <h3>`+item.title+`</h3>
                <i class="em em-calendar" title="`+item.pubDate+`"></i>
                <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
            </li>
            `;
        });
        $('#audioteca-list').html(html);
        $('#audioteca .load-message').fadeToggle();
    });
});

