import { Card, CardContent, Grid, Link, Typography } from "@mui/material";
import { useMemo } from "react";
import { locationList } from "data/mapLocations";
import { latLng } from "leaflet";

export const Places = ({ visited, location, settings }) => {
  let pendingList = useMemo(() => {
    return locationList.filter((place) => {
      return !(place.id in visited);
    });
  }, [visited]);

  let visitedList = useMemo(() => {
    return locationList.filter((place) => {
      return place.id in visited;
    });
  }, [visited]);

  const calculateDistanceTo = (place) => {
    const current = latLng(location);
    return (current.distanceTo(place) / 1000).toFixed(2);
  };

  const getAppleNavigationPrefix = (settings) => {
    return settings?.useGoogleMapsOnIos ? "comgooglemaps:/" : "http://maps.apple.com"
  }

  const getNavigationLink = (location) => {
    const prefix = /iPhone|iPad|iPod/i.test(navigator.userAgent) ? getAppleNavigationPrefix(settings) : "http://maps.google.com"
    return `${prefix}/?daddr=${location.lat},${location.lon}`
  }

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {pendingList.length > 0 && (
        <Grid item xs={16}>
          <Card>
            <CardContent>
              <Typography variant="h5">Punkty nieodwiedzone</Typography>
              {pendingList.map((location) => (
                <Typography key={location.id}>
                  {location.id} {location.name} {calculateDistanceTo(location)}km
                  {" "}
                  <Link href={getNavigationLink(location)}>Nawiguj</Link>
                </Typography>
              ))}
            </CardContent>
          </Card>
        </Grid>
      )
      }

      {
        visitedList.length > 0 && (
          <Grid item xs={16}>
            <Card>
              <CardContent>
                <Typography variant="h5">Punkty odwiedzone</Typography>
                {visitedList.map((location) => (
                  <Typography key={location.id}>
                    {location.id} {location.name}
                  </Typography>
                ))}
              </CardContent>
            </Card>
          </Grid>
        )
      }
    </Grid >
  );
};

export default Places;
