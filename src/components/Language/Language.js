import "./Language.css";

const Language = () => {
  const genres = [
    {
      id: 1,
      elanguage: "odia",
      language: "ଓଡ଼ିଆ",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2168/1272168-h-0b9e56f3a569",
    },
    {
      id: 2,
      elanguage: "Drama",
      language: "Drama",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2164/1272164-h-a40109f63230",
    },
    {
      id: 3,
      elanguage: "Family",
      language: "Family",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2184/1272184-h-dc6d91e320bb",
    },
    {
      id: 4,
      elanguage: "Reality",
      language: "Reality",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2167/1272167-h-57b30637dc58",
    },
    {
      id: 5,
      elanguage: "Comedy",
      language: "Comedy",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2189/1272189-h-474580e995d8",
    },
    {
      id: 6,
      elanguage: "Mythology",
      language: "Mythology",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2194/1272194-h-c7381829728b",
    },
    {
      id: 7,
      elanguage: "Crime",
      language: "Crime",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2195/1272195-h-2981b9780648",
    },
    {
      id: 8,
      elanguage: "Food",
      language: "Food",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2174/1272174-h-9b06e2aa1829",
    },
    {
      id: 9,
      elanguage: "Action",
      language: "Action",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2163/1272163-h-6a39e5230553",
    },
    {
      id: 10,
      elanguage: "Talk Show",
      language: "Talk Show",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2196/1272196-h-a60017186aff",
    },
    {
      id: 11,
      elanguage: "Lifestyle",
      language: "Lifestyle",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/5784/165784-h",
    },
    {
      id: 12,
      elanguage: "Teen",
      language: "Teen",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2179/1272179-h-528b6c1e9802",
    },
    {
      id: 13,
      elanguage: "Awards",
      language: "Awards",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2197/1272197-h-e5a9bee75d55",
    },
    {
      id: 14,
      elanguage: "Biopic",
      language: "Biopic",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/4992/14992/14992-h",
    },
    {
      id: 15,
      elanguage: "Science",
      language: "Science",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2173/1272173-h-20b3596ec020",
    },
    {
      id: 16,
      elanguage: "Travel",
      language: "Travel",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2198/1272198-h-a775cf99daf5",
    },
    {
      id: 17,
      elanguage: "Documentary",
      language: "Documentary",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2199/1272199-h-a2cbf3b8c190",
    },
    {
      id: 18,
      elanguage: "Horrror",
      language: "Horrror",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2200/1272200-h-a1e428920c37",
    },
    {
      id: 19,
      elanguage: "Thrilller",
      language: "Thrilller",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2162/1272162-h-1a65d09d73f0",
    },
    {
      id: 20,
      elanguage: "Sports",
      language: "Sports",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/old_images/GENRE/9836/9836/9836-h",
    },
    {
      id: 21,
      elanguage: "Kids",
      language: "Kids",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2172/1272172-h-56b5d331231d",
    },
    {
      id: 22,
      elanguage: "Anime",
      language: "Anime",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/847/1330847-h-5f1c7139d1a1",
    },
    {
      id: 23,
      elanguage: "Adventure",
      language: "Adventure",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2201/1272201-h-6f1a3525b279",
    },
    {
      id: 24,
      elanguage: "Animals & Nature",
      language: "Animals & Nature",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2171/1272171-h-0c5bfb2ee8df",
    },
    {
      id: 25,
      elanguage: "Animation",
      language: "Animation",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2170/1272170-h-159c4a86d84a",
    },
    {
      id: 26,
      elanguage: "Concert Flim",
      language: "Concert Flim",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4583/694583-h",
    },
    {
      id: 27,
      elanguage: "Docudrama",
      language: "Docudrama",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2202/1272202-h-23e44be5b8ef",
    },
    {
      id: 28,
      elanguage: "Fantasy",
      language: "Fantasy",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7159/1047159-h-8c703700028e",
    },
    {
      id: 29,
      elanguage: "Historical",
      language: "Historical",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/4454/1044454-h-bdead73b8dae",
    },
    {
      id: 30,
      elanguage: "Musical",
      language: "Musical",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2169/1272169-h-26d611d85e27",
    },
    {
      id: 31,
      elanguage: "Mystery",
      language: "Mystery",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7157/1047157-h-04ef8d408113",
    },
    {
      id: 32,
      elanguage: "Science Fiction",
      language: "Science Fiction",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/7626/927626-h",
    },
    {
      id: 33,
      elanguage: "Shorts",
      language: "Shorts",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/3519/683519-h",
    },
    {
      id: 34,
      elanguage: "Standup Comedy",
      language: "Standup Comedy",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/835/670835-h",
    },
    {
      id: 35,
      elanguage: "Superhero",
      language: "Superhero",
      image:
        "https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/835/670835-h",
    },
  ];
  const list = [];

  genres.forEach((genre) => {
    list.push(
      <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-7 image-box p-1">
        <img
          className="d-block w-100 rounded"
          src={genre.image}
          alt="test.png"
        />
        <div class="centered upper-case">
          {genre.language} <br />
          {genre.elanguage}
        </div>
      </div>
    );
  });

  return (
    <div className="outer-container">
      <div className="p-4"></div>
      <div class="inner-container">
        <h3 className="text-color-white">Genres</h3>
        <div className="row">
          {/* <div className="col-xl-2 col-lg-3 col-md-4 col-sm-5 col-xs-7 image-box p-1">
          <img
            className="d-block w-100 rounded"
            src="https://img1.hotstarext.com/image/upload/f_auto,t_web_hs_3x/sources/r1/cms/prod/2167/1272167-h-57b30637dc58"
            alt="test.png"
          />
          <div class="centered">Centered</div>
        </div>         */}
          {list}
        </div>
      </div>
    </div>
  );
};

export default Language;
