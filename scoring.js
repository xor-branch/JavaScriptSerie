// Après le chargement du DOM, la fonction() est exécutée.
$(document).ready(function(){
  // Créer une logique qui prend les valeurs d'entrée de [score de langue, score d'anglais, score de mathématiques, score de sciences, score d'études sociales] et donne un score total et moyen.
  function score_indicate(){
  // Dans la variable "subject_points
  // Remplacer l'ensemble des [notes de langues, notes d'anglais, notes de mathématiques, notes de sciences, notes d'études sociales].
      let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    // Dans la variable "somme
    // Ajouter les [notes de langues, d'anglais, de mathématiques, de sciences et d'études sociales].
    // Indice ! Prenez les tableaux un par un et additionnez-les.
    let sum = 0;
    for(let i=0; i<5; i++){
          sum += subject_points[i];
    }
      // La variable "sum" (total des points) dans "Total des points :" (class="sum_indicate") de sortie.
    $("#sum_indicate").text(sum);
    // Dans la variable "moyenne
    // Trouvez la valeur moyenne et substituez-la dans. (Nombre total de points dont vous voulez prendre la moyenne pour (somme) / Nombre total d'articles)
    // Indice ! Utilisez la méthode de la longueur pour trouver le nombre total de pièces. (méthode de la longueur : méthode pour obtenir la longueur de la chaîne, le nombre d'éléments dans le tableau, etc.)
    let average = sum/subject_points.length;
    $("#average_indicate").text(average);
  };
  // Obtenir la note moyenne, puis classer ("A", "B", "C", "D") à partir de la note moyenne obtenue. Créer la logique pour faire
  function get_achievement(){
    // Dans la variable "averageIndicate
  // Obtenez la note moyenne à partir du HTML class="average_indicate" et Substitution.
      let subject_points = [Number($('#national_language').val()),
                      Number($('#english').val()),
                      Number($('#mathematics').val()),
                      Number($('#science').val()),
                      Number($('#society').val())
                      ];

    let sum = 0;
    for(let i=0; i<5; i++){
          sum += subject_points[i];
    }
  let averageIndicate = sum/subject_points.length;

    //console.log(averageIndicate)
    // Si "averageIndicate" est supérieur ou égal à 80, renvoyer "A".
    if ( averageIndicate >= 80){
      return "A";
    // Renvoie un "B" si la "moyenneIndiquer" est supérieure ou égale à 60.
    } else if ( averageIndicate >= 60) {
      return "B";
      //renvoie un "C" si la "moyenneIndiquer" est supérieure ou égale à 40
      // Si la "moyenneIndiquer" est supérieure ou égale à 40, renvoie un "C".
      // renvoie un "D" si moyenneIndiquer" est une autre note.
    } else {
      return "D";
    }

  };
  // Obtenir la valeur moyenne, puis classer ("A", "B", "C", "D") à partir de la note moyenne obtenue. La logique pour ce faire est créée.
  function get_pass_or_failure(){
    let subject_points = [Number($('#national_language').val()),
                          Number($('#english').val()),
                          Number($('#mathematics').val()),
                          Number($('#science').val()),
                          Number($('#society').val())
                          ];
    //   Attribuez le nombre de sujets entrés dans la variable nombre.
    let number = subject_points.length;
    // Attribuez "pass" à la variable "judge".
    let judge = "Pass";
    for (let i=0; i<number; i++){
      if (subject_points[i]<60){
        judge = "failure";
        break;
      }
    }

    // Si le score de chaque matière saisie est inférieur à 60, la variable "juges" est réaffectée à "échec". et renvoie les "juges".
    // Astuce ! Essayez de rechercher "javascript scores, pass, fail, logic.
  //  return pass_or_failure;
      return judge;
  };
  // Créer la logique des juges finaux.
  function judgement(){
    // Assignez "la valeur de retour de get_achievement()" à la variable "achievement".
    let achievement = get_achievement();
    // Affectez "la valeur de retour de get_pass_or_failure()" à la variable "pass_or_failure".
    let pass_or_failure = get_pass_or_failure();
    // Lorsque vous appuyez sur le bouton "Juge final" (id="alerte-indication"), vous verrez un message disant "Votre score est ${réalisation} et ${pass_ou_échec}" est imprimé. Processus.
    $('#declaration').append(`<label id="alert-indicate" class="alert alert-info">Votre notre est: ${achievement}, et le jugement est: ${pass_or_failure}</label>`);
  };
  // Il lance la fonction score_indicate() lorsque l'un des scores de [score de langue, score d'anglais, score de mathématiques, score de sciences, score d'études sociales] est modifié.
  $('#national_language, #english, #mathematics, #science, #society').change(function() {
    score_indicate();
  });
  // Appuyez sur le bouton "rank" (class="évaluation"), puis sur "get_" (class="évaluation"). C'est le processus par lequel la "réalisation()" est produite.
  $('#btn-evaluation').click(function() {
    $("#evaluation").text(get_achievement());
  });
  // Si vous cliquez sur le bouton "jugement" (class="btn-judge"), vous obtenez la fonction "et_ C'est le processus qui produit "pass_or_failure()".
    $('#btn-judge').click(function() {
    $("#judge").text(get_pass_or_failure());
  });
  // Lorsque vous appuyez sur le bouton "Juge final" (class="btn-declaration") C'est le processus par lequel la fonction judgement() est produite.
  $('#btn-declaration').click(function() {

      $("#declaration").text(judgement());
      $('#btn-declaration').click(function(){
      $("#declaration").empty();
      $("#declaration").text(judgement());
      });
});
// La description de js ici n'est qu'un indice, donc la Si vous souhaitez mettre en œuvre le code sans suivre la description, vous pouvez le faire comme vous le souhaitez. Toute implémentation qui répond aux exigences de la mission et qui est jugée d'un certain niveau de qualité de code passera l'examen. devient.
// L'exemple utilise à la fois des descriptions JavaScript et jQuery, mais vous pouvez utiliser l'un ou l'autre.
  });
