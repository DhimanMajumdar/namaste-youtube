Debouncing:

typing slow=200ms to call API
typing fast=30ms to call API

Performance:
   - iphone pro max =14 API calls(letters in search) * 1000 = 14000 API calls
   - with debouncing =3 API call * 1000 = 3000

Debouncing with 200ms
  - if the differnce between 2 keystrokes <200ms -> DECLINE API CALL
  -  if > 200 ms -> MAKE API CALL