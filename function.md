## Function

1. `Default Parameter`

   ```
   const createBooking = function (
   flightNum,
   numPassanger = 1,
   price = 199 * numPassanger
   ) {};
   ```

   default parameter dpt di override.

   ```
   createBooking('37LB', 12); // akan menggunakan default param
   createBooking('OP097', 25, 200); // tanpa default param
   ```

2. `Passing Arguments Works: Value vs Reference`
