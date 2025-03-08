import { z } from "zod";

export const onboardingSchema = z.object({
  firstName: z.string().min(3, "First name is required"),
  lastName: z.string().min(3, "Last name is required"),
  address: z.string().min(3, "Address is required"),
});
