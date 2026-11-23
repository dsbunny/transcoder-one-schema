import * as z from "zod";
export declare const TranscoderOneInputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOneInput">;
    url: z.ZodURL;
    expires: z.ZodISODateTime;
    s3_uri: z.ZodString;
    s3_etag: z.ZodString;
    s3_parts: z.ZodArray<z.ZodNumber>;
    s3_filename: z.ZodString;
    content_type: z.ZodString;
    content_length: z.ZodNumber;
}, z.core.$strip>;
export type TranscoderOneInput = z.infer<typeof TranscoderOneInputSchema>;
//# sourceMappingURL=input.schema.d.ts.map