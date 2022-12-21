

  //Let's build a calculator

  function trash (){
    let trasher1 = document.getElementById("solve1");
    trasher1.value = '';
    let trasher2 = document.getElementById("solve2")
    trasher2.innerHTML = '';
    let trasher3 = document.getElementById("solve3");
    trasher3.value = '';
    let trasher4 = document.getElementById("result-value");
    trasher4.innerHTML = "___";
  }
  function deleting (){
    let trasher1 = document.getElementById("solve1");
    trasher1.value -= 1
  }


  let divider = document.getElementById("solve2");
  console.log(divider);
  function divide (){
    let dividing = "/"
    divider.innerHTML = dividing
    let diviresult = solve1.value / solve3.value
    document.getElementById("result-value").innerHTML = diviresult
  }
  let multiplier = document.getElementById("solve2");
  console.log(multiplier);
  function multiply (){
    let multipling = "x"
    multiplier.innerHTML = multipling
    let multiresult = solve1.value * solve3.value
    document.getElementById("result-value").innerHTML = multiresult
  }
  let subtracter = document.getElementById("solve2");
  console.log(subtracter);
  function subtract (){
    let subtracting = "-"
    subtracter.innerHTML = subtracting
    let subtresult = solve1.value - solve3.value
    document.getElementById("result-value").innerHTML = subtresult
  }
  let adder = document.getElementById("solve2");
  console.log(adder);
  function add (){
    let adding = "+"
    adder.innerHTML = adding
    let addsresult = parseInt(solve1.value) + parseInt(solve3.value) 
    document.getElementById("result-value").innerHTML = addsresult
  }
  let percenter = document.getElementById("solve2");
  console.log(percenter);
  function percent (){
    let percenting = "%"
    percenter.innerHTML = percenting
    let percentresult = solve1.value / 100 * solve3.value
    document.getElementById("result-value").innerHTML = percentresult
  }
  let rooter = document.getElementById("solve2");
  console.log(rooter);
  function root (){
    let rooting = "½"
    rooter.innerHTML = rooting
    let rootpass1 = parseInt(solve1.value) //+ parseInt(solve3.value)
    let rootresult = Math.sqrt(rootpass1)
    document.getElementById("result-value").innerHTML = rootresult
  }

 