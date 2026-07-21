import { FormularioDeEvento } from './componentes/FormularioDeEvento/'
import { Tema } from './componentes/Tema'

// No react, componentes são FUNÇÕES
// Props é um OBJETO
// props.ALGUMACOISA = props.filho
function App () {

  const temas = [
      {
        id: 1,
        nome: 'front-end'
      },
      {
        id: 2,
        nome: 'back-end'
      },
      {
        id: 3,
        nome: 'devops'
      },
      {
        id: 4,
        nome: 'inteligência artificial'
      },
      {
        id: 5,
        nome: 'data science'
      },
      {
        id: 6,
        nome: 'cloud'
      }
    ]

  return (

    <>
    <body className='m-0' style={{background: '#06151A'}} >
      <main>
        <header style={{background: '#06151A', }} className='p-5 flex justify-center'>
          <img src="/logo.png" alt="#" />
        </header>
      
        <section className='bg-linear-to-t from-black to-emerald-400 flex justify-center'>
          <img src="/banner.png" alt="#" className='max-w-[90%]'/>
        </section>
        <FormularioDeEvento />

        {temas.map((item) => {
          return (
          <section key={item.id} >
            <Tema tema={item} />
          </section>
        )
        })}

      </main>
    </body>
      </>
  )
}

export default App
