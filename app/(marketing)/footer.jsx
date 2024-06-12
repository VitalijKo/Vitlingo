import Image from 'next/image';
import { Button } from '@/components/ui/button';

export const Footer = () => {
  return (
    <footer className='hidden lg:block w-full h-20 border-t-2 border-slate-200 p-2'>
      <div className='flex max-w-screen-lg h-full justify-evenly items-center mx-auto'>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image 
            width={40}
            height={32} 
            src='/ru.svg'
            alt='Russian'
            className='rounded-md mr-4'
          />
          Russian
        </Button>
        <Button size='lg' variant='ghost' className='w-full'>
          <Image 
            width={40}
            height={32} 
            src='/tr.svg'
            alt='Turkish'
            className='rounded-md mr-4'
          />
          Turkish
        </Button>
      </div>
    </footer>
  );
}
