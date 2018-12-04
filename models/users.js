<script src="https://code.jquery.com/jquery-3.3.1.min.js"
      integrity="sha256-FgpCb/KJQlLNfOu91ta32o/NMZxltwRo8QtmkMRdAu8="
      crossorigin="anonymous"></script>
    <script>
      var article = {title:"", content:""};
      $('#submit').click(function(event){
        article.title = $('#title').val();
        article.content = $('#content').val();
        $.ajax({
          method:"POST",
          url:"/article/create",
          data: article
        }).done(function(response){
          console.log(response);
        }).fail(function(response){
          console.log(response.responseText);
        });
      });

      $('#getArticles').click(function(event){
        $.ajax({
          method:"GET",
          url:"/article/list"
        }).done(function(response){
          console.log(response);
        }).fail(function(response){
          console.log(response.responseText);
        });
      });

    </script>