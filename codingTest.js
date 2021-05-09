//1.Write a program in Javascript to print only the even numbers of the array.//
function getEvenNumbers() {
        var arr = [15, 89, 90, 87, 33, 98,15, 66, 68, 78, 44, 94];

        for (var i = 0; i < arr.length; i++) {
            if (arr[i] % 2 === 0) {
                console.log(arr[i]);
            }
        }
    }

    getEvenNumbers();

//2.Find the maximum consecutive 1's in an array of 0's and 1's.
function getmaxnumbers(arr) {
		var count = 0;
		var max = 0;
		for(var i = 0; i < arr.length; i++){
			if(arr[i] == 0)
				count = 0;
			else
      {
				count++;
			max = count > max ? count : max;
		}
    }
		return max;
    }
   var array = [0,1];
   var finaloutput =  getmaxnumbers(array);
   console.log(finaloutput)


//3.Write a js code to find the repeated number.
let ar = [];
    for(let i = 0; i < 101; i++){ar.push(i)}
    function findSingle(ar, ar_size)
    {
        let res = ar[0];
        for (let i = 1; i < ar_size; i++)
            res = res ^ ar[i];
 
        return res;
    }
      var answer = findSingle(ar,  ar.length);
      console.log(answer)

//4. write validation in javascript so that if the firstname is empty or if checkme is not checked,
<form name="myForm"  onsubmit="return validateForm()" method="post" required>
  Name: <input type="text" name="fname">
  checkbox:   <input type="checkbox" name="checkme" />
  <input type="submit" value="Submit">
</form>
<script>
function validateForm() {
  var x = document.forms["myForm"]["fname"].value;
  var y = document.forms["myForm"]["checkme"].checked;
  if (x == "" || x == null || !y) {
  alert("Form invalid")
    return false;
  }else{
  alert("Form Valid")
  }
}
</script>
//5.css styles
<html>
<head>
<style> 
.round {
  border-radius: 5px;
  border: 2px solid #73AD21;
  width:25px;
  height:25px;
  padding:0px;
  margin:0px;
  margin-right:5px;
}
</style>
</head>
<body>

<div style="display:flex">Javascript Developer<p class="round"></p></div>

</body>
</html>

//6.Write css to center a box on the page.
<style>
div {
        position: absolute;
        top:0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
        width: 100px;
        height: 100px;
        background-color: blue;
    }
</style>
</div>
//7.Write a sample code to call this url via ajax and print its response
<button type="button" onclick="loadDoc()">Request data</button>

<p id="testing"></p>

<script>
function loadDoc() {
  var xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function() {
document.getElementById("testing").innerHTML = this.responseText;
  };
  xhttp.open("GET", "www.example.com/api/get/1", true);
  xhttp.send();
}
</script>

//8.Write a code to sort the object by id 
it cant be possible ,we cant sort object,if the above mentioned is array of objects it possbile by using js Sort method
below example:-
arrayOfObjects.sort(function(a, b){
    return a.id - b.id;
});
