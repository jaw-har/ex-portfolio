document.getElementById("contact-form").onsubmit = function(event) {
    // récupérer tous les champs de formulaire
    var inputs = document.getElementsByTagName("input");
    var textarea = document.getElementsByTagName("textarea");
    // vérifier si tous les champs sont remplis
    for (var i = 0; i < inputs.length; i++) {
        if (inputs[i].value === "") {
            alert("Veuillez remplir tous les champs.");
            event.preventDefault();
            return;
        }
    }
    if (textarea[0].value === "") {
        alert("Veuillez remplir tous les champs.");
        event.preventDefault();
        return;
    }
    document.getElementById("email").oninput = function() {
        var email = this.value;
        var atSymbols = email.split("@");
        // vérifie si plus de deux occurrences de @
        if (atSymbols.length > 2) {
            alert("Votre adresse e-mail ne doit contenir qu'un seul symbole @");
        }
      };
    
  };
