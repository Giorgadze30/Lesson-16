function evenOrOdd(num) {
    if (num % 2 == 0) {
      return "false";
    } else {
      return "true";
    }
  }
  console.log(evenOrOdd(45));
  console.log(evenOrOdd(46));


  function squareAr(x) {
    return x * 4;
  }

  const persons = [
    {name:'Saba', age : 21},
    {name:'Nina', age : 18},
    {name:'Temo', age : 27},
    {name:'Guro' , age : 21}
  ]
  function youngest() {
    const filterAge = persons.filter((el) => {
      return el.age < 20;
    });
  }
  console.log (findPerson)
  