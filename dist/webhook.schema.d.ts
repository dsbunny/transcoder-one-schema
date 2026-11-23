import * as z from "zod";
export declare const TranscoderOneWebhookClassSchema: z.ZodEnum<{
    one: "one";
}>;
export type TranscoderOneWebhookClass = z.infer<typeof TranscoderOneWebhookClassSchema>;
export declare const TranscoderOneWebhookTypeSchema: z.ZodEnum<{
    new: "new";
    change: "change";
}>;
export type TranscoderOneWebhookType = z.infer<typeof TranscoderOneWebhookTypeSchema>;
export declare const TranscoderOneWebhookRequestSchema: z.ZodObject<{
    tenant_id: z.ZodUUID;
    ref_id: z.ZodUUID;
    trace_id: z.ZodOptional<z.ZodString>;
    '@type': z.ZodLiteral<"TranscoderOneWebhookRequest">;
    class: z.ZodEnum<{
        one: "one";
    }>;
    type: z.ZodEnum<{
        new: "new";
        change: "change";
    }>;
    url: z.ZodURL;
}, z.core.$strip>;
export type TranscoderOneWebhookRequest = z.infer<typeof TranscoderOneWebhookRequestSchema>;
export declare const TranscoderOneWebhookProgressSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOneWebhookProgress">;
}, z.core.$strip>;
export type TranscoderOneWebhookProgress = z.infer<typeof TranscoderOneWebhookProgressSchema>;
export declare const TranscoderOneWebhookResponseSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOneWebhookResponse">;
}, z.core.$strip>;
export type TranscoderOneWebhookResponse = z.infer<typeof TranscoderOneWebhookResponseSchema>;
//# sourceMappingURL=webhook.schema.d.ts.map