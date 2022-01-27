class BookMeeting {
  constructor(author, title, date) {
    this.author = author;
    this.title = title;
    this.date = date;
  }

  bookMtgEntry() {
    return (
      "<div class='row'>" +
      "<span>" +
      this.date.toDateString() +
      ":</span>" +
      "<span>" +
      this.author +
      ", <cite>" +
      this.title +
      "</cite></span>" +
      "</div>"
    );
  }
}

var bookMtgList = new Array();
function addMtg(form) {
  var author, title, date;

  if (!form.checkValidity()) {
    document.getElementById("error").style.display = "block";
  } else {
    document.getElementById("error").style.display = "none";
    document.getElementById("mtgHeader").style.display = "block";
    author = form.elements["author"].value;
    title = form.elements["title"].value;
    date = new Date(form.elements["date"].value);

    bookMtgList.push(new BookMeeting(author, title, date));
    bookMtgList.sort(function (a, b) {
      return a.date < b.date ? -1 : a.date > b.date ? 1 : 0;
    });
    displayList();
  }
}

function displayList() {
  var listContent = "";
  for (let i = 0; i < bookMtgList.length; i++) {
    listContent += bookMtgList[i].bookMtgEntry();
  }
  document.getElementById("list").innerHTML = listContent;
}
