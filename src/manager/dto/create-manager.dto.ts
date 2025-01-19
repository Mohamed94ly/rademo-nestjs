import { IsEmail, IsNumber, IsString } from "class-validator";

export class CreateManagerDto {

    @IsString()
    f_name: string;

    @IsString()
    username: string;

    @IsString()
    password: string;

    @IsEmail()
    email: string;

    @IsNumber()
    roleid: number;
}
