function SubmitForm(){
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
        "startDate": day + ' ' + month  + ' ' + year,
        "notes": note
      }
      console.log(reqPayLoad);

      $.ajax({
        url: 'http://localhost:3000/employee',
        type: 'POST',
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