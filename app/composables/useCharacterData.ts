import characterJson from '../../content/character.json';

export type CharacterData = typeof characterJson;

export function useCharacterData() {
  const character = characterJson as CharacterData;

  const skillLabel = (id: string) => `character.skills.${id}`;
  const equipmentLabel = (id: string) => `character.equipment.${id}`;
  const achievementLabel = (id: string) => `character.achievements.${id}`;
  const questLabel = (id: string) => `character.quests.${id}`;
  const lootLabel = (id: string) => `character.loot.${id}`;
  const reputationLabel = (id: string) => `character.reputation.${id}`;
  const hobbyLabel = (id: string) => `character.hobbies.${id}`;
  const talentLabel = (id: string) => `character.talents.${id}`;
  const raidLabel = (id: string) => `character.raids.${id}`;

  return {
    character,
    skillLabel,
    equipmentLabel,
    achievementLabel,
    questLabel,
    lootLabel,
    reputationLabel,
    hobbyLabel,
    talentLabel,
    raidLabel,
  };
}