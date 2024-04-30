import { z } from "zod";

const jsonToCheck = {};

const BrandVoiceSchema = z.object({
  voice_parameters: z.string(),
  voice_instructions: z.string(),
  brand_specific_terms: z.string(),
});

const HeaderSchema = z.object({
  external_name: z.string(),
  ap_title: z.string(),
  ap_subtitle: z.string(),
});

const CategorySchema = z.object({
  category: z.string(),
  category_subtitle: z.string().nullable(),
});

const StepSchema = z.object({
  id: z.string().uuid(),
  title: z.string(),
  subtitle: z.string(),
});

const PortalRewriteSchema = z.object({
  brand_voice: z.array(BrandVoiceSchema),
  header: z.array(HeaderSchema),
  categories: z.array(CategorySchema),
  steps: z.array(StepSchema),
});

try {
  PortalRewriteSchema.parse(jsonToCheck);
  console.log("Input is valid");
} catch (error) {
  console.dir(error);
  console.log("Input is invalid");
}
