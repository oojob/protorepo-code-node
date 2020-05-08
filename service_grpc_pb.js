// GENERATED CODE -- DO NOT EDIT!

// Original file comments:
//
// Created on Sun Apr 28 2020
//
// Code entity related messages.
// This file is resposible for all operation related to code entity.
//
// @authors nirajgeorgian@oojob.io (Niraj Kishore)
//
// Copyright (c) 2020 - oojob
'use strict';
var grpc = require('grpc');
var services_code_service_pb = require('./service_pb.js');
var oojob_protobuf_health_pb = require('@oojob/oojob-protobuf/health_pb.js');

function serialize_code_CodeRequest(arg) {
  if (!(arg instanceof services_code_service_pb.CodeRequest)) {
    throw new Error('Expected argument of type code.CodeRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_code_CodeRequest(buffer_arg) {
  return services_code_service_pb.CodeRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_code_CodeResponse(arg) {
  if (!(arg instanceof services_code_service_pb.CodeResponse)) {
    throw new Error('Expected argument of type code.CodeResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_code_CodeResponse(buffer_arg) {
  return services_code_service_pb.CodeResponse.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_oojob_protobuf_HealthCheckRequest(arg) {
  if (!(arg instanceof oojob_protobuf_health_pb.HealthCheckRequest)) {
    throw new Error('Expected argument of type oojob.protobuf.HealthCheckRequest');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_oojob_protobuf_HealthCheckRequest(buffer_arg) {
  return oojob_protobuf_health_pb.HealthCheckRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_oojob_protobuf_HealthCheckResponse(arg) {
  if (!(arg instanceof oojob_protobuf_health_pb.HealthCheckResponse)) {
    throw new Error('Expected argument of type oojob.protobuf.HealthCheckResponse');
  }
  return new Buffer(arg.serializeBinary());
}

function deserialize_oojob_protobuf_HealthCheckResponse(buffer_arg) {
  return oojob_protobuf_health_pb.HealthCheckResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var CodeServiceService = exports.CodeServiceService = {
  submitCode: {
    path: '/code.CodeService/SubmitCode',
    requestStream: false,
    responseStream: false,
    requestType: services_code_service_pb.CodeRequest,
    responseType: services_code_service_pb.CodeResponse,
    requestSerialize: serialize_code_CodeRequest,
    requestDeserialize: deserialize_code_CodeRequest,
    responseSerialize: serialize_code_CodeResponse,
    responseDeserialize: deserialize_code_CodeResponse,
  },
  check: {
    path: '/code.CodeService/Check',
    requestStream: false,
    responseStream: false,
    requestType: oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_oojob_protobuf_HealthCheckResponse,
  },
  watch: {
    path: '/code.CodeService/Watch',
    requestStream: false,
    responseStream: true,
    requestType: oojob_protobuf_health_pb.HealthCheckRequest,
    responseType: oojob_protobuf_health_pb.HealthCheckResponse,
    requestSerialize: serialize_oojob_protobuf_HealthCheckRequest,
    requestDeserialize: deserialize_oojob_protobuf_HealthCheckRequest,
    responseSerialize: serialize_oojob_protobuf_HealthCheckResponse,
    responseDeserialize: deserialize_oojob_protobuf_HealthCheckResponse,
  },
};

exports.CodeServiceClient = grpc.makeGenericClientConstructor(CodeServiceService);
