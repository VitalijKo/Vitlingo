export const StickyWrapper = ({ children }) => {
  return (
    <div className='hidden lg:block sticky bottom-6 w-[368px] self-end'>
      <div className='flex flex-col sticky top-6 min-h-[calc(100vh-48px)] gap-y-4'>
        {children}
      </div>
    </div>
  );
}
