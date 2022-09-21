import Link from "next/link";
import Image from "next/image";
import Layout from "@components/Layout";

const Intro = () => {
  return (
    <Layout>
      <div className="relative w-full bg-white py-16">
        <div className="mx-auto max-w-7xl bg-sky-50 lg:bg-transparent lg:px-8">
          <div className="lg:grid lg:grid-cols-12">
            <div className="relative z-1 lg:z-10 lg:col-span-4 lg:col-start-1 lg:row-start-1 lg:bg-transparent lg:py-16">
              <div className="mx-auto max-w-md px-4 sm:max-w-3xl sm:px-6 lg:max-w-none lg:p-0">
                <div className="aspect-w-10 py-6 aspect-h-6 sm:aspect-w-2 sm:aspect-h-1 lg:aspect-w-1">
                  <Image
                    height={420}
                    width={620}
                    objectFit="cover"
                    className="rounded-3xl object-cover object-center shadow-2xl"
                    src="/assets/imgs/webdevpath/intro.jpg"
                    alt="viistorrr programming"
                  />
                </div>
              </div>
            </div>

            <div className="relative bg-sky-50 lg:col-span-10 lg:col-start-3 lg:row-start-1 lg:grid lg:grid-cols-10 lg:items-center lg:rounded-3xl">
              <div
                className="absolute inset-0 hidden overflow-hidden rounded-3xl lg:block"
                aria-hidden="true"
              >
                <svg
                  className="absolute bottom-full left-full translate-y-1/3 -translate-x-2/3 transform xl:bottom-auto xl:top-0 xl:translate-y-0"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-sky-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
                <svg
                  className="absolute top-full -translate-y-1/3 -translate-x-1/3 transform xl:-translate-y-1/2"
                  width={404}
                  height={384}
                  fill="none"
                  viewBox="0 0 404 384"
                  aria-hidden="true"
                >
                  <defs>
                    <pattern
                      id="64e643ad-2176-4f86-b3d7-f2c5da3b6a6d"
                      x={0}
                      y={0}
                      width={20}
                      height={20}
                      patternUnits="userSpaceOnUse"
                    >
                      <rect
                        x={0}
                        y={0}
                        width={4}
                        height={4}
                        className="text-sky-500"
                        fill="currentColor"
                      />
                    </pattern>
                  </defs>
                  <rect
                    width={404}
                    height={384}
                    fill="url(#64e643ad-2176-4f86-b3d7-f2c5da3b6a6d)"
                  />
                </svg>
              </div>
              <div className="relative mx-auto max-w-md space-y-6 py-12 px-4 sm:max-w-3xl sm:py-16 sm:px-6 lg:col-span-6 lg:col-start-4 lg:max-w-none lg:p-0">
                <div className="prose prose-lg prose-sky mx-auto mt-6 text-gray-500">
                  <h1>
                    <span className="block text-center text-lg font-semibold text-sky-600">
                      Intro
                    </span>
                    <span className="mt-2 block text-center text-3xl font-bold leading-8 tracking-tight text-gray-900 sm:text-4xl">
                      Profesional Web Developer Path by @viistorrr
                    </span>
                  </h1>
                  <p className="mt-8 text-xl text-gray-500 leading-8">
                    👋🏾 Hola, Bienvenido!!!
                  </p>

                  <p className="mt-8 text-xl leading-8 text-gray-500">
                    De antemano te agradezco el confiar en mi para guiarte en
                    éste nuevo reto para vos. Yo sólo me pondré a disposición
                    para darte a conocer las herramientas que a mi me han
                    servido en éstos años, sin embargo el progreso es TODO tuyo
                    y estar interesado ya hace parte de ese cambio para tu vida.{" "}
                    <i>Felicitaciones por eso!</i> 🎉
                    <br />
                    <br />
                    Acá te comparto una secuencia de pasos que dan inicio a lo
                    que podría ser tu carrera como Desarrollador Web, basado en
                    mi experiencia, aplicando conceptos técnicos de ejecución y
                    habilidades blandas - que son relevantes para la
                    comunicación dentro de un equipo de trabajo, o comunidad -
                    que a día de hoy se aplican para la gestión de proyectos que
                    involucran el desarrollo de software. 💻📈📊
                    <br />
                    <br />
                    📝 Te recuerdo que el foco de ésta mentoría es capacitarte
                    de manera que puedas desarrollar habilidades y conocimientos
                    técnicos💻, pero también la manera correcta de gestionar tus
                    tiempos y compromisos de trabajo, entregables, aumentar tu
                    productividad📈, saber comunicarte con diferentes personas
                    dentro de un equipo y además, APRENDER A TRABAJAR DE MANERA
                    COLABORATIVA, pues así es que se ha mantenido y aún permite
                    el crecimiento en grandes escalas a las empresas de la
                    industria IT, de ahí la alta demanda de desarrolladores de
                    software, porque todas las empresas forman equipos de
                    trabajo que sean productivos y permitan resolver problemas.
                    <br />
                    <br />
                    Es por ésto que luego te estaré compartiendo el enlace al
                    canal de comunicación en el que nos podremos comunicar de
                    manera más efectiva, donde además de compartirte links,
                    lecturas recomendadas, challenges, cursos gratuitos y tips
                    que den valor a lo que quieres aprender, puedas comunicar
                    dudas, soluciones y aportes que cualquiera de los miembros
                    consideren pertinente hacer. <br />
                    <br />
                    <i>
                      <strong>
                        🚩 ***Así que si te da pena hablar en grupo o hacer
                        preguntas en público, es el momento de empezar a
                        enfrentar esos miedos para saber comunicar mensajes
                        porque de entrada te digo, si tu objetivo es conseguir
                        empleo en IT, más temprano que tarde lo tendrás que
                        hacer, entonces mejor empecemos desde ya!***🚩{" "}
                      </strong>
                    </i>
                    <br />
                    <br />
                    <i>
                      <strong>
                        Exito y felicitaciones por haber tomado la decisión de
                        invertir tiempo para tu crecimiento y conocimiento para
                        cambiar tu vida! 🌠
                      </strong>
                    </i>
                  </p>
                  <br />
                  <Link
                    href="https://www.notion.so/Profesional-Web-Developer-Path-by-viistorrr-852efa21137a41cfbae97bb975aaeb48"
                    passHref
                  >
                    <a
                      target="_blank"
                      className="block w-full rounded-md border border-transparent bg-white py-3 px-5 text-center text-base font-medium text-sky-700 shadow-md hover:bg-gray-50 sm:inline-block sm:w-auto"
                    >
                      Nos vemos en éste link para continuar...
                    </a>
                  </Link>

                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Intro;
