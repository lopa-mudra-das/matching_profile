// function match(){
//     let arr="";

// }
//let arr1=['lopa','html','css']
 //let arr2=['lopa','html','js'];
// let arr1=document.getElementById("fst").value;
// let arr2=document.getElementById("scnd").value;
// let commonArr=[];
// commonArr=arr1.filter((ele)=>{
//     for(i=0;i<arr2.length;i++){
//         if(ele===arr2[i]){
//             return true;
//         }
//     }
// });
// console.log(commonArr)
function Matcher() {
    var x=document.getElementById('inp1').value; 
    var y=document.getElementById('inp2').value;
    var z=document.getElementById('inp3').value;
    
    var a=document.getElementById('inp4').value;
    var b=document.getElementById('inp5').value;
    var c=document.getElementById('inp6').value;
    if(x==='' || y==='' || z==='' || a==='' || b==='' || c==='') {
        alert("please enter value");
        return;
    }
    if(x===a || x===b || x===c) {
        var li1=document.createElement('li');
        li1.innerText=x;
        document.getElementById('show').appendChild(li1);
    }
    if(y===a || y===b || y===c) {
        var li2=document.createElement('li');
        li2.innerText=y;
        document.getElementById('show').appendChild(li2);
    }
    if(z===a || z===b || z===c) {
        var li3=document.createElement('li');
        li3.innerText=z;
        document.getElementById('show').appendChild(li3);
    }
    }
    document.getElementById('po').onclick=Matcher;