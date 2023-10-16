import { Injectable } from "@nestjs/common";

@Injectable()
export class FirstCrudService {
    create(){
        return 'this is create function';
    }

    findAll(){
        return 'this is to find all the record';
    }

    findOne(){
        return 'this is to fine one by the id';
    }

    update(){
        return 'this is update field';
    }

    remove(){
        return 'this is to delete the record by the id';
    }
}