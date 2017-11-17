'use strict';

function doRequest(config){
    let xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url);
    xhr.setRequestHeader('Content-Type', 'application/json');
    xhr.onload = function(){
        config.data = JSON.parse(xhr.responseText);
        console.log(JSON.parse(xhr.responseText));
        config.callback(config);
    };
    xhr.send(config.data);
};