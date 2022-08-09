// paper count
// book 1 --->100
// book 2 --->200
// book 3 --->300

function paperRequirements(book1, book2, book3) {
  book1PaperNeed = book1 * 100;
  book2PaperNeed = book2 * 200;
  book3PaperNeed = book3 * 300;
  return (
    "Total paper need " + (book1PaperNeed + book2PaperNeed + book3PaperNeed)
  );
}

console.log(paperRequirements(5, 5, 5));
