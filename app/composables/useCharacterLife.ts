import { getCharacterLifeStats } from '~/utils/characterLife';

export function useCharacterLife(birthIsoDate: string) {
  return computed(() => getCharacterLifeStats(birthIsoDate));
}