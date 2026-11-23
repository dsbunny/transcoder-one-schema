// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { transcoderOneRegistry } from './registry.js';
import { AllMetadataSchema } from "@dsbunny/metadata-schema";
import { S3URISchema } from "@dsbunny/net-schema";
import { S3TargetSchema } from "./s3target.schema.js";
export const TranscoderOneMetadataOutputSchema = z.object({
    '@type': z.literal('TranscoderOneMetadataOutput')
        .describe('Type of the Transcoder ONE metadata output'),
    metadata: S3TargetSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscoderOneMetadataOutputSchema',
    description: 'Output of the job'
});
export const OnePosterOutputSchema = z.object({
    '@type': z.literal('OnePosterOutput')
        .describe('Type of the One Poster output'),
    quality: z.enum(['medium', 'high', 'sample']),
    poster: S3TargetSchema,
}).register(transcoderOneRegistry, {
    id: 'OnePosterOutputSchema',
    description: 'Poster output schema'
});
export const TranscoderOnePosterOutputSchema = z.object({
    '@type': z.literal('TranscoderOnePosterOutput')
        .describe('Type of the Transcoder ONE poster output'),
    poster: z.array(OnePosterOutputSchema)
        .describe('Array of poster URLs'),
}).register(transcoderOneRegistry, {
    id: 'TranscoderOnePosterOutputSchema',
    description: 'Output of the job'
});
export const TranscoderOneAnimatedPosterOutputSchema = z.object({
    '@type': z.literal('TranscoderOneAnimatedPosterOutput')
        .describe('Type of the Transcoder ONE animated poster output'),
    animated_poster: S3TargetSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscoderOneAnimatedPosterOutputSchema',
    description: 'Output of the job'
});
export const OnePosterOutputWithIndexSchema = OnePosterOutputSchema.extend({
    '@type': z.literal('OnePosterOutputWithIndex')
        .describe('Type of the One Poster output with index'),
    index: z.number().int().min(1).max(3)
        .describe('Index of the poster in the series'),
}).register(transcoderOneRegistry, {
    id: 'OnePosterOutputWithIndexSchema',
    description: 'Poster output schema with index'
});
export const TranscoderOnePosterSeriesOutputSchema = z.object({
    '@type': z.literal('TranscoderOnePosterSeriesOutput')
        .describe('Type of the Transcoder ONE poster series output'),
    poster_series: z.array(OnePosterOutputWithIndexSchema)
        .describe('Array of poster URLs'),
}).register(transcoderOneRegistry, {
    id: 'TranscoderOnePosterSeriesOutputSchema',
    description: 'Output of the job'
});
// REF: https://docs.aws.amazon.com/AWSJavaScriptSDK/v3/latest/Package/-aws-sdk-s3-presigned-post/
export const TranscoderOneTileSeriesOutputSchema = z.object({
    '@type': z.literal('TranscoderOneTileSeriesOutput')
        .describe('Type of the Transcoder ONE tile series output'),
    tile_series: z.object({
        fields: z.record(z.string(), z.string())
            .describe('S3 policy fields of the tile series'),
        quality: z.enum(['low']),
        content_type: z.string().min(5).max(255)
            .describe('Content type of the tile series'),
        s3_base_uri: S3URISchema.min(2).max(2048)
            .describe('S3 base URI of the tile series'),
        s3_bucket_url: z.url().min(2).max(2048)
            .describe('S3 bucket URL of the tile series'),
        s3_filename_format: z.string().min(2).max(255)
            .describe('Name format of the tile series'),
        metadata_s3_filename: z.string().min(2).max(255)
            .describe('Name of the metadata file'),
        metadata_s3_uri: S3URISchema.min(2).max(2048)
            .describe('S3 URI of the metadata file'),
        metadata_url: z.url().min(20).max(2048)
            .describe('URL of the metadata file'),
        metadata_content_type: z.string().min(5).max(255)
            .describe('Content type of the metadata file'),
    }),
}).register(transcoderOneRegistry, {
    id: 'TranscoderOneTileSeriesOutputSchema',
    description: 'Output of the job'
});
export const TranscoderOnePrevueOutputSchema = z.object({
    '@type': z.literal('TranscoderOnePrevueOutput')
        .describe('Type of the Transcoder ONE prevue output'),
    prevue: S3TargetSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscoderOnePrevueOutputSchema',
    description: 'Output of the job'
});
export const TranscoderOneOutputSchema = z.object({
    '@type': z.literal('TranscoderOneOutput')
        .describe('Type of the Transcoder ONE output'),
    metadata: AllMetadataSchema,
}).register(transcoderOneRegistry, {
    id: 'TranscoderOneOutputSchema',
    description: 'Output of the job'
});
//# sourceMappingURL=output.schema.js.map