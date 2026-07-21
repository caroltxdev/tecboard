export function CampoDeFormulario ({ children }) {
  return (
    <fieldset className="flex flex-col items-center gap-4 border-none w-full max-w-[100%] p-0 m-0">
      {children}
    </fieldset>
  )
}