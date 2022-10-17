//Initialisation d’un tableau avec quelques questions à poser
var questions = [
    "What is your name?",
    "What is your fav hobby?",
    "What is your preferred programming language?"
   ];
   //Préparation d’un tableau pour stocker les réponses de l’utilisateur
   var answers = [];
   // Préparation de la fonction ask qui permet d’afficher une question à l’écran
   function ask(i) {
    process.stdout.write(`\n\n ${questions[i]}`);
    process.stdout.write(" > ");
   }
   //Préparation d’un écouteur pour intercepter la saisie des réponses
   process.stdin.on('data', function(data) {
   answers.push(data.toString().trim());
   if (answers.length < questions.length) {
   ask(answers.length);
   } else {
   //Annoncer la fin du programme
   process.exit();
   }
   });
   //Ecouter la fin du programme pour afficher les résultats
   process.on('exit', function() {
   process.stdout.write("\n\n\n\n");
   process.stdout.write(`Go ${answers[1]} ${answers[0]} you can finish writing
   ${answers[2]} later`);
   process.stdout.write("\n\n\n\n");
   });
   //Appel de la fonction ask pour poser la première question