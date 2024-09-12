import { Link } from 'react-router-dom'

export default function Button({ children, disabled, to, type, onClick }) {
  const base =
    'inline-block rounded-full bg-yellow-400 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-yellow-300 focus:outline-none focus:ring focus:ring-yellow-300 focus:ring-offset-2 disabled:cursor-not-allowed'
  const style = {
    small: base + ' py-2 px-3 md:px-5 md:py-2.5 text-xs',
    round: base + ' py-1 px-2.5 md:px-3.5 md:py-2 text-sm',
    primary: base + ' px-4 py-3 md:px-6 md:py-4',
    secondary:
      'inline-block rounded-full border-2 border-stone-300 px-4 py-2.5 font-semibold uppercase tracking-wide text-stone-800 transition-colors hover:bg-stone-300 focus:bg-stone-300 focus:text-stone-800 focus:outline-none focus:ring focus:ring-stone-400 focus:ring-offset-2 disabled:cursor-not-allowed md:px-6 md:py-3.5',
  }
  if (to)
    return (
      <Link className={style[type]} to={to}>
        {children}
      </Link>
    )
  if (onClick)
    return (
      <button disabled={disabled} onClick={onClick} className={style[type]}>
        {children}
      </button>
    )
  return (
    <button disabled={disabled} className={style[type]}>
      {children}
    </button>
  )
}
