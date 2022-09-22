$("#enrollment-form").submit(function(e){
    e.preventDefault();
    addStudent();
});
function addStudent(){
    // event.preventDefault();
    var name = document. querySelector('#student-name'). value;
    var email = document. querySelector('#email'). value;
    var website = document. querySelector('#website'). value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    // var skills = document. querySelector('input[name="checkbox"]:checked').value.map(function () {  
    //     return this.value;
    //     }).get().join(",");
    // var gender = document. querySelector('#student-gender'). value;
    var checkbox= "";

    var checkBoxArray = new Array();
    var areaofinterest = '';
   
    $(':checkbox:checked').each(function(i){
           checkBoxArray .push($(this).attr("value"));
   
   });
   
     if (checkBoxArray .length == 0) {
        } else {
        while (checkBoxArray .length != 0) {
               if (checkBoxArray .length == 1) {
                   areaofinterest += checkBoxArray .pop();
               } else {
                   areaofinterest += (checkBoxArray .pop() + ",");
                    }
               }
   }
//    console.log(areaofinterest);

    // console.log(skills);
    var element = document.getElementById("enrollment-section");
    document.getElementById("enrollment-section").innerHTML += 
              ` <div id="student-details" class="student-description-content-row row">
              <div class=" col-8">
               <div>${name}</div>
                <div>${gender}</div>
                <div>${email}</div>
                <div><a href="https://${website}" target="_blank">${website}</a></div>
                <div>${areaofinterest}</div>
              </div>
              <div class=" stud-img col-4">
                <div>
                  <img height="110px" width="110px" src="man.svg" alt="">
                </div>
              </div>
            </div>
            
          </div>`;
}

function resetForm(){
    document.getElementById("enrollment-form").reset();
}