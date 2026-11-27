// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
// `@type` field is optional for requests with no other required fields.

import * as z from "zod";
import { transcoderOneRegistry } from './registry.js';
import { ErrorResponseSchema } from "@dsbunny/error-schema";
import {
	AllMetadataSchema,
	RejectedMetadataSchema,
} from '@dsbunny/metadata-schema';
import { TranscodeProgressSchema } from "./progress.schema.js";
import {
	TranscodeFileRequestSchema,
	TranscodeImageRequestSchema,
	TranscodeTextureRequestSchema,
	TranscodeVideoRequestSchema,
} from "./request.schema.js";
import { TranscodeResponseSchema } from "./response.schema.js";

export const TranscoderOnePingResponseSchema = z.object({
	ping: z.literal('pong'),
	timestamp: z.iso.datetime(),
}).register(transcoderOneRegistry, {
	id: 'TranscoderOnePingResponseSchema',
	description: 'Transcoder One ping response schema',
});
export type TranscoderOnePingResponse = z.infer<typeof TranscoderOnePingResponseSchema>;

// #region Transcoder ONE
export const GetJobStatusRequestSchema = z.object({
	'@type': z.literal('GetJobStatusRequest')
		.describe('Type of the Get Transcoder ONE Job Status request'),
}).optional().register(transcoderOneRegistry, {
	id: 'GetJobStatusRequestSchema',
	description: 'Get Transcoder ONE Job Status request schema',
});
export type GetJobStatusRequest = z.infer<typeof GetJobStatusRequestSchema>;

export const GetJobStatusErrorResponseSchema = z.object({
	'@type': z.literal('GetJobStatusErrorResponse')
		.describe('Type of the Get Transcoder ONE Job Status error response'),
	job_id: z.uuidv7(),
	status: z.literal('error'),
	error: z.string()
		.describe('Error message describing why the job status could not be retrieved'),
}).register(transcoderOneRegistry, {
	id: 'GetJobStatusErrorResponseSchema',
	description: 'Get Transcoder ONE Job Status error response schema',
});
export type GetJobStatusErrorResponse = z.infer<typeof GetJobStatusErrorResponseSchema>;

export const GetJobStatusFailedResponseSchema = z.object({
	'@type': z.literal('GetJobStatusFailedResponse')
		.describe('Type of the Get Transcoder ONE Job Status failed response'),
	job_id: z.uuidv7(),
	status: z.literal('failed'),
	error_code: z.string()
		.describe('Error code representing the type of failure.'),
	error_message: z.string()
		.describe('Error message describing the failure.'),
}).register(transcoderOneRegistry, {
	id: 'GetJobStatusFailedResponseSchema',
	description: 'Get Transcoder ONE Job Status failed response schema',
});
export type GetJobStatusFailedResponse = z.infer<typeof GetJobStatusFailedResponseSchema>;

export const GetJobStatusSucceededResponseSchema = z.object({
	'@type': z.literal('GetJobStatusSucceededResponse')
		.describe('Type of the Get Transcoder ONE Job Status succeeded response'),
	job_id: z.uuidv7(),
	status: z.literal('succeeded'),
	progress: z.literal(100),
	metadata: AllMetadataSchema,
}).register(transcoderOneRegistry, {
	id: 'GetJobStatusSucceededResponseSchema',
	description: 'Get Transcoder ONE Job Status succeeded response schema',
});
export type GetJobStatusSucceededResponse = z.infer<typeof GetJobStatusSucceededResponseSchema>;

export const GetJobStatusRejectedResponseSchema = z.object({
	'@type': z.literal('GetJobStatusRejectedResponse')
		.describe('Type of the Get Transcoder ONE Job Status rejected response'),
	job_id: z.uuidv7(),
	status: z.literal('rejected'),
	reason: z.string()
		.describe('Reason for rejecting the job.'),
	issues: z.array(z.any()).optional()
		.describe('List of validation issues associated with the rejection'),
	metadata: RejectedMetadataSchema.optional(),
}).register(transcoderOneRegistry, {
	id: 'GetJobStatusRejectedResponseSchema',
	description: 'Get Job Status rejected response schema',
});
export type GetJobStatusRejectedResponse = z.infer<typeof GetJobStatusRejectedResponseSchema>;

export const GetJobStatusCreatedResponseSchema = z.object({
	'@type': z.literal('GetJobStatusCreatedResponse')
		.describe('Type of the Get Transcoder ONE Job Status created response'),
	job_id: z.uuidv7(),
	status: z.literal("created"),
	progress: TranscodeProgressSchema.optional()
		.describe('The progress of the job, if available.'),
}).register(transcoderOneRegistry, {
	id: 'GetJobStatusCreatedResponseSchema',
	description: 'Get Job Status created response schema',
});
export type GetJobStatusCreatedResponse = z.infer<typeof GetJobStatusCreatedResponseSchema>;

export const GetJobStatusResponseSchema = z.union([
	GetJobStatusErrorResponseSchema,
	GetJobStatusFailedResponseSchema,
	GetJobStatusSucceededResponseSchema,
	GetJobStatusRejectedResponseSchema,
	GetJobStatusCreatedResponseSchema,
]).register(transcoderOneRegistry, {
	id: 'GetJobStatusResponseSchema',
	description: 'Get Job Status response schema',
});
export type GetJobStatusResponse = z.infer<typeof GetJobStatusResponseSchema>;

export const CreateTranscodeFileBodySchema = z.object({
	'@type': z.literal('CreateTranscodeFileRequest')
		.describe('Type of the Create Transcoder ONE file request'),
	file_request: TranscodeFileRequestSchema
		.describe('The file request details.'),
}).register(transcoderOneRegistry, {
	id: 'CreateTranscodeFileRequestSchema',
	description: 'Create Transcoder ONE file job request schema'
});
export type CreateTranscodeFileBody = z.infer<typeof CreateTranscodeFileBodySchema>;
/** @deprecated Use CreateTranscodeFileBodySchema. */
export const CreateTranscodeFileRequestSchema = CreateTranscodeFileBodySchema;
/** @deprecated Use CreateTranscodeFileBody. */
export type CreateTranscodeFileRequest = CreateTranscodeFileBody;
export const CreateTranscodeImageBodySchema = z.object({
	'@type': z.literal('CreateTranscodeImageRequest')
		.describe('Type of the Create Transcoder ONE image request'),
	image_request: TranscodeImageRequestSchema
		.describe('The image request details.'),
}).register(transcoderOneRegistry, {
	id: 'CreateTranscodeImageRequestSchema',
	description: 'Create Transcoder ONE image job request schema'
});
export type CreateTranscodeImageBody = z.infer<typeof CreateTranscodeImageBodySchema>;
/** @deprecated Use CreateTranscodeImageBodySchema. */
export const CreateTranscodeImageRequestSchema = CreateTranscodeImageBodySchema;
/** @deprecated Use CreateTranscodeImageBody. */
export type CreateTranscodeImageRequest = CreateTranscodeImageBody;
export const CreateTranscodeTextureBodySchema = z.object({
	'@type': z.literal('CreateTranscodeTextureRequest')
		.describe('Type of the Create Transcoder ONE texture request'),
	texture_request: TranscodeTextureRequestSchema
		.describe('The texture request details.'),
}).register(transcoderOneRegistry, {
	id: 'CreateTranscodeTextureRequestSchema',
	description: 'Create Transcoder ONE texture job request schema'
});
export type CreateTranscodeTextureBody = z.infer<typeof CreateTranscodeTextureBodySchema>;
/** @deprecated Use CreateTranscodeTextureBodySchema. */
export const CreateTranscodeTextureRequestSchema = CreateTranscodeTextureBodySchema;
/** @deprecated Use CreateTranscodeTextureBody. */
export type CreateTranscodeTextureRequest = CreateTranscodeTextureBody;
export const CreateTranscodeVideoBodySchema = z.object({
	'@type': z.literal('CreateTranscodeVideoRequest')
		.describe('Type of the Create Transcoder ONE video request'),
	video_request: TranscodeVideoRequestSchema
		.describe('The video request details.'),
}).register(transcoderOneRegistry, {
	id: 'CreateTranscodeVideoRequestSchema',
	description: 'Create Transcoder ONE video job request schema'
});
export type CreateTranscodeVideoBody = z.infer<typeof CreateTranscodeVideoBodySchema>;
/** @deprecated Use CreateTranscodeVideoBodySchema. */
export const CreateTranscodeVideoRequestSchema = CreateTranscodeVideoBodySchema;
/** @deprecated Use CreateTranscodeVideoBody. */
export type CreateTranscodeVideoRequest = CreateTranscodeVideoBody;

export const CreateTranscodeResponseSchema = TranscodeResponseSchema.extend({
	'@type': z.literal('CreateTranscodeResponse')
		.describe('Type of the Create Transcoder ONE response'),
}).register(transcoderOneRegistry, {
	id: 'CreateTranscodeResponseSchema',
	description: 'Create Transcoder ONE job response schema'
});
export type CreateTranscodeResponse = z.infer<typeof CreateTranscodeResponseSchema>;
// #endregion

// #region API
export const TranscoderOneRequestSchema = z.union([
	GetJobStatusRequestSchema,
	CreateTranscodeFileBodySchema,
	CreateTranscodeImageBodySchema,
	CreateTranscodeTextureBodySchema,
	CreateTranscodeVideoBodySchema,
]).register(transcoderOneRegistry, {
	id: 'TranscoderOneRequestSchema',
	description: 'Transcoder ONE job request schema'
});
export type TranscoderOneRequest = z.infer<typeof TranscoderOneRequestSchema>;

export const TranscoderOneResponseSchema = z.union([
	z.array(GetJobStatusResponseSchema),
	CreateTranscodeResponseSchema,
	ErrorResponseSchema,
]).register(transcoderOneRegistry, {
	id: 'TranscoderOneResponseSchema',
	description: 'Transcoder ONE job response schema'
});
export type TranscoderOneResponse = z.infer<typeof TranscoderOneResponseSchema>;
// #endregion

export const GetJobStatusQuerySchema = z.object({ id: z.array(z.string()).optional() }).register(transcoderOneRegistry, {
	id: 'GetJobStatusQuerySchema',
	description: 'GetJobStatusQuery schema',
});
export type GetJobStatusQuery = z.infer<typeof GetJobStatusQuerySchema>;
