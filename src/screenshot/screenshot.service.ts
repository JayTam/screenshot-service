import { Injectable } from "@nestjs/common";
import * as playwright from "playwright";

export interface ScreenshotOptions {
  browserType?: "chromium" | "firefox" | "webkit";
  imageType?: "png" | "jpeg";
  locale?: string;
  width?: number;
  height?: number;
  deviceScaleFactor?: number;
  userAgent?: string;
}

@Injectable()
export class ScreenshotService {
  async screenshot(
    url: string,
    {
      browserType = "chromium",
      imageType = "png",
      locale = "zh_CN",
      width = 1920,
      height = 1080,
      deviceScaleFactor = 1,
      userAgent,
    }: ScreenshotOptions = {
      browserType: "chromium",
      imageType: "png",
      locale: "zh_CN",
      width: 1920,
      height: 1080,
    },
  ): Promise<Buffer | string | void> {
    playwright.devices;
    const browser = await playwright[browserType].launch();
    try {
      const context = await browser.newContext({
        viewport: {
          width,
          height,
        },
        deviceScaleFactor,
        locale,
        userAgent,
      });
      const page = await context.newPage();
      await page.goto(url);
      // 等到网络闲置
      await page.waitForLoadState("networkidle");
      return await page.screenshot({ type: imageType });
    } finally {
      browser.close();
    }
  }
}
