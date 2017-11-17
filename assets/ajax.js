'use strict';

function doRequest(callback, url){
    let xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function(){
        config.data = JSON.parse(xhr.responseText);
        console.log(config);
        config.callback(config);
    };
    xhr.send(config.data);
};
