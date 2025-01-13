
const fs = require("fs");

// Créer le fichier welcome.txt avec le contenu "Hello Node"
fs.writeFile("welcome.txt", "Hello Node", (err) => {
  if (err) throw err;
  console.log('File "welcome.txt" created with content "Hello Node"');
});

// Lire et afficher le contenu de welcome.txt
fs.readFile("welcome.txt", "utf8", (err, data) => {
  if (err) throw err;
  console.log(data);
});