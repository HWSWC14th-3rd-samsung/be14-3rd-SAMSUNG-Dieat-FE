import { defineStore } from 'pinia';

export const useRegistMealStore = defineStore('registMeal', {
  state: () => ({
    tempMealInfo: {
      meal_name: '',
      meal_description: '',
      meal_time: '',
      file: null
    },
    selectedFoods: [],  // 식사 등록 창의 음식 목록
    basketFoods: []     // 음식 검색 시 장바구니 음식 목록
  }),
  actions: {
    setTempMealInfo(info) {
      const defaultInfo = {
        meal_name: '',
        meal_description: '',
        meal_time: '',
        file: null
      };

      const safeInfo = info || defaultInfo;

      // 이미지 ID 설정
      let imageId = 1; // 기본값은 1로 설정
      
      if (safeInfo.file) {
        // 기존 ID가 있으면 그대로 사용
        imageId = safeInfo.file.id > 0 ? safeInfo.file.id : 1;
      }

      this.tempMealInfo = {
        meal_name: safeInfo.meal_name || '',
        meal_description: safeInfo.meal_description || '',
        meal_time: safeInfo.meal_time || '',
        file: safeInfo.file ? [{
          id: imageId,
          originalName: safeInfo.file.originalName || '',
          uniqueName: safeInfo.file.uniqueName || '',
          path: safeInfo.file.path || '',
          type: safeInfo.file.type || '',
          size: safeInfo.file.size || 0,
          uploadDate: new Date().toISOString()
        }] : null
      };
    },
    clearTempMealInfo() {
      this.tempMealInfo = {
        meal_name: '',
        meal_description: '',
        meal_time: '',
        file: null
      };
    },
    // 식사 등록 창 음식 관리
    setSelectedFoods(foods) {
      this.selectedFoods = foods || [];
    },
    addSelectedFoods(foods) {
      if (Array.isArray(foods)) {
        this.selectedFoods = [...this.selectedFoods, ...foods];
      }
    },
    clearSelectedFoods() {
      this.selectedFoods = [];
    },
    // 장바구니 음식 관리
    setBasketFoods(foods) {
      this.basketFoods = foods || [];
    },
    clearBasketFoods() {
      this.basketFoods = [];
    },
    // 장바구니 음식을 식사 등록 창에 추가
    addBasketFoodsToSelected() {
      if (this.basketFoods.length > 0) {
        this.selectedFoods = [...this.selectedFoods, ...this.basketFoods];
        this.basketFoods = [];
      }
    }
  }
}); 