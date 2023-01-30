export default function LinkButton({ setContent, linkText, linkGo }) {
  return (
    <div onClick={() => setContent(linkGo)} className="cursor-pointer text-xs font-semibold text-purple-700 px-1">
      { linkText }
    </div>
  )
}