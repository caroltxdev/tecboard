export function CardEvento ({ evento }) {
    return(
        <div style={{background: '#212121'}} className="flex flex-col items-start w-70.5">
            <img src={evento.capa} alt={evento.titulo} />
            <div className="text-white py-6 px-4 flex flex-col gap-4">
                <p className="m-0 bg-gray-500 rounded-sm p-3.5 w-[100%] font-orbitron uppercase">
                    {evento.tema.nome}
                </p>

                <p className="m-0 font-sans leading-1.5">
                    {evento.data.toLocaleDateString('pt-BR')}
                </p>

                <h4 className="m-0 font-orbitron font-bold leading-7 text-2xl">
                    {evento.titulo}
                </h4>
            </div>
        </div>
    )
}