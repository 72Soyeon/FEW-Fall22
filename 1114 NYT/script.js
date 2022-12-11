var app = {
    nyTimesArticles: [],
  
    initialize: function () {
      app.getNYTimesData();
    },

    makeHTML: function () {
        var theHTML = '';
        for (var i = 0; i < app.nyTimesArticles.length; i++) {
          theHTML += "<div class='nytArticle'>";
          theHTML += '<img src ="' + app.nyTimesArticles[i].multimedia[0].url + '"></img>';
          theHTML += '<h3>' + app.nyTimesArticles[i].title + '</h3>';
          theHTML += '</div>';
        }
        $('.container').html(theHTML);
      },

    getNYTimesData: function () {
      console.log("Get NYT popular articles");
      var currentSection = 'arts';
      var nyTimesURL =
        `https://api.nytimes.com/svc/mostpopular/v2/viewed/1.json?api-key=yourkey`;
      var myNYKey = 'KeN56xnDFaObiJIe7Mcb6nc1y8TA6hU7';
      var nyTimesReqURL = nyTimesURL + myNYKey;
      console.log(nyTimesReqURL);
       
      fetch(nyTimesReqURL)
        .then(response => response.json())
        .then(data => {
            app.nyTimesArticles = data.results;
            app.makeHTML();
        })
    },
};