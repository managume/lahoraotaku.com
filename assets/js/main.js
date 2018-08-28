
/*const episodios = {
        01 : 7,
        02 : 30,
        03 : 17,
        04 : 24,
        05 : 24,
        06 : 15,
        07 : 14,
        08 : 10,
        09 : 9,
}*/

$(document).ready(function(){
    //Function to make the API Request and display the feed information of podcast
    function displayFeed(data){
        console.log(data);
        var audio  = data.items[0];
        $('#audio-title').html('<i class="fas fa-podcast"></i> '+audio.title);
        $('#audio-player').attr('src',audio.enclosure.link);
        $('#audio-description').html(audio.description);
        $('#player .load-message').fadeToggle();
        $('#audio-title').fadeToggle();
        $('#audio-player').fadeToggle();

        data.items.forEach(item => {
            if(item.title.includes('9x')){
                $('#T09 > .season-episodes').append(
                `<li class="episode" id="`+item.guid+`">
                    <i class="fas fa-podcast"></i> 
                    <h3 class="episode-title">`+item.title+`</h3>
                    <i class="em em-calendar" title="`+item.pubDate+`"></i>
                    <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
                </li>`
                );
            }else if(item.title.includes('8x')){
                $('#T08 > .season-episodes').append(
                `<li class="episode" id="`+item.guid+`">
                    <i class="fas fa-podcast"></i> 
                    <h3 class="episode-title">`+item.title+`</h3>
                    <i class="em em-calendar" title="`+item.pubDate+`"></i>
                    <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
                </li>`
                );
            }else if(item.title.includes('7x')){
                $('#T07 > .season-episodes').append(
                `<li class="episode" id="`+item.guid+`">
                    <i class="fas fa-podcast"></i> 
                    <h3 class="episode-title">`+item.title+`</h3>
                    <i class="em em-calendar" title="`+item.pubDate+`"></i>
                    <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
                </li>`
                );
            }else if(item.title.includes('6x')){
                $('#T06 > .season-episodes').append(
                `<li class="episode" id="`+item.guid+`">
                    <i class="fas fa-podcast"></i> 
                    <h3 class="episode-title">`+item.title+`</h3>
                    <i class="em em-calendar" title="`+item.pubDate+`"></i>
                    <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
                </li>`
                );
            }else if(item.title.includes('5x')){
                $('#T05 > .season-episodes').append(
                `<li class="episode" id="`+item.guid+`">
                    <i class="fas fa-podcast"></i> 
                    <h3 class="episode-title">`+item.title+`</h3>
                    <i class="em em-calendar" title="`+item.pubDate+`"></i>
                    <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
                </li>`
                );
            }else if(item.title.includes('4x')){
                $('#T04 > .season-episodes').append(
                `<li class="episode" id="`+item.guid+`">
                    <i class="fas fa-podcast"></i> 
                    <h3 class="episode-title">`+item.title+`</h3>
                    <i class="em em-calendar" title="`+item.pubDate+`"></i>
                    <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
                </li>`
                );
            }else if(item.title.includes('3x')){
                $('#T03 > .season-episodes').append(
                `<li class="episode" id="`+item.guid+`">
                    <i class="fas fa-podcast"></i> 
                    <h3 class="episode-title">`+item.title+`</h3>
                    <i class="em em-calendar" title="`+item.pubDate+`"></i>
                    <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
                </li>`
                );
            }else if(item.title.includes('2x')){
                $('#T02 > .season-episodes').append(
                `<li class="episode" id="`+item.guid+`">
                    <i class="fas fa-podcast"></i> 
                    <h3 class="episode-title">`+item.title+`</h3>
                    <i class="em em-calendar" title="`+item.pubDate+`"></i>
                    <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
                </li>`
                );
            }else{
                $('#T01 > .season-episodes').append(
                `<li class="episode" id="`+item.guid+`">
                    <i class="fas fa-podcast"></i> 
                    <h3 class="episode-title">`+item.title+`</h3>
                    <i class="em em-calendar" title="`+item.pubDate+`"></i>
                    <a href="`+item.enclosure.link.replace('http:','https:')+`"><i class="em em-file_folder"></i></a>
                </li>`
                );
            }
        });
        $.when($('#audioteca .load-message').fadeToggle()).then(function(){
            $('#audioteca .toggle-season-list').fadeToggle();
        });
        $('body').on('click','.toggle-season-list',function(){
            var season_list = $(this).parent().parent().find('ul.season-episodes')[0];
            $(season_list).slideToggle();
        });
    }
    //Working with localStorage
    if(localStorage.LHOFeed){
        var data = JSON.parse(localStorage.getItem('LHOFeed'));
        displayFeed(data);
    }else{
        const feedUrl = "https://api.rss2json.com/v1/api.json?rss_url=http%3A%2F%2Ffeeds.feedburner.com%2FLaHoraOtaku&api_key=zdmc8xydnlkm6wnnfdgglxd0ivztehhaiahykdmn&order_by=pubDate&order_dir=desc&count=200";
        fetch(feedUrl)
        .then(response => response.json())
        .then(data => {
            displayFeed(data);
            localStorage.setItem('LHOFeed',JSON.stringify(data));
        });
    }
});

