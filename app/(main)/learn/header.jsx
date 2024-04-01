import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Header = ({ title }) => {
  return (
    <div className='flex sticky top-0 lg:z-50 bg-white border-b-2 text-neutral-400 justify-between items-center lg:mt-[-28px] mb-5 lg:pt-[28px] pb-3'>
      <Link href='/courses'>
        <Button variant='ghost' size='sm'>
          <ArrowLeft className='w-5 h-5 text-neutral-400 stroke-2' />
        </Button>
      </Link>
      <h1 className='font-bold text-lg'>
        {title}
      </h1>
      <div />
    </div>
  );
}
