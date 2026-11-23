import * as z from "zod";
export declare const TranscoderOneMetadataOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOneMetadataOutput">;
    metadata: z.ZodObject<{
        '@type': z.ZodLiteral<"S3Target">;
        content_type: z.ZodString;
        s3_uri: z.ZodString;
        s3_filename: z.ZodString;
        read_url: z.ZodURL;
        write_url: z.ZodURL;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TranscoderOneMetadataOutput = z.infer<typeof TranscoderOneMetadataOutputSchema>;
export declare const OnePosterOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"OnePosterOutput">;
    quality: z.ZodEnum<{
        medium: "medium";
        high: "high";
        sample: "sample";
    }>;
    poster: z.ZodObject<{
        '@type': z.ZodLiteral<"S3Target">;
        content_type: z.ZodString;
        s3_uri: z.ZodString;
        s3_filename: z.ZodString;
        read_url: z.ZodURL;
        write_url: z.ZodURL;
    }, z.core.$strip>;
}, z.core.$strip>;
export type OnePosterOutput = z.infer<typeof OnePosterOutputSchema>;
export declare const TranscoderOnePosterOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOnePosterOutput">;
    poster: z.ZodArray<z.ZodObject<{
        '@type': z.ZodLiteral<"OnePosterOutput">;
        quality: z.ZodEnum<{
            medium: "medium";
            high: "high";
            sample: "sample";
        }>;
        poster: z.ZodObject<{
            '@type': z.ZodLiteral<"S3Target">;
            content_type: z.ZodString;
            s3_uri: z.ZodString;
            s3_filename: z.ZodString;
            read_url: z.ZodURL;
            write_url: z.ZodURL;
        }, z.core.$strip>;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TranscoderOnePosterOutput = z.infer<typeof TranscoderOnePosterOutputSchema>;
export declare const TranscoderOneAnimatedPosterOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOneAnimatedPosterOutput">;
    animated_poster: z.ZodObject<{
        '@type': z.ZodLiteral<"S3Target">;
        content_type: z.ZodString;
        s3_uri: z.ZodString;
        s3_filename: z.ZodString;
        read_url: z.ZodURL;
        write_url: z.ZodURL;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TranscoderOneAnimatedPosterOutput = z.infer<typeof TranscoderOneAnimatedPosterOutputSchema>;
export declare const OnePosterOutputWithIndexSchema: z.ZodObject<{
    quality: z.ZodEnum<{
        medium: "medium";
        high: "high";
        sample: "sample";
    }>;
    poster: z.ZodObject<{
        '@type': z.ZodLiteral<"S3Target">;
        content_type: z.ZodString;
        s3_uri: z.ZodString;
        s3_filename: z.ZodString;
        read_url: z.ZodURL;
        write_url: z.ZodURL;
    }, z.core.$strip>;
    '@type': z.ZodLiteral<"OnePosterOutputWithIndex">;
    index: z.ZodNumber;
}, z.core.$strip>;
export type OnePosterOutputWithIndex = z.infer<typeof OnePosterOutputWithIndexSchema>;
export declare const TranscoderOnePosterSeriesOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOnePosterSeriesOutput">;
    poster_series: z.ZodArray<z.ZodObject<{
        quality: z.ZodEnum<{
            medium: "medium";
            high: "high";
            sample: "sample";
        }>;
        poster: z.ZodObject<{
            '@type': z.ZodLiteral<"S3Target">;
            content_type: z.ZodString;
            s3_uri: z.ZodString;
            s3_filename: z.ZodString;
            read_url: z.ZodURL;
            write_url: z.ZodURL;
        }, z.core.$strip>;
        '@type': z.ZodLiteral<"OnePosterOutputWithIndex">;
        index: z.ZodNumber;
    }, z.core.$strip>>;
}, z.core.$strip>;
export type TranscoderOnePosterSeriesOutput = z.infer<typeof TranscoderOnePosterSeriesOutputSchema>;
export declare const TranscoderOneTileSeriesOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOneTileSeriesOutput">;
    tile_series: z.ZodObject<{
        fields: z.ZodRecord<z.ZodString, z.ZodString>;
        quality: z.ZodEnum<{
            low: "low";
        }>;
        content_type: z.ZodString;
        s3_base_uri: z.ZodString;
        s3_bucket_url: z.ZodURL;
        s3_filename_format: z.ZodString;
        metadata_s3_filename: z.ZodString;
        metadata_s3_uri: z.ZodString;
        metadata_url: z.ZodURL;
        metadata_content_type: z.ZodString;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TranscoderOneTileSeriesOutput = z.infer<typeof TranscoderOneTileSeriesOutputSchema>;
export declare const TranscoderOnePrevueOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOnePrevueOutput">;
    prevue: z.ZodObject<{
        '@type': z.ZodLiteral<"S3Target">;
        content_type: z.ZodString;
        s3_uri: z.ZodString;
        s3_filename: z.ZodString;
        read_url: z.ZodURL;
        write_url: z.ZodURL;
    }, z.core.$strip>;
}, z.core.$strip>;
export type TranscoderOnePrevueOutput = z.infer<typeof TranscoderOnePrevueOutputSchema>;
export declare const TranscoderOneOutputSchema: z.ZodObject<{
    '@type': z.ZodLiteral<"TranscoderOneOutput">;
    metadata: z.ZodUnion<readonly [z.ZodObject<{
        file: z.ZodObject<{
            "@type": z.ZodLiteral<"FileStatAndChecksums">;
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        '@type': z.ZodLiteral<"MetadataMetadata">;
        timings: z.ZodObject<{
            "@type": z.ZodLiteral<"MetadataTimings">;
            metadata_http_duration: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodDiscriminatedUnion<[z.ZodObject<{
        '@type': z.ZodLiteral<"PosterMetadata">;
        poster: z.ZodArray<z.ZodObject<{
            file: z.ZodObject<{
                "@type": z.ZodLiteral<"FileStatAndChecksums">;
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, z.core.$strip>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            "@type": z.ZodLiteral<"PosterMetadataEntry">;
            quality: z.ZodEnum<{
                medium: "medium";
                high: "high";
                sample: "sample";
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            blurhash: z.ZodOptional<z.ZodString>;
            timings: z.ZodObject<{
                "@type": z.ZodLiteral<"PosterTimings">;
                poster_canvas_duration: z.ZodOptional<z.ZodNumber>;
                poster_ffmpeg_duration: z.ZodOptional<z.ZodNumber>;
                poster_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                poster_sharp_duration: z.ZodOptional<z.ZodNumber>;
                poster_ck_duration: z.ZodNumber;
                poster_http_duration: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        '@type': z.ZodLiteral<"AnimatedPosterMetadata">;
        poster: z.ZodObject<{
            file: z.ZodObject<{
                "@type": z.ZodLiteral<"FileStatAndChecksums">;
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, z.core.$strip>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            "@type": z.ZodLiteral<"AnimatedPosterMetadataEntry">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                "@type": z.ZodLiteral<"AnimatedPosterTimings">;
                animated_poster_ffmpeg_duration: z.ZodNumber;
                animated_poster_ck_duration: z.ZodNumber;
                animated_poster_http_duration: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        '@type': z.ZodLiteral<"PosterSeriesMetadata">;
        series: z.ZodArray<z.ZodObject<{
            file: z.ZodObject<{
                "@type": z.ZodLiteral<"FileStatAndChecksums">;
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, z.core.$strip>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            "@type": z.ZodLiteral<"PosterSeriesMetadataEntry">;
            index: z.ZodNumber;
            quality: z.ZodEnum<{
                medium: "medium";
                high: "high";
                sample: "sample";
            }>;
            width: z.ZodNumber;
            height: z.ZodNumber;
            blurhash: z.ZodOptional<z.ZodString>;
            timings: z.ZodObject<{
                "@type": z.ZodLiteral<"PosterSeriesTimings">;
                poster_series_ffmpeg_duration: z.ZodNumber;
                poster_series_avifenc_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_sharp_duration: z.ZodOptional<z.ZodNumber>;
                poster_series_ck_duration: z.ZodNumber;
                poster_series_http_duration: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>>;
    }, z.core.$strip>, z.ZodObject<{
        file: z.ZodObject<{
            "@type": z.ZodLiteral<"FileStatAndChecksums">;
            s3_filename: z.ZodString;
            content_type: z.ZodString;
            size: z.ZodNumber;
            mtime: z.ZodString;
            md5: z.ZodString;
            sha256: z.ZodString;
            s3_uri: z.ZodString;
            s3_version_id: z.ZodString;
            s3_etag: z.ZodString;
            s3_parts: z.ZodArray<z.ZodNumber>;
        }, z.core.$strip>;
        tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
        '@type': z.ZodLiteral<"TileSeriesMetadataMetadata">;
        timings: z.ZodObject<{
            "@type": z.ZodLiteral<"MetadataTimings">;
            metadata_http_duration: z.ZodNumber;
        }, z.core.$strip>;
    }, z.core.$strip>, z.ZodObject<{
        '@type': z.ZodLiteral<"PrevueMetadata">;
        prevue: z.ZodObject<{
            file: z.ZodObject<{
                "@type": z.ZodLiteral<"FileStatAndChecksums">;
                s3_filename: z.ZodString;
                content_type: z.ZodString;
                size: z.ZodNumber;
                mtime: z.ZodString;
                md5: z.ZodString;
                sha256: z.ZodString;
                s3_uri: z.ZodString;
                s3_version_id: z.ZodString;
                s3_etag: z.ZodString;
                s3_parts: z.ZodArray<z.ZodNumber>;
            }, z.core.$strip>;
            tags: z.ZodOptional<z.ZodArray<z.ZodString>>;
            "@type": z.ZodLiteral<"PrevueMetadataEntry">;
            width: z.ZodNumber;
            height: z.ZodNumber;
            timings: z.ZodObject<{
                "@type": z.ZodLiteral<"PrevueTimings">;
                prevue_ffmpeg_duration: z.ZodNumber;
                prevue_ck_duration: z.ZodNumber;
                prevue_http_duration: z.ZodNumber;
            }, z.core.$strip>;
        }, z.core.$strip>;
    }, z.core.$strip>], "@type">]>;
}, z.core.$strip>;
export type TranscoderOneOutput = z.infer<typeof TranscoderOneOutputSchema>;
//# sourceMappingURL=output.schema.d.ts.map