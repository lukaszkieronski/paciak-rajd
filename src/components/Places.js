import { Avatar, Card, CardContent, CardHeader, Grid, IconButton, Link, List, ListItem, ListItemAvatar, ListItemText, Typography, useTheme } from "@mui/material";
import { useMemo } from "react";
import { locationList } from "data/mapLocations";
import { latLng } from "leaflet";
import MyLocationIcon from '@mui/icons-material/MyLocation';

export const Places = ({ visited, location, settings }) => {
  const theme = useTheme()

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

  const getTime = (timestamp) => {
    const date = new Date(timestamp)
    return date.toLocaleString()
  }

  return (
    <Grid container spacing={2} sx={{ p: 2 }}>
      {pendingList.length > 0 && (
        <Grid item xs={16}>
          <Card>
            <CardHeader title="Punkty nieodwiedzone" />
            <CardContent>
              <List>
                {pendingList.map((location) => (
                  <ListItem key={location.id} secondaryAction={
                    <Link href={getNavigationLink(location)} >
                      <IconButton edge="end" >
                        <MyLocationIcon />
                      </IconButton>
                    </Link>
                  }>
                    <ListItemAvatar>
                      <Avatar sx={{ color: theme.palette.background.paper, width: 32, height: 32 }}>{location.id}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={location.name} secondary={`${calculateDistanceTo(location)} km`} />
                  </ListItem>
                ))}

              </List>
            </CardContent>
          </Card>
        </Grid>
      )
      }

      {
        visitedList.length > 0 && (
          <Grid item xs={16}>
            <Card>
              <CardHeader title="Punkty odwiedzone" />
              <CardContent>
                {visitedList.map((location) => (
                  <ListItem key={location.id} >
                    <ListItemAvatar>
                      <Avatar sx={{ color: theme.palette.background.paper, width: 32, height: 32 }}>{location.id}</Avatar>
                    </ListItemAvatar>
                    <ListItemText primary={location.name} secondary={getTime(visited[location.id])} />
                  </ListItem>))}
              </CardContent>
            </Card>
          </Grid>
        )
      }
    </Grid >
  );
};

export default Places;
