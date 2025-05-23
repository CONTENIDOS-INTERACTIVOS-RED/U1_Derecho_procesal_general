export default {
  global: {
    numeroUnidad: '1',
    tituloUnidad:
      'El Derecho Sustancial y el Derecho Procesal. Principios del Derecho Procesal',
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: 'Relación entre Derecho Sustancial y Derecho Procesal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Diferencias entre Derecho Sustancial y Derecho Procesal',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo:
              'Finalidades del Derecho Procesal en el sistema jurídico colombiano',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo:
              'Características del Derecho Procesal como rama del Derecho Público y Formal',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Principios del Derecho Procesal',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Principios generales del Derecho Procesal',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Principios rectores del Código General del Proceso',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: 'Constitución e interpretación normativa',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo:
              'El debido proceso como principio constitucional del proceso',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Bloque de constitucionalidad y garantías procesales',
            hash: 't_3_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.3',
            titulo:
              'Interpretación normativa en el Derecho Procesal colombiano',
            hash: 't_3_3',
          },
        ],
      },
      {
        nombreRuta: 'sintesis',
        titulo: 'Síntesis',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      // {
      //   nombreRuta: 'actividad',
      //   icono: 'far fa-question-circle',
      //   titulo: 'Actividad didáctica',
      //   desarrolloContenidos: true,
      // },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      // {
      //   nombreRuta: 'complementario',
      //   icono: 'far fa-folder-open',
      //   titulo: 'Material complementario',
      // },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
    ],
  },
  referencias: [
    {
      referencia:
        'Moreno, J. D. (2009). <i>El derecho y su garantía: estudio y comentarios de derecho procesal</i>. Editorial Reus. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/46374?page=11',
    },
    {
      referencia:
        'Aguirrezabal Grünstein, M. (2017). DERECHO PROCESAL CIVIL<i>. Revista Chilena de Derecho Privado</i>, (29), 363-370. ',
      link: 'https://www.redalyc.org/pdf/3708/370853917012.pdf',
    },
    {
      referencia:
        'Hernández Velasco, H. (2015). <i>Los principios generales del derecho en el ordenamiento jurídico colombiano: el abuso de derecho</i>. Ediciones UIS. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/117678?page=48',
    },
    {
      referencia:
        'Chavarro Cadena, J. E. (2018). <i>Código general del proceso (3a ed.)</i>. Grupo Editorial Nueva Legislación SAS.',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/71128?page=17',
    },
    {
      referencia:
        'Correa Medina, J. A. (2018). <i>La oralidad en el proceso civil: realidad, perspectivas y propuesta frente al rol del juez en el marco del Código General del Proceso</i>. Editorial Universidad del Rosario. ',
      link: 'https://elibro.net/es/ereader/tecnologicadeloriente/70716?page=48',
    },
    {
      referencia:
        'Olano García, H. A. (2009). <i>El bloque de constitucionalidad en Colombia<i>. Red Estudios Constitucionales. ',
      link: 'https://elibro.net/es/lc/tecnologicadeloriente/titulos/12005',
    },
    {
      referencia:
        'Marí, E. (2016). <i>La interpretación de la ley<i>. Eudeba. ',
      link:
        'https://elibro.net/es/ereader/tecnologicadeloriente/119836?page=14',
    },
  ],
  glosario: [
    {
      termino: 'Acción procesal',
      significado:
        'Facultad jurídica para acudir a los jueces con el fin de obtener la tutela de un derecho sustancial.',
    },
    {
      termino: 'Carga probatoria',
      significado:
        'Obligación que tiene una parte procesal de aportar las pruebas necesarias, para sustentar sus afirmaciones en juicio.',
    },
    {
      termino: 'Competencia judicial',
      significado:
        'Facultad atribuida a los jueces para conocer y decidir procesos, conforme a criterios legales de asignación de funciones.',
    },
    {
      termino: 'Contradicción',
      significado:
        'Principio que garantiza a las partes la posibilidad de controvertir argumentos, pruebas y actuaciones procesales contrarias.',
    },
    {
      termino: 'Debido proceso',
      significado:
        'Conjunto de garantías constitucionales y legales que aseguran un juicio justo, imparcial y conforme a la Ley.',
    },
    {
      termino: 'Economía procesal',
      significado:
        'Principio que busca simplificar el proceso judicial, evitando actuaciones innecesarias, dilaciones y gastos superfluos.',
    },
    {
      termino: 'Formalismo procesal',
      significado:
        'Conjunto de reglas que estructuran el procedimiento judicial, asegurando orden, validez y previsibilidad en las actuaciones.',
    },
    {
      termino: 'Imparcialidad judicial',
      significado:
        'Condición del juez de actuar sin favoritismos ni prejuicios, garantizando decisiones justas y equilibradas entre las partes.',
    },
    {
      termino: 'Inmediación',
      significado:
        'Presencia directa del juez en la práctica de pruebas y audiencias, fortaleciendo su percepción del proceso.',
    },
    {
      termino: 'Interpretación sistemática',
      significado:
        'Método que analiza una norma procesal en relación con todo el ordenamiento jurídico para determinar su sentido jurídico.',
    },
    {
      termino: 'Legalidad procesal',
      significado:
        'Principio, según el cual todo acto procesal debe estar previamente regulado en la Ley.',
    },
    {
      termino: 'Lealtad procesal',
      significado:
        'Deber de las partes de actuar de buena fe, sin dilaciones maliciosas ni conductas engañosas dentro del proceso.',
    },
    {
      termino: 'Oralidad',
      significado:
        'Régimen procesal que privilegia el uso de la palabra hablada en audiencias públicas, para mayor celeridad.',
    },
    {
      termino: 'Tutela judicial efectiva',
      significado:
        'Derecho de acceder a mecanismos judiciales idóneos para hacer valer derechos sustanciales ante autoridades imparciales.',
    },
  ],
}
