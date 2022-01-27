class Pet {
  constructor(name, sound) {
    this.name = name;
    this.sound = sound;
  }

  confirm() {
    return (
      this.name +
      " has been successfully registered as a " +
      this.constructor.name.toLowerCase() +
      " - " +
      this.sound
    );
  }
}

class Dog extends Pet {
  constructor(name, trick) {
    super(name, "Woof! Woff!");
    this.trick = trick;
  }

  confirm() {
    return super.confirm() + "<br>Favorite trick: " + this.trick;
  }
}

class Hedgehog extends Pet {
  constructor(name) {
    super(name, "snuffle, click, purr");
  }
}

function adjustForm(form) {
  if (form.elements["petType"].value == "dog") {
    document.getElementById("dog-more-info").style.display = "table-cell";
  } else {
    document.getElementById("dog-more-info").style.display = "none";
  }
}
function register(form) {
  var name, trick, pet;

  if (!form.checkValidity()) {
    document.getElementById("message").innerHTML =
      "You must enter values for all fields";
  } else {
    name = form.elements["name"].value;
    if (form.elements["petType"].value == "dog") {
      trick = form.elements["trick"].value;
      pet = new Dog(name, trick);
    } else {
      pet = new Hedgehog(name);
    }
    document.getElementById("message").innerHTML = pet.confirm();
  }
}
