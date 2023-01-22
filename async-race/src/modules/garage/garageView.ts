import { View } from "../types/view";
import { GarageController } from "./garageController";

export class GarageView implements View{
  start: () => void;
  controller: GarageController;
  
}