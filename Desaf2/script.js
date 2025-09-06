//(doc.ready esta en desuso)
$(function () {
  const xhr = new XMLHttpRequest();
  const apiUrl = "https://reqres.in/api/users?page=1";
  const apiKey = "reqres-free-v1";

  $(document).ajaxStart(function () {
    $("#loading_indicator").show();
  });

  $(document).ajaxStop(function () {
    $("#loading_indicator").hide();
  });

  $(document).ajaxError(function () {
    $("#page1-container, #page2-container, #user10-container").hide();
    $("#error-message").show();
  });

  xhr.open("GET", apiUrl);
  // setRequestHeader sirve para no guardar la key en el historial ya que no se manda por la url (es util para otras ocaciones ¯\_(ツ)_/¯)
  xhr.setRequestHeader("x-api-key", apiKey);

  xhr.onreadystatechange = function () {
    // con onreadystatechange tambien se puede añadirle con facilidad un gif de carga para el readyState = 3 dentro de la funcion
    if (this.readyState == 4 && this.status == 200) {
      const response = JSON.parse(this.responseText);
      const users = response.data;

      // Obteniendo el contenedor de usuarios usando jQuery ( •_•)>⌐■-■
      const $usersContainer = $("#page1-container");

      // Iterar sobre cada usuario obtenido, creando div-card individuales
      users.forEach((user) => {
        const $userDiv = $("<div>").addClass("user-card");

        const $nameP = $("<p>").text(user.first_name);
        const $avatarImg = $("<img>")
          .attr("src", user.avatar)
          .attr("alt", `Avatar de ${user.first_name}`);

        // Agregar los elementos al DIV del usuario
        $userDiv.append($avatarImg).append($nameP);

        // Agregar el DIV del usuario al contenedor principal (⌐■_■)
        $usersContainer.append($userDiv);
      });
    } else {
      // Manejar errores si la solicitud no fue exitosa
      console.error("Error al obtener los datos:", this.statusText);
    }
  };

  // Definir qué hacer si ocurre un error de red
  xhr.onerror = function () {
    console.error("Error de red");
  };

  // Enviar la solicitud (listo o7)
  xhr.send();

  // ---

  // Lógica para cargar la segunda página con Ajax (al hacer clic en el botón)
  $("#load-users-btn").on("click", function () {
    const apiUrlPage2 = "https://reqres.in/api/users?page=2";
    // xhr.setRequestHeader('x-api-key', apiKey);
    $.ajax({
      url: apiUrlPage2,
      method: "GET",
      headers: {
        "x-api-key": apiKey, // tuve que leer el material para ver por que no pasaba nada al usar xhr.setRequestHeader('x-api-key', apiKey);
      },
      success: function (response) {
        const $usersContainer = $("#page2-container");
        $usersContainer.empty();

        const users = response.data;
        const $page2List = $("<ol>");

        users.forEach((user) => {
          const $listItem = $("<li>");
          const $emailP = $("<p>").text(user.email);
          const $avatarImg = $("<img>")
            .attr("src", user.avatar)
            .attr("alt", `Avatar de ${user.first_name}`);

          $listItem.append($avatarImg).append($emailP);
          $page2List.append($listItem);
        });

        $usersContainer.append($page2List);
      },
      error: function (textStatus, errorThrown) {
        console.error(
          "Error al obtener los datos de la página 2:",
          textStatus,
          errorThrown
        );
      },
    });

    // ---

    // lógica para el botón del usuario ID 10
    $("#load-user10-btn").on("click", function () {
      const userId = 10;
      // no se puede usar el getJSON para hacer la peticion, el apikey debe ir siempre en el header y getJSON no tiene esa funcion
      // ESTO Se ejecutaria si la petición no necesitase ajuro que llegara el apikey por el header
      // const apiUrlUser = `https://reqres.in/api/users/${userId}?x-api-key=${apiKey}`;

      const apiUrlUser = `https://reqres.in/api/users/${userId}`;

      // ESTO Se ejecuta si la petición getJson fuera exitosa
      // $.getJSON(apiUrlUser, function (response) {

      $.ajax({
        url: apiUrlUser,
        method: "GET",
        dataType: "json",
        headers: {
          "x-api-key": apiKey, // (╯°□°）╯︵ ┻━┻
        },
        success: function (response) {
          const $user10Container = $("#user10-container").show().empty();
          const user = response.data;
          const $nameP = $("<p>").text(`${user.first_name} ${user.last_name}`);
          const $avatarImg = $("<img>")
            .attr("src", user.avatar)
            .attr("alt", `Avatar de ${user.first_name} ${user.last_name}`);

          $user10Container.append($avatarImg).append($nameP);
        },
        error: function (jqXHR, textStatus, errorThrown) {
          console.error(
            "Error al obtener el usuario:",
            textStatus,
            errorThrown
          );
        },
        
        // el codigo de los comentarios está bien pero los "});" puede ser que no
        // pero si eso fuera EL problema ya lo habria solucionado (._. )>

        // ESTO Se ejecuta si la petición getJson fuera exitosa
        //   $("#page1-container").hide();
        //   $("#page2-container").hide();

        //   const $user10Container = $("#user10-container").show().empty();
        //   const user = response.data;

        //   const $nameP = $("<p>").text(`${user.first_name} ${user.last_name}`);
        //   const $avatarImg = $("<img>")
        //     .attr("src", user.avatar)
        //     .attr("alt", `Avatar de ${user.first_name} ${user.last_name}`);

        //   $user10Container.append($avatarImg).append($nameP);
        // }).fail(function (jqXHR, textStatus, errorThrown) {
        //   console.error("Error al obtener el usuario:", textStatus, errorThrown);
        // });
      });
    });
  });
});
