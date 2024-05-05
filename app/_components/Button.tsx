import React from 'react'

interface ButtonsProps {
    label: string
}
const Button: React.FC<ButtonsProps> = ({ label }) => {
  return (
    
    <button className="relative mx-auto inline-flex w-1/2 h-12 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
    <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FFFFFF_0%,#808080_50%,#2c5364_100%)]"></span>
    <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-3 py-1 text-sm font-medium text-white backdrop-blur-3xl z-10">
        {label}
    </span>
    </button>
    
  )
}

export default Button