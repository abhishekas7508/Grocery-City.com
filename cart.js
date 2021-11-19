let total=0;
function decreaseNumber(n){
    itemVal=document.getElementById("quantity"+n);
    if(itemVal.value<=0)
        itemVal.value=0;
    else{
        itemVal.value=parseInt(itemVal.value)-1;
        total-=60;
    }
        bill(total);
}
function increaseNumber(n){
    itemVal=document.getElementById('quantity'+n);
    if(itemVal.value>=5)
        itemVal.value=5;
    else{
        itemVal.value=parseInt(itemVal.value)+1;
        total+=60;
    }
        bill(total);
}

function bill(total){
    let sum=document.getElementById('total');
    sum.innerHTML='Rs. '+total+'.00';
}

function confirm(){
    if(total>0)
    document.getElementById('success').innerHTML='Your order is Successful !';
    else
    alert('Cart is Empty!');
}