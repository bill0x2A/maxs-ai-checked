import { z } from "zod";

const jsonToCheck = {};

const HeaderSchema = z.object({
  external_name: z.string(),
  ap_title: z.string(),
  ap_subtitle: z.string(),
});

const RewrittenCategorySchema = z.object({
  old_category_title: z.string(),
  new_category_title: z.string(),
  category_subtitle: z.string().nullable(),
});

const StepSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  subtitle: z.string(),
});

const RewrittenPortalSchema = z.object({
  header: HeaderSchema,
  categories: z.array(RewrittenCategorySchema),
  steps: z.array(StepSchema),
});

try {
  RewrittenPortalSchema.parse(jsonToCheck);
  console.log("Input is valid");
} catch (error) {
  console.dir(error);
  console.log("Input is invalid");
}
