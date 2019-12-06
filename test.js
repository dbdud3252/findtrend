var maxVideos = 20;
$(document).ready(function () {
    $('.tabs').tabs();
});

var tagdata = new Array;
const i = 0;



$(document).ready(function () {
    $.get(
        "https://www.googleapis.com/youtube/v3/videos", {
        part: 'snippet',
        chart: 'mostPopular',
        kind: 'youtube#videoListResponse',
        maxResults: maxVideos,
        regionCode: 'KR',
        key: 'AIzaSyDxj4-s9J4U0tSp2Apl6xlEEj9FOi-0VRM'
    },
        function (data) {
            var output;
            $.each(data.items, function (i, item) {
                //console.log(item);
                vidId = item.id;
                videTitle = item.snippet.title;
                description = item.snippet.description;
                thumb = item.snippet.thumbnails.high.url;
                channelTitle = item.snippet.channelTitle;
                videoDate = item.snippet.publishedAt;
                Catagoryid = item.snippet.categoryId;
                cID = item.snippet.channelId;
                Tags = item.snippet.tags;

                addTagdata(Tags);
                //tagdata[i] = item.snippet.tags;
                //console.log(tagdata[i]);

                i = i + 1;
                // debugger;

                //console.log(Tags);



            })

            //console.log(tagdata);
            Count();

        }
    );
});

function addTagdata(array) {
    tagdata = tagdata.concat(array);
    console.log(tagdata);
}

function Count() {
    var b = tagdata.reduce((x, y, idx, arr) => {
        x[y] = ++x[y] || 1;
        return x;
    }, {});

    console.log(b);

}