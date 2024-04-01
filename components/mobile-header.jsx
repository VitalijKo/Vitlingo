import { MobileSidebar } from './mobile-sidebar';

export const MobileHeader = () => {
  return (
    <nav className='lg:hidden flex fixed top-0 z-50 w-full h-[50px] bg-green-500 items-center border-b px-6'>
      <MobileSidebar />
    </nav>
  );
}
