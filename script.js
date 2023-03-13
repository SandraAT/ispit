


$(document).button(function() {
    $('#search').keyup(function() {
        var searchKorisnik = $(this).val();
        if(searchKorisnik != '') {
            $.ajax({
                url: "https://itunes.apple.com/search?=song" + searchKorisnik,
                type: 'GET',
                dataType: 'json',
                success: function(data) {
                    var results = '';
                    $.each(data.items, function(index, item) {
                        results += '<li><a href="' + item.html_url + '">' + item.collectionId + '</a></li>';
                    });
                    $('#rezultat').html(results);
                }
            });
        } else {
            $('#rezultat').html('');
        }
    });
});



