'use strict';

let plateSearchBtn = document.querySelector('.lp_search');
let plateSearch = document.querySelector('.licence_plate');
let brandSearchBtn = document.querySelector('.brand_search');
let brandSearch = document.querySelector('.brand');

function createTable(object){
    let table = document.createElement('table');
    document.querySelector('body').appendChild(table);
    for (let i = 0; i<object.data.length; i++){
        let postElements =`<td>${object.data[i].plate}</td>
                           <td>${object.data[i].car_brand}</td>
                           <td>${object.data[i].car_model}</td>
                           <td>${object.data[i].color}</td>
                           <td>${object.data[i].year}</td>`;
        let bookDatas = document.createElement('tr');
        bookDatas.innerHTML = postElements;
        table.appendChild(bookDatas);
    }
};

function getLicencePlate(){
    plateSearchBtn.addEventListener('click', function(event){
        let licencePlateConfig = {
            method : 'GET',
            url : '/search/?q='+plateSearch.value,
            callback : createTable,
            data : null
        }
        doRequest(licencePlateConfig);
    })
}

function getBrand(){
    brandSearchBtn.addEventListener('click', function(event){
        let brandConfig = {
            method : 'GET',
            url : '/search/'+brandSearch.value,
            callback : createTable,
            data : null
        }
        doRequest(brandConfig);
    })
}


getLicencePlate();
getBrand();