import { differenceInYears } from "date-fns";

/**
 * Calculate age based on birthdate
 * @param birthdate - Birthdate in string format (e.g., "1998/06/30")
 * @returns The calculated age in years
 */
export const calculateAge = (birthdate: string): number => {
  const birthDate = new Date(birthdate);
  const today = new Date();
  return differenceInYears(today, birthDate);
};
