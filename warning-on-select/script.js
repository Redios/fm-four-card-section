<script>
/* used for displaying a message to a user that selects the wrong option and hides a submit button */
const dropdown = document.querySelector('[name="form-field-xxjupb"]');

dropdown.onchange = function(event) {
    if (dropdown.value=="I did not") {
        alert("A quick review on Amazon means the world to us! You can leave a short review and access your bonuses.")
      document.querySelector('[type="submit"]').style.display = 'none';
    } else {
      document.querySelector('[type="submit"]').style.display = 'inline-flex';
    }
}

</script>
