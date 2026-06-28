import React from "react";

type LozengeProps = {
  text: string
};

export default function Lozenge({ text }: LozengeProps) {
  return (
    <div className='border border-blue-200 bg-blue-950/60 rounded-full pl-2 pr-2 backdrop-blur-md'>
      <span className="text-blue-200 text-xs font-code">{text}</span>
    </div>
  )
}