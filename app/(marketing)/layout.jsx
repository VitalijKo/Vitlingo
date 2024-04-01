import { Header } from './header';
import { Footer } from './footer';

const MarketingLayout = ({ children }) => {
  return (
    <div className='flex flex-col min-h-screen'>
      <Header />
      <main className='flex flex-1 flex-col justify-center items-center'>
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MarketingLayout;
