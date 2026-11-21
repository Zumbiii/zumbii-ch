export type SiteMode = 'normal' | 'nerd';

/** Cookie-Name für Normal-/Nerd-Modus (Pfad `/`, 1 Jahr). */
export const siteModeCookieName = 'siteMode';

const siteModeMaxAge = 60 * 60 * 24 * 365;

export function parseSiteMode(value: string | null | undefined): SiteMode {
  if (!value) return 'normal';
  const normalized = value.trim().replace(/^"|"$/g, '');
  return normalized === 'nerd' ? 'nerd' : 'normal';
}

export function useSiteMode() {
  const siteMode = useCookie<string>(siteModeCookieName, {
    default: () => 'normal',
    sameSite: 'lax',
    path: '/',
    maxAge: siteModeMaxAge,
    decode: (value) => parseSiteMode(value),
    encode: (value) => parseSiteMode(value),
  });

  const mode = computed<SiteMode>(() => parseSiteMode(siteMode.value));
  const isNerd = computed(() => mode.value === 'nerd');
  const isNormal = computed(() => mode.value === 'normal');

  const setMode = (next: SiteMode) => {
    siteMode.value = next;
  };

  return { mode, isNerd, isNormal, setMode, siteModeCookieName };
}