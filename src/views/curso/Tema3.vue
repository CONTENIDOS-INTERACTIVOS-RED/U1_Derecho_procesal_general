<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(:subTitulo="'3. Constitución e interpretación normativa'")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.overflow-hidden

    p(data-aos="fade-down") La comprensión de la relación entre el Derecho Sustancial y el Derecho Procesal es clave para interpretar cómo se articulan las normas que establecen derechos con los mecanismos que permiten hacerlos exigibles ante los jueces.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Constitución e interpretación normativa 
            p.mb-4(data-aos="fade-right") En el PDF #[b Constitución e interpretación normativa], se examina cómo la Constitución Política y el bloque de constitucionalidad, orientan la aplicación e interpretación de las normas procesales, exigiendo una actuación judicial basada en la garantía del debido proceso y la protección de la dignidad humana. Este enfoque permite comprender el proceso no solo como un conjunto de reglas, sino como un medio para la realización efectiva de la justicia.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Constitución e interpretación normativa 
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/47.png', alt='')  
    #t_3_1.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.1] El debido proceso como principio constitucional del proceso 

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/48.png", data-aos="zoom-in")      
      .col-lg-8
        .bg-color-3.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/11.svg")
            .col-lg
              p.mb-0 El debido proceso constituye uno de los pilares fundamentales del ordenamiento jurídico colombiano, consagrado expresamente en el Artículo 29 de la Constitución Política. Este principio garantiza que toda persona, sin distinción, tiene derecho a un juicio justo, desarrollado conforme a normas preexistentes, por autoridades competentes, imparciales e independientes, y bajo condiciones de igualdad, defensa y contradicción. En otras palabras, el debido proceso no solo es una garantía procesal, sino también un derecho fundamental transversal que atraviesa toda la actividad jurisdiccional y administrativa.

    .bg-color-5(data-aos="fade-left")
      .row.justify-content-center
        .col-lg-8.j1
          .p-4
            p.mb-0 El Artículo 29 establece que toda persona se presume inocente mientras no se le haya declarado judicialmente culpable, y que quien sea sindicado tiene derecho a la defensa y a la asistencia de un abogado durante la investigación y el juzgamiento.       
        .col-lg-auto.p-0
          img.img-a.img-t(src="@/assets/curso/temas/49.png")
    .bg-color-7.mb-4(data-aos="fade-left")
      .row.justify-content-center
        .col-lg-auto.p-0
          img.img-a.img-t(src="@/assets/curso/temas/50.png")      
        .col-lg-8.j1
          .p-4
            p.mb-0 De igual forma, dispone que es nula de pleno derecho la prueba obtenida con violación del debido proceso. Estas disposiciones no son solo normas declarativas, sino verdaderos límites al ejercicio del poder del Estado y mandatos concretos que los jueces, fiscales y autoridades administrativas deben observar en cada actuación que afecte los derechos de los ciudadanos.    

    p(data-aos="fade-down") El debido proceso implica el respeto de múltiples garantías:

    .bg-full-width.bg-fondo-slider(data-aos="fade-right")
      .p-4.p-md-5
        SlyderA(tipo="b").bg-white
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p Una de ellas es el #[b derecho de defensa], que incluye el acceso a la información del proceso, la posibilidad de presentar pruebas, controvertir las que se presenten en su contra y contar con la asesoría de un abogado. Por ejemplo, en un proceso penal, si a una persona se le niega el acceso a la carpeta investigativa o se le impide participar en la audiencia de imputación, se estaría vulnerando su derecho a la defensa técnica, lo cual podría dar lugar a la nulidad de la actuación.          
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/51.png")           
          .row.align-items-center.p-4.p-md-5
            .col-lg-7.mb-3.mb-lg-0
              p Otra garantía fundamental es la #[b presunción de inocencia], que impone la carga probatoria a la parte acusadora y exige que toda duda razonable beneficie al procesado. En este sentido, nadie puede ser considerado culpable hasta que una sentencia debidamente motivada y dictada en un proceso con todas las garantías así lo declare. Si, por ejemplo, se impone una medida sancionatoria en un proceso disciplinario sin pruebas suficientes y sin permitir el ejercicio del derecho de defensa, se estaría desconociendo este principio constitucional.          
            .col-lg-5
              figure
                img.img-a.img-t(src="@/assets/curso/temas/52.png")  

    .bg-full-width.bg-color-6.mb-5(data-aos="fade-up")
      .px-4.p-md-3
        .row.justify-content-center.align-items-center 
          .col-lg-auto.mb-3.mb-lg-0
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/53.svg', alt='')                  
          .col
            p.mb-0(data-aos="fade-down") Asimismo, el debido proceso exige el respeto del principio de legalidad, es decir, que ninguna persona puede ser juzgada sino conforme a una ley preexistente que describa con claridad la conducta sancionable. Esta exigencia se traduce en que ni los jueces ni las autoridades administrativas pueden sancionar hechos que no estén previamente definidos por la ley como infracción, ni aplicar retroactivamente normas más gravosas.                  



    .row.justify-content-center.mb-5           
      .col-lg-4
        .bg-color-1.p-3.h-100.brounded.j1
          p(data-aos="fade-down").mb-0 La imparcialidad del juez y la doble instancia son otras manifestaciones importantes del debido proceso. Un juez debe mantener distancia frente a las partes y resolver únicamente con base en lo que se demuestre en el proceso. Si un juez ha emitido opinión anticipada o tiene vínculos con alguna de las partes, su imparcialidad se ve comprometida. A su vez, el derecho a impugnar una decisión judicial garantiza que las personas puedan solicitar su revisión ante una autoridad superior, lo cual permite corregir errores y salvaguardar el equilibrio procesal.
      .col-lg-4.my-4.my-lg-0
        figure
          img.img-a.img-t(src='@/assets/curso/temas/54.png', alt='', data-aos="zoom-in")          
      .col-lg-4
        .bg-color-2.p-3.h-100.brounded.j1
          p(data-aos="fade-down").mb-0 También forma parte del debido proceso el respeto a los términos razonables. Un proceso no puede prolongarse indefinidamente, puesto que ello afectaría gravemente el acceso efectivo a la justicia. En Colombia, la Corte Constitucional ha enfatizado que el retardo injustificado en los procesos es una forma de denegación de justicia, como lo ha señalado en sentencias como la T-001 de 1997 y la C-373 del 2016, en las que se ha establecido que el respeto por los tiempos procesales, es parte de la garantía de un proceso justo. 


    .row.mb-5
      .col-lg-3.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/55.png", data-aos="zoom-in")            
      .col-lg-9
        p(data-aos="fade-down") Este principio también tiene implicaciones en el ámbito administrativo. Cuando una entidad del Estado impone una sanción a un ciudadano, como una multa por violar una norma ambiental o de tránsito, debe hacerlo mediante un procedimiento donde se garantice el derecho de defensa, se dé oportunidad para presentar descargos, aportar pruebas y controvertir las pruebas que se usen en su contra. La jurisprudencia ha sido clara en sostener que el debido proceso aplica no solo a los procesos judiciales, sino también a los administrativos sancionatorios.

        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 En resumen, el debido proceso no es un simple conjunto de formalidades jurídicas, sino un verdadero instrumento de protección frente al poder punitivo del Estado. Su observancia garantiza la equidad en el proceso, refuerza la legitimidad de las decisiones judiciales y fortalece la confianza ciudadana en la justicia. Como futuro abogado, comprender y aplicar este principio no solo será parte de su labor técnica, sino también un compromiso ético con los derechos fundamentales de las personas. Cuando logre que un proceso respete cada una de estas garantías, no solo está actuando conforme a la Ley, sino que está defendiendo el Estado de Derecho. 
          
    #t_3_2.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.2] Bloque de constitucionalidad y garantías procesales 
    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") En el sistema jurídico colombiano, la supremacía de la Constitución no se limita únicamente a su texto. Existe un conjunto normativo denominado bloque de constitucionalidad, el cual amplía el contenido material de la Carta Política al integrar normas y principios que, aunque no hacen parte del articulado constitucional, gozan del mismo valor jerárquico y deben ser respetados por todas las autoridades. Este bloque incluye, entre otros, los tratados internacionales sobre derechos humanos ratificados por Colombia, así como disposiciones del derecho internacional humanitario que protegen a las personas frente a los abusos del poder estatal (Olano García, 2009).
        .bg-color-5.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/56.svg")
            .col-lg
              p.mb-0 El bloque de constitucionalidad tiene una especial incidencia en el Derecho Procesal, pues complementa y refuerza las garantías mínimas que deben observarse en cualquier procedimiento judicial o administrativo. Así, cuando se analiza la legalidad de una actuación procesal, no basta con verificar que se haya ajustado al Código General del Proceso o a otras leyes internas, también es necesario comprobar que esa actuación no contradice los estándares internacionales ni las disposiciones constitucionales que forman parte de este bloque.     
      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/57.png", data-aos="zoom-in")      

    p(data-aos="fade-down") Uno de los principales instrumentos que integran el bloque de constitucionalidad en materia procesal, es la Convención Americana sobre Derechos Humanos (CADH), también conocida como Pacto de San José.

    .bg-color-2.mb-4(data-aos="fade-left")
      .row.justify-content-center
        .col-lg-auto.p-0
          img.img-a.img-t(src="@/assets/curso/temas/58.png")      
        .col-lg-8.j1
          .p-4
            p En su Artículo 8, esta convención establece el #[b derecho de toda persona a ser oída con las debidas garantías por un juez competente], independiente e imparcial, en un plazo razonable y mediante un proceso que respete los principios de legalidad, defensa, contradicción y presunción de inocencia.

            p.mb-0 Este estándar no solo refuerza el contenido del Artículo 29 de la Constitución colombiana sobre el debido proceso, sino que obliga a los #[b jueces y autoridades nacionales], para que adopten interpretaciones que garanticen plenamente, estos derechos. 

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        p(data-aos="fade-down") Por ejemplo, si una norma procesal interna previera una limitación al derecho a recurrir una decisión judicial en determinados casos, esa restricción no podría aplicarse si contradice el Artículo 8.2 de la CADH, que reconoce el derecho a la doble instancia. La Corte Constitucional ha dejado claro en múltiples fallos, como la Sentencia C-370 de 2006, que las normas del bloque de constitucionalidad son parámetro de control y prevalecen sobre la legislación ordinaria cuando se trata de proteger los derechos fundamentales.

        .bg-color-9.p-4(data-aos="fade-left")
          p.mb-0 Además de la CADH, otros tratados como el Pacto Internacional de Derechos Civiles y Políticos, también reconocen garantías procesales, como el acceso a un recurso efectivo, la publicidad del juicio, el derecho a contar con asistencia jurídica y la prohibición de ser juzgado dos veces por los mismos hechos. Estos tratados, al estar ratificados por Colombia y tener fuerza vinculante, exigen que toda norma procesal se interprete de manera compatible con su contenido.                 

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/59.png", data-aos="zoom-in")    

    .row.mb-5
      .col-lg-4.mb-3.mb-lg-0 
        figure
          img.img-a.img-t(src="@/assets/curso/temas/60.png", data-aos="zoom-in")                  
      .col-lg-8
        p(data-aos="fade-down") El bloque de constitucionalidad también desempeña un papel relevante en la labor de los jueces. Estos no solo aplican la Ley escrita, sino que están obligados a interpretar las disposiciones procesales conforme a los derechos fundamentales y a los tratados internacionales que los desarrollan. Esta exigencia impone una perspectiva garantista del proceso, en la que la formalidad nunca puede anteponerse a la protección efectiva de los derechos del justiciable. Por eso, cuando una norma procesal es ambigua o su aplicación puede afectar derechos fundamentales, debe privilegiarse siempre la interpretación más favorable a la protección del derecho.   
        .bg-color-1.p-4.mb-4(data-aos="fade-left")
          .row.align-items-start
            .col-lg-auto
              img.img-a.img-t(src="@/assets/curso/temas/61.svg")
            .col-lg.j1
              p.mb-0 Por ejemplo, si una norma del procedimiento limita la posibilidad de presentar pruebas fuera de un término preestablecido, pero el juez advierte que dicha limitación comprometería el derecho de defensa o al acceso a la justicia, tiene el deber de permitir su presentación, aplicando el bloque de constitucionalidad como parámetro interpretativo. Este enfoque protege el núcleo de los derechos procesales y evita decisiones injustas derivadas de una aplicación rígida de la norma (Olano García, 2009).

    .row.mb-5
      .col-lg-8.mb-3.mb-lg-0 
        .bg-color-3.p-4.j1.h-100(data-aos="fade-left")
          p.mb-0 En conclusión, el bloque de constitucionalidad amplía el alcance de las garantías procesales reconocidas en el ordenamiento jurídico colombiano y exige que toda actuación judicial se adecúe a los estándares internacionales en materia de derechos humanos. El Derecho Procesal, en consecuencia, no puede aplicarse de manera aislada ni formalista, sino que debe interpretarse siempre en armonía con los principios superiores del orden constitucional y con las obligaciones internacionales del Estado colombiano. Como operador jurídico, comprender y aplicar el bloque de constitucionalidad le permitirá garantizar procesos más justos, legítimos y respetuosos de la dignidad humana (Olano García, 2009).

      .col-lg-4
        figure
          img.img-a.img-t(src="@/assets/curso/temas/62.png", data-aos="zoom-in")

    #t_3_3.titulo-segundo(data-aos="flip-up")
      h2 #[span 3.3] Interpretación normativa en el Derecho Procesal colombiano
    p(data-aos="fade-down") La interpretación normativa en el Derecho Procesal colombiano constituye una herramienta clave para garantizar que las normas procesales cumplan su función como medios efectivos para la protección de los derechos sustanciales.

    .bg-full-width.bg-color-4.mb-5
      .px-4.p-md-5
        .row.justify-content-center.align-items-center 
          .col-lg-8.mb-3.mb-lg-0
            h2.mb-4(data-aos="flip-up") Interpretación normativa en el Derecho Procesal colombiano 
            p.mb-4(data-aos="fade-right") En el PDF #[b Interpretación normativa en el Derecho Procesal colombiano], se analizan los distintos enfoques interpretativos, funcional, sistemático, teleológico y conforme a la Constitución, que permiten a los jueces adoptar decisiones ajustadas al debido proceso y los principios del Estado Social de Derecho. Esta perspectiva garantiza que la aplicación de las normas no se convierta en un obstáculo formal, sino en una vía real hacia la justicia.
            a.anexo.mb-4.bg-white.w-fit(:href="obtenerLink('/downloads/Anexo_1.pdf')" target="_blank")(data-aos="flip-up")
              .anexo__icono(:style="{'background-color': '#FCDFDB'}")
                img(src="@/assets/template/icono-pdf.svg")
              .anexo__texto
                p <strong>Anexo. </strong> Interpretación normativa en el Derecho Procesal colombiano 
          .col-lg-4
            figure(data-aos="zoom-in")
              img(src='@/assets/curso/temas/63.png', alt='')
  

    .bg-full-width.border-top.actividad.bg-color-actividad
      .p-4.p-md-5
        #Actividad                
          <Actividad :cuestionario="cuestionario"/>

    .bg-full-width.border-top.color-primario
      .p-4.p-md-5
        h2(data-aos="fade-left") MATERIAL COMPLEMENTARIO
        .row.material-complementario
          .col-12.col-md-6.col-lg-7
            p Los invitamos a explorar el material complementario de este curso, en esta sección encontrará recursos que le permitirán profundizar  y enriquecer su aprendizaje en los temas tratados en esta unidad.

            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/lc/tecnologicadeloriente/titulos/36654" target="_blank" rel="noopener noreferrer") Esparza Leibar, I. (2008). El principio del proceso debido. J.M. BOSCH EDITOR. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="https://elibro.net/es/ereader/tecnologicadeloriente/119794?page=84" target="_blank" rel="noopener noreferrer") Gozaíni, O. A. (2016). Garantías, principios y reglas del proceso civil. Eudeba. 
            p.d-flex.my-4
              img.me-3(src='@/assets/componentes/link.svg' :style="{'max-width':'16px'}")
              a(href="http://www.secretariasenado.gov.co/senado/basedoc/codigo_civil.html#1" target="_blank" rel="noopener noreferrer") Ley 84 DE 1873: Por medio de la cual se expide el Código Civil Colombiano. Diario Oficial. No. 2.867. 


            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="http://ve.scielo.org/scielo.php?script=sci_arttext&pid=S1315-62682003000300005&lng=es&tlng=es" target="_blank" rel="noopener noreferrer") García Leal, L. (2003). El debido proceso y la tutela judicial efectiva. Frónesis, 10(3), 105-116. 
            p.d-flex.my-4
              img.me-3(src='@/assets/template/book.svg' :style="{'max-width':'16px'}")
              a(href="https://www.scielo.cl/scielo.php?script=sci_arttext&pid=S0718-80722012000200014" target="_blank" rel="noopener noreferrer") Vargas Pavez, M. (2012). DERECHO A UN DEBIDO PROCESO: ALCANCES Y CONTENIDO. Revista chilena de derecho privado, (19), 252-259. 

            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=f8f4YUV3Syw" target="_blank" rel="noopener noreferrer") Luis Payán Vlog. (2022). Las decisiones del Juez en el Debido Proceso.
            p.d-flex.my-4
              img.me-3(src='@/assets/template/icono-yt.svg' :style="{'max-width':'16px'}")
              a(href="https://www.youtube.com/watch?v=-cSap5XfzHE" target="_blank" rel="noopener noreferrer") Telenord. (2021). El estado debe hacer sus acciones legítimas y amparadas en el debido proceso.              

          .col-12.col-md-6.col-lg-3.offset-lg-1
            figure
              img(src='@/assets/componentes/material-complementario.svg', alt='')

</template>

<script>
import Actividad from '@/components/actividad/Actividad.vue'
export default {
  name: 'Tema3',
  components: {
    Actividad,
  },
  data() {
    return {
      cuestionario: {
        tema: 'Derecho Procesal General',
        titulo: 'Ponte a prueba',
        introduccion:
          'Demuestra lo que aprendiste en esta unidad y pon a prueba tus conocimientos.',
        barajarPreguntas: true,
        preguntas: [
          {
            id: 1,
            texto:
              'El Congreso expide una ley que contradice la Convención Americana sobre Derechos Humanos. ¿Qué figura constitucional impide la aplicación de esa ley?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Principio de legalidad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Bloque de constitucionalidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Cosa juzgada',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Control difuso de constitucionalidad',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 2,
            texto:
              'Durante un proceso, el juez evita que se presente una prueba clave alegando un tecnicismo procesal. ¿Qué enfoque de interpretación normativa debe utilizarse para garantizar justicia material?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Interpretación literal',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Interpretación conforme a la ley civil',
                esCorrecta: false,
              },
              {
                id: 'c',
                texto:
                  'Interpretación teleológica y conforme a la Constitución',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Interpretación restrictiva',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 3,
            texto:
              'Una parte actúa de mala fe, presenta pruebas falsas y retrasa el proceso con recursos innecesarios. ¿Qué principio está siendo vulnerado?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Legalidad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Publicidad',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Lealtad procesal',
                esCorrecta: true,
              },
              {
                id: 'd',
                texto: 'Contradicción',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 4,
            texto:
              'Una ciudadana demanda la restitución de un bien inmueble, pero el juez le niega presentar pruebas que respalden su demanda. ¿Qué principio procesal se ve directamente vulnerado cuando se impide a una parte presentar pruebas?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto: 'Legalidad',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto: 'Debido proceso',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto: 'Publicidad procesal',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto: 'Economía procesal',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
          {
            id: 5,
            texto:
              'El Código General del Proceso colombiano establece principios fundamentales que rigen la actuación de jueces y partes durante el desarrollo del proceso judicial. ¿Cuál de los siguientes enunciados refleja un principio rector del proceso conforme al Código General del Proceso?',
            imagen: '',
            barajarRespuestas: true,
            opciones: [
              {
                id: 'a',
                texto:
                  'Las actuaciones judiciales deben realizarse en secreto para proteger la imparcialidad del juez.',
                esCorrecta: false,
              },
              {
                id: 'b',
                texto:
                  'El juez debe actuar con iniciativa probatoria para lograr verdad y equidad en el proceso.',
                esCorrecta: true,
              },
              {
                id: 'c',
                texto:
                  'Las audiencias pueden realizarse por escrito para mayor economía procesal.',
                esCorrecta: false,
              },
              {
                id: 'd',
                texto:
                  'Las partes pueden renunciar a los principios para agilizar el proceso.',
                esCorrecta: false,
              },
            ],
            mensaje_correcto: '¡Muy bien! Ha acertado la respuesta.',
            mensaje_incorrecto: 'Lo sentimos, su respuesta no es la correcta.',
          },
        ],
        mensaje_final_aprobado:
          '¡Felicidades! Has superado la prueba con éxito.',
        mensaje_final_reprobado:
          'Te recomendamos repasar nuevamente la unidad para reforzar los conceptos clave antes de volver a intentarlo.',
      },
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
}
</script>

<style lang="sass">
.bg-color-actividad
  background-color: #EBF1F5
</style>
