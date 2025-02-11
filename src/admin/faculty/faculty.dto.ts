import { IsNotEmpty, IsString, IsEmail } from "class-validator";

export class facultyDto {
  @IsString()
  @IsNotEmpty()
  public name: string;

  @IsString()
  @IsNotEmpty()
  public department: string;

  @IsString()
  @IsNotEmpty()
  @IsEmail()
  public email: string;

  @IsString()
  public contact: string;
}
