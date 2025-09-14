$(function () {
  const apiUrl = "https://api.cadif1.com";

  // Función para mostrar cursos de un área
  function mostrarCursosDeArea(areaId, $li) {
    $(".area-detalle-ficha").remove();

    $li.after(
      `<div class="area-detalle-ficha area-cursos-ficha">Cargando cursos...</div>`
    );

    fetch(`https://api.cadif1.com/curso/de_un_area/${areaId}`)
      .then((resp) => {
        if (!resp.ok) throw new Error("Error en la respuesta");
        return resp.json();
      })
      .then((info) => {
        let cursos = Array.isArray(info.cursos) ? info.cursos : [];
        if (cursos.length === 0) {
          $li
            .next(".area-detalle-ficha")
            .html("<p>No hay cursos para esta área.</p>");
        } else {
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
          $li.next(".area-detalle-ficha").html(`
            <div>
              <h3 class="cursos-titulo">Cursos de esta área</h3>
              ${cursosHtml}
            </div>
          `);
        }
      })
      .catch(() => {
        $li
          .next(".area-detalle-ficha")
          .html(
            "<span style='color:red'>No se pudieron cargar los cursos.</span>"
          );
      });
  }

  // Función para mostrar el pensum de una carrera
  function mostrarDetalleCarrera(carreraId, $li) {
    // Comportamiento de toggle: si ya está abierto, lo cierra
    const detalleExistente = $li.next(".carrera-detalle-ficha");
    if (detalleExistente.length > 0) {
      detalleExistente.remove();
      return;
    }

    // Cierra cualquier otro detalle abierto
    $(".carrera-detalle-ficha").remove();

    // Muestra mensaje de carga
    $li.after(`<div class="carrera-detalle-ficha">Cargando pensum...</div>`);
    const $detalleFicha = $li.next(".carrera-detalle-ficha");

    fetch(`${apiUrl}/carrera/${carreraId}`)
      .then((response) => {
        if (!response.ok) throw new Error("Error en la respuesta del pensum");
        return response.json();
      })
      .then((data) => {
        if (
          data.carrera &&
          Array.isArray(data.carrera.pensum) &&
          data.carrera.pensum.length > 0
        ) {
          let pensumHtml =
            '<h3 class="pensum-titulo">Pensum de la Carrera</h3>';

          data.carrera.pensum.forEach((periodo) => {
            if (Array.isArray(periodo) && periodo.length > 0) {
              const numeroPeriodo = periodo[0].periodo;
              pensumHtml += `<h4 class="periodo-titulo">Período ${numeroPeriodo}</h4>`;
              pensumHtml += '<ul class="pensum-lista">';

              periodo.forEach((materiaObj) => {
                if (materiaObj && materiaObj.materia) {
                  pensumHtml += `<li class="pensum-item">${materiaObj.materia}</li>`;
                }
              });

              pensumHtml += "</ul>";
            }
          });

          $detalleFicha.html(pensumHtml);
        } else {
          $detalleFicha.html(
            '<p style="color:gray;">No se encontró información del pensum para esta carrera.</p>'
          );
        }
      })
      .catch((error) => {
        console.error("Error al cargar el pensum:", error);
        $detalleFicha.html(
          '<p style="color:red;">No se pudo cargar el pensum.</p>'
        );
      });
  }

  // Función para renderizar la lista de áreas
  function renderizarAreas(areas) {
    let html = `
      <h2 class="areas-titulo">Áreas de Estudio</h2>
      <ul class="areas-lista">
    `;
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
    $("#page1-container").html(html);

    // Evento click para cada área
    $(".area-item").on("click", function () {
      const areaId = $(this).data("area-id");
      mostrarCursosDeArea(areaId, $(this));
    });
  }

  // Función para renderizar la lista de carreras
  function renderizarCarreras(carreras) {
    const carrerasActivas = carreras.filter(
      (carrera) => carrera.activa === "1"
    );

    if (carrerasActivas.length === 0) return;

    let html = `
      <h2 class="carreras-titulo">Carreras</h2>
      <ul class="carreras-lista">
    `;
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
    $("#carreras-container").html(html);

    // Evento click para cada carrera
    $(".carrera-item").on("click", function () {
      const carreraId = $(this).data("carrera-id");
      mostrarDetalleCarrera(carreraId, $(this));
    });
  }

  // Carga de datos inicial
  $("#loading_indicator").show();
  Promise.all([
    fetch(apiUrl + "/areadeestudio").then((res) => res.json()),
    fetch(apiUrl + "/carrera").then((res) => res.json()),
  ])
    .then(([dataAreas, dataCarreras]) => {
      let areas = Array.isArray(dataAreas.areas) ? dataAreas.areas : [];
      renderizarAreas(areas);

      let carreras = Array.isArray(dataCarreras.carreras)
        ? dataCarreras.carreras
        : [];
      renderizarCarreras(carreras);

      $("#loading_indicator").hide();
    })
    .catch((error) => {
      console.error("Error cargando datos iniciales:", error);
      $("#error-message-container").show();
      $("#error-text").text("No se pudieron cargar los datos iniciales.");
      $("#loading_indicator").hide();
    });

  // Función para mostrar niveles de un curso
  function mostrarNivelesDeCurso(idCurso, $card) {
    // Si esta card ya tiene los niveles, los quita (toggle) y termina la ejecución
    const existingNiveles = $card.find(".curso-niveles-ficha");
    if (existingNiveles.length > 0) {
      existingNiveles.remove();
      return;
    }

    // Elimina cualquier otra ficha de niveles abierta en otras cards
    $(".curso-niveles-ficha").remove();

    // Muestra mensaje de carga dentro de la card clickeada
    $card.append(`<div class="curso-niveles-ficha">Cargando niveles...</div>`);

    fetch(`https://api.cadif1.com/curso/${idCurso}`)
      .then((resp) => {
        if (!resp.ok) throw new Error("Error en la respuesta");
        return resp.json();
      })
      .then((info) => {
        // Ajusta según la estructura real de la respuesta
        if (
          !info.curso ||
          !Array.isArray(info.curso.niveles) ||
          info.curso.niveles.length === 0
        ) {
          $card
            .find(".curso-niveles-ficha")
            .html("<p>No hay niveles para este curso.</p>");
        } else {
          let nivelesHtml = `<div class="niveles-cards">`;
          info.curso.niveles.forEach((nivel) => {
            // Formato de precio
            const precio = parseFloat(nivel.precio);
            const precioFormateado = !isNaN(precio)
              ? `Bs. ${precio.toFixed(2)}`
              : "<span style='color:gray'>No disponible</span>";

            // Formato de título
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
          $card.find(".curso-niveles-ficha").html(`
            <div>
              <h4 class="niveles-titulo">Niveles de este curso</h4>
              ${nivelesHtml}
            </div>
          `);
        }
      })
      .catch(() => {
        $card
          .find(".curso-niveles-ficha")
          .html(
            "<span style='color:red'>No se pudieron cargar los niveles.</span>"
          );
      });
  }

  // Evento click para cada curso-card (agrega esto después de renderizar los cursos)
  $(document).on("click", ".curso-card", function (e) {
    e.stopPropagation(); // Para evitar conflictos si hay otros clicks anidados
    const idCurso = $(this).data("idcurso");
    mostrarNivelesDeCurso(idCurso, $(this));
  });
});
