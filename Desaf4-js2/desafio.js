// ESTOS SON LOS DATOS
var data = [
  {
    "anime": "Gate: Jieitai Kanochi nite Kaku Tatakaeri",
    "character": "Itami Youji",
    "quote": "If you don’t have the resolve to take responsibility for her until the very end, then don’t do anything unnecessary."
  },
  {
    "anime": "Shakugan no Shana III",
    "character": "Khamsin Nbh'w",
    "quote": "For those who love another... To disobey, to rage, to curse, to fight, to kill... None of these disproves that love. A love that's too strong may even make those more likely."
  },
  {
    "anime": "Ergo Proxy",
    "character": "Hoody",
    "quote": "A lie is truth, until you recognize it as a lie. To see the truth behind those lies is probably the right thing to do. However, it may not necessarily bring happiness. Lies are Happiness."
  },
  {
    "anime": "Psycho Love Comedy",
    "character": "Syamaya Saki",
    "quote": "Everyone shows their true face on death's doorstep. Even a noble-minded gentlemen will cast away his principles to beg on the ground. Even a cordial and gentle lady will start cursing with a face like a demon's. Even a frivolous and humorous man will accept death without any punchlines... That is what I believe--The instant just prior to death is when all sorts of true natures will be revealed. Using fear and suffering leading straight to death, baring naked hearts to be admired at one's leisure... This is also one of the wonders of murder."
  },
  {
    "anime": "Gunslinger Stratos: The Animation",
    "character": "TimeKeeper",
    "quote": "To believe in someone can be a dangerous thing."
  },
  {
    "anime": "Jujutsu Kaisen",
    "character": "Wasuke Itadori",
    "quote": "It doesn’t have to be everyone, just help the people around you, as much as you can. Wasuke Itadori"
  },
  {
    "anime": "Eden*",
    "character": "Elica",
    "quote": "Chains can be torn off. Your sister knew that. Be it an artificially produced human or a wild animal stained by sin... I believe that all living things have the right to be happy."
  },
  {
    "anime": "The Melancholy of Haruhi Suzumiya",
    "character": "Yuki Nagato",
    "quote": "I'll back off for now. Next time I won't hesitate to destroy you. Take this time to make your tombstone..."
  },
  {
    "anime": "Fullmetal Alchemist",
    "character": "Roy Mustang",
    "quote": "Nothing's perfect, the world's not perfect, but it's there for us, trying the best it can. That's what makes it so damn beautiful."
  },
  {
    "anime": "One Punch Man",
    "character": "Saitama",
    "quote": "You may be able to get stronger with simply the right attitude. In other words, train your spirit before worrying about strength through power and technology."
  }
]

//ESTOS SON LOS ELEMENTOS QUE ACCIONAN EN EL SITIO
let datas = document.getElementById("datas");
let busqueda = document.getElementById("busqueda");
let ne = document.getElementById("noEncontrado");
ne.classList.add('oculto');

//REQUERIMIENTO 1: Añadir eventos de clic a los botones
document.getElementById("add1").addEventListener("click", crearElementos);
document.getElementById("btnAdd").addEventListener("click", agregarExistentes);

//FUNCIÓN PARA CREAR ELEMENTOS DINÁMICOS (Requerimiento 2)
function crearElementos() {
  console.log('llamado crearElementos');
  data.forEach((e) => {
    let titulo = document.createElement('h2');
    let personaje = document.createElement('h4');
    let cita = document.createElement('p');
    titulo.textContent = 'Anime: ' + e.anime;
    personaje.textContent = 'Personaje: ' + e.character;
    cita.textContent = 'Cita: ' + e.quote;
    datas.appendChild(titulo);
    datas.appendChild(personaje);
    datas.appendChild(cita);
  });
}

// FUNCIÓN PARA VERIFICAR SI EXISTE (Requerimiento 4)
// ERROR: La lógica no siempre muestra/oculta correctamente el mensaje "No Encontrado"
const verificarQueExiste = function() {
  if (document.s1.buscar.value != "") {
    //FUNCIÓN ANÓNIMA PARA BUSCAR
    return data.some(function(e) {
      if (e.quote.includes(document.s1.buscar.value) || 
          e.character.includes(document.s1.buscar.value) || 
          e.anime.includes(document.s1.buscar.value)) {
        console.log('encontrado');
        ne.classList.add('oculto'); // Se espera ocultar el mensaje
        return true;
      } else {
        console.log('no encontrado');
        ne.classList.remove('oculto'); // Se espera mostrar el mensaje
        return false;
      }
    });
  };
}

// FUNCIÓN PARA AGREGAR ELEMENTOS EXISTENTES
function agregarExistentes() {
  // Verificar si el elemento existe en la lista
  if (verificarQueExiste()) {
    console.log('Dato encontrado');
  } else {
    console.log('Dato no encontrado');
  }
  busqueda.innerHTML = "";
  console.log('llamado agregarExistentes');

  // ERROR: El filtro no siempre devuelve los resultados esperados
  if (document.s1.buscar.value != "") {
    let result = data.filter((e) => 
      e.quote.includes(document.s1.buscar.value) || 
      e.character.includes(document.s1.buscar.value) || 
      e.anime.includes(document.s1.buscar.value)
    );
    console.log(result);

    // CREACIÓN DE ELEMENTOS PARA LOS RESULTADOS
    result.forEach((e) => {
      let titulo = document.createElement('h2');
      let personaje = document.createElement('h4');
      let cita = document.createElement('p');
      titulo.textContent = 'Anime: ' + e.anime;
      personaje.textContent = 'Personaje: ' + e.character;
      cita.textContent = 'Cita: ' + e.quote;
      busqueda.appendChild(titulo);
      busqueda.appendChild(personaje);
      busqueda.appendChild(cita);
    });
  }
}
