export default function selectionFilter({ series, films }) {
  return {
    series: [
      {
        title: "Netflix Originals",
        data: series.filter((item) => item.genre === "originals"),
      },
      {
        title: "Action",
        data: series.filter((item) => item.genre === "action"),
      },

      {
        title: " SuperHeros",
        data: series.filter((item) => item.genre === "superheros"),
      },
      {
        title: "Horror",
        data: series.filter((item) => item.genre === "horror"),
      },
      {
        title: "Documentaries",
        data: series.filter((item) => item.genre === "documentaries"),
      },
    ],
    films: [
      {
        title: "Action",
        data: films.filter((item) => item.genre === "action"),
      },
      {
        title: "Comedies",
        data: films.filter((item) => item.genre === "comedies"),
      },

      {
        title: "Horror",
        data: films.filter((item) => item.genre === "horror"),
      },
      {
        title: "Animation",
        data: films.filter((item) => item.genre === "animation"),
      },
      {
        title: "Top Rated",
        data: films.filter((item) => item.genre === "top rated"),
      },
      {
        title: "Anime",
        data: films.filter((item) => item.genre === "anime"),
      },
      {
        title: "Romance",
        data: films.filter((item) => item.genre === "romance"),
      },
    ],
  };
}
