import { FormularioDeEvento } from './componentes/FormularioDeEvento/'

// No react, componentes são FUNÇÕES
// Props é um OBJETO
// props.ALGUMACOISA = props.filho
function App () {
  return (
    <>
    <body className='m-0'>
      <main>
        <header style={{background: '#06151A', }} className='p-5 flex justify-center'>
          <img src="/logo.png" alt="#" />
        </header>
      
        <section className='bg-linear-to-t from-black to-emerald-400 flex justify-center'>
          <img src="/banner.png" alt="#" className='max-w-[90%]'/>
        </section>
        <FormularioDeEvento />
      </main>
    </body>
      </>
  )
}

export default App
