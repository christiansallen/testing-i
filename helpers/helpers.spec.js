const helpers = require("./helpers");

//----------------ITEM CHECKS

describe("Item tests", () => {
  test("check if type equals weapon or armor", () => {
    let sword = {
      name: "sword",
      type: "weapon",
      durability: 35,
      enhancement: 3
    };

    expect(helpers.item.checkType(sword)).toBeTruthy();
  });

  it("check if enhancement is between 0 and 20", () => {
    let sword = {
      name: "sword",
      type: "weapon",
      durability: 35,
      enhancement: 3
    };
    expect(helpers.item.checkEnhancement(sword)).toBeTruthy();

    // expect(() => {
    //   helpers.enhancement(21);
    // }).toThrow();
  });

  it("check if durability is between 0 and 100", () => {
    let sword = {
      name: "sword",
      type: "weapon",
      durability: 35,
      enhancement: 3
    };
    expect(helpers.item.checkDurability(sword)).toBeTruthy();
  });

  it("check if durability is greater than 20 when enhancement is between 0 and 14", () => {
    let item = {
      name: "sword",
      type: "weapon",
      durability: 35,
      enhancement: 3
    };

    expect(helpers.item.lowEnhancementDurability(item)).toBeTruthy();
  });

  it("check if durability is greater than 0 when enhancement is between 15 and 20", () => {
    let item = {
      name: "sword",
      type: "weapon",
      durability: 35,
      enhancement: 16
    };

    expect(helpers.item.highEnhancementDurability(item)).toBeTruthy();
  });

  it("displays name with enhancement if enhancement isnt equal to 0", () => {
    let item = {
      name: "sword",
      type: "weapon",
      durability: 35,
      enhancement: 14
    };

    let expected = {
      name: "[+14] sword",
      type: "weapon",
      durability: 35,
      enhancement: 14
    };
    expect(helpers.item.displayName(item)).toEqual(expected);
  });
  it("displays name according to enhancement level chart", () => {
    let item = {
      name: "sword",
      type: "weapon",
      durability: 35,
      enhancement: 16
    };

    let expected = {
      name: "[+PRI] sword",
      type: "weapon",
      durability: 35,
      enhancement: 16
    };
    expect(helpers.item.displayName(item)).toEqual(expected);
  });
  it("returns item if enhancement is 0", () => {
    let item = {
      name: "sword",
      type: "weapon",
      durability: 35,
      enhancement: 0
    };

    let expected = {
      name: "sword",
      type: "weapon",
      durability: 35,
      enhancement: 0
    };
    expect(helpers.item.displayName(item)).toEqual(expected);
  });
});

//----------------REPAIR CHECKS

describe("Repair Test", () => {
  it("check if durability is restored to 100", () => {
    let item = {
      name: "sword",
      type: "weapon",
      durability: 40,
      enhancement: 2
    };

    helpers.repairItem.repair(item);
    expect(item.durability).toBe(100);
  });
});

//----------------SUCCESS CHECKS

describe("Enhancement Success Tests", () => {
  it("check enhancement increased by 1", () => {
    const item = {
      name: "sword",
      type: "weapon",
      durability: 40,
      enhancement: 2
    };

    const expected = {
      name: "[+3] sword",
      type: "weapon",
      durability: 40,
      enhancement: 3
    };

    helpers.successItem.enhancement(item);
    expect(item).toEqual(expected);
  });
});

//----------------FAILURE CHECKS

describe("Enhancement Failure Tests", () => {
  it("durability decreases by 5 if enhancement is between 0 and 14", () => {
    const item = {
      name: "sword",
      type: "weapon",
      durability: 40,
      enhancement: 2
    };
    expect(helpers.failItem.durabilityWithEnhancement(item)).toBe(35);
  });
  it("durability decreases by 10 if enhancement is between 15 and 20", () => {
    const item = {
      name: "sword",
      type: "weapon",
      durability: 40,
      enhancement: 16
    };
    expect(helpers.failItem.durabilityWithEnhancement(item)).toBe(30);
  });
  it("if item enhancement is below 15 and durability is is below 25, cant be enhanced", () => {
    const item = {
      name: "sword",
      type: "weapon",
      durability: 23,
      enhancement: 13
    };
    expect(helpers.failItem.lowEnhancement(item)).toBeTruthy();
  });
  it("if item enhancement is above 15 and durability is is below 10, cant be enhanced", () => {
    const item = {
      name: "sword",
      type: "weapon",
      durability: 9,
      enhancement: 16
    };
    expect(helpers.failItem.highEnhancement(item)).toBeTruthy();
  });
  it("if item type is armor and enhancement is below 5, cant fail", () => {
    const item = {
      name: "sword",
      type: "armor",
      durability: 9,
      enhancement: 4
    };
    expect(helpers.failItem.armorEnhancement(item)).toBe(
      "Can't fail enhancement if enhancement is below 5 and type is armor"
    );
  });
  it("if item type is weapon and enhancement is below 7, cant fail", () => {
    const item = {
      name: "sword",
      type: "weapon",
      durability: 9,
      enhancement: 4
    };
    expect(helpers.failItem.weaponEnhancement(item)).toBe(
      "Can't fail enhancement if enhancement is below 7 and type is weapon"
    );
  });
});
