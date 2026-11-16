# zumbii.ch — MMORPG Portfolio

Nuxt 4 + Vue portfolio for Diego with RPG character-sheet UI, pub quiz focus, and MYI sidequest page.

Built with [Cursor](https://cursor.com) as a delivery accelerator — not the primary job pitch.

## Commands

```bash
pnpm install
pnpm dev
pnpm build
pnpm preview
```

## Content

- Character stats & projects: [`content/character.json`](content/character.json)
- MYI quiz answers: [`content/myi-quiz.json`](content/myi-quiz.json)
- All UI copy: [`i18n/locales/de.json`](i18n/locales/de.json), [`i18n/locales/en.json`](i18n/locales/en.json)

Replace `TODO` placeholders in legal pages and `.env` (see [`.env.example`](.env.example)).

## Contact mail

Without SMTP env vars, the API returns success in `noop` mode so the form works locally. Configure `NUXT_MAIL_*` for production sending.