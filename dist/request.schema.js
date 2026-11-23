// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { transcoderOneRegistry } from './registry.js';
import { TranscoderOneInputSchema } from "./input.schema.js";
import { TranscoderOneAnimatedPosterOutputSchema, TranscoderOneMetadataOutputSchema, TranscoderOnePosterOutputSchema, TranscoderOnePosterSeriesOutputSchema, TranscoderOnePrevueOutputSchema, TranscoderOneTileSeriesOutputSchema, } from "./output.schema.js";
export const TranscodeRequestBaseSchema = z.object({
    '@type': z.literal('TranscodeRequestBase')
        .describe('Type of the Transcoder ONE job request base'),
    reference_id: z.string().max(255)
        .describe('Reference ID of the job'),
    input: TranscoderOneInputSchema,
    client_request_token: z.string().max(64).optional()
        .describe('Client request token for idempotency'),
}).register(transcoderOneRegistry, {
    id: 'TranscodeRequestBaseSchema',
    description: 'Base schema for Transcoder ONE job requests',
});
export const TranscodeMetadataRequestSchema = TranscodeRequestBaseSchema.extend({
    '@type': z.literal('TranscodeMetadataRequest')
        .describe('Type of the Transcoder ONE metadata request'),
    output: TranscoderOneMetadataOutputSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscodeMetadataRequestSchema',
    description: 'Transcoder ONE metadata job',
});
export const TranscodePosterRequestSchema = TranscodeRequestBaseSchema.extend({
    '@type': z.literal('TranscodePosterRequest')
        .describe('Type of the Transcoder ONE poster request'),
    output: TranscoderOnePosterOutputSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscodePosterRequestSchema',
    description: 'Transcoder ONE poster job',
});
export const TranscodeAnimatedPosterRequestSchema = TranscodeRequestBaseSchema.extend({
    '@type': z.literal('TranscodeAnimatedPosterRequest')
        .describe('Type of the Transcoder ONE animated poster request'),
    output: TranscoderOneAnimatedPosterOutputSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscodeAnimatedPosterRequestSchema',
    description: 'Transcoder ONE animated poster job',
});
export const TranscodePosterSeriesRequestSchema = TranscodeRequestBaseSchema.extend({
    '@type': z.literal('TranscodePosterSeriesRequest')
        .describe('Type of the Transcoder ONE poster series request'),
    output: TranscoderOnePosterSeriesOutputSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscodePosterSeriesRequestSchema',
    description: 'Transcoder ONE poster series job',
});
export const TranscodeTileSeriesRequestSchema = TranscodeRequestBaseSchema.extend({
    '@type': z.literal('TranscodeTileSeriesRequest')
        .describe('Type of the Transcoder ONE tile series request'),
    output: TranscoderOneTileSeriesOutputSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscodeTileSeriesRequestSchema',
    description: 'Transcoder ONE tile series job',
});
export const TranscodePrevueRequestSchema = TranscodeRequestBaseSchema.extend({
    '@type': z.literal('TranscodePrevueRequest')
        .describe('Type of the Transcoder ONE prevue request'),
    output: TranscoderOnePrevueOutputSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscodePrevueRequestSchema',
    description: 'Transcoder ONE prevue job',
});
export const TranscodeFileRequestSchema = z.discriminatedUnion("@type", [
    TranscodeMetadataRequestSchema,
    TranscodePosterRequestSchema,
]).register(transcoderOneRegistry, {
    id: 'TranscodeFileRequestSchema',
    description: 'Transcoder ONE file job',
});
export const TranscodeImageRequestSchema = z.discriminatedUnion("@type", [
    TranscodeMetadataRequestSchema,
    TranscodePosterRequestSchema,
]).register(transcoderOneRegistry, {
    id: 'TranscodeImageRequestSchema',
    description: 'Transcoder ONE image job',
});
export const TranscodeTextureRequestSchema = z.discriminatedUnion("@type", [
    TranscodeMetadataRequestSchema,
    TranscodePosterRequestSchema,
]).register(transcoderOneRegistry, {
    id: 'TranscodeTextureRequestSchema',
    description: 'Transcoder ONE texture job',
});
export const TranscodeVideoRequestSchema = z.discriminatedUnion("@type", [
    TranscodeMetadataRequestSchema,
    TranscodePosterRequestSchema,
    TranscodeAnimatedPosterRequestSchema,
    TranscodePosterSeriesRequestSchema,
    TranscodeTileSeriesRequestSchema,
    TranscodePrevueRequestSchema,
]).register(transcoderOneRegistry, {
    id: 'TranscodeVideoRequestSchema',
    description: 'Transcoder ONE video job',
});
export const TranscodeRequestSchema = z.discriminatedUnion("@type", [
    TranscodeMetadataRequestSchema,
    TranscodePosterRequestSchema,
    TranscodeAnimatedPosterRequestSchema,
    TranscodePosterSeriesRequestSchema,
    TranscodeTileSeriesRequestSchema,
    TranscodePrevueRequestSchema,
]).register(transcoderOneRegistry, {
    id: 'TranscodeRequestSchema',
    description: 'Transcoder ONE job request schema',
});
//# sourceMappingURL=request.schema.js.map