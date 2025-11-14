import dayjs from 'dayjs';

export function calculateAge(birthDate: string | Date): number {
  const birth = dayjs(birthDate);
  const today = dayjs();
  return today.diff(birth, 'year'); 
}