$(document).ready(function () {
    let $form, width, height, area;
    $form = $("#calculator");

    $("form input[type=text]").on("blur", function () {
      console.assert(this.value > 10, "User entered less than 10");
    });

    $form.on('submit', function (e) {  
        e.preventDefault();
        console.log('Clicked submit...');

        width = $('#width').val();
        height = $('#height').val();
        area = width * height;
        if (area < 100) {
            debugger
        };

        console.assert($.isNumeric(area), 'User entered non-numeric value');

        $form.append('<p>' + area + '</p>');
    })
});



