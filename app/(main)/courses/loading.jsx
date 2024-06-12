import { Loader } from 'lucide-react';

const Loading = () => {
	return (
		<div className='flex w-full h-full justify-center items-center'>
			<Loader className='w-6 h-6 text-muted-foreground animate-spin' />
		</div>	
	);
}

export default Loading;
