$.ajax({
    url: 'http://localhost:3000/employee',
    type: 'GET',
    dataType: 'json',
    success: function (data) {
        var tableBody = $('#display tbody');

        $.each(data, function (index, employee) {
            var row = $('<tr>');
            row.append($('<td>').append(
                $('<img>').attr('src', employee.profileUrl),
                $('<span>').text(employee.name)
            ));
            row.append($('<td>').text(employee.gender));
            row.append($('<td>').text(employee.departMent));
            row.append($('<td>').text(employee.salary));
            row.append($('<td>').text(employee.startDate));
            var actions = $('<td>');
            // actions.append($('<img>').attr('src', '../Assets/icons/create-black-18dp.svg').click(function () {

            // }));
            actions.append($('<img>').attr('src', '../Assets/icons/create-black-18dp.svg').click(function () {
                var employeeId = $(this).attr('data-id');
                var currentRow = $('tr[data-id="' + employeeId + '"]');

                // Prompt the user to enter new data for the employee
                var newName = prompt('Enter new name:');

                var newGender = prompt('Enter new gender:');
                var newDepartment = prompt('Enter new department:');
                var newSalary = prompt('Enter new salary:');
                var newStartDate = prompt('Enter new start date :');


                // Send an AJAX request to update the employee record
                $.ajax({
                    url: 'http://localhost:3000/employee/' + employeeId,
                    type: 'PUT',
                    data: {
                        name: newName,
                        gender: newGender,
                        department: newDepartment,
                        salary: newSalary,
                        startDate: newStartDate
                    },
                    success: function (data) {
                        // Update the table row with the new data
                        currentRow.find('td:nth-child(1)').html(
                            $('<img>').attr('src', data.profileUrl),
                            $('<span>').text(data.name)
                        );
                        currentRow.find('td:nth-child(2)').text(data.gender);
                        currentRow.find('td:nth-child(3)').text(data.department);
                        currentRow.find('td:nth-child(4)').text(data.salary);
                        currentRow.find('td:nth-child(5)').text(data.startDate);
                    },
                    error: function (xhr, textStatus, errorThrown) {
                        console.log('Error updating employee: ' + errorThrown);
                    }
                });
            }));


            actions.append($('<img>').attr('src', '../Assets/icons/delete-black-18dp.svg').attr('data-id', employee.id).click(function () {
                var employeeId = $(this).attr('data-id');
                deleteEmployee(employeeId);
            }));

            row.append(actions);

            tableBody.append(row);
        });
    },
    error: function (xhr, textStatus, errorThrown) {
    }
});

function deleteEmployee(employeeId) {
    $.ajax({
        url: 'http://localhost:3000/employee/' + employeeId,
        type: 'DELETE',
        success: function () {
            $('tr[data-id="' + employeeId + '"]').remove();
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error deleting employee: ' + errorThrown);
        }
    });
}















