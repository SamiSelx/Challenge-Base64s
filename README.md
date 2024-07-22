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
 
2.  **Explanation The Solution**
   
    -   URL: http://greenhat.microclub.info:5626/
    -   Base64s == pathName
    -   We need to test every code Base64s on the URL (URL + Base64s)
    -   Achieve this by fetching with new URL and interpret the response

4.  **Detailed Solution**
    
    -   **Step 1**: Get all Base64s.
        -   Right click on page then open Inspect or better View page source.
        -   Copy All base64s commented on head.
    -   **Step 2**: Create File.txt.
        -   Create file.txt and put all Base64s on it.
    -   **Step 3**: testing all Base64s on path URL.
        -   Every Base64 code is like pathName.
        -   Create Script Brute force attack, that mean testing all paths until we got the right path.
        -   Read file.txt that include all Base64s, and put all paths on array.
        <!-- -   create function named bruteForceAttack(), the function do fetching of all paths and see the response. -->
        -   Loop the array and test every Base64 on URL By fetching and interpret the response.
        -   if the response OK then log the full URL with the right Path.
          
4.  **Execute Script**
   
    -   Clone the repository : `git clone https://github.com/SamiSelx/Challenge-Base64s.git` ```bash git clone https://github.com/SamiSelx/Challenge-Base64s.git ```
    -   Open Terminal : `node ./index.js`


## Flag:
`microCTF{Base64s_brUt3_F0Rc3r_Bl439eL}`
