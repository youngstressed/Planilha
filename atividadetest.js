function Person(firstName, lastName, apelido) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.apelido = apelido;
  }
  
  var john = new Person("John", "Smith");
  var jane = new Person("Jane", "Doe");
  var emily = new Person("Emily", "Jones");
  var junin = new Person("Junin", "Kaiser","Clebi")

  console.table([john, jane, emily, junin]);