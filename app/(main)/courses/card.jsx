import { Check } from 'lucide-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Card = ({ id, title, image, onClick, disabled, active }) => {
	return (
		<div
			onClick={() => onClick(id)}
			className={cn('flex flex-col h-full min-w-[200px] min-h-[217px] hover:bg-black/5 border-2 border-b-4 active:border-b-2 justify-between items-center rounded-xl cursor-pointer p-3 pb-6', disabled && 'pointer-events-none opacity-50')}
		>
			<div className='flex w-full min-w-[24px] justify-end items-center'>
				{active && (
					<div className='flex bg-green-600 justify-cebter items-center rounded-md p-1.5'>
						<Check className='w-4 h-4 text-white stroke-4' />
					</div>
				)}
			</div>

			<Image
				width={93.33}
				height={70}
				src={image}
				alt={title}
				className='border drop-shadow-md object-cover rounded-lg'
			/>

			<p className='font-bold text-center text-neutral-700 mt-3'>
				{title}
			</p>
		</div>
	);
}
