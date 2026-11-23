// vim: tabstop=8 softtabstop=0 noexpandtab shiftwidth=8 nosmarttab
import * as z from "zod";
import { transcoderOneRegistry } from './registry.js';
export const TranscodeResponseSchema = z.object({
    '@type': z.literal('TranscodeResponse')
        .describe('Type of the Transcoder ONE job response'),
    job_id: z.uuidv7()
        .describe('The job ID of the transcoding job, can be used to query the status of the job.'),
    reference_id: z.string().max(255)
        .describe('The reference ID of the transcoding job'),
    timestamp: z.iso.datetime({ offset: true })
        .describe('The timestamp of the transcoding job'),
}).register(transcoderOneRegistry, {
    id: 'TranscodeResponseSchema',
    description: 'Transcoder ONE job response',
});
//# sourceMappingURL=response.schema.js.map