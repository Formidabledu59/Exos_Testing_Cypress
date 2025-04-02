/**
 * Exemple de task:
   export const consoleLogValueOfChecked = ({value1, value2}) =>{
        if(value1)
            console.log(value2)
        return null
    }
    Il faut ensuite appeler cette task depuis le fichier cypress.config.ts dans la partie on('task', { myTask });
 */
    module.exports = (on, config) => {
        on('task', {
            log(message) {
                console.log(message); // Affiche le message dans la console Node.js
                return null;
            },
        });
    };
    