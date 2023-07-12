// import { parseISO } from "date-fns";
type RoutesType = {
  id: string;
  agentAddress: string;
  timestamp: any;
  severity: string;
  specificTrap: string;
  genericTrap: string;
};

export const DataSource: Array<RoutesType> = [
  {
    id: "1",
    agentAddress: "string1",
    timestamp: 1679761119 * 1000,
    severity: "warning",
    specificTrap: "string1",
    genericTrap: "string1",
  },
  {
    id: "2",
    agentAddress: "string2",
    timestamp: 1679781139 * 1000,
    severity: "error",
    specificTrap: "string2",
    genericTrap: "string2",
  },
];
