import { Controller, Get, Query, Res } from "@nestjs/common";
import { ScreenshotService } from "./screenshot.service";
import { Response } from "express";
import { ScreenshotDto } from "./screenshot-dto";

@Controller("/screenshot")
export class ScreenshotController {
  constructor(private readonly screenshotService: ScreenshotService) {}

  @Get()
  async getScreenshot(@Query() query: ScreenshotDto, @Res() res: Response) {
    const result = await this.screenshotService.screenshot(query.url, query);
    res.type("png").send(result);
  }
}
