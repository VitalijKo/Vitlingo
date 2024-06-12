'use client';

import { usePathname } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const SidebarItem = ({ label, icon, href }) => {
  const pathname = usePathname();
  const active = pathname === href;

  return (
    <Button
      variant={active ? 'sidebarOutline'  : 'sidebar'}
      className='h-[52px] justify-start'
      asChild
    >
      <Link href={href}>
        <Image
          width={32}
          height={32}
          src={icon}
          alt={label}
          className='mr-5'
        />
        {label}
      </Link>
    </Button>
  );
}
