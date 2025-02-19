import React from 'react';


export function AnimatedButton({text="",font='mont',width='w-36',bg='bg-primary', color='text-secondary',fntSize="text-md",position="center",action=false,height='h-auto'}){
  return (
        <div className={`flex ${fntSize} ${width} justify-${position} ${bg} ${color} py-4 px-4 font-${font} font-bold hover:bg-secondary hover:text-primary transition-all hover:scale-105 duration-500  `}>{text}</div>
  );
};

