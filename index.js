

function receivesAFunction(chai){
    return chai()
}
console.log(receivesAFunction(function(){return "Hello"}));

const returnsANamedFunction = function(){
    return function fn(word){
        return word
    }
    fn("World")
}
console.log(returnsANamedFunction());


const returnsAnAnonymousFunction = function(){
    return function (){
        return ''
    }
}
console.log(returnsAnAnonymousFunction());

