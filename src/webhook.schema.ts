// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab

import * as z from "zod";
import { transcoderOneRegistry } from './registry.js';
import {
        WebhookProgressSchema,
        WebhookRequestSchema,
        WebhookResponseSchema,
} from "@dsbunny/webhook-schema";

export const TranscoderOneWebhookClassSchema = z.enum(['one']).register(transcoderOneRegistry, {
        id: 'TranscoderOneWebhookClassSchema',
        description: 'The class of the webhook event related to Transcoder ONE operations',
});
export type TranscoderOneWebhookClass = z.infer<typeof TranscoderOneWebhookClassSchema>;

export const TranscoderOneWebhookTypeSchema = z.enum(['new', 'change']).register(transcoderOneRegistry, {
        id: 'TranscoderOneWebhookTypeSchema',
        description: 'The type of the webhook event related to Transcoder ONE operations',
});
export type TranscoderOneWebhookType = z.infer<typeof TranscoderOneWebhookTypeSchema>;

export const TranscoderOneWebhookRequestSchema = WebhookRequestSchema.extend({
        '@type': z.literal('TranscoderOneWebhookRequest')
                .describe('Type of the Transcoder ONE webhook request'),
        class: TranscoderOneWebhookClassSchema,
        type: TranscoderOneWebhookTypeSchema,
        url: z.url()
                .describe('The URL to which the webhook should be sent'),
}).register(transcoderOneRegistry, {
        id: 'TranscoderOneWebhookRequestSchema',
        description: 'The schema for webhook requests sent by the Transcoder ONE system',
});
export type TranscoderOneWebhookRequest = z.infer<typeof TranscoderOneWebhookRequestSchema>;

export const TranscoderOneWebhookProgressSchema = WebhookProgressSchema.extend({
        '@type': z.literal('TranscoderOneWebhookProgress')
                .describe('Type of the Transcoder ONE webhook progress'),
}).register(transcoderOneRegistry, {
        id: 'TranscoderOneWebhookProgressSchema',
        description: 'The schema for webhook progress events sent by the Transcoder ONE system',
});
export type TranscoderOneWebhookProgress = z.infer<typeof TranscoderOneWebhookProgressSchema>;

export const TranscoderOneWebhookResponseSchema = WebhookResponseSchema.extend({
        '@type': z.literal('TranscoderOneWebhookResponse')
                .describe('Type of the Transcoder ONE webhook response'),
}).register(transcoderOneRegistry, {
        id: 'TranscoderOneWebhookResponseSchema',
        description: 'The schema for webhook responses sent by the Transcoder ONE system',
});
export type TranscoderOneWebhookResponse = z.infer<typeof TranscoderOneWebhookResponseSchema>;
