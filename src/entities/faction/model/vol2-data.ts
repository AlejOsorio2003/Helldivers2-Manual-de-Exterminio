import type { FactionVol2 } from './vol2-types'

export const factionsVol2: FactionVol2[] = [
  {
    id: 'terminidos',
    name: 'Terminidos',
    color: '#ffcc00',
    tagline: 'Cepas mutantes de la Penumbra',
    subfactions: [
      {
        id: 'cepa-esporas',
        name: 'Cepa Baño de Esporas',
        description:
          'Mutaciones pálidas surgidas en los confines de la Penumbra. Son bombas de esporas ambulantes con un alto nivel reproductivo que satura el campo de batalla. Tras su anterior exterminio, han regresado con una variación nueva: al exponerse a las esporas de sus congéneres, entran en un frenesí que los impulsa a velocidades increíbles.',
        enemies: [
          {
            id: 'carronero-esporas',
            name: 'Carroñero de Esporas',
            threat: 1,
            image: '/vol2/terminidos/cepa-esporas/carronero-esporas.webp',
            description:
              'Variante pálida del Carroñero estándar, perteneciente a la Cepa Baño de Esporas. Al recibir daño suficiente, su interior volátil detona en una nube de esporas que puede ralentizar a los Helldivers cercanos. Se desplaza en grandes enjambres y suele preceder a unidades más peligrosas de la cepa.',
          },
          {
            id: 'cazador-esporas',
            name: 'Cazador de Esporas',
            threat: 2,
            image: '/vol2/terminidos/cepa-esporas/cazador-esporas.webp',
            description:
              'Variante de Cazador perteneciente a la Cepa Baño de Esporas. Conserva la agilidad y velocidad de su contraparte estándar, añadiendo la capacidad de detonar en esporas al ser eliminado. En grupos resulta especialmente peligroso, ya que una detonación en cadena puede saturar rápidamente el entorno.',
          },
          {
            id: 'guerrero-esporas',
            name: 'Guerrero de Esporas',
            threat: 3,
            image: '/vol2/terminidos/cepa-esporas/guerrero-esporas.webp',
            description:
              'Variante de Guerrero de la Cepa Baño de Esporas. Más resistente que sus compañeros de cepa, actúa como columna vertebral de las hordas de esta variante. Su explosión de esporas al morir cubre un radio considerable; se recomienda mantener distancia al eliminarlo.',
          },
          {
            id: 'titan-bano-esporas',
            name: 'Titán de Baño de Esporas',
            threat: 5,
            image: '/vol2/terminidos/cepa-esporas/titan-bano-esporas.webp',
            description:
              'Una nueva variante de Titán Bilis ha llegado para aterrorizar a nuestros ciudadanos. Modificada por el contacto prolongado con las esporas Terminidas, esta variante posee mayor resistencia en la cabeza para evitar ser eliminada con facilidad, como ocurre con sus contrapartes normales. Ha perdido la capacidad de producir Bilis, pero a cambio puede vomitar colosales cantidades de esporas para potenciar a los Terminidos de Baño de Esporas cercanos.',
          },
        ],
      },
      {
        id: 'cepa-depredadora',
        name: 'Cepa Depredadora',
        description:
          'Variantes Terminidas surgidas en los confines de la Penumbra. Más agresivas que sus contrapartes, capaces de camuflarse para acechar a sus presas.',
        enemies: [
          {
            id: 'cazador-depredador',
            name: 'Cazador Depredador',
            threat: 3,
            image: '/vol2/terminidos/cepa-depredadora/cazador-depredador.webp',
            description:
              'Esta variante de Cazadores posee las mismas habilidades y debilidades que sus contrapartes normales, pero con ciertos añadidos. Es capaz de hacerse invisible para acechar a sus víctimas; normalmente actúa en manada y puede escupir Bilis para ralentizar al enemigo. Al morir, explota dejando aturdidos a los Helldivers con una ola de Bilis.',
          },
          {
            id: 'acechador-depredador',
            name: 'Acechador Depredador',
            threat: 3,
            image: '/vol2/terminidos/cepa-depredadora/acechador-depredador.webp',
            description:
              'Esta variante de Acechadores posee los mismos atributos que sus contrapartes normales, pero es extremadamente más agresiva. Estos Acechadores no necesitan de un nido para llegar al campo de batalla y no escapan constantemente, como si buscaran un enfrentamiento definitivo al ver a su presa. Suelen ir en manadas de hasta 5 unidades.',
          },
        ],
      },
      {
        id: 'cepa-subterranea',
        name: 'Cepa Subterránea',
        description:
          'Variantes capaces de desplazarse bajo tierra para atacar por sorpresa. Una simple explosión basta para aturdirlas y sacarlas a la superficie.',
        enemies: [
          {
            id: 'guerrero-subterraneo',
            name: 'Guerrero Subterráneo',
            threat: 3,
            image: '/vol2/terminidos/cepa-subterranea/guerrero-subterraneo.webp',
            description:
              'Esta variante posee una cabeza y patas delanteras más resistentes para aguantar la presión de estar bajo tierra. Estas placas soportan el daño de cualquier arma sin penetración media. El resto del cuerpo carece de estas placas, por lo que apuntar al cuerpo será la táctica indicada si no se cuenta con armamento de penetración media. Suelen ir en grandes manadas bajo tierra, así que estén preparados.',
          },
          {
            id: 'escupidor-subterraneo',
            name: 'Escupidor Subterráneo',
            threat: 3,
            image: '/vol2/terminidos/cepa-subterranea/escupidor-subterraneo.webp',
            description:
              'La resistencia de esta variante es igual que la del Escupidor estándar, pero cuenta con una nueva habilidad. Además de escupir Bilis y adoptar el modo mortero para atacar a distancia, puede desplazarse bajo tierra, asomando la cabeza para disparar ráfagas de 3 grandes masas de Bilis que estallan al contacto. Helldivers, estén siempre atentos a los temblores del suelo.',
          },
          {
            id: 'embestidor-subterraneo',
            name: 'Embestidor Subterráneo',
            threat: 4,
            image: '/vol2/terminidos/cepa-subterranea/embestidor-subterraneo.webp',
            description:
              'Compartiendo la habilidad del resto de la Cepa, esta variante de Embestidores posee placas más resistentes en la cabeza y patas frontales, volviéndose prácticamente inmune a todo daño que no sea antitanque en esas zonas. ¡Cuidado con los grandes temblores que se acerquen a sus pies, Helldivers!',
          },
        ],
      },
    ],
  },
  {
    id: 'automatas',
    name: 'Autómatas',
    color: '#e83838',
    tagline: 'Brigadas de asedio especializadas',
    subfactions: [
      {
        id: 'brigada-aerea',
        name: 'Brigada Aérea',
        description:
          'Dada por eliminada, volvió más reforzada desde el sistema Bahía Aurora. Unidad de asedio equipada con mochilas de salto que anulan su único punto débil.',
        enemies: [
          {
            id: 'asaltante-aereo',
            name: 'Asaltante Aéreo de Ametralladora',
            threat: 2,
            image: '/vol2/automatas/brigada-aerea/asaltante-aereo.webp',
            description:
              'Esta variante ha sido la cara principal de la Brigada Aérea desde su nacimiento. Poseen las mismas habilidades y debilidades que sus contrapartes terrestres, pero con ciertos añadidos. Son capaces de saltar a grandes alturas para acortar la distancia con cualquier Helldiver distraído. Al destruir su mochila de salto se provocará una explosión que puede quemar a cualquier unidad lo suficientemente cercana. Suelen ir en grandes patrullas de hasta 15 unidades.',
          },
          {
            id: 'devastador-aereo',
            name: 'Devastador de la Brigada Aérea',
            threat: 3,
            image: '/vol2/automatas/brigada-aerea/devastador-aereo.webp',
            description:
              'Esta versión de Devastador solo aparece en pequeñas patrullas, o en grandes oleadas generadas por las Fábricas Andantes durante el asedio de la Brigada Aérea en un planeta.',
          },
          {
            id: 'giganton-aereo',
            name: 'Gigantón de la Brigada Aérea',
            threat: 4,
            image: '/vol2/automatas/brigada-aerea/giganton-aereo.webp',
            description:
              'Durante los asedios de la Brigada Aérea, los Gigantones cubren su antiguo punto débil de la espalda con una gran Mochila de Salto para reducir la distancia con el enemigo. Poseen las mismas armas y resistencias que sus variantes terrestres. Eso sí, destruir la mochila de cualquier miembro de la Brigada Aérea dejará a la unidad totalmente desactivada.',
          },
        ],
      },
      {
        id: 'brigada-incendiaria',
        name: 'Brigada Incendiaria',
        description:
          'Segundo grupo de asedio Autómata especializado en armamento incendiario. Sus variantes queman e incapacitan a cualquier Helldiver desprevenido.',
        enemies: [
          {
            id: 'tropa-fuego',
            name: 'Tropa de Fuego',
            threat: 2,
            image: '/vol2/automatas/brigada-incendiaria/tropa-fuego.webp',
            description:
              'Estas tropas poseen las mismas defensas que sus contrapartes comunes; sus armas son el mayor cambio que han recibido. Tropa Lanzallamas: poseen un potente lanzallamas y una mochila de combustible para recargar munición en pleno combate. Esta mochila se convierte en su punto débil, ya que su destrucción provoca una gran explosión incendiaria. Tropa de Cañón Incendiario: ha abandonado los misiles por un cañón láser similar al Quasar; no posee defensas adicionales, por lo que puede ser eliminada con facilidad. Las Tropas de Fuego suelen desplegarse en grupos de hasta 10 unidades.',
          },
          {
            id: 'devastador-ametralladora-incendiaria',
            name: 'Devastador de Ametralladora Incendiaria',
            threat: 3,
            image: '/vol2/automatas/brigada-incendiaria/devastador-incendiario.webp',
            description:
              'Esta variante de Devastador pesado posee las mismas defensas que su contraparte. Sus armas han sido ligeramente modificadas: su cadencia de tiro es menor, pero lo compensa con la capacidad de incendiar a cualquier Helldiver desprevenido. Suelen desplazarse en patrullas de hasta 5 unidades.',
          },
          {
            id: 'devastador-conflagracion',
            name: 'Devastador de Conflagración',
            threat: 3,
            image: '/vol2/automatas/brigada-incendiaria/devastador-conflagracion.webp',
            description:
              'Esta variante de Devastadores comunes tiene la ventaja de no poseer mochila como los Devastadores Pesados, por lo que deberemos buscar otro punto débil donde concentrar el fuego. También cuentan con un escudo del mismo tamaño y dureza que el de los Devastadores Pesados, siendo una especie de híbrido entre ambos tipos. Su arma es una escopeta incendiaria de alto calibre, capaz de despedazar a cualquier Helldiver mal posicionado; quienes sobrevivan al impacto sufrirán ignición. Suelen actuar en grupos de 5 para saturar el campo de batalla.',
          },
          {
            id: 'giganton-fuego',
            name: 'Gigantón de Bombardeo de Fuego',
            threat: 5,
            image: '/vol2/automatas/brigada-incendiaria/giganton-fuego.webp',
            description:
              'Estos Gigantones son la cara principal de la Brigada Incendiaria; físicamente poseen la misma resistencia que sus contrapartes. Sus armas constan de 2 cañones láser de altas temperaturas, capaces de destruir a cualquier unidad que se interponga. A larga distancia, cambian su modo de disparo para lanzar una lluvia de bombas de fuego; un impacto directo es más que suficiente para acabar con un Helldiver. Suelen acompañar al resto de las unidades, aunque también pueden encontrarse hasta 4 en zonas estacionarias.',
          },
        ],
      },
      {
        id: 'legion-cyborg',
        name: 'Legión Cyborg',
        description:
          'Los antiguos enemigos de la democracia han vuelto a surgir después de aparentar seguir las Órdenes de la Libertad en su estadía obligatoria en Cyberstan. Estos socialistas biomecanizados crearon a los Autómatas, enviando sus planos fuera de nuestra galaxia conocida. Sus filas están formadas por Agitadores, Radicales y Vociferadores.',
        enemies: [
          {
            id: 'agitador',
            name: 'Agitador',
            threat: 3,
            image: '/vol2/automatas/legion-cyborg/agitador.webp',
            description:
              'Son los capitanes de batalla de la Legión Cyborg. Aunque parecen tener una fuerte armadura, en realidad usan un metal liviano que solo los hace más resistentes. Cualquier arma de cualquier calibre realizará el trabajo.\n\nPueden dar órdenes tanto a los Cybors como a los Autómatas, haciendo que activen una especie de frenesí hasta que el enemigo sea aniquilado. Este efecto se acaba cuando el Agitador que dio la orden muere.\n\nPoseen un cañón de plasma que puede disparar 3 cargas aisladas, y si su enemigo sigue vivo después de eso, pueden sobrecalentar su brazo para lanzar una carga mayor a costa de quedarse sin poder disparar por un tiempo.\n\nSiempre se mantienen detrás de sus aliados, como los cobardes socialistas que son.',
          },
          {
            id: 'radicales',
            name: 'Radicales',
            threat: 2,
            image: '/vol2/automatas/legion-cyborg/radicales.webp',
            description:
              'Son los músculos y carne de cañón de las filas Cyborgs.\n\nVan en grupos de hasta 6 unidades a la vez. Aunque poseen un cañón parecido al de los Agitadores, los Radicales prefieren lanzarse al combate con nada más que puños y patadas; siempre anunciarán su presencia gritando propaganda socialista y lanzando una bomba de humo.\n\nSu falta de armadura los hace bastante fáciles de eliminar, pero tengan precaución.',
          },
          {
            id: 'vociferador',
            name: 'Vociferador',
            threat: 5,
            image: '/vol2/automatas/legion-cyborg/vociferador.webp',
            description:
              'Son las unidades pesadas de la Legión.\n\nTienen una resistencia bastante notable y solo las armas antitanque serían capaces de penetrar tal blindaje, aunque sigue teniendo puntos débiles.\n\nEl Vociferador posee 6 escapes de calor que pueden ser dañados con cualquier calibre: 3 en la parte baja de su cuerpo y 3 detrás de su cabeza. Si 3 de estos escapes son dañados, se abrirá una escotilla en su respectiva zona, lo suficientemente grande para que una granada entre y lo destruya desde adentro.\n\nEsta no será una tarea fácil: este enemigo es piloteado por un Radical ubicado en la cabeza como fuente de poder. Además, tiene cañones de plasma a ambos lados de la cabeza, 2 torretas de disparo rápido ubicadas sobre sus ruedas de tanque y, por último, también puede lanzar una lluvia de cohetes que intentarán predecir los movimientos de sus enemigos.\n\nDato final: al ser destruido, la cápsula donde se ubica el Radical que lo controla puede salir volando y caer sobre algún Helldiver distraído. ¡Siempre pendientes del cielo cuando eliminen uno!',
          },
        ],
      },
    ],
  },
  {
    id: 'iluminados',
    name: 'Iluminados',
    color: '#a855f7',
    tagline: 'Subfacciones no disponibles',
    subfactions: [],
  },
]

export function getFactionVol2ById(id: string): FactionVol2 | undefined {
  return factionsVol2.find((f) => f.id === id)
}

export function getSubfactionById(factionId: string, subfactionId: string) {
  return getFactionVol2ById(factionId)?.subfactions.find((s) => s.id === subfactionId)
}
