var xhr = new XMLHttpRequest();

// 取得資料
xhr.open('get','https://emma.pixnet.cc/album/elements?format=json&set_id=34260&user=emmademo&use_iframe=1',true);

// 回傳資料(null)
xhr.send(null);

// 頁面載入完執行
xhr.onload = function () {

    // 字串轉換
    var str = JSON.parse(xhr.responseText);
    var strLen = str.elements.length;
    var user = document.querySelector('.user');
    var strUser = str.set.user.display_name;
    user.textContent = strUser + ' 的相簿';

    // 載入資料&彈窗
    var wrapIn = '';
    for(var f=0;f<strLen;f++){
        var strThumb = str.elements[f].thumb;
        var strLarge = str.elements[f].identifier;
        var strVideo = str.elements[f].id;
        var strType= str.elements[f].type;
        var wrap = document.querySelector('.imgList');
        if(strType == 'pic'){
           var content = '<a data-fancybox="gallery" href="https://pic.pimg.tw/emmademo/' + strLarge + '.jpg"><img src="' + strThumb + '"></a>'
           wrapIn += content;
        }else if(strType == 'video'){
           var content = '<a data-fancybox="gallery" data-type="iframe" data-src="https://emmademo.pixnet.net/album/video/'+ strVideo +'" href="javascript:;"><img src="' + strThumb + '"></a>'   
           wrapIn += content;
        }else if(strType == 'audio'){
           var content = '<a data-fancybox="gallery" data-type="video" data-src="https://ssl-pixnet-tv.pixfs.net/user/emmademo/'+ strLarge +'.m4a"><img src="' + strThumb + '"></a>'   
           wrapIn += content;
        } 
    }
    wrap.innerHTML = wrapIn;
}