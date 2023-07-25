import { IsEmail, IsNotEmpty ,IsString ,MinLength } from 'class-validator' 

export class LogInDto{
    @IsNotEmpty()
    @IsEmail({},{message: 'Please Enter correct Email'})
    readonly email : string;

    @IsNotEmpty()
    @MinLength(6)
    @IsString()
    readonly password : string;

}