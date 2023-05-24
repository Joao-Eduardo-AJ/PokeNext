import { Texts as TEXTS_EN_US } from './app.texts-en_US';
import { Texts as TEXTS_PT_BR } from './app.texts-pt_BR';

export type TextsType = typeof TEXTS_PT_BR;

const map = new Map<string, TextsType>();
map.set('en', TEXTS_EN_US);
map.set('en-US', TEXTS_EN_US);

map.set('pt', TEXTS_PT_BR);
map.set('pt-BR', TEXTS_PT_BR);

export const TextsProvider = {
  get(lang = typeof navigator !== 'undefined' ? navigator.language : 'pt-BR') {
    return map.get(lang) ?? map.get(lang.substring(0, 2)) ?? TEXTS_PT_BR;
  },
};
