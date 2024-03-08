async function logMovies1() {
try {
    
    const response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=sopranos");
    const movies = await response.json();
    console.log(movies);
    const imagemoves = document.querySelector('.grl') 
    console.log(imagemoves);
    imagemoves.src=movies.image.original
} catch (error) {
    console.log(error);
}

  }
  logMovies1()
//   1
async function logMovies2() {
    try {
        
        const response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=GAME THRONES");
        const movies = await response.json();
        console.log(movies);
        const imagemoves = document.querySelector('.grl1') 
        console.log(imagemoves);
        imagemoves.src=movies.image.original
    } catch (error) {
        console.log(error);
    }
    
      }
      logMovies2()
    //   2 Get
    async function logMovies3() {
        try {
            
            const response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=DARK");
            const movies = await response.json();
            console.log(movies);
            const imagemoves = document.querySelector('.dark') 
            console.log(imagemoves);
            imagemoves.src=movies.image.original
        } catch (error) {
            console.log(error);
        }
        
          }
          logMovies3()
        //   3 dark
        async function logMovies4() {
            try {
                
                const response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=THE NEVER");
                const movies = await response.json();
                console.log(movies);
                const imagemoves = document.querySelector('.theNever') 
                console.log(imagemoves);
                imagemoves.src=movies.image.original
            } catch (error) {
                console.log(error);
            }
            
  }
  logMovies4()
//   4
async function logMovies5() {
                try {
    
    const response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=The vampire Diaries");
    const movies = await response.json();
    console.log(movies);
    const imagemoves = document.querySelector('.theVampire') 
    console.log(imagemoves);
    imagemoves.src=movies.image.original
                } catch (error) {
    console.log(error);
}

  }
  logMovies5()
                //   6
    async function logMovies6() {
        try {
        
        const response = await fetch("https://api.tvmaze.com/singlesearch/shows?q=Game of Thrones");
        const movies = await response.json();
        console.log(movies);
        const imagemoves = document.querySelector('.gameof') 
        console.log(imagemoves);
        imagemoves.src=movies.image.original
        } catch (error) {
        console.log(error);
    }
    
      }
      logMovies6()