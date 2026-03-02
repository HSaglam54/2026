# Benutzerrollen und Berechtigungen

## Rollen

- **Admin**: Vollzugriff auf alle Funktionen und Einstellungen.
- **Vertrieb**: Zugriff auf Verkaufs- und Kundenmanagement-Tools.
- **Innendienst**: Zugriff auf interne Dokumente und Tools zur Unterstützung.
- **Viewer**: Nur Lesezugriff auf Dokumente und Berichte.

## Berechtigungen Matrix

| Rolle      | Vollzugriff | Verkauf  | Kundenmanagement | Interne Dokumente | Lesezugriff |
|------------|-------------|----------|-------------------|-------------------|-------------|
| Admin      | Ja          | Ja       | Ja                | Ja                | Ja          |
| Vertrieb   | Nein        | Ja       | Ja                | Nein              | Ja          |
| Innendienst | Nein       | Nein     | Nein              | Ja                | Ja          |
| Viewer     | Nein        | Nein     | Nein              | Nein              | Ja          |