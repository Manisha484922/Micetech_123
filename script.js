<!-- JavaScript for Smooth Scroll and Animation Trigger -->
  <script>
    // Smooth Scroll to Product Section
    document.querySelector('.btn-primary').addEventListener('click', function (event) {
      event.preventDefault();
      document.querySelector('#product').scrollIntoView({ behavior: 'smooth' });
    });
  </script>
