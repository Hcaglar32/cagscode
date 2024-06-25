import Link from 'next/link'
import React from 'react'

interface NavItemProps{
    href:string;
    title:string;
}

const NavItem = ({href,title}:NavItemProps) => {
  return (
    <Link href={href} className='block py-2 text-2xl pl-3 text-white hover:text-white/85'>
        {title}
    </Link>
  )
}

export default NavItem