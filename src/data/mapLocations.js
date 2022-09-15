export const mapLocations = {
  Rueda: { lat: 50.39674, lon: 18.13082, name: "Baza", type: 1 },
  "Trasa 1": { lat: 50.42400339085704, lon: 18.124182060066587, type: 3 },
  "Punkt widokowy": { lat: 50.45094183711963, lon: 18.16616740653689, type: 2 },
  Amfiteatr: { lat: 50.45519514443221, lon: 18.16076895163187, type: 2 },
  "Trasa 2": { lat: 50.47790221852873, lon: 18.174744465827555, type: 3 },
  Gogolin: { lat: 50.49098439515265, lon: 18.021252415314464, type: 2 },
  Karolinka: { lat: 50.492257031101495, lon: 18.020232734731124, type: 2 },
  Głogówek: { lat: 50.3557088666429, lon: 17.86146005660892, type: 2 },
  Koźle: { lat: 50.33439729707276, lon: 18.142039647475645, type: 2 },
  Fort: { lat: 50.343151624910796, lon: 18.156609694319847, type: 2 },
  Park: { lat: 50.347228941496674, lon: 18.213372387933813, type: 2 },
  Bunkier: { lat: 50.353356505698244, lon: 18.261663703768047, type: 2 },
  "Trasa 3": { lat: 50.3581037513056, lon: 18.276039083135704, type: 3 },
  Obóz: { lat: 50.35834302878148, lon: 18.321780065852405, type: 2 },
  Ujazd: { lat: 50.390887864126256, lon: 18.348979010858404, type: 2 },
  "Trasa 4": { lat: 50.40446199335913, lon: 18.336076976472157, type: 3 },
  "Trasa 5": { lat: 50.407677940523016, lon: 18.336590933405965, type: 3 },
  "Trasa 6": { lat: 50.41026751267438, lon: 18.34016367150822, type: 3 },
  "Trasa 7": { lat: 50.434927764065066, lon: 18.32864709987073, type: 3 },
  "Trasa 8": { lat: 50.4554079273424, lon: 18.324347202576103, type: 3 },
  "Strzelce Opolskie": { lat: 50.51002788448024, lon: 18.30001701847857, type: 2 },
  "Trasa 9": { lat: 50.47012229445011, lon: 18.234564691104254, type: 3 },
  Źródło: { lat: 50.442297618250414, lon: 18.185464595526607, type: 2 },
  Leśnica: { lat: 50.424842989609225, lon: 18.183454520259623, type: 2 },
  "Zamkowy Młyn": { lat: 50.47330886646501, lon: 17.968175170579237, type: 4 },
  Lucios: { lat: 50.401882875381474, lon: 18.123895667399538, type: 4 },
  Hugo: { lat: 50.37493937410098, lon: 18.32754915477804, type: 4 },
  "Czarno na Białym": { lat: 50.334131301026176, lon: 18.14685417572727, type: 4 },
  "Miami Burger": { lat: 50.35168956590432, lon: 18.23489892989901, type: 4 },
  "Da Stella": { lat: 50.34411659469436, lon: 18.209044209684087, type: 4 }
};

export const defaultLocation = mapLocations.Rueda;

export const locationList =
  Object.entries(mapLocations).map(([k, v], i) => { return { name: k, id: i, ...v } }).filter(
    (location) => location.id !== 0
  )