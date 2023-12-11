export type PeopleModel = {
  count:    number;
  next:     string;
  previous: null;
  results:  PeopleResultModel[];
}

export type PeopleResultModel = {
  name:       string;
  height:     string;
  mass:       string;
  hair_color: string;
  skin_color: string;
  eye_color:  string;
  birth_year: string;
  gender:     PeopleGenderModel;
  homeworld:  string;
  films:      string[];
  species:    string[];
  vehicles:   string[];
  starships:  string[];
  created:    Date;
  edited:     Date;
  url:        string;
}

export enum PeopleGenderModel {
  Female = "female",
  Male = "male",
  NA = "n/a",
}