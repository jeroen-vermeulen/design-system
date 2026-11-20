# design-system

Eigen designsysteem op basis van [shadcn/ui](https://ui.shadcn.com): React-componenten op [Radix UI](https://www.radix-ui.com), gestyled met Tailwind CSS v4 en design tokens in OKLCH.

Het idee: de layout- en componentkeuzes liggen vast in dit pakket. Je huisstijl (kleuren, font, radius) zit in één bestand, `src/styles/tokens.css`. Pas je dat aan, dan verandert elke app die het pakket gebruikt mee.

## Inhoud

| Onderdeel | Componenten |
| --- | --- |
| Acties | Button, DropdownMenu |
| Formulieren | Input, Textarea, Label, Select, Checkbox, Switch |
| Layout | Card, Separator, Tabs, Dialog |
| Data | Table, Badge, Avatar, Skeleton |
| Feedback | Alert, Tooltip |

Plus de helper `cn()` om Tailwind-classes samen te voegen.

## Gebruiken in een app

Vereisten: React 18 of 19 en Tailwind CSS v4.

Installeer het pakket rechtstreeks vanuit GitHub:

```bash
npm install github:jeroen-vermeulen/design-system
```

Importeer de styles in de hoofd-CSS van je app, direct na Tailwind:

```css
@import "tailwindcss";
@import "@jeroen-vermeulen/design-system/styles.css";
```

Gebruik de componenten:

```tsx
import { Button, Card, CardHeader, CardTitle, CardContent } from "@jeroen-vermeulen/design-system"

export function Voorbeeld() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Servers</CardTitle>
      </CardHeader>
      <CardContent>
        <Button>Server toevoegen</Button>
      </CardContent>
    </Card>
  )
}
```

Donkere modus: zet de class `dark` op `<html>`.

## Huisstijl aanpassen

Alle kleuren, het font en de radius staan in [`src/styles/tokens.css`](src/styles/tokens.css). Componenten gebruiken alleen deze tokens, nooit vaste kleuren. Wil je een andere primaire kleur, pas dan `--primary` en `--primary-foreground` aan (in `:root` en in `.dark`).

## Ontwikkelen

```bash
npm install
npm run build      # bouwt naar dist/
npm run dev        # bouwt opnieuw bij elke wijziging
npm run typecheck
```

Een nieuw component toevoegen:

1. Zet het bestand in `src/components/`. Gebruik alleen tokens (`bg-primary`, `text-muted-foreground`, ...), geen vaste Tailwind-kleuren.
2. Exporteer het in `src/index.ts`.
3. Verhoog de versie in `package.json` (minor voor nieuwe componenten, major bij breaking changes).

## Wijzigingen uitrollen

Apps die het pakket via GitHub installeren, halen een nieuwe versie op met `npm update`. Wil je een vaste versie, tag dan een release (bijvoorbeeld `v0.2.0`) en installeer met `github:jeroen-vermeulen/design-system#v0.2.0`.

## Updates van shadcn/ui

De componenten zijn een kopie van shadcn/ui en worden niet automatisch bijgewerkt. Wil je een nieuwere upstream-versie van een component, vergelijk die dan met de versie hier en neem de wijzigingen handmatig over.

## Licentie

MIT. De componenten zijn gebaseerd op shadcn/ui (MIT).
