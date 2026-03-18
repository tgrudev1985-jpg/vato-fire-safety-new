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

  {
    id: "timber_primary",
    label: "Предприятие за първоначална преработка на дървесина, разфасовъчни и др. /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "woodworking",
    label: "Дървообработващо производство, мебелно, тапицерско и др. (с лепила, лакове) /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "dryer_electric",
    label: "Сушилня за дървен материал (ел. енергия) — до 2 камери /Ф5.1/",
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
    label: "Сушилня за дървен материал (ел. енергия) — за всяка камера над 2 /Ф5.1/",
    group: "Производства",
    areaUnit: "на камера",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "dryer_fuel",
    label: "Сушилня за дървен материал (газ, течни/твърди горива) — до 2 камери /Ф5.1/",
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
    label: "Сушилня за дървен материал (газ, течни/твърди горива) — за всяка камера над 2 /Ф5.1/",
    group: "Производства",
    areaUnit: "на камера",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "painting_room",
    label: "Бояджийно / Лакозаливно помещение /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  {
    id: "chemical",
    label: "Химическо производство (ЛЗТ и ГТ) /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим CO₂ 30 кг", count: 1 },
    ],
  },
  {
    id: "welding",
    label: "Заваръчно производство /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "auto_service",
    label: "Автосервиз / Ремонтна база /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "metalworking",
    label: "Металообработващо предприятие (без ЛЗТ и ГТ) /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  {
    id: "food_production",
    label: "Производство на хранителни продукти /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "textile",
    label: "Текстилно предприятие / Шивалня /Ф5.1/",
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
    id: "printing",
    label: "Печатница /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "electronics",
    label: "Електронни / Електроремонтни помещения /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  {
    id: "cold_storage",
    label: "Хладилни камери /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас A)", count: 2 },
    ],
  },
  {
    id: "boiler_liquid_gas",
    label: "Котелно помещение (течно/газ гориво) /Ф5.1/",
    group: "Производства",
    areaUnit: "помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  {
    id: "boiler_solid",
    label: "Котелно помещение (твърдо гориво) /Ф5.1/",
    group: "Производства",
    areaUnit: "помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "transformer",
    label: "Трафопост / Разпределително табло /Ф5.1/",
    group: "Производства",
    areaUnit: "помещение",
    areaPer: 0,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 2 },
    ],
  },
  {
    id: "battery_room",
    label: "Акумулаторно помещение /Ф5.1/",
    group: "Производства",
    areaUnit: "помещение",
    areaPer: 0,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  {
    id: "server_room",
    label: "Сървърно помещение / Компютърна зала /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 2 },
    ],
  },
  {
    id: "lab_flammable",
    label: "Лаборатория (с ГТ и ЛЗТ) /Ф5.1/",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов BC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "lab_other",
    label: "Лаборатория (други цели) /Ф5.1/",
    group: "Производства",
    areaUnit: "помещение до 100 м²",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "compressor",
    label: "Компресорна станция /Ф5.1/",
    group: "Производства",
    areaUnit: "помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  {
    id: "furgon",
    label: "Фургон / Офис-контейнер",
    group: "Производства",
    areaUnit: "на фургон",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
    ],
  },
  {
    id: "construction_site",
    label: "Строителна площадка",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "outdoor_area",
    label: "Свободна дворна площ (производствени обекти)",
    group: "Производства",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ГРУПА II — ОБЩЕСТВЕНИ СГРАДИ, ПОМЕЩЕНИЯ, СЪОРЪЖЕНИЯ И
  //             ИНСТАЛАЦИИ
  // ═══════════════════════════════════════════════════════════════

  {
    id: "admin_corridor",
    label: "Административна сграда (коридорна система) /Ф4.3/",
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
    label: "Административна сграда (некоридорна система) /Ф4.3/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "hotel_corridor",
    label: "Хотел / Мотел / Хостел (коридорна система) /Ф1.2/",
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
    label: "Хотел / Мотел / Хостел (некоридорна система) /Ф1.2/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "residential_corridor",
    label: "Жилищна сграда (коридорна система) /Ф1.3/",
    group: "Обществени сгради",
    areaUnit: "на 60 м коридор",
    areaPer: 60,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "residential_non_corridor",
    label: "Жилищна сграда (некоридорна система) /Ф1.3/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "restaurant",
    label: "Ресторант / Заведение за обществено хранене /Ф3.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "kitchen_professional",
    label: "Кухня (професионална / търговска) /Ф3.2/",
    group: "Обществени сгради",
    areaUnit: "помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Пожарно одеяло 1,5×1,5 м", count: 1 },
    ],
  },
  {
    id: "bakery_cafe",
    label: "Сладкарница / Закусвалня /Ф3.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "supermarket",
    label: "Супермаркет / Хипермаркет / Универсален магазин /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "shop_food",
    label: "Магазин за хранителни стоки /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "shop_textile",
    label: "Магазин за текстил / обувки / галантерия /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "bookstore",
    label: "Книжарница /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "shop_paints",
    label: "Магазин за бои / лакове / разтворители /Ф3.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 100,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 1 },
      { type: "Воден 9 л (клас B)", count: 1 },
    ],
  },
  {
    id: "pharmacy",
    label: "Аптека /Ф3.4/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "hospital",
    label: "Болница / Лечебно заведение /Ф1.1/",
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
    id: "clinic",
    label: "Поликлиника / Амбулатория / Лекарски кабинет /Ф3.4/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "elderly_home",
    label: "Дом за стари хора / Хоспис /Ф1.1/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "kindergarten",
    label: "Детско заведение (детска градина, ясла) /Ф1.1/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "school_corridor",
    label: "Учебно заведение (коридорна система) /Ф4.1/",
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
    id: "cinema_theater",
    label: "Кино / Театър / Концертна зала /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 400,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "sports_hall",
    label: "Спортна зала / Фитнес /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 400,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "library",
    label: "Библиотека / Читалня /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "gallery_museum",
    label: "Галерия / Музей / Изложбена зала /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 150,
    extinguishers: [
      { type: "CO₂ 5 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "disco_casino",
    label: "Дискотека / Казино / Игрална зала /Ф2.2/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 400,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "service_corridor",
    label: "Сграда за услуги (коридорна система) /Ф3.5/",
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
    id: "hairdresser",
    label: "Бръснарски / Фризьорски / Козметичен салон /Ф3.5/",
    group: "Обществени сгради",
    areaUnit: "помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
    ],
  },
  {
    id: "laundry",
    label: "Перална / Химическо чистене /Ф3.5/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "CO₂ 5 кг", count: 1 },
    ],
  },
  {
    id: "church",
    label: "Религиозен храм (църква, джамия и др.) /Ф2.1/",
    group: "Обществени сгради",
    areaUnit: "м²",
    areaPer: 400,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "dormitory",
    label: "Общежитие / Спален корпус /Ф1.2/",
    group: "Обществени сгради",
    areaUnit: "на етаж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },

  // ═══════════════════════════════════════════════════════════════
  // ГРУПА III — СКЛАДОВЕ, ГАРАЖИ, БЕНЗИНОСТАНЦИИ
  // ═══════════════════════════════════════════════════════════════

  {
    id: "warehouse_solid",
    label: "Склад за горими твърди материали /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас A)", count: 2 },
    ],
  },
  {
    id: "warehouse_flammable",
    label: "Склад за ЛЗТ и ГТ /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "warehouse_gas_bottles",
    label: "Склад за горими газове в бутилки /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "помещение",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "warehouse_noncombustible",
    label: "Склад за негорими материали в горима опаковка /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "garage_small",
    label: "Гараж (до 3 МПС) /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "на гараж",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
    ],
  },
  {
    id: "garage_large",
    label: "Гараж / Паркинг (над 3 МПС) /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 200,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 2 },
      { type: "Воден 9 л (клас B)", count: 1 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
  {
    id: "gas_station",
    label: "Бензиностанция / Газостанция /Ф5.3/",
    group: "Складове и гаражи",
    areaUnit: "на обект",
    areaPer: 0,
    extinguishers: [
      { type: "Прахов ABC 12 кг", count: 2 },
      { type: "Возим прахов 50 кг", count: 2 },
      { type: "Пожарно одеяло 1,5×1,5 м", count: 1 },
    ],
  },
  {
    id: "open_storage_solid",
    label: "Открит склад за горими твърди материали /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 500,
    extinguishers: [
      { type: "Прахов ABC 6 кг", count: 1 },
      { type: "Воден 9 л (клас A)", count: 1 },
    ],
  },
  {
    id: "open_storage_flammable",
    label: "Открит склад за ЛЗТ и ГТ /Ф5.2/",
    group: "Складове и гаражи",
    areaUnit: "м²",
    areaPer: 300,
    extinguishers: [
      { type: "Прахов BC 12 кг", count: 2 },
      { type: "Возим прахов 50 кг", count: 1 },
    ],
  },
];

export const groups = [...new Set(objectTypes.map((t) => t.group))];
