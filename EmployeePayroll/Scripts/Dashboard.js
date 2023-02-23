$.ajax({
    url: 'http://localhost:3000/employee',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        var tableBody = $('#display tbody');

        for (var i = 0; i < response.length; i++) {
            // Create a new table row
            var row = $("<tr>");

        // $.each(data, function (index, employee) {
        //     var row = $('<tr>');
            row.append($('<td>').text(response[i].profileUrl));
            row.append($('<td>').text(response[i].name));  
            row.append($('<td>').text(response[i].gender));
            row.append($('<td>').text(response[i].departMent));
            row.append($('<td>').text(response[i].salary));
            row.append($('<td>').text(response[i].startDate));
            var actions = $('<td>');
            actions.append($('<button>').text('Edit').click(function () {
            
            }));
            actions.append($('<button>').text('Delete').click(function () {
            }));
            row.append(actions);

            tableBody.append(row);
        });
    },
    error: function (xhr, textStatus, errorThrown) {
    }
});