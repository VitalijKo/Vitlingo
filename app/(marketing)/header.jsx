import Image from 'next/image';
import { Loader } from 'lucide-react';
import { 
  ClerkLoaded, 
  ClerkLoading,
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton
} from '@clerk/nextjs';
import { Button } from '@/components/ui/button';

export const Header = () => {
  return (
    <header className='w-full hh-20 border-b-2 border-slate-200 px-4'>
      <div className='flex lg:max-w-screen-lg h-full justify-between items-center mx-auto'>
        <div className='flex items-center gap-x-3 pt-8 pb-7 pl-4'>
          <Image src='/logo.png' height={40} width={40} alt='Logo' />
          <h1 className='font-extrabold text-2xl text-red-600 tracking-wide'>
            Vitlingo
          </h1>
        </div>
        <ClerkLoading>
          <Loader className='w-5 h-5 text-muted-foreground animate-spin' />
        </ClerkLoading>
        <ClerkLoaded>
          <SignedIn>
            <UserButton afterSignOutUrl='/' />
          </SignedIn>
          <SignedOut>
            <SignInButton
              mode='modal'
              afterSignInUrl='/learn'
              afterSignUpUrl='/learn'
            >
              <Button size='lg' variant='ghost'>
                Login
              </Button>
            </SignInButton>
          </SignedOut>
        </ClerkLoaded>
      </div>
    </header>
  );
}
