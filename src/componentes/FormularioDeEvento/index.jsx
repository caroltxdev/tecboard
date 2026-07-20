import { CampoDeEntrada } from "../CampoDeEntrada";
import { CampoDeFormulario } from "../CampoDeFormulario";
import { Label } from "../Label/indes";
import { TituloFormulario } from "../TituloFormulario";

export function FormularioDeEvento () {
  return (
    <form style={{background: '#212121'}} className='P-5 rounded-md w-384 max-w-[90%] mt-10 m-auto' >
      <TituloFormulario>
        Preencha para criar um evento:
      </TituloFormulario>

    <CampoDeFormulario>
        <Label htmlFor="nome">
          Qual é o nome do evento?
        </Label>
    <CampoDeEntrada
    type="text"
    id="nome"
    name='nomeEvento'
    />

        <input type="text" id='nome' placeholder='Pixel show' />
    </CampoDeFormulario>

      <fieldset>
        <label htmlFor="data">Data do evento</label>
        <input type="text" id='data' placeholder='xx/xx/xxxx' />
      </fieldset>

      <fieldset>
        <label htmlFor="tema">Tema do evento</label>
        <select name="tema" id="inicio">Selecione uma opção</select>
      </fieldset>
    </form>
  )
}