import { IsString, MinLength } from  'class-validator'

export class CreateTaksDto {

    @IsString()
    @MinLength(1)
    title: string

    @IsString()
    @MinLength(1)
    desciption: string
}