// package: code
// file: services/code/service.proto

import * as jspb from "google-protobuf";
import * as github_com_oojob_protobuf_health_pb from "@oojob/oojob-protobuf/health_pb";

export class CodeRequest extends jspb.Message {
  getCode(): string;
  setCode(value: string): void;

  getContestSlug(): string;
  setContestSlug(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getPlaylistSlug(): string;
  setPlaylistSlug(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeRequest.AsObject;
  static toObject(includeInstance: boolean, msg: CodeRequest): CodeRequest.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeRequest, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeRequest;
  static deserializeBinaryFromReader(message: CodeRequest, reader: jspb.BinaryReader): CodeRequest;
}

export namespace CodeRequest {
  export type AsObject = {
    code: string,
    contestSlug: string,
    language: string,
    playlistSlug: string,
  }
}

export class CodeResponse extends jspb.Message {
  getChallengeId(): string;
  setChallengeId(value: string): void;

  getChallengeSlug(): string;
  setChallengeSlug(value: string): void;

  getCode(): string;
  setCode(value: string): void;

  getCodecheckerHash(): string;
  setCodecheckerHash(value: string): void;

  getCompany(): string;
  setCompany(value: string): void;

  getCompileMessage(): string;
  setCompileMessage(value: string): void;

  getCompileStatus(): boolean;
  setCompileStatus(value: boolean): void;

  getContestId(): string;
  setContestId(value: string): void;

  getKind(): string;
  setKind(value: string): void;

  getLanguage(): string;
  setLanguage(value: string): void;

  getLanguageStatus(): string;
  setLanguageStatus(value: string): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): CodeResponse.AsObject;
  static toObject(includeInstance: boolean, msg: CodeResponse): CodeResponse.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: CodeResponse, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): CodeResponse;
  static deserializeBinaryFromReader(message: CodeResponse, reader: jspb.BinaryReader): CodeResponse;
}

export namespace CodeResponse {
  export type AsObject = {
    challengeId: string,
    challengeSlug: string,
    code: string,
    codecheckerHash: string,
    company: string,
    compileMessage: string,
    compileStatus: boolean,
    contestId: string,
    kind: string,
    language: string,
    languageStatus: string,
  }
}

