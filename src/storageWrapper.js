// Localstorage Stores Data With No Expiration Time Even When The Browser Is Closed And Reopened
// sessionStorage stores data but looses it when the broser tab is closed
const storageWrapper = {
    // to save data to storage
    save(key, value, useSession = false){
        // makes sure of the type of storage
        const storage = useSession ? sessionStorage : localStorage;
        // converts json to string
        const stringValue = JSON.stringify(value);
        // saves data after all processes
        storage.setItem(key, stringValue);
        // key: name of the data entry
        // value: the actual value
        // useSession: allows switch between local storage & session storage
    },
    // to restore or retrive data from storage
    get(key, useSession = false){
        // makes sure of the type of storage
        const storage = useSession ? sessionStorage : localStorage;
        const value = storage.getItem(key);
        // converts back to an object and returns "null" if there's none
        return value ? JSON.parse(value) : null;
    },
    // to remove data from storage
    remove(key, useSession = false){
         // makes sure of the type of storage
         const storage = useSession ? sessionStorage : localStorage;
        //  remove item from storage
        storage.removeItem(key);
    }
};

export default storageWrapper
// using the useSession parameter allows you to switch between the default localStorage and sessionStorage