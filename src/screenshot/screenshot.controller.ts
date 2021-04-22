import { Controller, Get, Query, Res } from '@nestjs/common';
import { ScreenshotService } from './screenshot.service';
import { Response } from 'express';

@Controller('/screenshot')
export class ScreenshotController {
  constructor(private readonly screenshotService: ScreenshotService) {}

  @Get()
  async getScreenshot(@Query() query, @Res() res: Response) {
    const { url } = query;
    const result = await this.screenshotService.screenshot(url);
    res.type('png').send(result);
  }
}
