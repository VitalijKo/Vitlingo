'use server';

import { auth, currentUser } from '@clerk/nextjs';
import { redirect } from 'next/navigation';
import { revalidatePath } from 'next/cache';
import db from '@/db/drizzle';
import { courses, userProgress } from '@/db/schema';
import { getCourseById, getUserProgress } from '@/db/queries';

export const uploadUserProgress = async (courseId) => {
	const { userId } = await auth();
	const user = await currentUser();

	if (!userId || !user) throw new Error('Unauthorized');

	const course = await getCourseById(courseId);

	if (!course) throw new Error('Course not found');

	// if (!course.units.length || !course.units[0].lessons.length) throw new Error('Course is empty');

	const existingUserProgress = await getUserProgress();

	if (existingUserProgress) {
		await db.update(userProgress).set({
			activeCourseId: courseId,
			userName: user.firstName || 'User',
			userImage: user.imageUrl || '/logo.png'
		});
	} else {
		await db.insert(userProgress).values({
			userId,
			activeCourseId: courseId,
			userName: user.firstName || 'User',
			userImage: user.imageUrl || '/logo.png'
		});
	}
	
	revalidatePath('/courses');
	revalidatePath('/learn');
	redirect('/learn');
}
