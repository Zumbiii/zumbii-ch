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

## GitHub (CLI)

`gh` is installed on **Windows** (`C:\Program Files\GitHub CLI\gh.exe`), not in a **WSL/zsh** PATH — hence `command not found` in `/mnt/c/...`.

**Recommended:** open the integrated terminal as **PowerShell** (default for this workspace), then:

```powershell
cd C:\Users\diego\Projekte\zumbii-ch
gh auth login
gh repo create zumbii-ch --public --source=. --remote=origin --push
```

**Alternative in WSL:** install the Linux CLI: `sudo apt update && sudo apt install gh -y`, then `gh auth login` from the project folder.

**Without `gh`:** create an empty repo `zumbii-ch` on GitHub, then:

```bash
git remote add origin git@github.com:Zumbiii/zumbii-ch.git
git push -u origin main
```

(SSH key must be added to your GitHub account.)