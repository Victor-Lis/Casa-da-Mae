export default function StyledBox({
  children,
  extraClass,
}: { children: React.ReactNode; extraClass?: string }) {
  return (
    <div
      className={`w-9/12 max-w-3xl bg-primary py-8 px-8 rounded flex flex-col justify-center items-center max-sm:w-11/12 max-sm:px-2 max-sm:py-4 ${extraClass}`}
    >
      {children}
    </div>
  )
}
