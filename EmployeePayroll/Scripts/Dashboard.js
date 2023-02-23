$(document).ready(function () {
    // Make a GET request to the specified URL
    $.ajax({
        type: "GET",
        url: "http://localhost:3000/employees",
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        success: function (response) {
            // Clear the table body
            $("tbody").empty();

            // Loop through each employee and add a row to the table for them
            for (var i = 0; i < response.length; i++) {
                // Create a new table row
                var row = $("<tr>");

                // Add a cell for each property of the employee
                $("<td>").text(response[i].name).appendTo(row);
                $("<td>").text(response[i].profileUrl).appendTo(row);
                $("<td>").text(response[i].gender).appendTo(row);
                $("<td>").text(response[i].departMent).appendTo(row);
                $("<td>").text(response[i].salary).appendTo(row);
                $("<td>").text(response[i].day).appendTo(row);
                $("<td>").text(response[i].month).appendTo(row);
                $("<td>").text(response[i].year).appendTo(row);
               

                // Add a cell for the delete button
                var deleteButtonCell = $("<td>");
                var deleteButton = $("<button>").addClass("fa fa-trash");
                deleteButton.click(function () {
                    // Code to delete the employee goes here
                });
                deleteButton.appendTo(deleteButtonCell);

                // Add the row to the table
                row.append(deleteButtonCell);
                $("tbody").append(row);
            }
        },
        failure: function (response) {
            alert(response.responseText);
            alert("Failure");
        },
        error: function (response) {
            alert(response);
            alert("Error");
        }
    });
});
