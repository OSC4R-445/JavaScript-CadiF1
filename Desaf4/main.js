$(document).ready(function() {
  const ApiUrl = 'https://api.restful-api.dev/objects';

  // fetch para el display de los objects
  function fetchAndDisplayObjects() {
    $.ajax({
      url: ApiUrl,
      method: 'GET',
      success: function(response) {
        const objects = response; // API devuelve el array directo
        const $objectTableBody = $('#userTable tbody');
        $objectTableBody.empty(); // Clear rows

        if (objects && objects.length > 0) {
          objects.forEach(object => {
            $objectTableBody.append(`
              <tr data-id="${object.id}">
                <td>${object.id}</td>
                <td>${object.name}</td>
                <td>
                  <button class="edit-btn" data-id="${object.id}">Edit</button>
                  <button class="delete-btn" data-id="${object.id}">Delete</button>
                </td>
              </tr>
            `);
          });
        } else {
          $objectTableBody.append('<tr><td colspan="3">No objects found.</td></tr>');
        }
      },
      error: function(error) {
        console.error('Error fetching objects:', error);
        $('#userTable tbody').empty().append('<tr><td colspan="3">Error loading objects.</td></tr>');
      }
    });
  }

  // fetch inicial cuando carga la pag (el resto dependen de las acciones del user)
  fetchAndDisplayObjects();

  // Event listener para -delete-
  $('#userTable tbody').on('click', '.delete-btn', function() {
    const objectId = $(this).data('id');
    if (confirm(`Are you sure you want to delete object with ID: ${objectId}?`)) {
      $.ajax({
        url: `${ApiUrl}/${objectId}`,
        method: 'DELETE',
        success: function(response, textStatus, xhr) {
          if (xhr.status === 200) {
            $(`tr[data-id="${objectId}"]`).remove();
            alert(`Object with ID ${objectId} deleted successfully.`);
          } else {
            alert(`Error deleting object with ID ${objectId}: Unexpected response status ${xhr.status}.`);
          }
        },
        error: function(xhr, status, error) {
          console.error('Error deleting object:', error);
          alert(`Error deleting object with ID ${objectId}: ${xhr.responseJSON ? xhr.responseJSON.message : error}`);
        }
      });
    }
  });

  // Event listener para -add object form submission-
  $('#addUserForm').on('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const objectName = $('#userName').val();

    $.ajax({
      url: ApiUrl,
      method: 'POST',
      contentType: 'application/json',
      data: JSON.stringify({ name: objectName }), // solo send name
      success: function(response) {
        if (response && response.id) {
          const newObject = response;
          $('#userTable tbody').append(`
            <tr data-id="${newObject.id}">
              <td>${newObject.id}</td>
              <td>${newObject.name}</td>
              <td>
                <button class="edit-btn" data-id="${newObject.id}">Edit</button>
                <button class="delete-btn" data-id="${newObject.id}">Delete</button>
              </td>
            </tr>
          `);
          alert(`Object ${newObject.name} added successfully with ID: ${newObject.id}`);
          $('#addUserForm')[0].reset(); // Clear the form
        } else {
          alert('Error adding object: Unexpected API response.');
        }
      },
      error: function(xhr, status, error) {
        console.error('Error adding object:', error);
        alert(`Error adding object: ${xhr.responseJSON ? xhr.responseJSON.message : error}`);
      }
    });
  });

  // Event listener para -edit buttons-
  $('#userTable tbody').on('click', '.edit-btn', function() {
    const objectId = $(this).data('id');
    $.ajax({
      url: `${ApiUrl}/${objectId}`,
      method: 'GET',
      success: function(response) {
        if (response && response.id) {
          const object = response;
          $('#editUserId').val(object.id);
          $('#editUserName').val(object.name);
          $('#editUserForm').show(); // Show the edit form
        } else {
          alert('Error fetching object for edit: Unexpected API response.');
        }
      },
      error: function(xhr, status, error) {
        console.error('Error fetching object for edit:', error);
        alert(`Error fetching object for edit: ${xhr.responseJSON ? xhr.responseJSON.message : error}`);
      }
    });
  });

  // Event listener para -cancel edit button-
  $('#cancelEditBtn').on('click', function() {
    $('#editUserForm').hide(); // Hide the edit form
    $('#updateUserForm')[0].reset(); // Clear the form
  });

  // Event listener para -update object form submission-
  $('#updateUserForm').on('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    const objectId = $('#editUserId').val();
    const objectName = $('#editUserName').val();

    $.ajax({
      url: `${ApiUrl}/${objectId}`,
      method: 'PUT',
      contentType: 'application/json',
      data: JSON.stringify({ name: objectName }), // Only send name
      success: function(response) {
        if (response && response.id) {
          const updatedObject = response;
          // Update the table row
          const $row = $(`tr[data-id="${updatedObject.id}"]`);
          $row.find('td:nth-child(2)').text(updatedObject.name);

          alert(`Object with ID ${updatedObject.id} updated successfully.`);
          $('#editUserForm').hide(); // Hide the edit form
          $('#updateUserForm')[0].reset(); // Clear the form
        } else {
          alert('Error updating object: Unexpected API response.');
        }
      },
      error: function(xhr, status, error) {
        console.error('Error updating object:', error);
        alert(`Error updating object: ${xhr.responseJSON ? xhr.responseJSON.message : error}`);
      }
    });
  });
});