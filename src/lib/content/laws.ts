export interface LawSection {
  heading: string;
  body: string;
}

export interface LawExercise {
  title: string;
  duration_minutes: number;
  instructions: string;
  safety_notes?: string;
}

export interface Law {
  slug: string;
  order_index: number;
  title: string;
  summary: string;
  tradition: string;
  source_note: string;
  sections: LawSection[];
  exercises: LawExercise[];
}

/**
 * Corpus éditorial (brouillon, non publié).
 *
 * Règles de rédaction :
 * - ne jamais inventer de citation, de verset ou de référence ;
 * - documenter la tradition ou la source retenue pour chaque loi ;
 * - distinguer enseignement traditionnel, interprétation moderne et fait vérifiable ;
 * - signaler les limites de chaque loi.
 */
export const LAWS: Law[] = [
  {
    slug: "loi-1",
    order_index: 1,
    title: "La Responsabilité",
    summary:
      "Nos circonstances nous influencent, mais une part de notre réalité reste à notre main.",
    tradition: "Cadre New Age moderne, sans revendication d'une source canonique unique.",
    source_note:
      "Formulation popularisée par la littérature New Age contemporaine. Aucune référence biblique ou doctrinale précise n'est revendiquée.",
    sections: [
      {
        heading: "Le principe",
        body: "Cette loi propose de considérer les événements de notre vie comme des occasions de choix plutôt que comme des sentences subies. Elle ne prétend pas que l'on contrôle tout : elle invite à examiner la part d'action qui nous revient.",
      },
      {
        heading: "En pratique",
        body: "Devant une difficulté, on peut distinguer ce qui relève de facteurs extérieurs, ce qui relève d'un choix passé, et ce qui reste possible maintenant. L'exercice consiste à formuler, pour une situation donnée, une action qui relève de la deuxième catégorie.",
      },
      {
        heading: "Limites",
        body: "Cette lecture peut minimiser des contraintes réelles si elle est appliquée de façon mécanique. Des difficultés peuvent relever de la santé, de conditions matérielles ou d'injustices, qui appellent d'autres réponses qu'un ajustement de posture.",
      },
    ],
    exercises: [
      {
        title: "Relire une situation",
        duration_minutes: 10,
        instructions:
          "Choisissez une situation vécue cette semaine. Notez ce qui était hors de votre contrôle, ce que vous avez choisi et ce que vous auriez pu choisir. Ne jugez pas le passé : repérez seulement le prochain point d'appui.",
      },
      {
        title: "Formuler une action",
        duration_minutes: 5,
        instructions:
          "Pour la situation choisie, écrivez une action concrète réalisable aujourd'hui, avec une durée inférieure à quinze minutes.",
      },
    ],
  },
  {
    slug: "loi-2",
    order_index: 2,
    title: "L'Attraction",
    summary:
      "Ce sur quoi nous concentrons notre attention prend une place centrale dans notre quotidien.",
    tradition: "Cadre New Age moderne, sans revendication d'une source canonique unique.",
    source_note:
      "Principe popularisé par les courants contemporains de la « manifestation ». Aucune référence biblique spécifique n'est revendiquée.",
    sections: [
      {
        heading: "Le principe",
        body: "L'attention est une ressource finie. Ce que l'on rumine, ce que l'on relit, ce que l'on anticipe finit par occuper une place importante dans la vie. La loi en tire une conséquence simple : organiser son attention est une action concrète.",
      },
      {
        heading: "En pratique",
        body: "Observer ce qui occupe réellement l'attention sur une semaine permet souvent de repérer un écart entre ce que l'on veut orienter et ce que l'on regarde. L'ajustement se fait par de petites modifications d'environnement plutôt que par la volonté seule.",
      },
      {
        heading: "Limites",
        body: "Déplacer son attention ne résout pas les causes matérielles d'un problème. Cette loi ne dispense pas d'agir sur les conditions de vie.",
      },
    ],
    exercises: [
      {
        title: "Journal d'attention sur sept jours",
        duration_minutes: 10,
        instructions:
          "Chaque soir, notez pendant deux minutes ce qui a occupé votre attention. Comparez ensuite la répartition entre ce que vous choisissez et ce qui s'impose.",
      },
    ],
  },
  {
    slug: "loi-3",
    order_index: 3,
    title: "L'Action",
    summary:
      "L'intention devient réelle lorsqu'elle s'accompagne d'un geste concret.",
    tradition: "Cadre New Age moderne, sans revendication d'une source canonique unique.",
    source_note:
      "Formulation issue du courant de la manifestation et de l'enseignement de l'action volontaire.",
    sections: [
      {
        heading: "Le principe",
        body: "Une intention sans action reste un désir. La loi distingue clairement les deux et invite à convertir les résolutions en gestes observables, datés et vérifiables.",
      },
      {
        heading: "En pratique",
        body: "La différence entre une action et une bonne intention tient souvent à la granularité : une action commence, s'arrête, a une durée. Écrire ce que l'on va faire, où, quand et pendant combien de temps rend la mise en œuvre beaucoup plus probable.",
      },
      {
        heading: "Limites",
        body: "L'action ne garantit pas le résultat espéré. La loi décrit un mécanisme de mise en œuvre, pas une loi de l'univers.",
      },
    ],
    exercises: [
      {
        title: "Découper une intention",
        duration_minutes: 8,
        instructions:
          "Prenez une intention que vous reportez depuis longtemps. Découpez-la en une première action de moins de dix minutes, réalisable aujourd'hui, dans un lieu précis.",
      },
    ],
  },
  {
    slug: "loi-4",
    order_index: 4,
    title: "Le Présent",
    summary:
      "L'énergie disponible pour agir se trouve dans ce qui est en train de se passer.",
    tradition: "Cadre New Age moderne, avec proximité thématique avec le bouddhisme.",
    source_note:
      "Thème voisin de l'attention présente bouddhique, reformulé ici dans un cadre laïque et New Age. Aucune référence textuelle précise n'est revendiquée.",
    sections: [
      {
        heading: "Le principe",
        body: "L'attention portée sur le passé sert généralement à un besoin d'explication, et l'attention portée sur le futur à un besoin de contrôle. L'énergie disponible pour agir se situe dans le présent.",
      },
      {
        heading: "En pratique",
        body: "Ramener son attention sur ce qui est en cours est un exercice d'entraînement, souvent inconfortable au début. Commencer par des sessions courtes et régulières aide davantage qu'une tentative isolée et ambitieuse.",
      },
      {
        heading: "Limites",
        body: "Rester dans le présent n'annule pas la nécessité de planifier ni de faire référence au passé. Il s'agit d'une question de priorité, non d'exclusion.",
      },
    ],
    exercises: [
      {
        title: "Ancrage cinq minutes",
        duration_minutes: 5,
        instructions:
          "Asseyez-vous. Pendant cinq minutes, revenez à la sensation physique d'être assis chaque fois que l'esprit part. Ne lisez rien et ne méditez pas sur un texte : observez simplement.",
      },
    ],
  },
  {
    slug: "loi-5",
    order_index: 5,
    title: "L'Équilibre",
    summary:
      "Ce que l'on reçoit et ce que l'on donne finissent par s'ajuster.",
    tradition: "Cadre New Age moderne, sans revendication d'une source canonique unique.",
    source_note:
      "Idée d'équilibre comme loi cosmique, fréquente dans la pensée New Age et dans certaines traditions ésotériques.",
    sections: [
      {
        heading: "Le principe",
        body: "L'idée est que donner sans jamais recevoir, comme recevoir sans jamais donner, conduit à des situations déséquilibrées. Appliquée au quotidien, elle devient une question de rythme et de réciprocité.",
      },
      {
        heading: "En pratique",
        body: "Observer les échanges dans son entourage, familial, amical ou professionnel, permet souvent de repérer des déséquilibres invisibles de l'intérieur. L'ajustement se fait sur le long terme, par de petits échanges.",
      },
      {
        heading: "Limites",
        body: "Toutes les relations ne sont pas symétriques, et ce n'est pas anormal. Certains besoins legitimate une asymétrie durable.",
      },
    ],
    exercises: [
      {
        title: "Bilan de réciprocité",
        duration_minutes: 12,
        instructions:
          "Pour trois relations importantes, notez ce que vous donnez, ce que vous recevez et ce qui vous manque. Choisissez une seule relation et une action d'ajustement.",
      },
    ],
  },
  {
    slug: "loi-6",
    order_index: 6,
    title: "Le Don",
    summary: "Donner ouvre la voie à recevoir et libère de l'attachement.",
    tradition:
      "Cadre New Age moderne, avec proximité thématique avec le don biblique.",
    source_note:
      "Le don figure dans les traditions bibliques, mais il est ici formulé dans un cadre non religieux. Aucune référence canonique précise n'est revendiquée.",
    sections: [
      {
        heading: "Le principe",
        body: "Le don est décrit comme un mouvement qui libère : ce que l'on donne sans attente crée une disponibilité que l'on ne sait pas encore utiliser.",
      },
      {
        heading: "En pratique",
        body: "Donner sans attendre de retour immédiat est un entraînement. La difficulté n'est pas le don lui-même, mais la période d'incertitude qui suit, lorsque rien ne semble revenir.",
      },
      {
        heading: "Limites",
        body: "Donner dans une relation déséquilibrée peut être une forme d'évitement. Le don n'est pas une injonction, et il ne remplace pas une demande explicite.",
      },
    ],
    exercises: [
      {
        title: "Donner sans comptabiliser",
        duration_minutes: 10,
        instructions:
          "Choisissez une contribution sans suivi possible : un don, une aide, un temps offert. Ne notez pas ce que vous avez donné et n'attendez rien en retour.",
      },
    ],
  },
  {
    slug: "loi-7",
    order_index: 7,
    title: "Le Karma",
    summary:
      "Chaque action porte ses conséquences, avec le temps qui lui convient.",
    tradition:
      "Cadre New Age moderne, notion issue de la philosophie indienne (karma).",
    source_note:
      "La notion de karma provient de la philosophie indienne ; elle a été reprise et simplifiée dans les courants New Age et chez plusieurs auteurs contemporains. La formulation ci-dessous est une reformulation moderne, non un énoncé de la tradition d'origine.",
    sections: [
      {
        heading: "Le principe",
        body: "La loi affirme que les actes laissent une trace et que cette trace finit par revenir, immédiatement ou longtemps après. Elle est souvent interprétée comme une règle de compensation.",
      },
      {
        heading: "En pratique",
        body: "Utilisée comme principe de cohérence, elle invite à examiner ce que font ses actes au quotidien et à en tirer une conséquence concrète plutôt qu'un châtiment. Le cadre temporel long est utile pour ne pas surinterpréter un événement isolé.",
      },
      {
        heading: "Limites",
        body: "Cette lecture peut être utilisée de façon moralisatrice pour expliquer des circonstances injustes. Aucune vicissitude ne doit être interprétée comme la conséquence d'un acte antérieur. Elle ne remplace pas une analyse factuelle des causes.",
      },
    ],
    exercises: [
      {
        title: "Cohérence d'intention",
        duration_minutes: 10,
        instructions:
          "Écrivez une valeur importante pour vous. Repérez une situation récente où vos actes l'ont contredite. Notez ce qui explique l'écart, puis une action d'alignement.",
      },
    ],
  },
  {
    slug: "loi-8",
    order_index: 8,
    title: "Le Changement",
    summary:
      "Le changement est la seule constante, et s'adapter est une compétence.",
    tradition: "Cadre New Age moderne, sans revendication d'une source canonique unique.",
    source_note:
      "Idée généraliste, formulée dans de nombreuses traditions philosophiques et New Age.",
    sections: [
      {
        heading: "Le principe",
        body: "La loi présente le changement comme inévitable, et donc comme une compétence à développer plutôt qu'un obstacle. Ce qui est stable, c'est l'adaptabilité elle-même.",
      },
      {
        heading: "En pratique",
        body: "Identifier ce qui, dans votre organisation, résiste à l'adaptation permet de travailler sur des points précis. L'adaptation se prépare en amont, pas dans l'urgence.",
      },
      {
        heading: "Limites",
        body: "Tout changement n'est pas un progrès. La constance a également une valeur : l'idée de changement ne dispense pas de choisir ce qui mérite d'être conservé.",
      },
    ],
    exercises: [
      {
        title: "Cartographier les résistances",
        duration_minutes: 12,
        instructions:
          "Pour un changement que vous traversez, identifiez ce qui résiste en vous et ce qui résiste autour de vous. Notez une seule chose que vous pouvez relâcher.",
      },
    ],
  },
  {
    slug: "loi-9",
    order_index: 9,
    title: "L'Unité",
    summary:
      "Ce que nous faisons à un endroit se répercute ailleurs : tout est interconnecté.",
    tradition:
      "Cadre New Age moderne, avec proximité thématique avec l'interdépendance bouddhique.",
    source_note:
      "Thème de l'interconnexion, repris du concept bouddhique d'interdépendance sous une dénomination New Age. Aucune référence textuelle précise n'est revendiquée.",
    sections: [
      {
        heading: "Le principe",
        body: "L'idée que les éléments d'un système s'influencent mutuellement est au fond de nombreuses traditions. Elle a un corollaire pratique : agir sur un point du système produit des effets qui dépassent ce point.",
      },
      {
        heading: "En pratique",
        body: "Considérer les effets indirects de ses décisions aide à mieux arbitrer. Observer les conséquences à plusieurs niveaux de distance est utile, sans supposer que l'on maîtrise la totalité de la chaîne.",
      },
      {
        heading: "Limites",
        body: "L'interconnexion peut produire un sentiment de fatalité globale. Elle décrit des dépendances, pas une obligation d'agir sur l'ensemble.",
      },
    ],
    exercises: [
      {
        title: "Cartographier les liens",
        duration_minutes: 12,
        instructions:
          "Choisissez un aspect de votre vie. Repérez les trois personnes ou structures dont il dépend le plus, puis notez une relation que vous entretenez et n'entretenez pas.",
      },
    ],
  },
  {
    slug: "loi-10",
    order_index: 10,
    title: "Le Pardon",
    summary:
      "Le pardon libère celui qui pardonne autant que celui qui est pardonné.",
    tradition:
      "Cadre New Age moderne, thème présent dans la plupart des traditions spirituelles.",
    source_note:
      "Thème commun à de nombreuses traditions spirituelles, présenté ici sans référence religieuse précise.",
    sections: [
      {
        heading: "Le principe",
        body: "Le pardon est présenté comme un acte qui concerne d'abord celui qui pardonne, distinct de la réconciliation et distinct de l'effacement des conséquences. On peut pardonner tout en maintenant une distance protectrice.",
      },
      {
        heading: "En pratique",
        body: "Rappeler une blessure a souvent pour effet de la réactiver. Le pardon se travaille par étapes, et il est légitime qu'il ne soit pas immédiat. La formulation utile est souvent : ce qui s'est passé n'est pas ma faute, avant de pouvoir dire je te pardonne.",
      },
      {
        heading: "Limites",
        body: "Le pardon n'oblige pas à se rapprocher, ni à exposer de nouveau à une situation dangereuse, ni à effacer un fait. Il ne supprime pas la réalité des conséquences.",
      },
    ],
    exercises: [
      {
        title: "Formuler sans rouvrir",
        duration_minutes: 10,
        instructions:
          "Choisissez une blessure encore active. Écrivez une phrase commençant par ce qui s'est passé, plutôt que par tu m'as. Relisez-la une fois, puis refermez.",
      },
    ],
  },
  {
    slug: "loi-11",
    order_index: 11,
    title: "La Foi",
    summary:
      "La foi permet d'agir avant de disposer de toutes les garanties.",
    tradition: "Cadre New Age moderne, sans revendication d'une source canonique unique.",
    source_note:
      "Notion de foi comme force motrice, distincte de la croyance en un résultat garanti. Aucune référence religieuse précise n'est revendiquée.",
    sections: [
      {
        heading: "Le principe",
        body: "La foi est décrite ici comme une posture qui permet d'agir avant de disposer de toutes les garanties. Elle ne relève pas de la certitude, mais d'une disponibilité à l'engagement.",
      },
      {
        heading: "En pratique",
        body: "La foi se travaille en agissant dans l'incertitude, avec des étapes suffisamment petites pour rester tenables.",
      },
      {
        heading: "Limites",
        body: "La foi n'est pas une garantie. Elle peut coexister avec un doute ou une incertitude réelle sur le résultat, et elle n'autorise pas à ignorer des signaux d'alerte.",
      },
    ],
    exercises: [
      {
        title: "Premier pas sans garantie",
        duration_minutes: 8,
        instructions:
          "Identifiez une action que vous reporterez jusqu'à être certain du résultat. Réalisez-en la première portion aujourd'hui, en acceptant l'incertitude du reste.",
      },
    ],
  },
  {
    slug: "loi-12",
    order_index: 12,
    title: "L'Amour",
    summary:
      "L'amour est la force la plus puissante et la plus exigeante qui soit.",
    tradition:
      "Cadre New Age moderne, thème présent dans la plupart des traditions spirituelles.",
    source_note:
      "Thème central de nombreuses traditions spirituelles et philosophiques, ici formulé dans un cadre laïque et New Age.",
    sections: [
      {
        heading: "Le principe",
        body: "L'amour est présenté comme ce qui précède et foundation tout : une manière d'entrer en relation qui ne cherche pas à posséder. On le distingue ici du sentiment, qui peut être agréable ou painful.",
      },
      {
        heading: "En pratique",
        body: "Le passage du sentiment à la décision se joue sur des actes précis : écouter jusqu'au bout, ne pas chercher à avoir raison, nommer ce que l'on ressent sans l'imposer.",
      },
      {
        heading: "Limites",
        body: "L'amour n'est pas une obligation de rester dans une relation dangereuse, ni une Alternative à la justice. Aimer quelqu'un ne dispense pas de poser une limite.",
      },
    ],
    exercises: [
      {
        title: "Un acte d'attention",
        duration_minutes: 10,
        instructions:
          "Choisissez une personne. Offrez-lui dix minutes d'attention pleine : pas d'écran, pas de multitâche, pas de préparation à une réponse. Notez ensuite ce que vous avez entendu.",
      },
      {
        title: "Poser une limite",
        duration_minutes: 8,
        instructions:
          "Repérez une limite que vous n'avez pas encore formulée. Écrivez la phrase exacte que vous diriez, puis identifiez quand vous la direz.",
      },
    ],
  },
];

export function getLawBySlug(slug: string): Law | undefined {
  return LAWS.find((law) => law.slug === slug);
}
