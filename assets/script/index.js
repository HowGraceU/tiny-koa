import ESModule from './ESModule.js';

console.log((new ESModule()).msg);

var app6 = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})