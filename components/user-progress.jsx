import Link from 'next/link';
import Image from 'next/image';
import { InfinityIcon } from 'lucide-react';
import { courses } from '@/db/schema';
import { Button } from '@/components/ui/button';

export const UserProgress = ({ activeCourse,  points,  lifes, hasActiveSubscription }) => {
  return (
    <div className='flex w-full justify-between items-center gap-x-2'>
      <Link href='/courses'>
        <Button variant='ghost'>
          <Image
            width={32}
            height={32}
            src={activeCourse.imageSrc}
            alt={activeCourse.title}
            className='rounded-md border'
          />
        </Button>
      </Link>
      <Link href='/shop'>
        <Button variant='ghost' className='text-orange-500'>
          <Image
            width={28} 
            height={28}
            src='/point.svg'
            alt='Points'
            className='mr-2' 
          />
          {points}
        </Button>
      </Link>
      <Link href='/shop'>
        <Button variant='ghost' className='text-rose-500'>
          <Image
            width={22}
            height={22}
            src='/heart.svg'
            alt='lifes'
            className='mr-2'
          />
          {hasActiveSubscription 
            ? <InfinityIcon className='w-4 h-4 stroke-[3]' /> 
            : lifes
          }
        </Button>
      </Link>
    </div>
  );
}
