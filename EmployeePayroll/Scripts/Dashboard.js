$(document).ready(function () {
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

                actions.append($('<img>').attr('src', '../Assets/icons/create-black-18dp.svg').attr('data-id', employee.id).click(function () {
                    //  window.location.href = '../Templates/Updateform.html';
                    var employeeId = $(this).attr('data-id');
                    editEmployee(employeeId);
                    // localStorage.setItem('id', employeeId);
                    window.location.href = '../Templates/Updateform.html?id=' + employeeId;
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
});
function editEmployee(employeeId) {
    console.log(employeeId);
    localStorage.setItem('id', employeeId);
}


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















