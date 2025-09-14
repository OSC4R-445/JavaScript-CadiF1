$(function () {
  // URL base. Para poder cambiarla en caso de ser necesario (._. )>
  const apiUrl = "https://api.cadif1.com";

  /**
   * Muestra los cursos correspondientes a un área de estudio específica.
   * Realiza una petición a la API, renderiza los cursos encontrados
   * y los inyecta en el DOM debajo del elemento del área seleccionada.
   * @param {string} areaId - El ID del área de estudio.
   * @param {jQuery} $li - El elemento <li> del área que fue clickeado.
   */
  function mostrarCursosDeArea(areaId, $li) {
    // Elimina cualquier ficha de detalle de área previamente abierta para evitar duplicados.
    $(".area-detalle-ficha").remove();

    // Inserta un mensaje de "Cargando..." después del elemento de la lista clickeado.
    $li.after(
      `<div class="area-detalle-ficha area-cursos-ficha">Cargando cursos...</div>`
    );

    // Realiza la petición a la API para obtener los cursos de un área.
    fetch(`https://api.cadif1.com/curso/de_un_area/${areaId}`)
      .then((resp) => {
        // Si la respuesta no es exitosa, lanza un error.
        if (!resp.ok) throw new Error("Error en la respuesta");
        // Convierte la respuesta a formato JSON.
        return resp.json();
      })
      .then((info) => {
        // Asegura que 'cursos' sea un array, incluso si la API devuelve otra cosa.
        let cursos = Array.isArray(info.cursos) ? info.cursos : [];
        if (cursos.length === 0) {
          // Si no hay cursos, muestra un mensaje informativo.
          $li
            .next(".area-detalle-ficha")
            .html("<p>No hay cursos para esta área.</p>");
        } else {
          // Si hay cursos, construye el HTML para mostrarlos como tarjetas. si lo hacia con bootstrap estuviera mejor (╯°□°）╯︵ ┻━┻
          let cursosHtml = `<div class="cursos-cards">`;
          cursos.forEach((curso) => {
            cursosHtml += `
              <div class="curso-card" data-idcurso="${curso.id}">
                <div class="curso-card-titulo">${curso.nombre}</div>
                <div class="curso-card-objetivo">${
                  curso.objetivoresumido
                    ? curso.objetivoresumido
                    : "<span style='color:gray'>Sin objetivo resumido</span>"
                }</div>
              </div>
            `;
          });
          cursosHtml += "</div>";
          // Inserta el HTML de los cursos en la ficha de detalle.
          $li.next(".area-detalle-ficha").html(`
            <div>
              <h3 class="cursos-titulo">Cursos de esta área</h3>
              ${cursosHtml}
            </div>
          `);
        }
      })
      .catch(() => {
        // Si ocurre un error durante la petición, muestra un mensaje de error. 
        $li
          .next(".area-detalle-ficha")
          .html(
            "<span style='color:red'>No se pudieron cargar los cursos.</span>"
          );
      });
  }

  /**
   * Muestra el pensum (plan de estudios) de una carrera.
   * Si el pensum ya está visible, lo oculta (comportamiento de toggle).
   * @param {string} carreraId - El ID de la carrera.
   * @param {jQuery} $li - El elemento <li> de la carrera que fue clickeado.
   */
  function mostrarDetalleCarrera(carreraId, $li) {
    // Comportamiento de toggle: si el detalle ya está abierto, lo cierra y termina la función.
    const detalleExistente = $li.next(".carrera-detalle-ficha");
    if (detalleExistente.length > 0) {
      detalleExistente.remove();
      return;
    }

    // Cierra cualquier otro detalle de carrera que esté abierto.
    $(".carrera-detalle-ficha").remove();

    // Muestra un mensaje de "Cargando..." mientras se obtienen los datos.
    $li.after(`<div class="carrera-detalle-ficha">Cargando pensum...</div>`);
    const $detalleFicha = $li.next(".carrera-detalle-ficha");

    // Realiza la petición a la API para obtener los detalles de la carrera.
    fetch(`${apiUrl}/carrera/${carreraId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Error en la respuesta del pensum");
        return response.json();
      })
      .then((data) => {
        // Verifica que la respuesta contenga un pensum válido y con datos.
        if (
          data.carrera &&
          Array.isArray(data.carrera.pensum) &&
          data.carrera.pensum.length > 0
        ) {
          let pensumHtml =
            '<h3 class="pensum-titulo">Pensum de la Carrera</h3>';

          // Itera sobre cada período (semestre, trimestre, etc.) del pensum.
          data.carrera.pensum.forEach((periodo) => {
            if (Array.isArray(periodo) && periodo.length > 0) {
              const numeroPeriodo = periodo[0].periodo;
              pensumHtml += `<h4 class="periodo-titulo">Período ${numeroPeriodo}</h4>`;
              pensumHtml += '<ul class="pensum-lista">';

              // Itera sobre cada materia dentro del período.
              periodo.forEach((materiaObj) => {
                if (materiaObj && materiaObj.materia) {
                  pensumHtml += `<li class="pensum-item">${materiaObj.materia}</li>`;
                }
              });

              pensumHtml += "</ul>";
            }
          });

          // Inserta el HTML del pensum en la ficha de detalle.
          $detalleFicha.html(pensumHtml);
        } else {
          // Si no se encuentra información del pensum, muestra un mensaje.
          $detalleFicha.html(
            '<p style="color:gray;">No se encontró información del pensum para esta carrera.</p>'
          );
        }
      })
      .catch((error) => {
        // En caso de error en la petición, lo muestra en consola y en la UI.
        console.error("Error al cargar el pensum:", error);
        $detalleFicha.html(
          '<p style="color:red;">No se pudo cargar el pensum.</p>'
        );
      });
  }

  /**
   * Renderiza la lista de áreas de estudio en el contenedor correspondiente.
   * @param {Array} areas - Un array de objetos, donde cada objeto representa un área de estudio.
   */
  function renderizarAreas(areas) {
    let html = `
      <h2 class="areas-titulo">Áreas de Estudio</h2>
      <ul class="areas-lista">
    `;
    // Itera sobre cada área para construir el elemento de la lista.
    areas.forEach((area) => {
      let descripcion = area.descripcion
        ? area.descripcion
        : "<span style='color:gray'>Sin descripción</span>";
      html += `
        <li class="area-item" data-area-id="${area.id}">
          <strong class="area-nombre">${area.nombre}</strong><br>
          <em class="area-descripcion">${descripcion}</em>
        </li>
      `;
    });
    html += "</ul>";
    // Inserta el HTML generado en el contenedor de la página 1.
    $("#page1-container").html(html);

    // Asigna un evento de click a cada elemento de la lista de áreas.
    $(".area-item").on("click", function () {
      const areaId = $(this).data("area-id");
      // Al hacer click, llama a la función para mostrar los cursos de esa área.
      mostrarCursosDeArea(areaId, $(this));
    });
  }

  /**
   * Renderiza la lista de carreras activas en el contenedor correspondiente.
   * @param {Array} carreras - Un array de objetos, donde cada objeto representa una carrera.
   */
  function renderizarCarreras(carreras) {
    // Filtra las carreras para mostrar solo las que están marcadas como activas.
    const carrerasActivas = carreras.filter(
      (carrera) => carrera.activa === "1"
    );

    // Si no hay carreras activas, no hace nada.
    if (carrerasActivas.length === 0) return;

    let html = `
      <h2 class="carreras-titulo">Carreras</h2>
      <ul class="carreras-lista">
    `;
    // Itera sobre cada carrera activa para construir el elemento de la lista.
    carrerasActivas.forEach((carrera) => {
      let descripcion = carrera.descripcion
        ? carrera.descripcion
        : "<span style='color:gray'>Sin descripción</span>";
      html += `
        <li class="carrera-item" data-carrera-id="${carrera.id}">
          <strong class="carrera-nombre">${carrera.nombre}</strong><br>
          <em class="carrera-descripcion">${descripcion}</em>
        </li>
      `;
    });
    html += "</ul>";
    // Inserta el HTML generado en el contenedor de carreras.
    $("#carreras-container").html(html);

    // Asigna un evento de click a cada elemento de la lista de carreras.
    $(".carrera-item").on("click", function () {
      const carreraId = $(this).data("carrera-id");
      // Al hacer click, llama a la función para mostrar el detalle de la carrera.
      mostrarDetalleCarrera(carreraId, $(this));
    });
  }

  // --- Carga de Datos Inicial ---
  // Muestra el indicador de carga.
  $("#loading_indicator").show();
  // Realiza peticiones en paralelo para obtener áreas y carreras.
  Promise.all([
    fetch(apiUrl + "/areadeestudio").then((res) => res.json()),
    fetch(apiUrl + "/carrera").then((res) => res.json()),
  ])
    .then(([dataAreas, dataCarreras]) => {
      // Una vez que ambas peticiones son exitosas:
      // Procesa y renderiza las áreas.
      let areas = Array.isArray(dataAreas.areas) ? dataAreas.areas : [];
      renderizarAreas(areas);

      // Procesa y renderiza las carreras.
      let carreras = Array.isArray(dataCarreras.carreras)
        ? dataCarreras.carreras
        : [];
      renderizarCarreras(carreras);

      // Oculta el indicador de carga.
      $("#loading_indicator").hide();
    })
    .catch((error) => {
      // Si alguna de las peticiones falla:
      console.error("Error cargando datos iniciales:", error);
      // Muestra un mensaje de error en la UI.
      $("#error-message-container").show();
      $("#error-text").text("No se pudieron cargar los datos iniciales.");
      // Oculta el indicador de carga.
      $("#loading_indicator").hide();
    });

  /**
   * Muestra los niveles de un curso específico.
   * Funciona como un 'toggle': si los niveles ya están visibles, los oculta.
   * @param {string} idCurso - El ID del curso.
   * @param {jQuery} $card - La tarjeta del curso que fue clickeada.
   */
  function mostrarNivelesDeCurso(idCurso, $card) {
    // Si esta tarjeta ya muestra los niveles, los quita y termina la ejecución.
    const existingNiveles = $card.find(".curso-niveles-ficha");
    if (existingNiveles.length > 0) {
      existingNiveles.remove();
      return;
    }

    // Elimina cualquier otra ficha de niveles que esté abierta en otras tarjetas.
    $(".curso-niveles-ficha").remove();

    // Muestra un mensaje de carga dentro de la tarjeta del curso.
    $card.append(`<div class="curso-niveles-ficha">Cargando niveles...</div>`);

    // Realiza la petición a la API para obtener los detalles y niveles del curso.
    fetch(`https://api.cadif1.com/curso/${idCurso}`)
      .then((resp) => {
        if (!resp.ok) throw new Error("Error en la respuesta");
        return resp.json();
      })
      .then((info) => {
        // Verifica que la respuesta contenga una lista de niveles válida.
        if (
          !info.curso ||
          !Array.isArray(info.curso.niveles) ||
          info.curso.niveles.length === 0
        ) {
          // Si no hay niveles, muestra un mensaje.
          $card
            .find(".curso-niveles-ficha")
            .html("<p>No hay niveles para este curso.</p>");
        } else {
          // Si hay niveles, construye el HTML para mostrarlos.
          let nivelesHtml = `<div class="niveles-cards">`;
          info.curso.niveles.forEach((nivel) => {
            // Formatea el precio para mostrarlo correctamente.
            const precio = parseFloat(nivel.precio);
            const precioFormateado = !isNaN(precio)
              ? `Bs. ${precio.toFixed(2)}`
              : "<span style='color:gray'>No disponible</span>";

            // Formatea el título del nivel.
            let tituloNivel;
            if (nivel.nivel != null && nivel.nivel !== "") {
              tituloNivel = `Nivel ${nivel.nivel}: ${nivel.nombre}`;
            } else {
              tituloNivel = nivel.nombre;
            }

            nivelesHtml += `
              <div class="nivel-card">
                <div class="nivel-card-titulo">${tituloNivel}</div>
                <div class="nivel-card-objetivo"><strong>Objetivo:</strong> ${
                  nivel.objetivo
                    ? nivel.objetivo
                    : "<span style='color:gray'>Sin objetivo</span>"
                }</div>
                <div class="nivel-card-precio"><strong>Precio:</strong> ${precioFormateado}</div>
              </div>
            `;
          });
          nivelesHtml += "</div>";
          // Inserta el HTML de los niveles en la ficha correspondiente.
          $card.find(".curso-niveles-ficha").html(`
            <div>
              <h4 class="niveles-titulo">Niveles de este curso</h4>
              ${nivelesHtml}
            </div>
          `);
        }
      })
      .catch(() => {
        // Si ocurre un error, muestra un mensaje en la ficha.
        $card
          .find(".curso-niveles-ficha")
          .html(
            "<span style='color:red'>No se pudieron cargar los niveles.</span>"
          );
      });
  }

  // --- Evento Delegado para Cursos ---
  // Se usa event delegation en 'document' porque las tarjetas de curso (.curso-card)
  // se crean dinámicamente después de la carga inicial de la página.
  $(document).on("click", ".curso-card", function (e) {
    e.stopPropagation(); // Evita que el evento de click se propague a elementos padres.
    const idCurso = $(this).data("idcurso");
    // Llama a la función para mostrar los niveles del curso clickeado.
    mostrarNivelesDeCurso(idCurso, $(this));
  });
});
