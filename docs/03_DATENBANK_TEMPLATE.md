# Flexible SQL Schema Template

Dieses Dokument stellt eine flexible SQL-Datenbankschema-Vorlage zur Verfügung, die an individuelle Anforderungen angepasst werden kann. Es enthält Beispieltabellen, die leicht modifiziert oder erweitert werden können.

## Tabellen

### Benutzer
```sql
CREATE TABLE Benutzer (
    BenutzerID INT PRIMARY KEY AUTO_INCREMENT,
    Benutzername VARCHAR(50) NOT NULL,
    Passwort VARCHAR(255) NOT NULL,
    Email VARCHAR(100) NOT NULL,
    ErstelltAm DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Produkte
```sql
CREATE TABLE Produkte (
    ProduktID INT PRIMARY KEY AUTO_INCREMENT,
    ProduktName VARCHAR(100) NOT NULL,
    Preis DECIMAL(10, 2) NOT NULL,
    Verfügbar BOOLEAN DEFAULT TRUE,
    ErstelltAm DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Bestellungen
```sql
CREATE TABLE Bestellungen (
    BestellID INT PRIMARY KEY AUTO_INCREMENT,
    BenutzerID INT NOT NULL,
    ProduktID INT NOT NULL,
    Bestelldatum DATETIME DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (BenutzerID) REFERENCES Benutzer(BenutzerID),
    FOREIGN KEY (ProduktID) REFERENCES Produkte(ProduktID)
);
```

## Anweisungen zur Anpassung

1. **Fügen Sie weitere Tabellen hinzu**: Um zusätzliche Tabellen zu integrieren, können Sie die Struktur der obigen Beispiele verwenden.
2. **Modifizieren Sie die Spalten**: Ändern Sie die Datentypen oder fügen Sie neue Spalten entsprechend den Anforderungen Ihres Projekts hinzu.
3. **Verwenden Sie Indizes**: Denken Sie daran, Indizes auf Spalten zu setzen, die häufig abgerufen oder zur Filterung verwendet werden, um die Suchgeschwindigkeit zu erhöhen.

---

Diese Vorlage ist so gestaltet, dass sie als Grundlage für die Erstellung einer individuellen Datenbankstruktur dienen kann.
