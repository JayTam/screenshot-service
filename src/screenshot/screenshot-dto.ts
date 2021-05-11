import { IsIn, IsNumber, IsOptional, IsString } from "class-validator";

export class ScreenshotDto {
  @IsString()
  url: string;

  @IsIn(["png", "jpeg"])
  imageType?: "png" | "jpeg" = "png";

  @IsString()
  locale?: string = "zh_CN";

  @IsNumber()
  width?: number = 1920;

  @IsNumber()
  height?: number = 1080;

  @IsNumber()
  deviceScaleFactor?: number = 1;

  @IsOptional()
  @IsString()
  userAgent?: string;
}
