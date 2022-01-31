var msg = '<div class="header"' + ">" + '<a href="#" id="close">close X</a>';
msg += "<div><h2>System Maintenence</h2></div>";
msg +=
  "Our servers are being update between 3 and 4 a.m. During this time, there";
msg += "may be minor disruptions to service.";
msg += "</div>";

var elNote = document.createElement("div");
elNote.setAttribute("id", "note");
elNote.innerHTML = msg;
document.body.appendChild(elNote);

function dismissNote() {
    document.body.removeChild(elNote);
}

var elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);
