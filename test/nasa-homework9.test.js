import { html, fixture, expect } from '@open-wc/testing';
import "../nasa-homework9.js";

describe("nasaHomework9 test", () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <nasa-homework9
        title="title"
      ></nasa-homework9>
    `);
  });

  it("basic will it blend", async () => {
    expect(element).to.exist;
  });

  it("passes the a11y audit", async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
