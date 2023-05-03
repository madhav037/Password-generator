let slider
let slider_value = ""
let keyword
let lengthh
let password = ''

displayValue = () => {
  slider = document.getElementById("Eslider").value
  // let display = document.getElementById("value").innerHTML = slider;
  slider_value =`
    <p>Length = ${slider} </p>`
    value.innerHTML = slider_value;
    lengthh = slider
  }

  let check1 = false
  let check2 = false
  let check3 = false

checkboxChecker = () => {
  check1 = document.querySelector('#symbols').checked
  check2 = document.querySelector('#numbers').checked
  check3 = document.querySelector('#capitals').checked
}

generatePassword = () => {
  keyword = document.getElementById("keyword").value 
  checker(); 
  if ( check1 === false && check2 === false && check3 === false ) {
      let arr = []
      let demo = Array.from(keyword);
      for (let i = 0; i < slider; i++) { arr[i] = demo[i] }

      let temp;
      let j = 0;
      for (let i = 0; i < arr.length; i++) {
        j = Math.floor((Math.random() * arr.length))
        temp = arr[i]
        arr[i] = arr[j]
        arr[j] = temp
      }

      // final ans
      keyword = arr.join("")
      console.log(keyword);
      FinalPassword =`
      <p>Password : ${keyword} </p>`
      finalPassword.innerHTML = FinalPassword;
    
    } 
    else if ( check1 === true && check2 === false && check3 === false ) {
      let arr = []
      let demo = Array.from(keyword);
      let list = ['!','@','#','$','%','&','_']
      let demo2 = demo.concat(list);
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)

      for (let i = 0; i < demo2.length; i++) { arr[i] = demo2[i] }

      let temp;
      let j = 0;
      let finalArr = []
      for (let i = 0; i < slider; i++) {
        j = Math.floor((Math.random() * arr.length))
        finalArr[i] = arr[j]
      }

      // final ans
      keyword = finalArr.join("")
      console.log(keyword);
      FinalPassword =`
      <p>Password : ${keyword} </p>`
      finalPassword.innerHTML = FinalPassword;

    }
    else if ( check1 === true && check2 === true && check3 === false ) {
      let arr = []
      let demo = Array.from(keyword);
      let list = ['!','@','#','$','%','&','_','1','2','3','4','5','6','7','8','9','0']
      let demo2 = demo.concat(list);
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)

      for (let i = 0; i < demo2.length; i++) { arr[i] = demo2[i] }

      let temp;
      let j = 0;
      let finalArr = []
      for (let i = 0; i < slider; i++) {
        j = Math.floor((Math.random() * arr.length))
        finalArr[i] = arr[j]
      }

      // final ans
      keyword = finalArr.join("")
      console.log(keyword);
      FinalPassword =`
      <p>Password : ${keyword} </p>`
      finalPassword.innerHTML = FinalPassword;
    }
    else if ( check1 === true && check2 === false && check3 === true ) {
      let arr = []
      let demo = Array.from(keyword);

      let upperKeyword = keyword.toUpperCase();
      let upperArr = Array.from(upperKeyword);

      let list = ['!','@','#','$','%','&','_']
      let demo2 = demo.concat(list);
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)

      demo2 = demo2.concat(upperArr);
      for (let i = 0; i < demo2.length; i++) { arr[i] = demo2[i] }

      let temp;
      let j = 0;
      let finalArr = []
      for (let i = 0; i < slider; i++) {
        j = Math.floor((Math.random() * arr.length))
        finalArr[i] = arr[j]
      }

      // final ans
      keyword = finalArr.join("")
      console.log(keyword);
      FinalPassword =`
      <p>Password : ${keyword} </p>`
      finalPassword.innerHTML = FinalPassword;
    } 
    else if ( check1 === false && check2 === true && check3 === false ) {
      let arr = []
      let demo = Array.from(keyword);
      let list = ['1','2','3','4','5','6','7','8','9','0']
      let demo2 = demo.concat(list);
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)

      for (let i = 0; i < demo2.length; i++) { arr[i] = demo2[i] }

      let temp;
      let j = 0;
      let finalArr = []
      for (let i = 0; i < slider; i++) {
        j = Math.floor((Math.random() * arr.length))
        finalArr[i] = arr[j]
      }

      // final ans
      keyword = finalArr.join("")
      console.log(keyword);
      FinalPassword =`
      <p>Password : ${keyword} </p>`
      finalPassword.innerHTML = FinalPassword;

    }
    else if ( check1 === false && check2 === true && check3 === true ) {
      let arr = []
      let demo = Array.from(keyword);

      let upperKeyword = keyword.toUpperCase();
      let upperArr = Array.from(upperKeyword);

      let list = ['1','2','3','4','5','6','7','8','9','0']
      let demo2 = demo.concat(list);
      demo2 = demo2.concat(upperArr);
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)

      for (let i = 0; i < demo2.length; i++) { arr[i] = demo2[i] }

      let temp;
      let j = 0;
      let finalArr = []
      for (let i = 0; i < slider; i++) {
        j = Math.floor((Math.random() * arr.length))
        finalArr[i] = arr[j]
      }

      // final ans
      keyword = finalArr.join("")
      console.log(keyword);
      FinalPassword =`
      <p>Password : ${keyword} </p>`
      finalPassword.innerHTML = FinalPassword;

    }
    else if ( check1 === false && check2 === false && check3 === true ) {
      let arr = []
      let demo = Array.from(keyword);

      let upperKeyword = keyword.toUpperCase();
      let upperArr = Array.from(upperKeyword);
      demo2 = demo.concat(upperArr);
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)

      for (let i = 0; i < demo2.length; i++) { arr[i] = demo2[i] }

      let temp;
      let j = 0;
      let finalArr = []
      for (let i = 0; i < slider; i++) {
        j = Math.floor((Math.random() * arr.length))
        finalArr[i] = arr[j]
      }

      // final ans
      keyword = finalArr.join("")
      console.log(keyword);
      FinalPassword =`
      <p>Password : ${keyword} </p>`
      finalPassword.innerHTML = FinalPassword;
    }
    else if ( check1 === true && check2 === true && check3 === true ) {
      let arr = []
      let demo = Array.from(keyword);

      let upperKeyword = keyword.toUpperCase();
      let upperArr = Array.from(upperKeyword);

      let list = ['!','@','#','$','%','&','_','1','2','3','4','5','6','7','8','9','0']
      let demo2 = demo.concat(list);
      demo2 = demo2.concat(upperArr);
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)
      demo2 = demo2.concat(demo)

      for (let i = 0; i < demo2.length; i++) { arr[i] = demo2[i] }
      for (let i = 0; i < demo2.length; i++) { console.log(arr[i]) }

      let temp;
      let j = 0;
      let finalArr = []
      for (let i = 0; i < slider; i++) {
        j = Math.floor((Math.random() * arr.length))
        finalArr[i] = arr[j]
      }

      // final ans
      keyword = finalArr.join("")
      console.log(keyword);
      FinalPassword =`
      <p>Password : ${keyword} </p>`
      finalPassword.innerHTML = FinalPassword;

    }
    else {
      console.log('something is wrong')
    }
  
}

checker = () => {
  keyword = document.getElementById("keyword").value 
  if(keyword.length != slider) {
    alert("Invalid Length")
  }

  for(let i = 0; i < keyword.length; i++) {
    if (keyword[i] === " "){
      alert("No Spaces allowed")
    }
  }
}