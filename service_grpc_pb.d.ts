// GENERATED CODE -- DO NOT EDIT!

// package: code
// file: services/code/service.proto

import * as services_code_service_pb from "./service_pb";
import * as oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";
import * as grpc from "grpc";

interface ICodeServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
  submitCode: grpc.MethodDefinition<services_code_service_pb.CodeRequest, services_code_service_pb.CodeResponse>;
  check: grpc.MethodDefinition<oojob_protobuf_health_pb.HealthCheckRequest, oojob_protobuf_health_pb.HealthCheckResponse>;
  watch: grpc.MethodDefinition<oojob_protobuf_health_pb.HealthCheckRequest, oojob_protobuf_health_pb.HealthCheckResponse>;
}

export const CodeServiceService: ICodeServiceService;

export class CodeServiceClient extends grpc.Client {
  constructor(address: string, credentials: grpc.ChannelCredentials, options?: object);
  submitCode(argument: services_code_service_pb.CodeRequest, callback: grpc.requestCallback<services_code_service_pb.CodeResponse>): grpc.ClientUnaryCall;
  submitCode(argument: services_code_service_pb.CodeRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<services_code_service_pb.CodeResponse>): grpc.ClientUnaryCall;
  submitCode(argument: services_code_service_pb.CodeRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<services_code_service_pb.CodeResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions: grpc.Metadata | grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  check(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadata: grpc.Metadata | null, options: grpc.CallOptions | null, callback: grpc.requestCallback<oojob_protobuf_health_pb.HealthCheckResponse>): grpc.ClientUnaryCall;
  watch(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadataOrOptions?: grpc.Metadata | grpc.CallOptions | null): grpc.ClientReadableStream<oojob_protobuf_health_pb.HealthCheckResponse>;
  watch(argument: oojob_protobuf_health_pb.HealthCheckRequest, metadata?: grpc.Metadata | null, options?: grpc.CallOptions | null): grpc.ClientReadableStream<oojob_protobuf_health_pb.HealthCheckResponse>;
}
