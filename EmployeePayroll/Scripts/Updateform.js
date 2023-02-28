function editEmployee(employeeId) {
    
    $.ajax({
        url: 'http://localhost:3000/employee/' + employeeId,
        type: 'GET',
        dataType: 'json',
        data: reqPayLoad,
        // success: function (data, textStatus, xhr) {
        //     console.log(data);
        
        success: function (data) {
            $('#name').val(data.name);
            
            if($('#pic1').prop('value') == data.profileUrl){
                $('#pic1').prop('checked', true);
            }else if($('#pic2').prop('value') == data.profileUrl){
                $('#pic2').prop('checked', true);
            }else if($('#pic3').prop('value') == data.profileUrl){
                $('#pic3').prop('checked', true);
            }else if($('#pic4').prop('value') == data.profileUrl){
                $('#pic4').prop('checked', true);
            }else if($('#pic5').prop('value') == data.profileUrl){
                $('#pic5').prop('checked', true);
            }
            if($('#male').prop('value') == data.gender){
                $('#male').prop('checked', true);
            }else if($('#female').prop('value') == data.gender){
                $('#female').prop('checked', true);
            }
            if($('#hr').prop('value') == data.departMent){
                $('#hr').prop('checked', true);
            }else if($('#sales').prop('value') == data.departMent){
                $('#sales').prop('checked', true);
            }else if($('#finance').prop('value') == data.departMent){
                $('#finance').prop('checked', true);
            }else if($('#engineer').prop('value') == data.departMent){
                $('#engineer').prop('checked', true);
            }else if($('#others').prop('value') == data.departMent){
                $('#others').prop('checked', true);
            }
            $('#salary').val(data.salary);
            var datearray = data.startDate.split(" ");
            if(datearray.length === 3){
              $('#Day').val(datearray[0]);
              $('#Month').val(datearray[1]);
              $('#Year').val(datearray[2]);
            }
              $('#notes').val(data.notes);
            console.log(data);
        },
        error: function (xhr, textStatus, errorThrown) {
            console.log('Error in Operation');
        }
    })
}

function UpdateForm() {
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
      url: 'http://localhost:3000/employee/'+ employeeId,
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