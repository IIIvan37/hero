import { Controller } from "@nestjs/common";
import { GrpcMethod } from "@nestjs/microservices";
import { Metadata, ServerUnaryCall } from "grpc";
import { HeroById } from "../proto/hero/hero_pb";


@Controller()
export class HeroController {
  @GrpcMethod('HeroesService', 'FindOne')
  findOne(data: HeroById, metadata: Metadata, call: ServerUnaryCall<any>): any {
    const items = [
      { id: 1, name: 'John' },
      { id: 2, name: 'Doe' },
    ];
    return items.find(({ id }) => id === data.getId());
  }
}