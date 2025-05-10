// 英雄列表API地址
const HERO_LIST_API = 'https://game.gtimg.cn/images/lol/act/img/js/heroList/hero_list.js';
// 英雄详情API地址模板
const HERO_DETAIL_API = 'https://game.gtimg.cn/images/lol/act/img/js/hero/{id}.js';

// 英雄类型接口
export interface Hero {
  heroId: string;
  name: string;
  alias: string;
  title: string;
  roles: string[];
  attack: string;
  defense: string;
  magic: string;
  difficulty: string;
  selectAudio: string;
  banAudio: string;
  isWeekFree: string;
  keywords: string;
  avatar?: string;
}

// 英雄详情接口
export interface HeroDetail {
  hero: {
    heroId: string;
    name: string;
    alias: string;
    title: string;
    roles: string[];
    shortBio: string;
    attack: string;
    defense: string;
    magic: string;
    difficulty: string;
    selectAudio: string;
    banAudio: string;
    isWeekFree: string;
    keywords: string;
    avatar?: string;
  };
  skins: Array<{
    skinId: string;
    heroId: string;
    name: string;
    description: string;
    mainImg: string;
    iconImg: string;
    loadingImg: string;
    videoImg: string;
  }>;
  spells: Array<{
    spellId: string;
    heroId: string;
    name: string;
    description: string;
    abilityIconPath: string;
    key: string;
  }>;
}

// 获取英雄列表
export async function fetchHeroList(): Promise<Hero[]> {
  // 最大重试次数
  const MAX_RETRIES = 3;
  let retries = 0;
  
  while (retries < MAX_RETRIES) {
    try {
      // 添加随机参数避免缓存问题
      const response = await fetch(`${HERO_LIST_API}?ts=${Date.now()}&r=${Math.random()}`);
      if (!response.ok) {
        throw new Error(`Failed to fetch hero list: ${response.status}`);
      }
      const data = await response.json();
      
      // 验证数据结构
      if (!data || !data.hero || !Array.isArray(data.hero)) {
        throw new Error('Invalid hero list data structure');
      }
      
      // 添加头像URL
      return data.hero.map((hero: Hero) => ({
        ...hero,
        avatar: `https://game.gtimg.cn/images/lol/act/img/champion/${hero.alias}.png`
      }));
    } catch (error) {
      retries++;
      console.error(`Error fetching hero list (attempt ${retries}/${MAX_RETRIES}):`, error);
      
      if (retries >= MAX_RETRIES) {
        console.warn('Maximum retries reached for hero list, returning fallback data');
        // 返回一些基本的英雄数据作为备选，确保构建不会失败
        return [
          { heroId: '1', name: '黑暗之女', alias: 'Annie', title: '安妮', roles: ['mage'], attack: '2', defense: '3', magic: '10', difficulty: '6', selectAudio: '', banAudio: '', isWeekFree: '0', keywords: '黑暗之女,安妮,Annie,火女' },
          { heroId: '2', name: '狂战士', alias: 'Olaf', title: '奥拉夫', roles: ['fighter', 'tank'], attack: '9', defense: '5', magic: '3', difficulty: '3', selectAudio: '', banAudio: '', isWeekFree: '0', keywords: '狂战士,奥拉夫,Olaf' }
        ];
      }
      
      // 等待一段时间后重试
      await new Promise(resolve => setTimeout(resolve, 1000));
    }
  }
  
  return [];
}

// 获取英雄详情
export async function fetchHeroDetail(heroId: string): Promise<HeroDetail | null> {
  try {
    const url = HERO_DETAIL_API.replace('{id}', heroId);
    const response = await fetch(`${url}?ts=${Date.now()}`);
    if (!response.ok) {
      throw new Error(`Failed to fetch hero detail: ${response.status}`);
    }
    const data = await response.json();
    
    // 添加头像URL
    if (data.hero) {
      data.hero.avatar = `https://game.gtimg.cn/images/lol/act/img/champion/${data.hero.alias}.png`;
    }
    
    return data;
  } catch (error) {
    console.error(`Error fetching hero detail for ID ${heroId}:`, error);
    return null;
  }
}

// 获取英雄角色类型
export function getHeroRoleTypes() {
  return [
    { id: 'fighter', name: '战士' },
    { id: 'mage', name: '法师' },
    { id: 'assassin', name: '刺客' },
    { id: 'tank', name: '坦克' },
    { id: 'marksman', name: '射手' },
    { id: 'support', name: '辅助' }
  ];
}

// 获取英雄难度
export function getHeroDifficultyLabel(difficulty: string) {
  const diff = parseInt(difficulty, 10);
  if (diff <= 3) return '简单';
  if (diff <= 6) return '中等';
  return '困难';
}
