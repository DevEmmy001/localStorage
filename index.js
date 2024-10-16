// testing out the wrapper 
import storageWrapper from "./src/storageWrapper.js";
// saving the data
storageWrapper.save('user', {name: 'Chiamaka Blaise', role: 'CCA Teacher'}, true)
// getting the data
const userData = storageWrapper.get('user')
console.log(userData)
// removing the data
const removeData = () => {
storageWrapper.remove('user');
const removedData = storageWrapper.get('user');
console.log(removedData)
}
