import type { Faction } from './types'

export const factions: Faction[] = [
  // ─────────────────────────────────────────────────────────────────
  // TERMINIDOS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'terminidos',
    name: 'Terminidos',
    color: '#ffcc00',
    tagline: 'Enjambre biológico hostil',
    enemies: [
      {
        id: 'carronero',
        name: 'Carroñero',
        threat: 1,
        image: '/facciones/Vol. 1/Terminidos/1. Carroñero/Imagen carroñero.webp',
        description:
          'El eslabón más bajo de la jerarquía Terminida. Son las unidades más débiles y fáciles de eliminar, pero operan en grandes manadas protegidas por unidades superiores. Cualquier arma es suficiente para neutralizarlos; un golpe certero en la cara o en la cola los elimina de inmediato. A pesar de su debilidad individual, tienen la capacidad de llamar refuerzos con mayor frecuencia que cualquier otra unidad Terminida.',
      },
      {
        id: 'saltador',
        name: 'Saltador',
        threat: 1,
        image: '/facciones/Vol. 1/Terminidos/2. Saltador/Imagen saltador.webp',
        description:
          'La etapa juvenil de los Cazadores. Aunque pequeños, no deben subestimarse: van en patrullas numerosas y, al detectar a su presa, realizan saltos de gran escala para cubrir la distancia rápidamente. Cualquier arma puede acabar con ellos; incluso un golpe directo en la cara los elimina al instante. Tienden a ocultarse entre las filas del enjambre para solicitar refuerzos.',
      },
      {
        id: 'escupidor-bilis',
        name: 'Escupidor de Bilis',
        threat: 2,
        image: '/facciones/Vol. 1/Terminidos/3. Escupidor de Bilis/Imagen escupidor.webp',
        description:
          'La última unidad juvenil de los Terminidos. Más frágil que otras de su categoría, pero peligrosa en misiones con alta presencia de Bilis. Como su nombre indica, escupen Bilis corrosiva para debilitar a sus presas. Al morir, explotan liberando Bilis a su alrededor; si se encuentran en manada, esto produce una reacción en cadena que los elimina a todos. Tienen menor frecuencia de llamada de refuerzos que otras unidades juveniles.',
      },
      {
        id: 'guerrero',
        name: 'Guerrero',
        threat: 2,
        image: '/facciones/Vol. 1/Terminidos/4. Guerrero/Warrior_Enemy_Icon.png',
        description:
          'La segunda etapa evolutiva del Carroñero. Compensan su incapacidad de volar con velocidad notable en movimiento y ataque, capaz de matar a un Helldiver distraído en segundos. Operan en manadas y poseen tres variantes: Básico, Bilis y Alfa. Sin armadura significativa, cualquier arma puede neutralizarlos. Su punto débil principal es la cabeza. Pueden emitir un grito de auxilio para solicitar refuerzos.',
      },
      {
        id: 'guerrero-bilis',
        name: 'Guerrero de Bilis',
        threat: 2,
        image: '/facciones/Vol. 1/Terminidos/5. Guerrero de Bilis/Bile_warrior_3.png',
        description:
          'Variante del Guerrero que solo aparece en misiones de alta presencia de Bilis. Comparte todas las características del Guerrero estándar pero con el sistema de sacrificio de las unidades de Bilis: al morir, explota esparciendo Bilis corrosiva a su alrededor. Mantener distancia durante su eliminación para evitar salpicaduras. Puede ocasionalmente emitir un grito de auxilio para solicitar refuerzos.',
      },
      {
        id: 'guerrero-alfa',
        name: 'Guerrero Alfa',
        threat: 2,
        image: '/facciones/Vol. 1/Terminidos/6. Guerrero Alfa/640px-Alpha_Warrior_Enemy_Icon.png',
        description:
          'Versión potenciada del Guerrero básico, con mayor velocidad de movimiento y ataque, y fuerza aumentada capaz de alcanzar incluso a Helldivers en retirada. Sus defensas son equivalentes al Guerrero estándar, lo que lo hace igualmente vulnerable al fuego directo. Solo pueden ser convocados mediante el llamado de un Comandante Alfa. También pueden emitir gritos de auxilio para solicitar refuerzos.',
      },
      {
        id: 'cazador',
        name: 'Cazador',
        threat: 2,
        image: '/facciones/Vol. 1/Terminidos/7. Cazador/Hunter_Enemy_Icon.png',
        description:
          'La segunda etapa evolutiva del Saltador. Mantienen la capacidad de dar grandes saltos para atacar y han desarrollado tentáculos en la boca que aplican neurotoxinas capaces de ralentizar significativamente a los Helldivers. Emplean tácticas de flanqueo para evitar el fuego directo. Siguen siendo físicamente frágiles, por lo que cualquier arma puede neutralizarlos. Patrullan en manadas de hasta 12 unidades y pueden llamar refuerzos.',
      },
      {
        id: 'vomitador-criadero',
        name: 'Vomitador del Criadero',
        threat: 2,
        image: '/facciones/Vol. 1/Terminidos/8. Vomitador del Criadero/Nursing_Spewer_1.png',
        description:
          'Etapa intermedia del proceso evolutivo de los Escupidores de Bilis. Durante esta fase pierden la capacidad de producir Bilis para transportar huevos entre nidos. Su armadura se ha reforzado moderadamente, haciéndolos más resistentes a munición convencional. Al sentirse amenazados, regurgitan grandes cantidades de jugos gástricos sobre los Helldivers. El daño explosivo en el abdomen provoca una explosión en cadena si hay varios juntos. Operan en manadas de hasta 5 unidades.',
      },
      {
        id: 'lanza-bilis',
        name: 'Lanza Bilis',
        threat: 3,
        image: '/facciones/Vol. 1/Terminidos/9. Lanza Bilis/Bile_Spewer_Enemy_Icon.png',
        description:
          'Siguiente etapa evolutiva del Escupidor de Bilis. Tras su paso por la fase de transporte, recuperan su sistema de producción de Bilis y generan grandes placas defensivas en el abdomen. Pueden regurgitar Bilis a corta distancia o adoptar posición estacionaria para disparar bombas de Bilis en arco a grandes distancias. Resistentes a munición convencional pero altamente vulnerables a explosivos en el abdomen, lo cual provoca una enorme explosión y posibles reacciones en cadena. Operan en manadas de 5 a 7 unidades.',
      },
      {
        id: 'guardian-colmena',
        name: 'Guardián de la Colmena',
        threat: 3,
        image: '/facciones/Vol. 1/Terminidos/10. Guardián de la Colmena/Terminid_Hive_Guard_Updated.png',
        description:
          'Etapa intermedia de la línea evolutiva del Guerrero. Han desarrollado grandes placas resistentes en la cabeza y parte frontal de las patas, siendo completamente inmunes a munición convencional. Para neutralizarlos se requiere al menos penetración media. Esta defensa mejorada viene acompañada de pérdida de velocidad de movimiento, aunque mantienen la misma velocidad de ataque. Suelen hacer guardia en puntos de interés y nidos. Dependiendo de las necesidades de la colmena, pueden evolucionar a Embestidor o Empalador.',
      },
      {
        id: 'embestidor',
        name: 'Embestidor',
        threat: 4,
        image: '/facciones/Vol. 1/Terminidos/11. Embestidor/ChargerH2.png',
        description:
          'Siguiente fase evolutiva del Guardián de la Colmena. Han duplicado su tamaño, lo cual los convierte paradójicamente en una unidad de asedio más rápida e imparable. Casi todo su cuerpo está cubierto de corazas muy resistentes; solo pueden ser neutralizados con daño pesado en la zona trasera, o con armas de penetración pesada. Un cohete directo a la cabeza también es efectivo. Un lanzallamas puede derretirlos desde adentro sin necesidad de romper la coraza. Poseen dos variantes: Esporas y Behemoth.',
      },
      {
        id: 'embestidor-esporas',
        name: 'Embestidor de Esporas',
        threat: 4,
        image: '/facciones/Vol. 1/Terminidos/12. Embestidor de Esporas/Spore_Charger.png',
        description:
          'Variante del Embestidor con protuberancias de Bilis en las pocas partes expuestas del cuerpo, emanando una nube densa de esporas Terminidas que reduce drásticamente la visibilidad en el área. Comparte toda la resistencia y capacidades ofensivas del Embestidor básico. Al ser eliminado, explota causando una nube de Bilis corrosiva a su alrededor, lo cual puede ser fatal para Helldivers desprevenidos.',
      },
      {
        id: 'behemoth',
        name: 'Behemoth',
        threat: 4,
        image: '/facciones/Vol. 1/Terminidos/13. Behemoth/Behemoth_Charger_Enemy_Icon.png',
        description:
          'Variante del Embestidor, a menudo confundida con una etapa evolutiva adicional. Es simplemente una versión más resistente y agresiva que sus variantes Básica y de Esporas. La diferencia es principalmente estadística y no morfológica. El mismo arsenal de penetración pesada utilizado contra sus otras variantes es igualmente efectivo. No subestimarlo por su apariencia similar al Embestidor estándar.',
      },
      {
        id: 'empalador',
        name: 'Empalador',
        threat: 4,
        image: '/facciones/Vol. 1/Terminidos/14. Empalador/Impaler.png',
        description:
          'La segunda vía evolutiva que puede tomar el Guardián de la Colmena. En esta etapa, su tamaño se cuadruplica, las placas frontales aumentan en resistencia extrema y ha desarrollado tentáculos de gran tamaño en el rostro. Puede clavar estos tentáculos en el suelo y proyectarlos a grandes distancias para empalar a su presa. Durante este ataque, la cara —su punto débil— queda expuesta: esa es la oportunidad para atacar. Prácticamente invulnerable en el cuerpo salvo con penetración pesada. Con su eliminación concluye la línea evolutiva de los Carroñeros.',
      },
      {
        id: 'aullador',
        name: 'Aullador',
        threat: 3,
        image: '/facciones/Vol. 1/Terminidos/15. Aullador/ShriekerRender.png',
        description:
          'Resultado de una mutación forzada por el fallo del Termicida durante la creación de la Gran Barrera. Grandes grupos de Cazadores mutaron desarrollando enormes alas filosas, convirtiéndose en los primeros Terminidos capaces de volar. Han creado sus propios nidos, que deben ser destruidos como objetivos secundarios para detener sus apariciones. Su resistencia y armadura no aumentaron, por lo que cualquier arma convencional los neutraliza. Atacan en picado desde el aire con sus alas afiladas. Operan en manadas de 6 a 20 unidades dependiendo de la densidad de nidos cercanos.',
      },
      {
        id: 'acosador',
        name: 'Acosador',
        threat: 4,
        image: '/facciones/Vol. 1/Terminidos/16. Acosador/Stalker_Enemy_Icon.png',
        description:
          'La etapa final de la línea evolutiva del Saltador. Mantienen la capacidad de dar grandes saltos, pero ahora los usan principalmente para escapar del peligro. Han desarrollado una membrana en la piel que les permite camuflarse completamente con el ambiente, volviéndose invisibles al ojo no entrenado. Cuando están lo suficientemente cerca, revelan su forma y atacan con tentáculos paralizantes antes de emplear sus garras afiladas. Si sienten que su presa puede hacerles frente, vuelven a ocultarse. Han creado nidos propios que constituyen objetivos secundarios. Suelen ser solitarios, aunque se han visto manadas de hasta 5.',
      },
      {
        id: 'comandante-crias',
        name: 'Comandante de Crías',
        threat: 3,
        image: '/facciones/Vol. 1/Terminidos/17. Comandante de Crías/Brood_Commander_Enemy_Icon.png',
        description:
          'Línea evolutiva directa del Guerrero, sin pasar por la fase de Guardián. Son Guerreros potenciados al máximo: más rápidos, más fuertes y más resistentes. Requieren armamento más potente que el convencional para ser derribados antes de que alcancen a su presa. La técnica más efectiva es un disparo potente en la cabeza, ya que incluso sin el 90% de sus extremidades seguirán avanzando. Pueden sobrevivir brevemente incluso sin cabeza. Tienen la capacidad de llamar un escuadrón de crías y unidades juveniles, incluso estando decapitados.',
      },
      {
        id: 'comandante-alfa',
        name: 'Comandante Alfa',
        threat: 3,
        image: '/facciones/Vol. 1/Terminidos/18. Comandante Alfa/3159493752_preview_Screenshot_2024-08-07_154519.png',
        description:
          'La última fase de la línea evolutiva de los Carroñeros. Comparte los atributos y debilidades de otros Comandantes, pero con armadura mejorada y la capacidad de llamar Guerreros Alfa al combate. Presentan un comportamiento de autopreservación único entre los Terminidos pesados: si se encuentran solos y reciben daño, intentarán huir para recuperarse y reagrupar fuerzas. Es la única unidad "pesada" capaz de solicitar refuerzos.',
      },
      {
        id: 'titan-bilis',
        name: 'Titán de Bilis',
        threat: 5,
        image: '/facciones/Vol. 1/Terminidos/19. Titán de Bilis/Bile_Titan_Enemy_Icon.png',
        description:
          'La unidad más grande y resistente de todos los Terminidos, y la fase final de la línea evolutiva del Escupidor de Bilis. Su cuerpo colosal solo puede ser derribado con armas de gran calibre capaces de destruir blindaje máximo. Puede regurgitar enormes cantidades de Bilis corrosiva, suficiente para aniquilar cualquier ser vivo —aliado o enemigo— bajo la cascada. Su punto más débil es el rostro, pero su enorme vitalidad hace que se recomiende armamento estratégico concentrado. Conocidas también como las grandes Matriarcas.',
      },
      {
        id: 'dragoracha',
        name: 'Dragoracha',
        threat: 5,
        image: '/facciones/Vol. 1/Terminidos/20. Dragoracha/1280px-Dragonroach_Enemy_Icon-1.webp',
        description:
          'Resultado de mutaciones extremas generadas en las densas condiciones de los Mundos Colmena. Algunos Aulladores han logrado evolucionar a esta nueva especie de tamaño comparable al Titán de Bilis. Poseen la capacidad de escupir grandes cantidades de Bilis inflamable. Un disparo certero en la cabeza con armamento antitanque es suficiente para neutralizarlas; de no disponer de eso, destruirles las alas también las derriba. Suelen ser solitarias, pero si no se eliminan con rapidez, más comenzarán a llegar.',
      },
      {
        id: 'senor-colmena',
        name: 'Señor de la Colmena',
        threat: 5,
        image: '/facciones/Vol. 1/Terminidos/21. Señor de la Colmena/1280px-Hive_Lord_Enemy_Icon.webp',
        description:
          'Seres extintos durante la Primera Guerra Galáctica que han sido devueltos por la Penumbra. Poseen un exoesqueleto completamente blindado que solo puede ser dañado con armamento antitanque. La placa de la cabeza es tan densa que ni los explosivos más potentes pueden romperla. Sin embargo, una vez que se logra destruir alguna sección del exoesqueleto, la carne expuesta es extremadamente vulnerable a cualquier arma. Su presencia se anuncia con temblores colosales perceptibles en todo el mapa. Se movilizan bajo tierra hasta estar listos para el combate. Solo se han detectado en los Mundos Colmenas.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // AUTÓMATAS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'automatas',
    name: 'Autómatas',
    color: '#e83838',
    tagline: 'Ejército mecánico expansionista',
    enemies: [
      {
        id: 'infanteria',
        name: 'Infantería',
        threat: 1,
        image: '/facciones/Vol. 1/Autómatas/1. Infantería/Helldivers-2-Automatons-Trooper.png',
        description:
          'Los Autómatas cuentan con ocho variantes de tropa básica, todas con funciones similares y diferencias de armadura apenas perceptibles. Armamento básico y buenos reflejos son suficientes para no ser alcanzado por estas máquinas. Las variantes incluyen: Tropa básica (fusil estándar), Merodeador (cañón de disparo rápido), Peleador (cuchillas de calor, sin ataque a distancia), Asaltante de Ametralladora, Asaltante de Cohetes, y Asaltante de Asalto (cuchilla, pistola y mochila de salto explosiva). Las Tropas son la única unidad Autómata capaz de llamar refuerzos.',
      },
      {
        id: 'comisario',
        name: 'Comisario',
        threat: 2,
        image: '/facciones/Vol. 1/Autómatas/2. Comisario/Helldivers-2-Automatons-Commissar.png',
        description:
          'Líderes de las tropas de infantería. Poseen el mismo nivel de armadura y capacidad ofensiva que sus subordinados: pistola y cuchilla como armamento principal. Pueden llamar refuerzos, aunque con menor frecuencia, delegando habitualmente esta función a las tropas bajo su mando.',
      },
      {
        id: 'caminante-explorador',
        name: 'Caminante Explorador',
        threat: 2,
        image: '/facciones/Vol. 1/Autómatas/3. Caminante Explorador/Scout_Strider_Enemy_Icon.png',
        description:
          'Primera unidad mediana del frente Autómata. Es un vehículo controlado por una Tropa de Infantería completamente expuesta en la parte superior. La estructura del vehículo está altamente reforzada y requiere armamento de calibre medio para ser destruida. Posee una torreta láser de cadencia media. La forma más efectiva de neutralizarlo es eliminar a la Tropa de Infantería que lo controla, completamente al descubierto desde el cockpit superior.',
      },
      {
        id: 'caminante-reforzado',
        name: 'Caminante Reforzado',
        threat: 3,
        image: '/facciones/Vol. 1/Autómatas/4. Caminante Reforzado/Reinforced_Scout_Strider_Enemy_Icon.png',
        description:
          'Variante del Caminante Explorador con un incremento drástico de armadura. El operador ahora se encuentra totalmente cubierto en una cabina de alta resistencia. Su arsenal fue mejorado con mayor cadencia de disparo y misiles a ambos lados. Sus puntos débiles son la base del caminante (armadura inferior más débil) y los propios cohetes laterales: dispararles antes de que sean lanzados provoca una explosión que destruye la unidad. Se clasifica como unidad pesada entre las filas Autómatas.',
      },
      {
        id: 'berserker',
        name: 'Berserker',
        threat: 3,
        image: '/facciones/Vol. 1/Autómatas/5. Berserker/Helldivers-2-Automatons-Berserker.png',
        description:
          'Una de las unidades medianas más abundantes de los Autómatas. Corren sin pausa hacia los Helldivers equipados con potentes motosierras capaces de cortar a cualquier ser vivo. Sus puntos débiles son la cara y el abdomen, aunque su resistencia en esas zonas es considerable, requiriendo armas de gran potencia o alta cadencia para neutralizarlos. Pueden seguir en combate incluso tras perder ambos brazos. Advertencia: no usar armas que generen calor, ya que esto los pone en estado de frenesí, aumentando su velocidad de ataque.',
      },
      {
        id: 'devastador',
        name: 'Devastador',
        threat: 3,
        image: '/facciones/Vol. 1/Autómatas/6. Devastador/Helldivers-2-Automatons-Devastator.png',
        description:
          'Unidad mediana predeterminada de los Autómatas. Posee un brazo con cañón láser de potencia moderada y grandes puños de acero para combate cercano. Su armadura es de nivel medio, con el rostro como único punto de baja resistencia. Sin línea de fuego a la cabeza, se requieren armas de penetración media para neutralizarlos eficientemente. Poseen dos variantes más resistentes y ofensivas: Devastador Pesado y Devastador de Cohetes.',
      },
      {
        id: 'devastador-pesado',
        name: 'Devastador Pesado',
        threat: 3,
        image: '/facciones/Vol. 1/Autómatas/7. Devastador Pesado/Official_Heavy_Devastator.png',
        description:
          'Físicamente idéntico al Devastador estándar, con el mismo punto débil y resistencia de armadura. La diferencia clave es su ametralladora pesada láser de alta cadencia, capaz de eliminar a cualquier Helldiver desprevenido. Además, porta un escudo de resistencia pesada que protege de la mayoría de impactos frontales, incluidas algunas explosiones directas. Para neutralizarlo, atacar los flancos o apuntar a la cara con armamento de penetración pesada.',
      },
      {
        id: 'devastador-cohetes',
        name: 'Devastador de Cohetes',
        threat: 4,
        image: '/facciones/Vol. 1/Autómatas/8. Devastador de Cohetes/AUT_Devastator_Rocket_Renders_Thumbnail_2-2.png',
        description:
          'Comparte la armadura y punto débil de sus variantes. Su diferencia principal son los dos lanzadores de cohetes en los hombros, con capacidad de 6 cohetes por lanzador más una recarga adicional cada uno. Estos lanzadores pueden ser deshabilitados con daño de calibre medio o pesado, eliminando su capacidad ofensiva a distancia. Extremadamente peligroso en campo abierto: buscar cobertura inmediatamente al detectarlo.',
      },
      {
        id: 'gigantones',
        name: 'Gigantones',
        threat: 4,
        image: '/facciones/Vol. 1/Autómatas/9. Gigantones/Helldivers-2-Automatons-Hulk.png',
        description:
          'La unidad pesada más básica de las filas Autómatas. Su alta armadura solo puede ser atravesada con armas de calibre pesado, incluyendo explosivos. Sus puntos débiles son el ojo central en la cara y, sobre todo, el escape de calor en la espalda: destruirlo provoca sobrecalentamiento y eliminación inmediata. La destrucción simultánea de ambas piernas también desactiva la unidad. Existen 3 variantes que solo difieren en armamento: Peleador (lanzacohetes + cañón láser), Calcinador (lanzallamas + sierra) y Aniquilador (doble lanzacohetes).',
      },
      {
        id: 'andante-guerra',
        name: 'Andante de Guerra',
        threat: 4,
        image: '/facciones/Vol. 1/Autómatas/10. Andante de Guerra/War_Strider_Enemy_Icon.webp',
        description:
          'Unidad pesada con gran capacidad ofensiva. Posee dos torretas láser que disparan constantemente, destruibles con impactos antitanque precisos. También lanza lluvias de granadas que cubren enormes áreas, capaces de desestabilizar a cualquier escuadrón. Su mayor debilidad son las piernas y la entrepierna: disparos certeros en esas zonas son suficientes para destruirlo sin necesidad de armamento antitanque.',
      },
      {
        id: 'tanque-aniquilador',
        name: 'Tanque Aniquilador',
        threat: 4,
        image: '/facciones/Vol. 1/Autómatas/11. Tanque Aniquilador/Helldivers-2-Automatons-Tank.png',
        description:
          'Vehículo blindado con un cañón láser capaz de desintegrar cualquier objetivo con un impacto directo. Para combate cercano, cuenta con 2 ametralladoras de cadencia media. Como todo tanque Autómata, el blindaje frontal y lateral es prácticamente impenetrable a armamento personal. Su punto débil es la torreta trasera y el exhaust: requiere coordinación de escuadrón o armamento estratégico para su neutralización efectiva.',
      },
      {
        id: 'tanque-despedazador',
        name: 'Tanque Despedazador',
        threat: 4,
        image: '/facciones/Vol. 1/Autómatas/12. Tanque Despedazador/Shredder_Tank.png',
        description:
          'Variante del tanque donde las ametralladoras se han integrado en la cabeza giratoria, ganando mayor cobertura de fuego y cadencia de disparo a costa del cañón principal. Su capacidad de rotación le permite cubrir amplios sectores simultáneamente. Comparte la resistencia y vulnerabilidades del tanque estándar: blindaje impenetrable en frente y laterales, con el exhaust trasero como punto débil.',
      },
      {
        id: 'tanque-bombardero',
        name: 'Tanque Bombardero',
        threat: 4,
        image: '/facciones/Vol. 1/Autómatas/13. Tanque Bombardero/Barrager_Tank.png',
        description:
          'Variante del tanque que sustituye sus cañones por un sistema de lanzamiento de cohetes tipo bombardeo. Al detectar enemigos, eleva el lanzador y dispara ráfagas de 4 cohetes por salva hasta neutralizar el objetivo. Es la variante con mayor alcance y daño en área del tanque Autómata. Comparte la resistencia del tanque estándar: mantener distancia y buscar cobertura densa es imperativo al enfrentarlo.',
      },
      {
        id: 'nave-descenso',
        name: 'Nave de Descenso',
        threat: 2,
        image: '/facciones/Vol. 1/Autómatas/14. Nave de Descenso/Dropship_Enemy_Icon.png',
        description:
          'Naves de transporte que traen refuerzos cuando son convocados por Tropas de Infantería o Comisarios. Sin armamento ofensivo propio, pueden transportar cualquier unidad Autómata sin excepción. La forma más efectiva de neutralizar los refuerzos es destruir la nave antes de que los despliegue. Solo armamento antitanque puede destruirlas; sus 4 propulsores son el punto débil crítico: destruir 1 de los 4 es suficiente para destruir la nave completa.',
      },
      {
        id: 'nave-ataque',
        name: 'Nave de Ataque',
        threat: 3,
        image: '/facciones/Vol. 1/Autómatas/15. Nave de Ataque/Gunship_Enemy_Icon.png',
        description:
          'Versión más pequeña y ágil de la Nave de Descenso. Han sacrificado la capacidad de transporte por un arsenal de combate: cañones láser de disparo continuo y lanzacohetes. Son fabricadas en instalaciones específicas que constituyen objetivos secundarios destruibles con una Bomba Hell. Poseen menor blindaje, siendo vulnerables a munición pesada. Sus propulsores siguen siendo el punto débil más efectivo. Mantener la puntería estable mientras maniobran.',
      },
      {
        id: 'fabrica-andante',
        name: 'Fábrica Andante',
        threat: 5,
        image: '/facciones/Vol. 1/Autómatas/16. Fábrica Andante/Factory_Strider_Render.png',
        description:
          'La unidad más pesada de las líneas Autómatas hasta la fecha. Arsenal de gran potencia: cañón de alto calibre (solo destruible con antitanque), dos ametralladoras de alta cadencia debajo de la cara (armadura media), y una apertura abdominal que fabrica patrullas de 6 Devastadores de manera continua. Destruir el abdomen provoca una combustión interna que la destruye en segundos. Un disparo certero al ojo derecho con calibre pesado puede desactivarla en pocos impactos, aunque es extremadamente difícil de conseguir.',
      },
    ],
  },

  // ─────────────────────────────────────────────────────────────────
  // ILUMINADOS
  // ─────────────────────────────────────────────────────────────────
  {
    id: 'iluminados',
    name: 'Iluminados',
    color: '#a855f7',
    tagline: 'Colectivo psíquico intergaláctico',
    enemies: [
      {
        id: 'sin-voto',
        name: 'Sin Voto',
        threat: 1,
        image: '/facciones/Vol. 1/Iluminados/1. Sin Voto/Voteless_Enemy_Icon.png',
        description:
          'Antiguos ciudadanos bajo la tutela de la Supertierra que fueron captados y modificados por los Iluminados para hacerlos lo más similares posible a los K\'lamares. Sin voluntad propia, actúan bajo las órdenes de sus nuevos amos en manadas numerosas, sin instinto de autopreservación. Su resistencia es prácticamente nula debido a la ausencia de armadura. Atacan sin pausa hasta recibir nuevas órdenes, incluso a costa de su propia vida. En sus últimos momentos de vida, algunos Sin Votos han sido vistos realizando el Saludo de la Supertierra.',
      },
      {
        id: 'mutamorfo',
        name: 'Mutamorfo',
        threat: 2,
        image: '/facciones/Vol. 1/Iluminados/2. Mutamorfo/1280px-Fleshmob_Enemy_Icon.png',
        description:
          'Una amalgama de múltiples Sin Votos fusionados por los Iluminados en una sola entidad. Sin inteligencia propia, son capaces de absorber enormes cantidades de daño. Cuanto más cerca están de la muerte, más rápidos e imparables se vuelven. Cualquier arma puede dañarlos, pero se necesitan grandes volúmenes de impactos para neutralizarlos. Apuntar a las múltiples caras que forman su cuerpo es la vía de eliminación más rápida.',
      },
      {
        id: 'vigilante',
        name: 'Vigilante',
        threat: 1,
        image: '/facciones/Vol. 1/Iluminados/3. Vigilante/Watcher_Enemy_Icon.png',
        description:
          'Drones patrulleros de los Iluminados y la única unidad de la facción capaz de llamar refuerzos. Al detectar amenazas, convocan refuerzos de inmediato sin dudarlo. Poseen armadura ligera, por lo que cualquier arma puede neutralizarlos. Su punto débil es el visor: destruirlo los elimina instantáneamente. Sus aletas periféricas explotan al contacto con el suelo al ser destruidas: cuidado con los escombros. Su único ataque directo es un rayo paralizante a corta distancia.',
      },
      {
        id: 'avisor',
        name: 'Avisor',
        threat: 3,
        image: '/facciones/Vol. 1/Iluminados/4. Avisor/Overseer_Enemy_Icon.png',
        description:
          'Generales de las filas Iluminadas y líderes de las manadas de Sin Votos. En combate a distancia, usan su bastón como rifle de baja cadencia pero alto daño. En combate cercano, emplean el bastón como arma cuerpo a cuerpo capaz de derribar a cualquier Helldiver de un golpe, dejándolo a merced de los demás Iluminados. Poseen armadura media en todo el cuerpo excepto la cabeza, que tiene blindaje pesado. Un disparo limpio a la cabeza con armas de penetración pesada es la eliminación más eficiente.',
      },
      {
        id: 'avisor-superior',
        name: 'Avisor Superior',
        threat: 3,
        image: '/facciones/Vol. 1/Iluminados/5. Avisor Superior/Elevated_Overseer_Enemy_Icon.png',
        description:
          'Contraparte aérea del Avisor, con función defensiva de la manada. Se enfoca en fuego a distancia constante con alta cadencia de disparos de plasma, capaces de saturar a los Helldivers. Equipado con jetpack que los mantiene en el aire hasta su muerte o hasta que el jetpack sea destruido. Poseen armadura media igual que sus variantes terrestres, excepto las piernas, más ligeras para facilitar el vuelo. Al detectar enemigos cercanos, lanzan una granada de alto impacto.',
      },
      {
        id: 'avisor-creciente',
        name: 'Avisor Creciente',
        threat: 3,
        image: '/facciones/Vol. 1/Iluminados/6. Avisor Creciente/1280px-Crescent_Overseer_Enemy_Icon.webp',
        description:
          'Variante de Avisor con la misma resistencia que sus contrapartes. Su método de combate principal es un cañón de gran tamaño y potencia que puede ser cargado para disparar en arco como mortero, o apuntar directamente al objetivo en posición semi-estacionaria a corta distancia. Suelen aparecer en grupos de 1 a 2 por patrulla, pero se agrupan rápidamente con aliados para crear una lluvia de fuego devastadora y difícil de predecir.',
      },
      {
        id: 'cosechador',
        name: 'Cosechador',
        threat: 4,
        image: '/facciones/Vol. 1/Iluminados/7. Cosechador/Harvester_HD2.png',
        description:
          'Las unidades pesadas de los Iluminados. Seres de gran tamaño con escudo de energía que se activa automáticamente al detectar presencia enemiga. Poseen un láser de potencia extrema capaz de desintegrar a cualquier Helldiver en su trayectoria. A corta distancia, lanzan rayos que eliminan a Helldivers con poca vida o provocan parálisis temporal. Casi todo el cuerpo tiene blindaje pesado; las coyunturas de las patas y la cabeza tienen armadura media. La destrucción de cualquier extremidad provoca la eliminación inmediata. Destruir los cuernos de la cabeza desactiva la capacidad de generar escudos.',
      },
      {
        id: 'mantarraya',
        name: 'Mantarraya',
        threat: 3,
        image: '/facciones/Vol. 1/Iluminados/8. Mantarraya/1280px-Stingray_Enemy_Icon.webp',
        description:
          'Naves de ataque de los Iluminados, con resistencia media: una buena cantidad de impactos convencionales o pocos tiros explosivos son suficientes para neutralizarlas. Siempre aparecen en pares, rodeando el área de combate en busca del mejor ángulo de ataque. Su modo de combate consiste en un barrido de plasma capaz de desintegrar a cualquier unidad en su línea de fuego.',
      },
      {
        id: 'leviatan',
        name: 'Leviatán',
        threat: 5,
        image: '/facciones/Vol. 1/Iluminados/9. Leviatán/1280px-Leviathan_Enemy_Icon.webp',
        description:
          'Las unidades más grandes de los Iluminados hasta la fecha. Poseen un arsenal de cañones láser y sistemas de apuntado múltiple para aniquilar cualquier objetivo en su radio de acción. Su vitalidad y resistencia son colosales; completamente inmunes a cualquier armamento inferior al antitanque. Sus puntos débiles son las aletas que utilizan para volar: al destruir una, se expone el interior, vulnerable a penetración pesada. Cuidado al eliminarlos: cuanto más grandes son, más daño producen al caer. Solo aparecen en operaciones donde se detecta su presencia desde los SuperDestructores.',
      },
    ],
  },
]

export const getFactionById = (id: string): Faction | undefined =>
  factions.find((f) => f.id === id)
