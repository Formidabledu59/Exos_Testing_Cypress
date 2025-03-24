/**
 * Exemple de task:
   export const consoleLogValueOfChecked = ({value1, value2}) =>{
        if(value1)
            console.log(value2)
        return null
    }
    Il faut ensuite appeler cette task depuis le fichier cypress.config.ts dans la partie on('task', { myTask });
 */