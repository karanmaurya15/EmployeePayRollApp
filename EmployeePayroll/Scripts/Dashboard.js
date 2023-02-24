$.ajax({
    url: 'http://localhost:3000/employee',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        var tableBody = $('#display tbody');

        $.each(data, function (index, employee) {
            var row = $('<tr>');
            row.append($('<td>').html('<img src="' + employee.profileUrl + '">'));
            row.append($('<td>').text(employee.name));  
            row.append($('<td>').text(employee.gender));
            row.append($('<td>').text(employee.departMent));
            row.append($('<td>').text(employee.salary));
            row.append($('<td>').text(employee.startDate));
            var actions = $('<td>');
            actions.append($('<img>').attr('src', '../Assets/icons/create-black-18dp.svg').click(function () {
            }));
            actions.append($('<img>').attr('src', '../Assets/icons/delete-black-18dp.svg').click(function () {
            }));
            row.append(actions);

            tableBody.append(row);
        });
    },
    error: function (xhr, textStatus, errorThrown) {
    }
});