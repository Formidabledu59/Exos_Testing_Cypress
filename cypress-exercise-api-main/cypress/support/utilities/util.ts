export const createRandomString = (length: number) => {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return result;
};

export const getNow = () => {
    const date = new Date();
    return date.toISOString();
};

export const convertDateToParisUtc = (dateString: string) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
    });

    const dateInParis = formatter.format(date);
    return dateInParis;
};

export const getDateNoHoursFromString = (dateString: string) => {
    const date = new Date(dateString);
    const formatter = new Intl.DateTimeFormat('fr-FR', {
        timeZone: 'Europe/Paris',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
    });
    const dateInParis = formatter.format(date);
    return dateInParis;
};

export const msInReadableString = (ms: number) => {
    const minutes = Math.floor(ms / 60000)
        .toString()
        .padStart(2, '0');
    const seconds = Math.floor((ms % 60000) / 1000)
        .toString()
        .padStart(2, '0');
    const milliseconds = (ms % 1000).toString().padStart(3, '0');
    return `${minutes}m:${seconds}s:${milliseconds}ms`;
};

export const setIncognitoBrowser = (browser, launchOptions) => {
    if (browser.name === 'chrome') {
        launchOptions.args.push('--incognito');
    }
    if (browser.name === 'electron') {
        launchOptions.preferences.incognito = true;
        return launchOptions;
    }
    if (browser.name === 'edge') {
        launchOptions.args.push('--inprivate');
    }
    return launchOptions;
};
