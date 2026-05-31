'use server';

import { prisma } from './prisma';

export async function createTask(
  formData: FormData
) {
  const title = formData.get('title') as string;

  await prisma.task.create({
    data: {
      title
    }
  });
}
