//------------------------ ITEM CHECKS --------------------------

const item = {
  lowEnhancementDurability(item) {
    if (
      item.enhancement >= 0 &&
      item.enhancement <= 14 &&
      item.durability >= 20
    ) {
      return 1;
    } else {
      return 0;
    }
  },
  highEnhancementDurability(item) {
    if (
      item.enhancement >= 15 &&
      item.enhancement <= 20 &&
      item.durability >= 0
    ) {
      return 1;
    } else {
      return 0;
    }
  },
  checkType(item) {
    if (item.type === "weapon" || item.type === "armor") {
      return 1;
    } else {
      return 0;
    }
  },
  checkEnhancement(item) {
    if (item.enhancement >= 0 && item.enhancement <= 20) {
      return 1;
    } else {
      return 0;
    }
  },
  checkDurability(item) {
    if (item.durability <= 100) {
      return 1;
    } else {
      return 0;
    }
  },
  displayName(item) {
    if (item.enhancement === 0) {
      return item;
    } else if (item.enhancement != 0 && item.enhancement <= 15) {
      item.name = `[+${item.enhancement}] ${item.name}`;
      return item;
    } else if (item.enhancement === 16) {
      item.name = `[+PRI] ${item.name}`;
      return item;
    } else if (item.enhancement === 17) {
      item.name = `[+DUO] ${item.name}`;
      return item;
    } else if (item.enhancement === 18) {
      item.name = `[+TRI] ${item.name}`;
      return item;
    } else if (item.enhancement === 19) {
      item.name = `[+TET] ${item.name}`;
      return item;
    } else if (item.enhancement === 20) {
      item.name = `[+PEN] ${item.name}`;
      return item;
    }
  }
};

//------------------------ REPAIR CHECK --------------------------

const repairItem = {
  repair(item) {
    item.durability = 100;
    return item;
  }
};

//------------------------ ENHANCEMENT CHECK --------------------------

const defaultItemEnhancement = item => {
  return item.enhancement === 0 ? 1 : 0;
};

const checkMaxEnhancement = item => {
  return item.enhancement <= 20 && item.enhancement >= 0 ? 1 : 0;
};

//------------------------ ENHANCEMENT FAIL CHECKS --------------------------

const failItem = {
  durabilityWithEnhancement(item) {
    if (item.enhancement >= 0 && item.enhancement <= 14) {
      return item.durability - 5;
    } else if (item.enhancement >= 15 && item.enhancement <= 20) {
      return item.durability - 10;
    } else {
      throw new Error("enhancement needs to be between 0 and 20.");
    }
  },
  enhancementLevel(item) {
    if (item.enhancement >= 16 && item.enhancement <= 20) {
      return item.enhancement - 1;
    }
  },
  lowEnhancement(item) {
    if (item.enhancement <= 14 && item.durability < 25) {
      return 1;
    } else {
      return 0;
    }
  },
  highEnhancement(item) {
    if (
      item.enhancement > 14 &&
      item.enhancement < 21 &&
      item.durability < 10
    ) {
      return 1;
    } else {
      return 0;
    }
  },
  armorEnhancement(item) {
    if (item.type === "armor" && item.enhancement < 5) {
      return "Can't fail enhancement if enhancement is below 5 and type is armor";
    } else {
      return 0;
    }
  },
  weaponEnhancement(item) {
    if (item.type === "weapon" && item.enhancement < 7) {
      return "Can't fail enhancement if enhancement is below 7 and type is weapon";
    } else {
      return 0;
    }
  }
};

//------------------------ ENHANCEMENT SUCCESS CHECKS --------------------------

const successItem = {
  enhancement(item) {
    item.enhancement += 1;
    item.name = `[+${item.enhancement}] ${item.name}`;
    return item;
  }
};

module.exports = {
  item,
  repairItem,
  successItem,
  failItem
};
