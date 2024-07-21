# Writeup Example

## Challenge Description

-   Name: Base64s
-   Points: 500
-   Description: "Where am i hidding hihihi ..."

## Tools and Techniques

-   Tools: Node.JS
-   Techniques:
	- Brute Force Attack

## Solution

1.  **Initial Approach**
    
    -   Get All code base64 from Inspector and put it on file.
    -   Tried All code on path after '/' by fetching.
 
2.  **Detailed Solution**
    
    -   **Step 1**: Open The inspect and get all Base64s.
        -   Right click on page then open Inspect or better View page source.
        -   Copy All base64s commented
    -   **Step 2**: Creation File.
        -   Create file.txt and put all Base64s on it.
    -   **Step 3**: trying all Base64s on path.
        -   Create Script Brute force attack, that mean trying all paths until we got the right path.
        -   Read file.txt that include all Base64s, and put all path on array.
        -   create function named bruteForceAttack(), the function do fetching of all paths and see the response.
        -   if the response OK then create log the full path.

## Flag:
`microCTF{Base64s_brUt3_F0Rc3r_Bl439eL}`
