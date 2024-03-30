function createForm() {
    var form = document.getElementById("myForm");

    // Array of form field details
    var formFields = [
      { label: "First Name:", id: "firstName", type: "text" },
      { label: "Last Name:", id: "lastName", type: "text" },
      { label: "Address Line 1:", id: "addressLine1", type: "text" },
      { label: "Address Line 2:", id: "addressLine2", type: "text" },
      { label: "PIN:", id: "pin", type: "text" },
      { label: "Gender:", id: "gender", type: "radio", options: ["Male", "Female"] },
      { label: "Choice of Food (must select atlest two out of 5 options):", id: "food", type: "checkbox", required: true, options: ["North-Indian", "South-Indian", "Chinese", "Japanese", "Sea Food"] },
      { label: "State:", id: "state", type: "text" },
      { label: "Country:", id: "country", type: "text" }
    ];

    // Loop through form fields array to create form elements
    formFields.forEach(function(field) {
      var div = document.createElement("div");
      div.className = "form-group";

      var label = document.createElement("label");
      label.setAttribute("for", field.id);
      label.textContent = field.label;

      div.appendChild(label);

      if (field.type === "radio" || field.type === "checkbox") {
        field.options.forEach(function(option) {
          var input = document.createElement("input");
          input.className = "form-check-input";
          input.setAttribute("type", field.type);
          input.setAttribute("name", field.id);
          input.setAttribute("id", option.toLowerCase());
          input.setAttribute("value", option.toLowerCase());

          var checkLabel = document.createElement("label");
          checkLabel.className = "form-check-label";
          checkLabel.setAttribute("for", option.toLowerCase());
          checkLabel.textContent = option;

          var checkDiv = document.createElement("div");
          checkDiv.className = "form-check";

          checkDiv.appendChild(input);
          checkDiv.appendChild(checkLabel);

          div.appendChild(checkDiv);
        });
      } else {
        var input = document.createElement("input");
        input.className = "form-control";
        input.setAttribute("type", field.type);
        input.setAttribute("id", field.id);

        div.appendChild(input);
      }

      form.appendChild(div);
    });

    var submitBtn = document.createElement("button");
    submitBtn.className = "btn btn-primary";
    submitBtn.setAttribute("type", "submit");
    submitBtn.textContent = "Submit";

    form.appendChild(submitBtn);
  }

  
  createForm();

  // Function to handle form submission
  document.getElementById('myForm').addEventListener('submit', function(event) {
      event.preventDefault();
    
    var firstName = document.getElementById('firstName').value;
    var lastName = document.getElementById('lastName').value;
    var addressLine1 = document.getElementById('addressLine1').value;
    var addressLine2 = document.getElementById('addressLine2').value;
    var pin = document.getElementById('pin').value;
    var gender = document.querySelector('input[name="gender"]:checked').value;
    var foodItems = document.querySelectorAll('input[type="checkbox"]:checked');
    var food = [];
    foodItems.forEach(function(item) {
      food.push(item.value);
    });
    var state = document.getElementById('state').value;
    var country = document.getElementById('country').value;

    // Checking if at least two checkboxes are checked
    if (food.length < 2) {
      alert("Please select at least two food options.");
      return;
    }

    // Create new row in table
    var tableRef = document.getElementById('myTable').getElementsByTagName('tbody')[0];
    var newRow = tableRef.insertRow();
    var cell1 = newRow.insertCell(0);
    var cell2 = newRow.insertCell(1);
    var cell3 = newRow.insertCell(2);
    var cell4 = newRow.insertCell(3);
    var cell5 = newRow.insertCell(4);
    var cell6 = newRow.insertCell(5);
    var cell7 = newRow.insertCell(6);
    var cell8 = newRow.insertCell(7);

    // Insert values into table cells
    cell1.textContent = firstName;
    cell2.textContent = lastName;
    cell3.textContent = addressLine1 + ", " + addressLine2;
    cell4.textContent = pin;
    cell5.textContent = gender;
    cell6.textContent = food.join(", ");
    cell7.textContent = state;
    cell8.textContent = country;

    // Clear form fields
    document.getElementById('myForm').reset();

});