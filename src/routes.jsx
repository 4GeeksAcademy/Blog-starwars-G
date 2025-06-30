// Import necessary components and functions from react-router-dom.

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Single } from "./pages/Single";
import { Demo } from "./pages/Demo";
import CharactersZone from "./pages/CharactersZone";
import PlanetsZone from "./pages/PlanetsZone";
import StarZone from "./pages/StarZone";
import VehiclesZone from "./pages/VehiclesZone";
import SpeciesZone from "./pages/SpeciesZone";
import MoviesZone from "./pages/MoviesZone";
// import MoviesDetail from "./pages/MoviesDetail";
import PlanetsDetails from "./pages/PlanetsDetails";
import Character from "./pages/Character";

import StarDetail from "./pages/StarDetails";
import VehiclesDetails from "./pages/VehiclesDetails";
import SpeciesDetails from "./pages/SpeciesDetails";
import MoviesDetail from "./pages/MoviesDetails";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Layout />} errorElement={<h1>Not found!</h1>}>
      {/* Nested Routes: Defines sub-routes within the BaseHome component. */}
      <Route path="/" element={<Home />} />
      <Route path="/single/:theId" element={<Single />} />
      {/* Dynamic route for single items */}
      <Route path="/demo" element={<Demo />} />
      <Route path="/CharactersZone" element={<CharactersZone />} />
      <Route path="/Character/:id" element={<Character />} />
      <Route path="/planets" element={<PlanetsZone />} />
      <Route path="/planets/:id" element={<PlanetsDetails />} />
      <Route path="/star" element={<StarZone />} />
      <Route path="/star/:id" element={<StarDetail />} />
      <Route path="/vehicles" element={<VehiclesZone />} />
      <Route path="/vehicles/:id" element={<VehiclesDetails />} />
      <Route path="/species" element={<SpeciesZone />} />
      <Route path="/species/:id" element={<SpeciesDetails />} />
      <Route path="/movies" element={<MoviesZone />} />
      <Route path="/movies/:id" element={<MoviesDetail />} />
    </Route>
  )
);