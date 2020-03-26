var xhr = new XMLHttpRequest();

// 取得資料
xhr.open('get','https://emma.pixnet.cc/album/elements?set_id=4555593&user=jiney&format=json',true);

// 回傳資料(null)
xhr.send(null);

// 頁面載入完執行
xhr.onload = function () {

    // 字串轉換
    var str = JSON.parse(xhr.responseText);

    var strLen = str.elements.length;

    // 載入資料&彈窗
    var wrapIn = '';
    for(var f=0;f<strLen;f++){
        var strThumb = str.elements[f].thumb;
        var strLarge = str.elements[f].identifier;
        var wrap = document.querySelector('.imgList');
        var content = '<a data-fancybox="gallery" href="https://pic.pimg.tw/jiney/' + strLarge + '_b.jpg"><img src="' + strThumb + '"></a>'
        wrapIn += content;
    }
    wrap.innerHTML = wrapIn;
    
}