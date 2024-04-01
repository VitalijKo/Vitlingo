import Link from 'next/link';
import Image from 'next/image';
import {
  ClerkLoading,
  ClerkLoaded,
  UserButton
} from '@clerk/nextjs';
import { Loader } from 'lucide-react';
import { cn } from '@/lib/utils';
import { SidebarItem } from './sidebar-item';

export const Sidebar = ({ className }) => {
  return (
    <div className={cn(
      'flex lg:fixed flex-col lg:w-[256px] h-full top-0 left-0 border-r-2 px-4',
      className
    )}>
      <Link href='/learn'>
        <div className='flex items-center gap-x-3 pt-8 pb-7 pl-4'>
          <Image src='/logo.svg' height={40} width={40} alt='Logo' />
          <h1 className='font-extrabold text-2xl text-green-600 tracking-wide'>
            Vitlingo
          </h1>
        </div>
      </Link>
      <div className='flex flex-1 flex-col gap-y-2'>
        <SidebarItem 
          label='Learn' 
          href='/learn'
          iconSrc='/learn.svg'
        />
        <SidebarItem 
          label='Leaderboard' 
          href='/leaderboard'
          iconSrc='/leaderboard.svg'
        />
        <SidebarItem 
          label='quests' 
          href='/quests'
          iconSrc='/quests.svg'
        />
        <SidebarItem 
          label='shop' 
          href='/shop'
          iconSrc='/shop.svg'
        />
      </div>
      <div className='p-4'>
        <ClerkLoading>
          <Loader className='w-5 h-5 text-muted-foreground animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton afterSignOutUrl='/' />
        </ClerkLoaded>
      </div>
    </div>
  );
}
