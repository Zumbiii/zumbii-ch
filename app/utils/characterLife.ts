type Ymd = { year: number; month: number; day: number };

const lifeTimeZone = 'Europe/Zurich';

export function getZurichYmd(date: Date): Ymd {
  const parts = new Intl.DateTimeFormat('en-GB', {
    timeZone: lifeTimeZone,
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
  }).formatToParts(date);

  const pick = (type: string) => Number(parts.find((part) => part.type === type)?.value);

  return {
    year: pick('year'),
    month: pick('month'),
    day: pick('day'),
  };
}

function parseBirthDate(isoDate: string): Ymd {
  const [year, month, day] = isoDate.split('-').map(Number);
  return { year, month, day };
}

function toUtcNoon({ year, month, day }: Ymd): Date {
  return new Date(Date.UTC(year, month - 1, day, 12, 0, 0));
}

function ageOnDate(birth: Ymd, today: Ymd): number {
  let age = today.year - birth.year;
  const birthdayPassed =
    today.month > birth.month ||
    (today.month === birth.month && today.day >= birth.day);

  if (!birthdayPassed) age -= 1;
  return Math.max(0, age);
}

function lastBirthday(birth: Ymd, today: Ymd): Ymd {
  let year = today.year;
  const birthdayPassed =
    today.month > birth.month ||
    (today.month === birth.month && today.day >= birth.day);

  if (!birthdayPassed) year -= 1;

  return { year, month: birth.month, day: birth.day };
}

function nextBirthday(birth: Ymd, today: Ymd): Ymd {
  const previous = lastBirthday(birth, today);
  return { year: previous.year + 1, month: birth.month, day: birth.day };
}

function yearProgressPercent(today: Ymd, from: Ymd, to: Ymd): number {
  const nowMs = toUtcNoon(today).getTime();
  const fromMs = toUtcNoon(from).getTime();
  const toMs = toUtcNoon(to).getTime();
  const span = toMs - fromMs;

  if (span <= 0) return 0;

  const ratio = (nowMs - fromMs) / span;
  return Math.min(100, Math.max(0, Math.round(ratio * 100)));
}

export type CharacterLifeStats = {
  age: number;
  level: number;
  yearsExperience: number;
  xpPercent: number;
};

export function getCharacterLifeStats(
  birthIsoDate: string,
  referenceDate = new Date(),
): CharacterLifeStats {
  const birth = parseBirthDate(birthIsoDate);
  const today = getZurichYmd(referenceDate);
  const age = ageOnDate(birth, today);
  const xpPercent = yearProgressPercent(
    today,
    lastBirthday(birth, today),
    nextBirthday(birth, today),
  );

  return {
    age,
    level: age,
    yearsExperience: age,
    xpPercent,
  };
}