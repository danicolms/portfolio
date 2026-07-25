function img(id) {
  return `https://www.thiings.co/_next/image?url=https%3A%2F%2Flftz25oez4aqbxpq.public.blob.vercel-storage.com%2Fimage-${id}.png&w=320&q=75`;
}

const menu = [
  {
    key: "projects",
    img: img("5zVOONIN28dJticozuMBCoSEjaw6VA"),
    label: "Projects",
    children: [
      { img: img("NFIVdjt7PnLaJyAkPSoJ243hDSfxn0"), label: "COLMEBROTHERS", href: "https://loscolmebrothers.com", },
      { img: img("S4uSpPnTp4twy9dQ0gSVfwPIGe7R8s"), label: "Universidad de Cantabria", href: "https://www.tributacion.unican.es" },
      { img: img("8zWx2wwjWr0A0cTHFPCrmKIK0Q4sBq"), label: "Word clock", href: "https://danicolms.github.io/word-clock/" },
    ],
  },
  {
    key: "music",
    img: img("M0zUqO3mGKSs3YD5CIpatjR4EY0Swa"),
    label: "Music",
    href: "https://music.danicolms.xyz",
  },
  {
    key: "development",
    img: img("iHFK2I60hobeZy9iO4mGxPM4ob1YYs"),
    label: "Development",
    children: [
      { img: img("H06TChdN6fckUul1ZUd8LGd1PPKRt5"), label: "Git", href: "https://github.com/danicolms" },
      { img: img("NPWlghgOkWsgF4xolYbb4TzXYD4tRh"), label: "Career", href: "https://linkedin.com/in/danicolms" },
    ],
  },
  {
    key: "contact",
    img: img("44BY6xDbdOCtvBxozQJVSo7Bj0Ub44"),
    label: "Contact",
    href: "mailto:hello@danicolms.xyz",
  },
];

const level1 = document.getElementById("level-1");
const level2 = document.getElementById("level-2");

function renderItem(it) {
  return `<li class="item" data-key="${it.key ?? ""}"><img src="${it.img}" alt="" aria-hidden="true" />${it.label}</li>`;
}

function renderLevel1() {
  level1.innerHTML = menu.map(renderItem).join("");
}

function renderLevel2(key) {
  const parent = menu.find((m) => m.key === key);
  const items = parent?.children ?? [];
  level2.innerHTML = items.map(renderItem).join("");
}

function select(node) {
  level1.querySelectorAll(".item.is-selected").forEach((el) =>
    el.classList.remove("is-selected"),
  );
  node.classList.add("is-selected");
  renderLevel2(node.dataset.key);
}

renderLevel1();

level1.addEventListener("click", (e) => {
  const node = e.target.closest(".item");
  if (!node || !node.dataset.key) return;
  const item = menu.find((m) => m.key === node.dataset.key);
  if (!item) return;
  if (item.href) {
    window.location.href = item.href;
    return;
  }
  select(node);
});
