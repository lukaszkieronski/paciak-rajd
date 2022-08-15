export const mapLocations = {
  Rueda: { id: 0, lat: 50.39674, lon: 18.13082, name: "Baza" },
  Most: {
    id: 1,
    lat: 50.35332718710811,
    lon: 18.241189812343627,
    name: "Most",
  },
  Obwodnica: {
    id: 2,
    lat: 50.34996832560467,
    lon: 18.226200696815997,
    name: "Obwodnica",
  },
  Castorama: {
    id: 3,
    lat: 50.34156423140966,
    lon: 18.192491998623172,
    name: "Castorama",
  },
};

export const defaultLocation = mapLocations.Rueda;

export const locationList = Object.values(mapLocations).filter(
  (location) => location.id !== 0
);
