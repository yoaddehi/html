<!DOCTYPE html>
<html>
<head>
<script src="reform.js"></script>

</head>



<body>

<h2>Property Assessment</h2>

<form >
  <label for="paddress">Property Address:</label><br>
  <input type="text" id="paddress" name="paddress" size="50"  required="required"><br>
  
  <label for="city">City:</label><br>
  <input type="text" id="city" name="city"  size="20" required><br>
  
  <label for="state">State:</label><br>
  <input type="text" id="state" name="state" pattern="[A-Z]" size="20" required><br>
  
  <label for="zcode">Zip Code:</label><br>
  <input type="number" id="zcode" name="zcode" size="5" required><br>
  
  <label for="county">County:</label><br>
  <input type="text" id="county" name="county" size="20" required><br>
  
  <label for="aprice">Asking Price:</label><br>
  <input type="number" id="aprice" name="aprice"  size="100"  required><br>
  <label for="tsq">Total Square Feet:</label><br>
  <input type="number" id="tsq" name="tsq"  size="100" required><br><br>
  
  <button type="submit" value="submit" onclick=" ValidatedTester()" > Submit </button>
  <button type="reset" value="reset">Reset</button>
 
</form> 


</body>
</html>