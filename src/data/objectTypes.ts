export interface ObjectType {
  id: string;
  label: string;
  group: string;
  areaUnit: string;
  areaPer: number;
  extinguishers: {
    type: string;
    count: number;
  }[];
}

export const objectTypes: ObjectType[] = [
  // ═══════════════════════════════════════════════════════════════
  // ГРУПА I — ПРОИЗВОДСТВА И ПРОИЗВОДСТВЕНИ СГРАДИ, ПОМЕЩЕНИЯ,
  //            СЪОРЪЖЕНИЯ, ИНСТАЛАЦИИ И СВОБОДНА ДВОРНА ПЛОЩ
  // ═══════════════════════════════════════════════════════════════

  // --- 1. Първоначална преработка на дървесина ---
  {
    id: "timber_primary",
    label: "1. Предприятие за първоначална преработка на дървесина, разфасовъчни и др. /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 2. Дървообработващи производства ---
  {
    id: "woodworking",
    label: "2. Дървообработващо производство, мебелно, тапицерско и др. (с лепила, лакове) /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 3. Сушилни за дървен материал (ел. енергия) ---
  {
    id: "dryer_electric",
    label: "3. Сушилня за дървен материал (ел. енергия) — до 2 камери /Ф5.1/",
    group: "Производства",
    areaUnit: "на до 2 камери",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 2 },
    ],
  },
  {
    id: "dryer_electric_multi",
    label: "3. Сушилня за дървен материал (ел. енергия) — за всяка камера над 2 /Ф5.1/",
    group: "Производства",
    areaUnit: "на камера",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 4. Сушилни за дървен материал (газ, течни/твърди горива) ---
  {
    id: "dryer_fuel",
    label: "4. Сушилня за дървен материал (газ, течни/твърди горива) — до 2 камери /Ф5.1/",
    group: "Производства",
    areaUnit: "на до 2 камери",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 2 },
    ],
  },
  {
    id: "dryer_fuel_multi",
    label: "4. Сушилня за дървен материал (газ, течни/твърди горива) — за всяка камера над 2 /Ф5.1/",
    group: "Производства",
    areaUnit: "на камера",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 5. Шлифоване и полиране на дървесина ---
  {
    id: "wood_sanding",
    label: "5. Помещения за шлифоване и полиране на изделия от дървесина /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 6. Бояджийни, лакозаливни ---
  {
    id: "painting_room",
    label: "6. Бояджийни, лакозаливни и др. помещения за горими материали /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  // --- 7. Горими изделия и амбалаж ---
  {
    id: "combustible_products",
    label: "7. Помещения за изготвяне и ремонт на горими изделия и амбалаж /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 8. Изделия от пластмаси, полиетилен, полиуретан ---
  {
    id: "plastics_production",
    label: "8. Помещения за изделия от пластмаси, полиетилен, полиуретан и др. /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  // --- 9. Химически производства (ЛЗТ и ГТ) ---
  {
    id: "chemical",
    label: "9. Химическо производство (ЛЗТ и ГТ) /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
      { type: "Возим прахов BC 50 кг (на помещение)", count: 1 },
    ],
  },
  // --- 10. Помпени станции за ЛЗТ и ГТ ---
  {
    id: "pump_station_flammable",
    label: "10. Помпени станции за ЛЗТ и ГТ /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
      { type: "Возим прахов BC 50 кг (на помещение)", count: 1 },
    ],
  },
  // --- 12. Помещения с горивни уредби ---
  {
    id: "fuel_device_liquid",
    label: "12а. Помещения с горивни уредби — на течно гориво /Ф5.1/",
    group: "Производства",
    areaUnit: "на уредба",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  {
    id: "fuel_device_gas",
    label: "12б. Помещения с горивни уредби — на газообразно гориво /Ф5.1/",
    group: "Производства",
    areaUnit: "на уредба",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 26. Автомобилни, ремонтни, автосервизи ---
  {
    id: "auto_service",
    label: "26. Автосервиз / Ремонтна база / Автобаза /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 28. Помещения за електронни елементи ---
  {
    id: "electronics",
    label: "28. Помещения за производство и ремонт на електронни елементи /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 2 },
    ],
  },
  // --- 32. Заваръчни производства ---
  {
    id: "welding",
    label: "32. Заваръчно производство /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 37. Механични цехове (студена обработка) ---
  {
    id: "metalworking",
    label: "37. Механични цехове за студена обработка, механо-монтажни и др. /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  // --- 42. Електроремонтни помещения ---
  {
    id: "electrorepair",
    label: "42. Електроремонтни помещения /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  // --- 44. КИП, командни пултове ---
  {
    id: "control_room",
    label: "44. Помещения за КИП, командни пултове /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 2 },
    ],
  },
  // --- 48. Текстилни предприятия ---
  {
    id: "textile_sewing",
    label: "48а. Текстилно предприятие — шивачни /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "textile_spinning",
    label: "48б. Текстилно предприятие — предачни /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "textile_drying",
    label: "48в. Текстилно предприятие — сушилни /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "textile_dyeing",
    label: "48г. Текстилно предприятие — багрилни /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 55. Котелни ---
  {
    id: "boiler_solid",
    label: "55а. Котелно — на твърдо гориво /Ф5.1/",
    group: "Производства",
    areaUnit: "на котел",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "boiler_liquid",
    label: "55б. Котелно — на течно гориво /Ф5.1/",
    group: "Производства",
    areaUnit: "на котел",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  {
    id: "boiler_gas",
    label: "55в. Котелно — на газообразно гориво /Ф5.1/",
    group: "Производства",
    areaUnit: "на котел",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "Прахов BC 12 кг", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 57. Помещения за вентилация и отопление ---
  {
    id: "ventilation_room",
    label: "57. Помещения за вентилация и отопление /Ф5.1/",
    group: "Производства",
    areaUnit: "на помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
    ],
  },
  // --- 58. Трафопостове ---
  {
    id: "transformer_standalone",
    label: "58а. Трафопост — комплектен и отделно стоящ /Ф5.1/",
    group: "Производства",
    areaUnit: "на трафопост",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  {
    id: "transformer_indoor",
    label: "58б. Трафопост — в сграда, помещение на трансформатора /Ф5.1/",
    group: "Производства",
    areaUnit: "на помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 1 },
    ],
  },
  // --- 64. Акумулаторно помещение ---
  {
    id: "battery_room",
    label: "64. Помещение за зареждане и съхранение на акумулатори /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 2 },
    ],
  },
  // --- 67. Лаборатории с ГТ и ЛЗТ ---
  {
    id: "lab_flammable",
    label: "67. Лаборатория (с ГТ и ЛЗТ) /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 68. Лаборатории за други цели ---
  {
    id: "lab_other",
    label: "68. Лаборатория за други цели /Ф5.1/",
    group: "Производства",
    areaUnit: "помещение до 100 м²",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 77. Полиграфическа промишленост ---
  {
    id: "printing",
    label: "77. Печатница / Полиграфическа промишленост /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 78. Кожухарска, обувна промишленост ---
  {
    id: "leather_shoes",
    label: "78. Предприятия на кожухарската, обувната промишленост и др. /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 80. Мелници, нишестени производства ---
  {
    id: "flour_mill",
    label: "80. Мелници, нишестени производства и производства за фураж /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 82. Строителни обекти ---
  {
    id: "construction_site",
    label: "82а. Строителна площадка — район /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "construction_inside",
    label: "82б. Строителен обект — вътре в сградите, на етаж",
    group: "Производства",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 83. Фургони и офис-контейнери (Група I) ---
  {
    id: "furgon_production",
    label: "83. Фургон / Офис-контейнер (производствен обект) /Ф5.1/",
    group: "Производства",
    areaUnit: "на фургон",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
    ],
  },
  // --- 84. Производство на хранителни продукти ---
  {
    id: "food_production",
    label: "84. Производство на хранителни продукти /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 85. Хладилни камери ---
  {
    id: "cold_storage",
    label: "85. Хладилни камери /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас A)", count: 2 },
    ],
  },
  // --- 86. Работилници в учебни заведения ---
  {
    id: "school_workshop_wood",
    label: "86а. Работилница в учебно заведение — дърводелна /Ф5.1/",
    group: "Производства",
    areaUnit: "на помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "school_workshop_metal",
    label: "86б. Работилница в учебно заведение — металообработваща /Ф5.1/",
    group: "Производства",
    areaUnit: "на помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  {
    id: "school_workshop_sewing",
    label: "86в. Работилница в учебно заведение — шивална, книговезна и др. /Ф5.1/",
    group: "Производства",
    areaUnit: "на помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 87. Хлебопекарни ---
  {
    id: "bakery_solid",
    label: "87а. Хлебопекарна — на твърдо гориво /Ф5.1/",
    group: "Производства",
    areaUnit: "на пещ",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "bakery_liquid",
    label: "87б. Хлебопекарна — на течно гориво /Ф5.1/",
    group: "Производства",
    areaUnit: "на пещ",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  {
    id: "bakery_gas",
    label: "87в. Хлебопекарна — на газ /Ф5.1/",
    group: "Производства",
    areaUnit: "на пещ",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "Прахов BC 12 кг", count: 1 },
    ],
  },
  {
    id: "bakery_electric",
    label: "87г. Хлебопекарна — на електричество /Ф5.1/",
    group: "Производства",
    areaUnit: "на пещ",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ГРУПА II — ОБЩЕСТВЕНИ СГРАДИ, ПОМЕЩЕНИЯ, СЪОРЪЖЕНИЯ И
  //             ИНСТАЛАЦИИ
  // ═══════════════════════════════════════════════════════════════

  // --- 1. Административни сгради ---
  {
    id: "admin_corridor",
    label: "1а. Административна сграда (коридорна система) /Ф4/",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "admin_non_corridor",
    label: "1б. Административна сграда (некоридорна система) /Ф4/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 2. Телефонни централи ---
  {
    id: "telephone_exchange",
    label: "2. Телефонни централи /Ф4.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 2 },
    ],
  },
  // --- 5. Електронноизчислителни центрове ---
  {
    id: "server_room",
    label: "5. Електронноизчислителен център / Сървърно помещение /Ф4.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 2 },
    ],
  },
  // --- 6. Телевизионни и радиостудия ---
  {
    id: "tv_radio_studio",
    label: "6. Телевизионни и радиостудия /Ф4.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 7. Хотели, мотели, хостели ---
  {
    id: "hotel_corridor",
    label: "7а. Хотел / Мотел / Хостел (коридорна система) /Ф1.2/",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "hotel_non_corridor",
    label: "7б. Хотел / Мотел / Хостел (некоридорна система) /Ф1.2/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 8. Здравеопазване и социални грижи ---
  {
    id: "health_corridor",
    label: "8а. Болница / Лечебно заведение / Дом за стари хора (коридорна система) /Ф1.1/",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "health_non_corridor",
    label: "8б. Болница / Лечебно заведение / Дом за стари хора (некоридорна система) /Ф1.1/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 9. Електролечебни, рентгенови кабинети ---
  {
    id: "medical_cabinet",
    label: "9. Електролечебни, рентгенови кабинети и др. /Ф1.1/",
    group: "Обществени сгради",
    areaUnit: "на кабинет",
    areaPer: 0,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  // --- 10. Дезинфекционни помещения ---
  {
    id: "disinfection",
    label: "10. Дезинфекционни помещения /Ф1.1/",
    group: "Обществени сгради",
    areaUnit: "на помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  // --- 11. Аптеки ---
  {
    id: "pharmacy",
    label: "11. Аптека /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 12. Сгради за образование ---
  {
    id: "school_corridor",
    label: "12а. Учебно заведение (коридорна система) /Ф4/",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "school_non_corridor",
    label: "12б. Учебно заведение (некоридорна система) /Ф4/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 13. Учебни кабинети с ЛЗТ и ГТ ---
  {
    id: "school_lab_flammable",
    label: "13. Учебни кабинети, в които се използват ЛЗТ и ГТ /Ф4.1/",
    group: "Обществени сгради",
    areaUnit: "на кабинет",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 14. Библиотеки, читални ---
  {
    id: "library",
    label: "14. Библиотека / Читалня /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 15. Закрити физкултурни зали ---
  {
    id: "gym_hall",
    label: "15. Закрити физкултурни зали /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "на зала",
    areaPer: 0,
    extinguishers: [
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 17. Общежития и спални корпуси ---
  {
    id: "dormitory",
    label: "17. Общежитие / Спален корпус /Ф1.2/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 19. Сгради за услуги ---
  {
    id: "service_corridor",
    label: "19а. Сграда за услуги (коридорна система) /Ф3.4/",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "service_non_corridor",
    label: "19б. Сграда за услуги (некоридорна система) /Ф3.4/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 20. Детски заведения ---
  {
    id: "kindergarten",
    label: "20. Детско заведение (детска градина, ясла) /Ф1.1/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 21. Художествени галерии, музеи ---
  {
    id: "gallery_museum",
    label: "21. Художествени галерии, музеи, изложбени зали /Ф2.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 23. Читалища, клубове (без сцени) ---
  {
    id: "community_center",
    label: "23. Читалища, обществени и културни клубове и др. без сцени /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 400,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 24. Дискотеки, казина ---
  {
    id: "disco_casino",
    label: "24. Дискотека / Казино / Игрална зала /Ф2.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 400,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 25. Помещения с култово и религиозно предназначение ---
  {
    id: "church",
    label: "25. Помещения с култово и религиозно предназначение /Ф3.4/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 26. Театрални, кинозали, концертни зали (със сцени) ---
  {
    id: "cinema_theater",
    label: "26. Театрални зали, кинозали, концертни зали със сцени /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 400,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 27. Конферентни зали ---
  {
    id: "conference_hall",
    label: "27. Конферентни зали /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 29. Спортни зали ---
  {
    id: "sports_hall",
    label: "29. Спортна зала /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 30. Стадиони ---
  {
    id: "stadium",
    label: "30. Стадиони /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 1000,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 32. Художествени, фотографски ателиета ---
  {
    id: "art_studio",
    label: "32. Художествени, фотографски ателиета и др. /Ф2.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  // --- 33. Ателиета за химическо чистене ---
  {
    id: "dry_cleaning",
    label: "33. Ателиета за химическо чистене, боядисване и др. /Ф3.4/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  // --- 34. Гладачни, сушилни ---
  {
    id: "ironing_drying",
    label: "34. Гладачни, сушилни /Ф3.4/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 35. Столове, ресторанти ---
  {
    id: "restaurant",
    label: "35. Столове, ресторанти /Ф3.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 36. Кухни ---
  {
    id: "kitchen_solid_fuel",
    label: "36а. Кухня — на твърдо гориво /Ф4.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас F)", count: 1 },
      { type: "Пожарно одеяло 1,5×1,5 м", count: 1 },
    ],
  },
  {
    id: "kitchen_electric",
    label: "36б. Кухня — на електричество /Ф4.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас F)", count: 1 },
      { type: "Пожарно одеяло 1,5×1,5 м", count: 1 },
    ],
  },
  {
    id: "kitchen_liquid_fuel",
    label: "36в. Кухня — на течно гориво /Ф4.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 1 },
      { type: "Воден 9 л (клас F)", count: 1 },
      { type: "Пожарно одеяло 1,5×1,5 м", count: 1 },
    ],
  },
  {
    id: "kitchen_gas",
    label: "36г. Кухня — на газ /Ф4.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Воден 9 л (клас F)", count: 1 },
      { type: "Пожарно одеяло 1,5×1,5 м", count: 1 },
    ],
  },
  // --- 37. Супермаркети и универсални магазини ---
  {
    id: "supermarket",
    label: "37. Супермаркет / Универсален магазин /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 38. Магазини за текстил, обувки, галантерия ---
  {
    id: "shop_textile",
    label: "38. Магазин за текстил / обувки / галантерия /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 39. Книжарници ---
  {
    id: "bookstore",
    label: "39. Книжарница /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 40. Магазини за бои, лакове, разтворители ---
  {
    id: "shop_paints",
    label: "40. Магазин за бои / лакове / разтворители (ЛЗТ) /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  // --- 41. Магазини за спиртни напитки ---
  {
    id: "shop_alcohol",
    label: "41. Магазин за спиртни напитки /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 42. Магазини за пиротехнически изделия ---
  {
    id: "shop_pyrotechnics",
    label: "42. Магазин за пиротехнически изделия /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 43. Сладкарници, закусвални ---
  {
    id: "bakery_cafe",
    label: "43. Сладкарница / Закусвалня /Ф3.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 44. Въводни устройства и главни ел. табла ---
  {
    id: "electric_panel",
    label: "44. Помещение за въводни устройства и главни разпределителни ел. табла",
    group: "Обществени сгради",
    areaUnit: "на помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
    ],
  },
  // --- 45. Фургони и офис-контейнери (Група II) ---
  {
    id: "furgon_public",
    label: "45. Фургон / Офис-контейнер (обществена сграда) /Ф4.2/",
    group: "Обществени сгради",
    areaUnit: "на фургон",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
    ],
  },
  // --- 46. Панаирни палати ---
  {
    id: "fair_palace",
    label: "46. Панаирни палати /Ф2.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 47. Гардеробни ---
  {
    id: "wardrobe",
    label: "47. Гардеробни /Ф4.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ГРУПА III — ХАНГАРИ, ДЕПА, ПАРКИНГИ, ГАРАЖИ,
  //              АВТОСНАБДИТЕЛНИ СТАНЦИИ, АРХИВОХРАНИЛИЩА,
  //              СЕЛСКОСТОПАНСКИ СГРАДИ, ЗАКРИТИ СКЛАДОВЕ
  // ═══════════════════════════════════════════════════════════════

  // --- 1. Складове за ЛЗТ и ГТ ---
  {
    id: "warehouse_flammable",
    label: "III-1. Помещения за съхраняване на ЛЗТ и ГТ /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 2 },
      { type: "Возим CO₂ 30 кг", count: 2 },
    ],
  },
  // --- 2. Складове за горими химикали ---
  {
    id: "warehouse_chemicals",
    label: "III-2. Складове за горими химикали /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 5. Складове за текстил, хартия и др. горими ---
  {
    id: "warehouse_solid",
    label: "III-5. Складове за текстил, хартия и др. горими материали /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас A)", count: 2 },
    ],
  },
  // --- 7. Складове за хранителни продукти ---
  {
    id: "warehouse_food",
    label: "III-7. Складове за хранителни продукти /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас A)", count: 2 },
    ],
  },
  // --- 10. Складове за негорими в горима опаковка ---
  {
    id: "warehouse_noncombustible",
    label: "III-10. Складове за негорими материали в горима опаковка /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 11. Складове за горими материали ---
  {
    id: "warehouse_combustible",
    label: "III-11. Складове за горими материали /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 13. Складове за бутилки горими газове ---
  {
    id: "warehouse_gas_bottles",
    label: "III-13. Склад за бутилки със сгъстени и втечнени горими газове /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 19. Архивохранилища ---
  {
    id: "archive",
    label: "III-19. Архивохранилища /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 50,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 20. Хангари ---
  {
    id: "hangar",
    label: "III-20. Хангари /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "CO₂ 5 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  // --- 21. Гаражи до 3 МПС ---
  {
    id: "garage_small",
    label: "III-21. Гараж (до 3 МПС) /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "на гараж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
    ],
  },
  // --- 22. Гаражи/паркинги над 3 МПС ---
  {
    id: "garage_large",
    label: "III-22. Гараж / Паркинг (над 3 МПС) /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим прахов ABC 50 кг", count: 1 },
    ],
  },
  // --- 24. Автоснабдителни станции за ЛЗТ ---
  {
    id: "gas_station_lzt",
    label: "III-24а. Автоснабдителна станция за бензин и дизел",
    group: "Складове и гаражи",
    areaUnit: "на обект",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Возим прахов BC 50 кг", count: 2 },
      { type: "Пожарно одеяло 1,5×1,5 м", count: 1 },
    ],
  },
  // --- 24б. Автоснабдителни станции за ГГ ---
  {
    id: "gas_station_lpg",
    label: "III-24б. Автоснабдителна станция за газ (LPG/CNG)",
    group: "Складове и гаражи",
    areaUnit: "на обект",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Возим прахов BC 50 кг", count: 2 },
      { type: "Пожарно одеяло 1,5×1,5 м", count: 1 },
    ],
  },
  // --- 25. Селскостопански сгради ---
  {
    id: "farm_building",
    label: "III-25. Селскостопански сгради за животни, фураж и др. /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ГРУПА IV — ОТКРИТИ СКЛАДОВЕ И СВОБОДНА ДВОРНА ПЛОЩ
  // ═══════════════════════════════════════════════════════════════

  // --- 1. Открити складове за горими материали ---
  {
    id: "open_storage_solid",
    label: "IV-1. Открит склад за горими твърди материали",
    group: "Открити площи",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  // --- 2. Открити складове за ЛЗТ и ГТ ---
  {
    id: "open_storage_flammable",
    label: "IV-2. Открит склад за ЛЗТ и ГТ",
    group: "Открити площи",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Возим прахов BC 50 кг", count: 1 },
    ],
  },
  // --- 3. Свободна дворна площ ---
  {
    id: "outdoor_area",
    label: "IV-3. Свободна дворна площ",
    group: "Открити площи",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
];

export const groups = [...new Set(objectTypes.map((t) => t.group))];
