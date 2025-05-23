<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'1. Relación entre Derecho Sustancial y Derecho Procesal'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p(data-aos="fade-down") La comprensión de la relación entre el Derecho Sustancial y el Derecho Procesal es clave para interpretar cómo se articulan las normas que establecen derechos con los mecanismos que permiten hacerlos exigibles ante los jueces.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-4.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/9.png', alt='')                  
          .col-lg-8
            h2.mb-4(data-aos="flip-up") Relación entre Derecho Sustancial y Derecho Procesal 
            p.mb-4(data-aos="fade-right") En el PDF Relación entre #[b Derecho Sustancial y Derecho Procesal], se analizan los conceptos, funciones e interdependencias entre ambos campos, destacando cómo el proceso actúa como el vehículo indispensable para garantizar la vigencia de los derechos. A través de ejemplos prácticos y reflexiones jurídicas, se profundiza en la función del Derecho Procesal como garante de la justicia, y del acceso efectivo a los derechos en una sociedad democrática.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Relación entre Derecho Sustancial y Derecho Procesal 

    #t_1_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.1]  Diferencias entre Derecho Sustancial y Derecho Procesal
    p(data-aos="fade-down") Dentro del estudio del Derecho, es imprescindible que pueda identificar y diferenciar dos grandes ramas que conforman el sistema jurídico. El Derecho Sustancial y el Derecho Procesal. Esta distinción no es meramente académica, sino que tiene implicaciones prácticas profundas en el funcionamiento del sistema de justicia, en la garantía de los derechos y en la solución de conflictos jurídicos. Ambos forman una unidad armónica e interdependiente, pero su naturaleza, su contenido, sus fines y sus mecanismos de aplicación, son diferentes.

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/10.png", alt="")    
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Derecho Sustancial")
            p Se ocupa de establecer el conjunto de normas que definen derechos subjetivos, obligaciones, prohibiciones y consecuencias jurídicas en las relaciones humanas. Es, por así decirlo, el contenido del Derecho. Aquí se encuentran las normas civiles que regulan el matrimonio, la propiedad, los contratos o las sucesiones; las normas penales que definen qué conductas son delitos y qué penas se imponen; las normas laborales que determinan los derechos de los trabajadores y empleadores; y así sucesivamente, en cada rama del ordenamiento jurídico. Por ejemplo, el artículo 90 de la Constitución colombiana establece que toda persona puede reclamar indemnización cuando se le cause un daño antijurídico por parte del Estado; esta es una norma sustancial que reconoce un derecho y establece una consecuencia frente a un hecho.
          .div(titulo="Derecho Procesal")
            p Tiene una función instrumental. Establece los procedimientos, etapas, términos, formalidades y autoridades encargadas de hacer efectivo el Derecho Sustancial. No se ocupa por determinar quién tiene razón en cuanto al fondo de un asunto, sino de regular la forma en que esa razón se debe alegar, probar y obtener en un proceso ante una autoridad judicial. Es el Derecho que rige el camino para hacer valer las normas sustanciales. Por eso se dice que el Derecho Procesal es el vehículo que permite la realización del Derecho Sustancial (Moreno, 2009).   

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/11.svg")
            .col-lg
              p.mb-0 Para ilustrarlo con un ejemplo: si una persona firma un contrato de compraventa y la otra parte no entrega el bien pactado, el Derecho Sustancial establece que hay un incumplimiento de obligación y reconoce el derecho a reclamar la entrega o la resolución del contrato con indemnización de perjuicios. Pero, para hacer efectivo ese derecho, no basta con invocarlo, se requiere acudir a la jurisdicción competente, presentar una demanda, aportar pruebas, seguir audiencias, y finalmente obtener una sentencia. Todas estas actuaciones están reguladas por el Derecho Procesal, que indica cómo se ejerce el derecho sustancial, en la práctica.                   

        p(data-aos="fade-down") Además, las diferencias entre ambas ramas también se expresan en sus características:

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/12.png", data-aos="zoom-in")    

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/13.png")           
            .col-lg-7
              p El Derecho Sustancial tiene un contenido normativo material, en el sentido de que busca regular directamente la conducta de los ciudadanos en sus relaciones sociales, económicas y jurídicas. El Derecho Procesal, en cambio, es formal. Su objeto no es regular conductas cotidianas, sino la forma en que se resuelven controversias ante el Estado.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/14.png")           
            .col-lg-7
              p Otra diferencia importante es que el Derecho Sustancial es permanente y general. Aplica en cualquier momento mientras la norma esté vigente. El Derecho Procesal, en cambio, es temporal y reglado, pues solo se activa ante la existencia de un conflicto y en el marco de un proceso específico.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/15.png")           
            .col-lg-7
              p También difieren con respecto a sus protagonistas. El Derecho Sustancial opera entre particulares o entre el Estado y los particulares, en su rol normativo; mientras que el Derecho Procesal siempre involucra al juez o a la autoridad competente, a quien corresponde dirigir el proceso y garantizar que se cumplan las garantías procesales de las partes. Por ejemplo, en un proceso penal, el Derecho Sustancial define que el homicidio está penado con privación de la libertad de 13 a 25 años, según el Artículo 103 del Código Penal colombiano; pero es el Derecho Procesal, contenido en el Código de Procedimiento Penal Ley 906 del 2004, el que regula cómo se investiga, cómo se acusa, cómo se defiende el imputado y cómo se dicta la sentencia.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/16.png")           
            .col-lg-7
              p Otro aspecto que diferencia ambas ramas es, su finalidad. El Derecho Sustancial busca preservar el orden social mediante la definición de lo permitido, lo prohibido y lo obligatorio; mientras que el Derecho Procesal busca garantizar el acceso a la justicia, proteger los derechos fundamentales de las partes y resolver las controversias de forma imparcial, transparente y conforme al debido proceso. Ambos cumplen funciones complementarias e indispensables, puesto que, uno sin el otro, pierde eficacia. No tendría sentido reconocer un derecho si no existe el medio para hacerlo valer; y un proceso vacío de contenido jurídico, carece de propósito.                                          

    .bg-color-5.px-4.mb-4(data-aos="fade-left")
      .row.justify-content-center
        .col-lg-8.j1
          .p-4
            p.mb-0 En conclusión, el Derecho Sustancial y el Derecho Procesal son dos pilares fundamentales del ordenamiento jurídico colombiano. Mientras el primero determina los derechos y deberes sustanciales de las personas en sus relaciones sociales, el segundo establece los procedimientos mediante los cuales esos derechos se hacen exigibles ante los jueces. La articulación entre ambos garantiza la eficacia del sistema de justicia, la protección de los derechos fundamentales y la consolidación del Estado de Derecho.       
        .col-lg-auto.p-0
          img.img-a.img-t(src="@/assets/curso/temas/17.png")

    p(data-aos="fade-down") Como futuro jurista, es esencial que no lo conciba como compartimentos separados, sino como partes complementarias de un mismo sistema orientado a la justicia material y formal.

    #t_1_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.2] Finalidades del Derecho Procesal en el sistema jurídico colombiano  

    p(data-aos="fade-down") El Derecho Procesal cumple un papel fundamental dentro del sistema jurídico colombiano, no solo como una herramienta técnica para regular juicios, sino como un instrumento garantista que hace posible la vigencia real del Estado de Derecho. Su finalidad no se limita al establecimiento de normas formales para adelantar un proceso judicial, sino que va mucho más allá. Busca asegurar que los derechos sustanciales sean respetados, protegidos y, sobre todo, efectivamente aplicables ante situaciones de conflicto.

    p(data-aos="fade-down") Conozcamos estas finalidades:

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-4.mb-3.mb-lg-0  
        figure
          img.img-a.img-t(src="@/assets/curso/temas/27.png", alt="")    
      .col-lg-8
        AcordionA(tipo="b")
          .div(titulo="Finalidad 1")
            p La primera y más importante finalidad del Derecho Procesal es garantizar el acceso a la justicia. En Colombia, este acceso está reconocido como un derecho fundamental en el Artículo 229 de la Constitución Política, que establece que toda persona tiene derecho a acceder a la administración de justicia. El Derecho Procesal proporciona el camino para que cualquier ciudadano pueda acudir a los jueces del Estado, plantear una controversia jurídica y obtener una respuesta judicial imparcial y legalmente fundamentada. Así, el proceso judicial se convierte en la vía legítima y pacífica para resolver los conflictos de intereses que surgen entre particulares o entre estos y el Estado.

          .div(titulo="Finalidad 2")
            p En segundo lugar, el Derecho Procesal tiene la finalidad de proteger los derechos fundamentales de las partes involucradas en un proceso, asegurando el respeto por principios como la igualdad, el debido proceso, la defensa, la contradicción y la imparcialidad. Estos principios no son meras formalidades, sino garantías principales que permiten que las personas puedan ejercer sus derechos con confianza en el sistema judicial. Por ejemplo, en un proceso penal, la persona acusada debe tener la oportunidad de conocer los cargos en su contra, presentar pruebas, impugnar decisiones y ser juzgada por un juez independiente. Sin estos mecanismos procesales, la justicia sería arbitraria y opaca, lo que atentaría contra el valor de la seguridad jurídica.

          .div(titulo="Finalidad 3")
            p Otra finalidad esencial del Derecho Procesal es la de estructurar el desarrollo de la función jurisdiccional, es decir, organizar las formas y límites dentro de los cuales los jueces ejercen su autoridad para interpretar y aplicar la Ley. A través del proceso, el juez puede ordenar pruebas, tomar decisiones, emitir sentencias y hacerlas cumplir. Sin esta regulación, la actividad jurisdiccional quedaría a la discrecionalidad del juzgador, lo que generaría incertidumbre y desigualdad. El proceso, entonces, no solo protege a las partes, sino que también delimita el poder judicial, asegurando que actúe dentro del marco constitucional y legal.

    .row.align-items-start.mb-5(data-aos="fade-left") 
      .col-lg-8.mb-3.mb-lg-0  
        AcordionA(tipo="b")
          .div(titulo="Finalidad 4")
            p El Derecho Procesal también ordena la actuación de las partes dentro de un proceso. En lugar de que cada quien actúe por su cuenta o busque justicia por medios informales como ocurría en sociedades pre-estatales, el procedimiento establece tiempos, etapas, cargas y deberes procesales. Esto evita la anarquía judicial y permite que las controversias se resuelvan con base en criterios predecibles y objetivos. Por ejemplo, el Código General del Proceso Ley 1564 del 2012, establece reglas sobre la presentación de la demanda, la notificación de las partes, los términos para responder, la etapa probatoria, y la forma de dictar y ejecutar una sentencia. Esta estructura es indispensable para lograr una justicia ordenada, transparente y eficiente.

          .div(titulo="Finalidad 5")
            p Una finalidad adicional del Derecho Procesal en Colombia, es la de promover decisiones judiciales legítimas, motivadas y con fuerza vinculante. Esto implica que las sentencias no solo deben resolver el caso concreto, sino también generar confianza en el sistema y garantizar la coherencia del orden jurídico. Por eso, el juez está obligado a motivar sus decisiones, aplicar el precedente judicial cuando sea pertinente y dictar fallos que respeten los derechos humanos. En este sentido, el proceso también tiene un valor pedagógico y restaurativo, pues enseña a las partes y a la sociedad que los conflictos deben resolverse por medios legales y con respeto al otro.

          .div(titulo="Finalidad 6")
            p El Derecho Procesal contribuye a la paz social, porque, al ofrecer una vía institucional para la resolución de controversias, evita que los ciudadanos recurran a vías de hecho, violencia o justicia privada. Por ejemplo, si un ciudadano tiene un conflicto por la posesión de un inmueble, puede presentar una demanda de restitución, sin tener que recurrir a despojar por la fuerza al ocupante. Así, el proceso judicial cumple una función pacificadora, reforzando la confianza en las instituciones y la estabilidad del sistema democrático.

          .div(titulo="Finalidad 7")
            p Por último, debe destacarse que el Derecho Procesal colombiano está orientado por una finalidad ética y de justicia material. Esto significa que el proceso no debe ser concebido como un simple ritual formal, sino como un medio para que se haga justicia real, sustantiva y equitativa. La Corte Constitucional ha reiterado en múltiples fallos que el proceso debe servir para realizar los valores constitucionales, entre ellos, la dignidad humana, la igualdad y la protección de los más vulnerables. Por eso, el juez tiene la facultad para actuar de oficio en ciertos casos, evitar dilaciones injustificadas, y adoptar decisiones que garanticen una tutela judicial efectiva, como lo establece el Artículo 228 de la Constitución (Aguirrezabal Grünstein, 2017).                                        
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/28.png", alt="")    

    .bg-full-width.bg-color-6.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/18.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") En conclusión, el Derecho Procesal cumple funciones esenciales dentro del sistema jurídico colombiano, dado que permite el acceso a la justicia, protege los derechos fundamentales, organiza la actividad judicial, ordena la actuación de las partes, legitima las decisiones judiciales y contribuye a la paz social.  


    #t_1_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 1.3] Características del Derecho Procesal como rama del Derecho Público y Formal

    p(data-aos="fade-down") El Derecho Procesal se distingue dentro del ordenamiento jurídico colombiano, por pertenecer a la esfera del Derecho Público y por poseer un marcado carácter formal. Estas dos características son fundamentales para comprender su estructura, finalidad y función dentro del sistema jurídico, especialmente en lo que se refiere a la administración de justicia y la resolución de conflictos entre sujetos. Comprender estas notas distintivas, le permitirá identificar la importancia de esta disciplina en la configuración de un Estado de Derecho sólido y garantista. 

    .bg-full-width.bg-fondo-slider.mb-5(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/19.png")           
            .col-lg-7
              h5 La jurisdicción
              p El Derecho Procesal es una rama del Derecho Público, lo que significa que regula relaciones en las que una de las partes es el Estado actuando en ejercicio de su función soberana: la jurisdicción. En el proceso, no hay una relación entre iguales, como sucede en el Derecho Privado; por el contrario, interviene un órgano judicial investido de autoridad para resolver un conflicto y hacer valer la fuerza de la Ley. Esta intervención del Estado no es pasiva ni opcional, sino que se activa de manera institucionalizada para garantizar la solución jurídica de los litigios. Por ejemplo, cuando un ciudadano presentó una demanda civil o una querella penal, no resuelve directamente con la otra parte en disputa, sino que acude al poder judicial, el cual tiene la competencia de declarar el derecho, ordenar medidas y hacerlas cumplir, incluso mediante el uso legítimo de la fuerza pública.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/20.png")           
            .col-lg-7
              h5 Principios constitucionales
              p Como parte del Derecho Público, el Derecho Procesal también está sujeto a los principios constitucionales que orientan la función judicial, tales como el acceso a la justicia, el debido proceso, la igualdad procesal y la imparcialidad. Además, los jueces actúan dentro de un marco normativo que limita su actuación. No pueden decidir fuera del proceso ni desconocer las garantías que protegen a las partes. El proceso judicial, entonces, se erige como una manifestación del ejercicio legítimo del poder estatal y debe estar regulado, de forma estricta, para evitar abusos o arbitrariedades.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/21.png")           
            .col-lg-7
              h5 Derecho formal
              p El Derecho Procesal se define como un Derecho formal, en contraposición al Derecho Sustancial. Esta formalidad no debe entenderse como una acumulación de trámites sin sentido, sino como la organización lógica y sistemática del procedimiento judicial, que permite que los derechos sustanciales como el derecho de propiedad, el derecho al buen nombre o el derecho a la libertad puedan hacerse efectivos en condiciones de equidad, transparencia y previsibilidad. En este sentido, el Derecho Procesal no crea derechos materiales ni establece deberes directamente; en cambio, determina cómo se deben ejercer esos derechos, ante quién, en qué plazos, y mediante qué actos.

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/22.png")           
            .col-lg-7
              h5 Ejemplo 
              p En el área civil, el Derecho Sustancial puede reconocer el derecho de una persona a exigir el cumplimiento de un contrato, pero es el Derecho Procesal el que indica cómo debe presentarse la demanda, cómo se notifica a la contraparte, cómo se practican las pruebas, y bajo qué condiciones el juez debe emitir una sentencia válida. Sin estas reglas procesales, el reconocimiento abstracto del derecho no sería suficiente para hacerlo valer en la práctica. Por eso se dice que el Derecho Procesal es instrumental. Su función es servir de medio para que el Derecho Sustancial se materialice y cumpla su objetivo. 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/23.png")           
            .col-lg-7
              h5 Contenido técnico y especializado
              p Otra característica importante del Derecho Procesal es que posee un contenido técnico y especializado, el cual requiere del dominio de nociones jurídicas específicas, como la competencia, la legitimación, la caducidad, la cosa juzgada, los recursos procesales, entre otros. Este carácter técnico convierte al Derecho Procesal en una herramienta jurídica que debe ser comprendida y aplicada con rigor por los profesionales del derecho. Un error procesal como presentar una demanda fuera del término legal o no interponer oportunamente un recurso puede tener consecuencias graves, incluso la pérdida definitiva del Derecho Sustancial que se buscaba proteger (Aguirrezabal Grünstein, 2017). 

          .row.align-items-center.p-4.p-md-5
            .col-lg-5.mb-3.mb-lg-0
              figure
                img.img-a.img-t(src="@/assets/curso/temas/24.png")           
            .col-lg-7
              h5 Garantizar la seguridad jurídica
              p También es necesario resaltar que el Derecho Procesal está dirigido a garantizar la seguridad jurídica. Al establecer procedimientos uniformes, plazos perentorios, etapas definidas y competencias precisas, ofrece a las partes certidumbre sobre las reglas del juego judicial. Así, tanto el demandante como el demandado, pueden actuar con base en un marco jurídico estable, previsible y controlado, lo que es determinante para la confianza en el sistema de justicia. Esta seguridad jurídica no solo protege a las partes dentro del proceso, sino que también fortalece la institucionalidad democrática, al impedir decisiones arbitrarias y promover la aplicación igualitaria del derecho.                                           

    .bg-color-7.px-4.mb-4(data-aos="fade-left")
      .row.justify-content-center
        .col-lg-8.j1
          .p-4
            p.mb-0 Finalmente, como rama autónoma, el Derecho Procesal interactúa con todas las demás ramas del Derecho, debido a que cualquier derecho sustancial puede requerir de un proceso para su defensa o aplicación. Por ello, encontramos procesos civiles, penales, laborales, administrativos, constitucionales, entre otros, cada uno con sus propias normas, pero todos bajo la lógica general del Derecho Procesal como disciplina formal. Esta transversalidad lo convierte en una materia obligatoria para todo operador jurídico, pues sin conocimiento de los procedimientos no es posible ejercer la abogacía de forma efectiva.      
        .col-lg-auto.p-0
          img.img-a.img-t(src="@/assets/curso/temas/25.png")

    .row.justify-content-center.mb-5
      .col-lg-5.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/26.png", data-aos="zoom-in")              
      .col-lg-7 
        .bg-color-8.p-4.h-100.j1(data-aos="fade-left")
          p.mb-0 En síntesis, el Derecho Procesal se caracteriza por su naturaleza pública, al regular la función jurisdiccional del Estado; por su carácter formal, al establecer el modo en que deben ejercerse los derechos reconocidos por el ordenamiento; por su contenido técnico, que exige precisión en su aplicación; y por su función instrumental, dado que actúa como el canal mediante el cual el Derecho Sustancial se hace efectivo. Estas características lo convierten en una pieza indispensable del sistema jurídico colombiano, cuya comprensión resulta fundamental para garantizar el acceso a la justicia, la protección de los derechos y el fortalecimiento del Estado de Derecho. 


    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/51712?page=9" target="_blank" rel="noopener noreferrer") Gómez Colomer, J. L., Pérez Cebadera, M. Á. & Planchadell Gargallo, A. (2011). Derecho procesal civil. D - Universitat Jaume I. Servei de Comunicació i Publicacions. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/123110?page=32" target="_blank" rel="noopener noreferrer") Robles Garzón, J. A. (Dir.). (2018). Conceptos de Derecho procesal civil. Difusora Larousse - Editorial Tecnos. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.redalyc.org/pdf/181/18120143018.pdf" target="_blank" rel="noopener noreferrer") Peñaranda Valbuena, H. E., Quintero de Peñaranda, O., Peñaranda Quintero, H. R. & Peñaranda, M. (2011). Sobre el Derecho Procesal en el Siglo XXI. Nómadas. Revista Crítica de Ciencias Sociales y Jurídicas, 30 (2).  
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://doi.org/10.18601/01229893.n41.10" target="_blank" rel="noopener noreferrer") Ragone, Á. (2018). El impacto del diálogo entre derecho sustantivo y derecho procesal. Revista Derecho del Estado, (41), 255-283. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="http://www.scielo.org.mx/scielo.php?script=sci_arttext&pid=S0041-86332003000200004&lng=es&tlng=es." target="_blank" rel="noopener noreferrer") Lorca Navarrete, A. M. (2003). El derecho procesal como sistema de garantías. Boletín mexicano de derecho comparado, 36(107), 531-557.             

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=aqudLBYVaLw" target="_blank" rel="noopener noreferrer") LegalCase. (2024). Derecho Procesal General 1 de Andrade Hidalgo Voz Carlos Bermeo.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=hk0tF84wxj8" target="_blank" rel="noopener noreferrer") Agustín Aníbal Herrera Yáñez. (2023). Concepto, definición y clasificación del derecho procesal.


          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({}),

  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass"></style>
