import { BottomNavigation, BottomNavigationAction } from "@mui/material";
import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { navigationItems } from "data/navigationItems";

export const Navigation = () => {
  const location = useLocation();
  const [currentItem, setCurrentItem] = useState(location.pathname);

  useEffect(() => {
    if (currentItem !== location.pathname) {
      setCurrentItem(location.pathname);
    }
  }, [currentItem, location]);

  const generateItems = (item, index) => (
    <BottomNavigationAction
      component={Link}
      to={item.loc}
      value={item.loc}
      label={item.label}
      icon={item.icon}
      key={index}
    />
  );

  return (
    <BottomNavigation
      showLabels
      value={currentItem}
      onChange={(_, value) => setCurrentItem(value)}
    >
      {navigationItems.map(generateItems)}
    </BottomNavigation>
  );
};
