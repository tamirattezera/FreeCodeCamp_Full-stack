function parseShipment(rawData) {
  const result = [];
  const seenSkus = new Set();

  for (const item of rawData) {
    const [sku, name, qty, expires, zone] = item.split("|");

    if (seenSkus.has(sku)) continue;
    seenSkus.add(sku);

    result.push({
      sku,
      name,
      qty: Number(qty),
      expires,
      zone: zone || "general",
    });
  }

  return result;
}

function planRestock(pantry, shipment) {
  const actions = [];

  for (const item of shipment) {
    if (item.qty <= 0) {
      actions.push({ type: "discard", item });
      continue;
    }

    const exists = pantry.some((p) => p.sku === item.sku);

    actions.push({
      type: exists ? "restock" : "donate",
      item,
    });
  }

  return actions;
}

function groupByZone(actions) {
  const grouped = {};

  for (const action of actions) {
    const zone = action.item.zone;

    if (!grouped[zone]) {
      grouped[zone] = [];
    }

    grouped[zone].push(action);
  }

  return grouped;
}

function clonePantry(pantry) {
  return pantry.map((item) => ({ ...item }));
}

const rawData = [
  "1001|Milk|5|2026-01-01|fridge",
  "1002|Bread|3|2025-12-15",
  "1003|Eggs|12|2025-11-30|fridge",
  "1001|Milk|8|2026-02-01|fridge",
];

const pantry = [
  { sku: "1001", name: "Milk", qty: 2, expires: "2025-10-01", zone: "fridge" },
  { sku: "2001", name: "Rice", qty: 10, expires: "2026-06-01", zone: "pantry" },
];

const shipment = parseShipment(rawData);
const pantryCopy = clonePantry(pantry);
const actions = planRestock(pantryCopy, shipment);
const grouped = groupByZone(actions);

console.log(JSON.stringify(grouped, null, 2));

console.log(groupByZone(planRestock(pantry, parseShipment(rawData))));
