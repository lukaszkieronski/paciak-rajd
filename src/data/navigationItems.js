import QuestionAnswerIcon from "@mui/icons-material/QuestionAnswer";
import PlaceIcon from "@mui/icons-material/Place";
import MapIcon from "@mui/icons-material/Map";
import InfoIcon from "@mui/icons-material/Info";

import { Map } from "components/Map";
import { Places } from "components/Places";
import { Questions } from "components/Questions";
import { Info } from "components/Info";

export const navigationItems = [
  {
    loc: "/map",
    label: "Mapa",
    icon: <MapIcon />,
    element: Map,
  },
  {
    loc: "/places",
    label: "Miejsca",
    icon: <PlaceIcon />,
    element: Places,
  },
  {
    loc: "/questions",
    label: "Pytania",
    icon: <QuestionAnswerIcon />,
    element: Questions,
  },
  {
    loc: "/info",
    label: "Informacje",
    icon: <InfoIcon />,
    element: Info,
  },
];

export const defaultNavigation = navigationItems.find(() => true).loc;
