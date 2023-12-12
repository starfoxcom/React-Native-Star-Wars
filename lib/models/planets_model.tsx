export type PlanetsModel = {
  count:    number;
  next:     string;
  previous: null;
  results:  PlanetsResultModel[];
}

export type PlanetsResultModel = {
  name:            string;
  rotation_period: string;
  orbital_period:  string;
  diameter:        string;
  climate:         string;
  gravity:         string;
  terrain:         string;
  surface_water:   string;
  population:      string;
  residents:       string[];
  films:           string[];
  created:         Date;
  edited:          Date;
  url:             string;
}
