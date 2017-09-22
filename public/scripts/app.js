$(() => {

  $('#techradar').on('click', ()=> {

    console.log('KEWL');
    alert('THIS WORKED')

    $.ajax({
      url: '/techradarHome',
      type: 'GET'
    }).done((fromServer)=> {
      console.log("HELLO", fromServer)
      console.log('THIS IS WHAT IS IMPORTANT',JSON.parse(fromServer))
      console.log('HAVE A LOOK AT THIS', JSON.parse(fromServer).articles)
      var articleArray = JSON.parse(fromServer).articles;

      $('#techradar').hide();
      for (var i = 0; i < articleArray.length; i++) {
        $('#radar').append(`<div class="columns is-mobile is-centered">
                              <div class="column is-6-desktop">
                                <div class="card">
                                  <a href="${articleArray[i].url}" target="_blank">
                                    <div class="card-image">
                                      <figure class="image is-3by3">
                                        <img src="${articleArray[i].urlToImage}" alt="${articleArray[i].urlToImage}">
                                      </figure>
                                    </div>
                                  </a>
                                  <div class="card-content">
                                    <div class="media">
                                      <div class="media-content">
                                        <a href="${articleArray[i].url}" target="_blank">
                                          <p class="title is-4">${articleArray[i].title}</p>
                                        </a>
                                      </div>
                                    </div>
                                    <div class="content">
                                      ${articleArray[i].description}
                                      <br>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>`);
      }

      $('#radar').append(`<div class="columns is-mobile is-centered">
                            <div class="column is-6-desktop is-offset-4">
                              <div class="navbar-item">
                                <div class="field is-grouped">
                                  <p class="control">
                                    <a class="tw-button button is-primary" id="hackerNews">Hacker News</a>
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>

                          <div id="hacker">
                          </div>`);




      $('#hackerNews').on('click', ()=> {

        console.log('KEWL');
        alert('Hacker');


        $.ajax({
          url: '/hackernewsHome',
          type: 'GET'
        }).done((fromServer)=> {
          console.log("HELLO", fromServer)
          console.log('THIS IS WHAT IS IMPORTANT HACKER NEWS',JSON.parse(fromServer))
          console.log('HAVE A LOOK AT THIS', JSON.parse(fromServer).articles)
          var articleArray = JSON.parse(fromServer).articles;

          $('#hackerNews').hide();
          for (var i = 0; i < articleArray.length; i++) {
            $('#hacker').append(`<div class="columns is-mobile is-centered">
                                  <div class="column is-6-desktop">
                                    <div class="card">
                                      <a href="${articleArray[i].url}" target="_blank">
                                        <div class="card-image">
                                          <figure class="image is-3by3">
                                            <img src="${articleArray[i].urlToImage}" alt="${articleArray[i].title}">
                                          </figure>
                                        </div>
                                      </a>
                                      <div class="card-content">
                                        <div class="media">
                                          <div class="media-content">
                                            <a href="${articleArray[i].url}" target="_blank">
                                              <p class="title is-4">${articleArray[i].title}</p>
                                            </a>
                                          </div>
                                        </div>
                                        <div class="content">
                                          ${articleArray[i].description}
                                          <br>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>`);
          }

          $('#hacker').append(`<div class="columns is-mobile is-centered">
                                <div class="column is-6-desktop is-offset-4">
                                  <div class="navbar-item">
                                    <div class="field is-grouped">
                                      <p class="control">
                                        <a class="tw-button button is-primary" id="ars-technica">Ars Technica</a>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>

                              <div id="technica">
                              </div>`);




          $('#ars-technica').on('click', ()=> {

            console.log('KEWL');
            alert('Technica');

            $.ajax({
              url: '/arstechnicaHome',
              type: 'GET'
            }).done((fromServer)=> {
              console.log("HELLO", fromServer)
              console.log('THIS IS WHAT IS IMPORTANT TECHNICA',JSON.parse(fromServer))
              console.log('HAVE A LOOK AT THIS', JSON.parse(fromServer).articles)
              var articleArray = JSON.parse(fromServer).articles;

              $('#ars-technica').hide();
              for (var i = 0; i < articleArray.length; i++) {
                $('#technica').append(`<div class="columns is-mobile is-centered">
                                      <div class="column is-6-desktop">
                                        <div class="card">
                                          <a href="${articleArray[i].url}" target="_blank">
                                            <div class="card-image">
                                              <figure class="image is-3by3">
                                                <img src="${articleArray[i].urlToImage}" alt="${articleArray[i].title}">
                                              </figure>
                                            </div>
                                          </a>
                                          <div class="card-content">
                                            <div class="media">
                                              <div class="media-content">
                                                <a href="${articleArray[i].url}" target="_blank">
                                                  <p class="title is-4">${articleArray[i].title}</p>
                                                </a>
                                              </div>
                                            </div>
                                            <div class="content">
                                              ${articleArray[i].description}
                                              <br>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                    </div>`);
              }

              $('#technica').append(`<div class="columns is-mobile is-centered">
                                    <div class="column is-6-desktop is-offset-4">
                                      <div class="navbar-item">
                                        <div class="field is-grouped">
                                          <p class="control">
                                            <a class="tw-button button is-primary" id="new-scientist">New Scientist</a>
                                          </p>
                                        </div>
                                      </div>
                                    </div>
                                  </div>

                                  <div id="scientist">
                                  </div>`);



              $('#new-scientist').on('click', ()=> {

                console.log('KEWL');
                alert('Scientist');


                $.ajax({
                  url: '/newscientistHome',
                  type: 'GET'
                }).done((fromServer)=> {
                  console.log("HELLO", fromServer)
                  console.log('THIS IS WHAT IS IMPORTANT TECHNICA',JSON.parse(fromServer))
                  console.log('HAVE A LOOK AT THIS', JSON.parse(fromServer).articles)
                  var articleArray = JSON.parse(fromServer).articles;

                  $('#new-scientist').hide();
                  for (var i = 0; i < articleArray.length; i++) {
                    $('#scientist').append(`<div class="columns is-mobile is-centered">
                                          <div class="column is-6-desktop">
                                            <div class="card">
                                              <a href="${articleArray[i].url}" target="_blank">
                                                <div class="card-image">
                                                  <figure class="image is-3by3">
                                                    <img src="${articleArray[i].urlToImage}" alt="${articleArray[i].title}">
                                                  </figure>
                                                </div>
                                              </a>
                                              <div class="card-content">
                                                <div class="media">
                                                  <div class="media-content">
                                                    <a href="${articleArray[i].url}" target="_blank">
                                                      <p class="title is-4">${articleArray[i].title}</p>
                                                    </a>
                                                  </div>
                                                </div>
                                                <div class="content">
                                                  ${articleArray[i].description}
                                                  <br>
                                                </div>
                                              </div>
                                            </div>
                                          </div>
                                        </div>`);
                  }

                  $('#scientist').append(`<h1 class="title has-text-centered" id="topStories">Come back later today for more!</h1>`);
                })
              })

            })
          })

        })
      })

    })
  })



});
