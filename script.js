function CheckNum(){
    let num=document.getElementById("inp").value
    num=parseInt(num)
    if(num%2==0){
        document.getElementById("result").innerHTML= "Even Number"
    }
    else{
        document.getElementById("result").innerHTML="Odd Number"
    }
}