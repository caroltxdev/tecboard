import { Botao } from "../Botao";
import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label";
import { ListaSuspensa } from "../ListaSuspensa";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento () {
  return (
    <form style={{background: '#212121'}} className='rounded-md max-w-[90%] mt-10 m-auto' >
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

    <div className="p-5 flex flex-col gap-4">
      <CampoDeFormulario>
          <Label htmlFor="nome">
            Qual é o nome do evento?
          </Label>
              <CampoDeEntrada
              type="text"
              id="nome"
              name='nomeEvento'
              />
      </CampoDeFormulario>
      <CampoDeFormulario>
          <Label htmlFor="data">
            Data do evento
          </Label>
              <CampoDeEntrada
              type="date"
              id="data"
              name='dataEvento'
              />
      </CampoDeFormulario>
      <CampoDeFormulario>
          <Label htmlFor="tema">
            Tema do evento
          </Label>
              <ListaSuspensa />
      </CampoDeFormulario>
    </div>

    <div className="text-center mb-5 p-7">
      <Botao>
        Criar evento
      </Botao>
    </div>

    </form>
  )
}