'use client';

import { useRouter } from 'next/navigation';
import { useTransition } from 'react';
import { toast } from 'sonner';
import { courses } from '@/db/schema';
import { uploadUserProgress } from '@/actions/user-progress';
import { Card } from './card';

export const List = ({ courses, activeCourseId }) => {
	const router = useRouter();

	const [pending, startTransition] = useTransition();

	const onClick = (id) => {
		if (pending) return;

		if (id === activeCourseId) return router.push('/learn');

		startTransition(() => {
			uploadUserProgress(id).catch(() => toast.error('An unknown error occured'));
		});
	}

	return (
		<div className='grid grid-cols-2 lg:grid-cols-[repeat(auto-fill,minmax(210px,1fr))] gap-4 pt-6'>
			{courses.map((course) => (
				<Card
					key={course.id}
					id={course.id}
					title={course.title}
					image={course.image}
					onClick={onClick}
					disabled={pending}
					active={course.id === activeCourseId}
				/>
			))}
		</div>
	);
}
