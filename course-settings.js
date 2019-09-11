const courseSettings = {
  language: "fi",
  name: "Ohjelmoinnin MOOC 2019",
  subtitle: "Ohjelmoinnin alkeet kaikille, ilmaiseksi",
  slug: "ohjelmoinnin-mooc-2019",
  tmcCourse: "2019-ohjelmointi",
  quizzesId: "38240a7b-7e64-4202-91e2-91f6d46f6198",
  tmcOrganization: "mooc",
  bannerPath: "banner.svg",
  sidebarEntries: [
    {
      title: "Tietoa kurssista",
      path: "/",
    },
    {
      title: "Osaamistavoitteet",
      path: "/osaamistavoitteet",
    },
    {
      title: "Arvostelu ja kokeet",
      path: "/arvostelu-ja-kokeet",
    },
    {
      title: "Mahdollisuus opinto-oikeuteen",
      path: "/opinto-oikeus",
    },
    { title: "Tukiväylät", path: "/tukivaylat" },
    {
      title: "Opettajille ja opinto-ohjaajille",
      path: "/opettajille",
    },
    {
      title: "Usein kysytyt kysymykset",
      path: "/usein-kysytyt-kysymykset",
    },
    { separator: true, title: "Ohjelmoinnin perusteet" },
  ],
  sidebarFuturePages: [], // { title: "Osa 14", tba: "19.4.2019" },
  splitCourses: true,
}

module.exports = {
  default: courseSettings,
}
