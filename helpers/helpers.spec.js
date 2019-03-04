const helpers = require("./helpers");

//----------------ITEM CHECKS

describe("Item tests", () => {
  test("check if type equals weapon or armor", () => {
    const type = helpers.checkType("weapon");
    expect(type).toBeTruthy();
  });

  it("check if enhancement is between 0 and 20", () => {
    expect(helpers.checkEnhancement(19)).toBeTruthy();

    // expect(() => {
    //   helpers.enhancement(21);
    // }).toThrow();
  });

  it("check if durability is between 0 and 100", () => {
    expect(helpers.maxDurability(100)).toBeTruthy();
  });

  it("check if durability is greater than 20 when enhancement is between 0 and 14", () => {
    const durability = 24;
    const enhancement = 10;

    expect(
      helpers.durabilityWithLowEnhancement(durability, enhancement)
    ).toBeTruthy();
  });

  it("check if durability is greater than 0 when enhancement is between 15 and 20", () => {
    const durability = 13;
    const enhancement = 19;

    expect(
      helpers.durabilityWithHighEnhancement(durability, enhancement)
    ).toBeTruthy();
  });
});

//----------------REPAIR CHECKS

describe("Repair Test", () => {
  it("check if durability is restored to 100", () => {
    const restored = helpers.repair(helpers.sword);
    expect(restored.durability).toBe(100);
  });
});

//----------------ENHANCEMENT CHECKS

describe("Enhancement Checks", () => {
  it("check if default item enhancement is 0", () => {
    expect(helpers.defaultItemEnhancement(helpers.sword)).toBeTruthy();
  });

  it("check if item enhancement is between 0 and 20", () => {
    expect(helpers.checkMaxEnhancement(helpers.sword)).toBeTruthy();
  });
});

//----------------FAILURE CHECKS

describe("Enhancement Failure Tests", () => {
  it("item durability decreases by 5 if enhancement is between 0 and 14", () => {
    const decreased = helpers.failDurabilityWithEnhancement(helpers.sword);
    expect(decreased).toBe(95);
  });

  it("item durability decreases by 10 if enhancement is between 15 and 20", () => {
    const decreased = helpers.failDurabilityWithEnhancement(helpers.shield);
    expect(decreased).toBe(90);
  });

  it("reduces enhancement level by 1 if enhancement level is greater than 15", () => {
    const decreased = helpers.failEnhancementLevel(helpers.shield);
    expect(decreased).toBe(17);
  });

  it("can't enhance item if durability is below 25 and enhancement is between 0 and 14", () => {
    const check = helpers.failLowEnhancement(helpers.bow);
    expect(check).toBeTruthy();
  });

  it("can't enhance item if durability is below 10 and enhancement is between 15 and 20", () => {
    const check = helpers.failHighEnhancement(helpers.helmet);
    expect(check).toBeTruthy();
  });
});

//----------------SUCCESS CHECKS

describe("Enhancement Success Tests", () => {
  it("increases enhancement by 1 if enhancement is between 0 and 20.", () => {
    const check = helpers.enhancementSuccess(helpers.spear);
    expect(check).toBe(1);
  });
});
