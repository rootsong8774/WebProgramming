$(document).ready(function () {
  let descs;
  function loadDescription() {
    $.getJSON("data/index.json")
      .done((data) => {
        descs = data;
      })
      .fail(() => {
        $("#event").html("Failed to get the current schedule.");
      });
  }
  loadDescription();
  $("#content").on("click", "#event a", function (e) {
    e.preventDefault();
      let lang = this.id.toUpperCase();
      console.log(descs);
      console.log(lang);
      console.log(descs[lang]);
      $("#sessions").load("descriptions.html" + ' #'+descs[lang]);
    $("#event a.current").removeClass("current");
    $(this).addClass("current");
  });

  // $("#content").on("click", "#sessions li a", function (e) {
  //   e.preventDefault();
  //   let fragment = this.href;
  //   fragment = fragment.replace("#", " #");
  //   $("#details").load(fragment);
  //   $("#sessions a.current").removeClass("current");
  //   $(this).addClass("current");
  // });
});
