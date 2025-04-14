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

      // 이미지 정보 처리
      let fileInfo = null;
      if (safeInfo.file) {
        // file이 배열인 경우
        if (Array.isArray(safeInfo.file)) {
          fileInfo = safeInfo.file.map(file => ({
            id: file.id || 1,
            originalName: file.originalName || '',
            uniqueName: file.uniqueName || '',
            path: file.path || '',
            type: file.type || '',
            size: file.size || 0,
            uploadDate: file.uploadDate || new Date().toISOString()
          }));
        } 
        // file이 단일 객체인 경우
        else {
          fileInfo = [{
            id: safeInfo.file.id || 1,
            originalName: safeInfo.file.originalName || '',
            uniqueName: safeInfo.file.uniqueName || '',
            path: safeInfo.file.path || '',
            type: safeInfo.file.type || '',
            size: safeInfo.file.size || 0,
            uploadDate: safeInfo.file.uploadDate || new Date().toISOString()
          }];
        }
      }

      this.tempMealInfo = {
        meal_name: safeInfo.meal_name || '',
        meal_description: safeInfo.meal_description || '',
        meal_time: safeInfo.meal_time || '',
        file: fileInfo
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