export function ListaSuspensa({ itens, ...rest }) {
    return (
        <select {...rest} className="rounded-sm bg-transparent w-[60%] border p-2 text-white placeholder:text-gray-400 " defaultValue="">

            <option value="" disabled>
                Selecione uma opção
            </option>
            
            {itens.map((item) => {
            return <option key={item.id} value={item.id} className="text-black uppercase">
                {item.nome}
            </option>
            })}

        </select>
    )
}