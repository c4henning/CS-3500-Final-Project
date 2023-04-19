<?php
// Database connection code goes here
// ...

if(isset($_POST['retrieve'])) {
  $name = $_POST['name'];
  $pin = $_POST['pin'];

  // Check if user with given name and pin exists in the `users` table
  $query = "SELECT * FROM users WHERE name = :name AND pin = :pin";
  $stmt = $pdo->prepare($query);
  $stmt->execute(['name' => $name, 'pin' => $pin]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if(!$user) {
    // If no user found with given name and pin, return error message
    echo "No user found with the given name and pin.";
  } else {
    // If user found, get the row for the user from `userbracket` table
    $query = "SELECT * FROM userbracket WHERE user_id = :user_id";
    $stmt = $pdo->prepare($query);
    $stmt->execute(['user_id' => $user['id']]);
    $userbracket = $stmt->fetch(PDO::FETCH_ASSOC);

    // Populate the form with the user's selections
    // Replace `selections` below with the names of the relevant form fields
    ?>
    <form>
      <select name="eastSeed1">
        <option value="option1" <?php if($userbracket['eastSeed1'] === 'option1') echo 'selected'; ?>>Option 1</option>
        <option value="option2" <?php if($userbracket['eastSeed1'] === 'option2') echo 'selected'; ?>>Option 2</option>
        <option value="option3" <?php if($userbracket['eastSeed1'] === 'option3') echo 'selected'; ?>>Option 3</option>
      </select>

      <!-- Repeat the above select block for each relevant form field -->

      <button type="submit" name="submit">Submit</button>
    </form>
    <?php
  }
} else if(isset($_POST['submit'])) {
  $name = $_POST['name'];
  $pin = $_POST['pin'];

  // Check if name already exists in `users` table
  $query = "SELECT * FROM users WHERE name = :name";
  $stmt = $pdo->prepare($query);
  $stmt->execute(['name' => $name]);
  $user = $stmt->fetch(PDO::FETCH_ASSOC);

  if(!$user) {
    // If name not found in `users` table, insert new user record
    $query = "INSERT INTO users (name, pin) VALUES (:name, :pin)";
    $stmt = $pdo->prepare($query);
    $stmt->execute(['name' => $name, 'pin' => $pin]);

    // Get the ID of the newly inserted user record
    $user_id = $pdo->lastInsertId();
  } else if($user['pin'] !== $pin) {
    // If pin doesn't match for the given name, return error message
    echo "The pin you entered does not match the name you entered.";
  } else {
    // If user found with given name and pin, get the user ID
    $user_id = $user['id'];
  }

  // Insert or update the selection record in `userbracket` table
  $query = "INSERT INTO userbracket (user_id, eastSeed1, eastSeed2, eastSeed3, eastSeed4, westSeed1, wildCard, westSeed2
