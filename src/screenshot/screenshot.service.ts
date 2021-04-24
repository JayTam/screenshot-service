import { Injectable } from "@nestjs/common";
import * as puppeteer from "puppeteer";

@Injectable()
export class ScreenshotService {
  async screenshot(url: string): Promise<Buffer | string | void> {
    const browser = await puppeteer.launch({
      ignoreHTTPSErrors: true,
      defaultViewport: {
        isMobile: true,
        height: 667,
        width: 375,
        deviceScaleFactor: 2,
      },
    });

    try {
      const page = await browser.newPage();
      await page.goto(url, { waitUntil: "networkidle0" });
      return await page.screenshot();
    } finally {
      browser.close();
    }
  }
}
