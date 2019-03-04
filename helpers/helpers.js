//------------------------ ITEM CHECKS --------------------------

const checkType = type => {
  if (type === "weapon" || type === "armor") {
    return 1;
  } else {
    return 0;
  }
};

const checkEnhancement = enhancement => {
  if (enhancement >= 0 && enhancement <= 20) {
    return 1;
  } else {
    return 0;
  }
  //   } else {
  //     throw new Error(`Your enhancement level must be between 0 and 20`);
  //   }
};

const maxDurability = durability => {
  if (durability <= 100) {
    return 1;
  } else {
    return 0;
  }
};

const durabilityWithLowEnhancement = (durability, enhancement) => {
  if (enhancement >= 0 && enhancement <= 14 && durability >= 20) {
    return 1;
  } else {
    return 0;
  }
};

const durabilityWithHighEnhancement = (durability, enhancement) => {
  if (enhancement >= 15 && enhancement <= 20 && durability >= 0) {
    return 1;
  } else {
    return 0;
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

const failDurabilityWithEnhancement = item => {
  if (item.enhancement >= 0 && item.enhancement <= 14) {
    return item.durability - 5;
  } else if (item.enhancement >= 15 && item.enhancement <= 20) {
    return item.durability - 10;
  } else {
    throw new Error("enhancement needs to be between 0 and 20.");
  }
};

const failEnhancementLevel = item => {
  if (item.enhancement >= 16 && item.enhancement <= 20) {
    return item.enhancement - 1;
  }
};

const failLowEnhancement = item => {
  if (item.enhancement <= 14 && item.durability < 25) {
    return 1;
  } else {
    return 0;
  }
};

const failHighEnhancement = item => {
  if (item.enhancement > 14 && item.enhancement < 21 && item.durability < 10) {
    return 1;
  } else {
    return 0;
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

const enhancementSuccess = item => {
  item.enhancement += 1;
  return item.enhancement;
};

module.exports = {
  createItem,
  checkType,
  checkEnhancement,
  maxDurability,
  durabilityWithLowEnhancement,
  durabilityWithHighEnhancement,
  repairItem,
  failDurabilityWithEnhancement,
  failEnhancementLevel,
  failLowEnhancement,
  failHighEnhancement,
  enhancementSuccess,
  defaultItemEnhancement,
  checkMaxEnhancement,
  successItem
};
