import Link from 'next/link';
import Image from 'next/image';
import { Loader } from 'lucide-react';
import { 
  ClerkLoaded, 
  ClerkLoading, 
  SignInButton, 
  SignUpButton, 
  SignedIn, 
  SignedOut
} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export default function Home() {
  return (
    <div className='flex flex-1 flex-col lg:flex-row w-full max-w-[988px] justify-center items-center gap-2 mx-auto p-4'>
      <div className='relative w-[240px] lg:w-[424px] h-[240px] lg:h-[424px] mb-8 lg:mb-0'>
        <Image src='/logo.png' fill alt='Logo' />
      </div>
      <div className='flex flex-col items-center gap-y-8'>
        <h1 className='max-w-[480px] font-bold text-center text-xl lg:text-3xl text-neutral-600'>
          Learn, practice, and master new languages with Vitlingo.
        </h1>
        <div className='flex flex-col w-full max-w-[330px] items-center gap-y-3'>
          <ClerkLoading>
            <Loader className='w-5 h-5 text-muted-foreground animate-spin' />
          </ClerkLoading>
          <ClerkLoaded>
            <SignedOut>
              <SignUpButton
                mode='modal'
                afterSignInUrl='/learn'
                afterSignUpUrl='/learn'
              >
                <Button size='lg' variant='secondary' className='w-full'>
                  Get started
                </Button>
              </SignUpButton>
              <SignInButton
                mode='modal'
                afterSignInUrl='/learn'
                afterSignUpUrl='/learn'
              >
                <Button size='lg' variant='primaryOutline' className='w-full'>
                  I already have an account
                </Button>
              </SignInButton>
            </SignedOut>
            <SignedIn>
              <Button size='lg' variant='secondary' className='w-full' asChild>
                <Link href='/learn'>
                  Continue Learning
                </Link>
              </Button>
            </SignedIn>
          </ClerkLoaded>
        </div>
      </div>
    </div>
  );
}
