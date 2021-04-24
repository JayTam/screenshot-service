import { IsIn, IsString } from "class-validator";

export class ScreenshotDto {
  @IsString()
  url: string;

  @IsIn(["png", "jpg"])
  type: "png" | "jpg";
}
