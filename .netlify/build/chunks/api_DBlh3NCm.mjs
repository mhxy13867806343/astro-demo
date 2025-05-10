const HERO_LIST_API = "https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js";
const HERO_DETAIL_API = "https://game.gtimg.cn/images/lol/act/img/js/hero/{id}.js";
async function fetchHeroList() {
  try {
    const response = await fetch(`${HERO_LIST_API}?ts=${Date.now()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch hero list: ${response.status}`);
    }
    const data = await response.json();
    return data.hero.map((hero) => ({
      ...hero,
      avatar: `https://game.gtimg.cn/images/lol/act/img/champion/${hero.alias}.png`
    }));
  } catch (error) {
    console.error("Error fetching hero list:", error);
    return [];
  }
}
async function fetchHeroDetail(heroId) {
  try {
    const url = HERO_DETAIL_API.replace("{id}", heroId);
    const response = await fetch(`${url}?ts=${Date.now()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch hero detail: ${response.status}`);
    }
    const data = await response.json();
    if (data.hero) {
      data.hero.avatar = `https://game.gtimg.cn/images/lol/act/img/champion/${data.hero.alias}.png`;
    }
    return data;
  } catch (error) {
    console.error(`Error fetching hero detail for ID ${heroId}:`, error);
    return null;
  }
}

export { fetchHeroList as a, fetchHeroDetail as f };
