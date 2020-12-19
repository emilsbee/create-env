### Script to create a .env file from javascript object

Change the keyPreface constant to add something in front of the key names.  
Useful for cases like React applications where environment variables need  
to have REACT_APP_ in front of the the key names. Hence, you can leave  
the constant as an empty string or add some preface.  

The object that is converted to the .env file must have key names in camelCase.