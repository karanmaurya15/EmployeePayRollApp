$(document).ready(function () {
     console.log("id is :" + localStorage.getItem('id'));
  $.ajax({
    url: 'http://localhost:3000/employee/' + localStorage.getItem('id'),
    type: 'GET',
    dataType: 'json',

    success: function (data) {
      $('#name').val(data.name);
      $('input[name="Profile"][value="' + data.profile + '"]').prop('checked', true);
      $('input[name="gender"][value="' + data.gender + '"]').prop('checked', true);
      $('input[name="dept"]').each(function () {
        $(this).prop('checked', data.department.includes($(this).val()));
      });
      $('#salary').val(data.salary);
      var startDate = new Date(data.startDate);
      $('#Day').val(startDate.getDate());
      $('#Month').val(startDate.getMonth() + 1);
      $('#Year').val(startDate.getFullYear());
      console.log(data);
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log('Error in Operation');
    }
  })
});

function UpdateForm(employeeId) {
  var name = $('#name').val();
  console.log(name);

  var selectedImage = $('input[name="Profile"]:checked').val();
  console.log(selectedImage);

  var selectedGender = $('input[name="gender"]:checked').val();
  console.log(selectedGender);

  var selectedDepartment = $('input[name="dept"]:checked').val();

  console.log(selectedDepartment);

  var salary = $('#salary').val();
  console.log(salary);

  var day = $('#Day').val();
  var month = $('#Month').val();
  var year = $('#Year').val();
  console.log("Start Date = " + day + month + year);

  var note = $('#notes').val();
  console.log(note);

  let reqPayLoad = {
    "name": name,
    "profileUrl": selectedImage,
    "gender": selectedGender,
    "departMent": selectedDepartment,
    "salary": salary,
    "startDate": day + ' ' + month + ' ' + year,
    "notes": note
  }
  console.log(reqPayLoad);

  $.ajax({
    url: 'http://localhost:3000/employee/' + employeeId,
    type: 'PUT',
    dataType: 'json',
    data: reqPayLoad,
    success: function (data, textStatus, xhr) {
      console.log(data);
    },
    error: function (xhr, textStatus, errorThrown) {
      console.log('Error in Operation');
    }
  })
}