// File to store all the server actions

"use server";
import { parseWithZod } from "@conform-to/zod";
import { requireUser } from "./utils/hooks";
import { onboardingSchema } from "./utils/zodSchemas";
import { prisma } from "./utils/db";
import { redirect } from "next/navigation";
import { SubmissionResult } from "@conform-to/react";

export async function onboardUser(
  state: SubmissionResult<string[]> | undefined,
  formData: FormData
) {
  const session = await requireUser();

  const submission = parseWithZod(formData, {
    schema: onboardingSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  await prisma.user.update({
    where: {
      id: session.user?.id,
    },
    data: {
      firstName: submission.value.firstName,
      lastName: submission.value.lastName,
      address: submission.value.address,
    },
  });

  return redirect("/dashboard");
}
