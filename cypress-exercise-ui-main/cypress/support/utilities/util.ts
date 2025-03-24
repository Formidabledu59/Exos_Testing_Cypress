// Fonction qui génère une chaîne de caractères aléatoire de la longueur spécifiée.
export const createRandomString = (length: number) => {
    let result = '';
    // Liste des caractères possibles à utiliser pour générer la chaîne.
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    
    // Boucle pour ajouter un caractère aléatoire à la chaîne jusqu'à la longueur souhaitée.
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result; // Retourne la chaîne générée.
};

// Fonction qui retourne la date actuelle au format ISO 8601.
export const getNow = () => {
    const date = new Date();
    return date.toISOString(); // Renvoie la date actuelle en ISO 8601.
};

// Fonction qui convertit une date au format UTC en heure locale de Paris.
export const convertDateToParisUtc = (dateString: string) => {
    const date = new Date(dateString);
    // Utilisation de l'API Intl.DateTimeFormat pour formater la date en heure de Paris.
    const formatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const dateInParis = formatter.format(date);
    return dateInParis; // Retourne la date formatée selon le fuseau horaire de Paris.
};

// Fonction qui retourne la date sans l'heure à partir d'une chaîne de date.
export const getDateNoHoursFromString = (dateString: string) => {
    const date = new Date(dateString);
    // Utilisation d'Intl.DateTimeFormat pour formater la date sans l'heure.
    const formatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });

    const dateInParis = formatter.format(date);
    return dateInParis; // Retourne la date sans l'heure.
};

// Fonction qui prend un nombre en millisecondes et le convertit en un format lisible (min:sec:ms).
export const msInReadableString = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
        .toString()
        .padStart(2, '0'); // Calcul des minutes et formatage pour avoir 2 chiffres.
    const seconds = Math.floor((ms % 60000) / 1000)
        .toString()
        .padStart(2, '0'); // Calcul des secondes et formatage pour avoir 2 chiffres.
    const milliseconds = (ms % 1000).toString().padStart(3, '0'); // Calcul des millisecondes et formatage.

    return `${minutes}m:${seconds}s:${milliseconds}ms`; // Retourne la chaîne formatée en minutes:secondes:millisecondes.
};

// Fonction pour configurer le lancement d'un navigateur en mode incognito (privé).
export const setIncognitoBrowser = (browser, launchOptions) => {
    if (browser.name === 'chrome') {
        // Pour Chrome, ajoute l'argument '--incognito' pour lancer le navigateur en mode incognito.
        launchOptions.args.push('--incognito');
    }
    if (browser.name === 'electron') {
        // Pour Electron, définit la préférence incognito sur true.
        launchOptions.preferences.incognito = true;
        return launchOptions;
    }
    if (browser.name === 'edge') {
        // Pour Edge, ajoute l'argument '--inprivate' pour lancer en mode privé.
        launchOptions.args.push('--inprivate');
    }
    return launchOptions; // Retourne les options de lancement mises à jour.
};
