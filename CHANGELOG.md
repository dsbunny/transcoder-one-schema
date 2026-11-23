# Changelog
## v7.0.17
- Add `@type` fields to all schemas to enable discovery.
- Split `S3Target.url` into `read_url` and `write_url` to enabled retrieval of `ETag` and `x-amz-version-id` of existing objects to prevent overwriting with the same content.

## v6.1.16
- Add `id` _ZOD_ metadata for schemas.
- Register _ZOD_ schemas with `transcoderOneRegistry` to avoid overlap with other transcoding services.
- Migrate to `@dsbunny/net-schema` for common URI schema.

## v6.0.15
- Split schema definitions to separate Schema suffix to resolve vsCode and tooling confusion.

## v5.0.14
- Formalize `client_request_token` in schema for idempotency.

## v5.0.13
- Bump to `zod@4.3.6`.

## v5.0.12
- Add new composite `TranscoderOneRequest` and `TranscoderOneResponse` for public API.
- Migrate to `@dsbunny/error-schema` and `@dsbunny/webhook-schema`.
- New internal schema for WebHook tasks.
- Break apart schemas into smaller modules.

## v4.2.11
- Bump to `zod@4.1.11`.
- Move Zod to `peerDependencies` so users can bring their own Zod.

## v4.1.10
- Bump to `zod@next` with `zod/v4` imports.

## v4.1.9
- Add support for _textures_.

## v4.0.8
- Bump to `zod@4.0.0-beta`.

## v3.3.7
- Support `TileSeriesMetadata` as a separate storage object.

## v3.2.6
- Optimize `TranscoderOneMetadata` by making `metadata` field a _discriminated-union_.

## v3.1.5
- Add types for check routines, enabling rejected uploads on metadata patterns.

## v3.0.4
- Split apart intra-service protocol typings into new `internal.ts` module.
- Consolidated job ID test and validation APIs into schema.
- Add `expires` to _input_ ZOD objects for when the `url` parameter becomes invalid.
- Replace `s3_uri` with `s3_filename` as bucket and path not required.
- Add `content_type` to _input_ ZOD objects to drive target output.
- Extend `TranscoderOneQueryOutput` to a discriminated union to improve parsing error notices.

## v2.0.3
- Add `SignedPreviewEntry` for video preview.
- Rename `previews` for images to `posters`.

## v1.2.2
- Extend _file_ metadata to include preview image.

## v1.1.1
- Merge in `checksum-one-schema` for integration of `checksum-one-worker` into Transcoder ONE.

## v1.0.0
- Initial release.
