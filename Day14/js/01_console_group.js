
$(document).ready(function () {
    console.log("And we're off");
    let $form, width, height, area;
    $form = $(calculator);
    $('form input[type="text"]').on('blur', function () {
        console.log('You entered ', this.value);
    });

    $form.on('submit', function (e) {
        e.preventDefault();
        console.log('Clicked submit...');

        width = $('#width').val();
        height = $('#height').val();
        area = width * height;

        console.group('Area calculations');
            console.log("Width " + width);
            console.log('Height ' + height);
            console.warn(area);
        console.groupEnd();
        
        

        $form.append('<p>' + area + '</p>');
    });
});