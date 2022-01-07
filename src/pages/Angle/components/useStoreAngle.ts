import { computed, Ref } from 'vue';
import { defineStore } from 'pinia';
import { ref } from 'vue';

/** deg→radの換算値 */
const DEG2RAD = Math.PI / 180;

const useAngleStore = defineStore('angle', () => {
  const angle = ref<number>(60);
  return { angle };
});

export const useStoreAngle = (unit: Ref<'deg' | 'rad'>) => {
  // ストア呼び出し
  const store = useAngleStore();

  // ストアとの入出力をcomputedで実装
  const angle = computed({
    // ストアの値をdegから指定された単位に変換・四捨五入してして返す
    get() {
      const deg = store.angle;
      if (unit.value === 'rad') return Number((deg * DEG2RAD).toFixed(2));
      return Number.isFinite(deg) ? Math.round(deg) : 0;
    },
    // 値の変更を指定された単位からpxに変換して、ストアの更新アクションをディスパッチ
    set(v: number) {
      let deg = v;
      if (unit.value === 'rad') deg = v / DEG2RAD;
      store.angle = deg;
    },
  });

  // 利用側コンポーネントにはただのcomputed変数として見せる
  return angle;
};
